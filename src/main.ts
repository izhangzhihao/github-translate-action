import * as core from '@actions/core'
import * as github from '@actions/github'
import {createIssueComment, updateIssue, isEnglish, translate} from './utils'

const TRANSLATE_TITLE_DIVING = ` || `
const TRANSLATE_DIVIDING_LINE = `
<!--This is a translation content dividing line, the content below is generated by machine, please do not modify the content below-->

---

`
const DEFAULT_BOT_MESSAGE = `Bot detected the issue body's language is not English, translate it automatically. 👯👭🏻🧑‍🤝‍🧑👫🧑🏿‍🤝‍🧑🏻👩🏾‍🤝‍👨🏿👬🏿`
const DEFAULT_BOT_TOKEN = process.env.GITHUB_TOKEN

async function run(): Promise<void> {
  try {
    const {
      context: {
        eventName,
        payload: {issue, comment, action}
      }
    } = github

    const isIssue = eventName === 'issue'
    const isIssueComment = eventName === 'issue_comment'
    const isIssueCreated = isIssueComment && action === 'created'
    const isIssueOpened = isIssue && action === 'opened'

    if (!isIssueCreated && !isIssueOpened) {
      return core.info(
        `The status of the action must be created on issue_comment, no applicable - ${github.context.payload.action} on ${github.context.eventName}, return`
      )
    }

    const isModifyTitle = core.getInput('IS_MODIFY_TITLE')
    const shouldAppendContent = core.getInput('APPEND_TRANSLATION')
    const issueNumber = issue?.number
    const originTitle = issue?.title?.split(TRANSLATE_TITLE_DIVING)?.[0]
    const originComment = (isIssueComment ? comment?.body : issue?.body)?.split(
      TRANSLATE_DIVIDING_LINE
    )?.[0]
    // const issueUser = isIssueComment ? comment?.user?.login : issue?.user?.login
    const botNote =
      core.getInput('CUSTOM_BOT_NOTE')?.trim() || DEFAULT_BOT_MESSAGE

    if (!issueNumber) {
      return
    }

    let needCommitComment =
      originComment && originComment !== 'null' && !isEnglish(originComment)

    let needCommitTitle =
      isIssueOpened &&
      originTitle &&
      originTitle !== 'null' &&
      !isEnglish(originTitle)

    let translateOrigin = null

    if (originComment && originComment !== 'null' && !needCommitComment) {
      core.info('Detect the issue comment body is english already, ignore.')
    }
    if (
      isIssueOpened &&
      originTitle &&
      originTitle !== null &&
      !needCommitTitle
    ) {
      core.info('Detect the issue title body is english already, ignore.')
    }

    if (!needCommitTitle && !needCommitComment) {
      return core.info('Detect the issue do not need translated, return.')
    }

    if (needCommitComment && needCommitTitle) {
      translateOrigin = `${originComment}@@====${originTitle}`
    } else if (needCommitComment) {
      translateOrigin = originComment
    } else {
      translateOrigin = `null@@====${originTitle}`
    }

    // ignore when bot comment issue himself
    const botToken = core.getInput('BOT_GITHUB_TOKEN') || DEFAULT_BOT_TOKEN
    if (!botToken) {
      return core.info(`GITHUB_TOKEN is requried!`)
    }
    const octokit = github.getOctokit(botToken)

    // let botLoginName = core.getInput('BOT_LOGIN_NAME')
    // if (!botLoginName) {
    //   const botInfo = await octokit.request('GET /user')
    //   botLoginName = botInfo.data.login
    // }

    // if (botLoginName === issueUser) {
    //   return core.info(
    //     `The issue comment user is bot ${botLoginName} himself, ignore return.`
    //   )
    // }

    core.info(`translate origin body is: ${translateOrigin}`)

    // translate issue comment body to english
    const translateTmp = await translate(translateOrigin)
    if (!translateTmp || translateTmp === translateOrigin) {
      return core.warning('The translateBody is null or same, ignore return.')
    }

    const translateBody: string[] = translateTmp.split('@@====')
    let translateComment = translateBody[0].trim()
    const translateTitle = translateBody?.[1]?.trim()

    core.info(`translate body is: ${translateTmp}`)

    if (translateComment === originComment) {
      needCommitComment = false
    }
    if (translateTitle === originTitle) {
      needCommitTitle = false
    }

    if (shouldAppendContent) {
      if (needCommitTitle && translateTitle) {
        const title = [originTitle, translateTitle].join(TRANSLATE_TITLE_DIVING)
        await updateIssue({
          issue_number: issueNumber,
          title,
          octokit
        })
      }

      if (needCommitComment) {
        // eslint-disable-next-line no-shadow
        const comment = [originComment, translateComment].join(
          TRANSLATE_DIVIDING_LINE
        )
        await updateIssue({
          issue_number: issueNumber,
          comment_id: github.context.payload.comment?.id,
          body: comment,
          octokit
        })
      }
    } else {
      translateComment = `
> ${botNote}
----
${
  isModifyTitle === 'false' && needCommitComment
    ? `**Title:** ${translateTitle}`
    : ''
}

${translateComment}`
      if (isModifyTitle === 'true' && translateTitle && needCommitTitle) {
        await updateIssue({
          issue_number: issueNumber,
          title: translateTitle,
          octokit
        })
      }

      if (needCommitComment && translateComment) {
        await createIssueComment({
          issue_number: issueNumber,
          body: translateComment,
          octokit
        })
      }
    }

    core.setOutput('complete time', new Date().toTimeString())
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    core.setFailed(error.message)
  }
}

run()
