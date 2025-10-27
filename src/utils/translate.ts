import * as core from '@actions/core'
import OpenAI from 'openai';

const client = new OpenAI({
  baseURL: process.env['OPENAI_ENDPOINT'] ?? "https://openrouter.ai/api/v1",
  apiKey: process.env['OPENAI_API_KEY'],
});

export async function translate(text: string): Promise<string | undefined> {
  try {
    const modelName = process.env['MODEL_NAME'] ?? 'tngtech/deepseek-r1t2-chimera:free';
    const content = `This is a user-submitted issue/issue title. Please check if the original text contains non-English content. If it does, please translate it into English. Please be sure to keep the format unchanged and only return the translated content. If the content to be translated has special symbols such as @@====, please be sure to keep them, otherwise the display will be problematic: ${text}`
    let response = await client.chat.completions.create({
      messages: [{ role: 'user', content: content }],
      model: modelName,
    });
    if (!response || !response.choices) {
      const fallback = process.env['FALLBACK_MODEL_NAME'] ?? 'qwen/qwen3-235b-a22b:free';
      console.warn(`fallback to: ${fallback}`);
      response = await client.chat.completions.create({
        messages: [{ role: 'user', content: content }],
        model: fallback,
      });
    }
    const translatedText = response.choices[0].message.content?.trim();
    return translatedText !== text ? translatedText : '';
  } catch (err: any) {
    core.error(err);
    core.setFailed(err.message);
  }
}

const MAGIC_JOIN_STRING = '@@===='
export const translateText = {
  parse(text?: string) {
    if (!text) {
      return [ undefined, undefined ]
    }

    const translateBody: string[] = text.split(MAGIC_JOIN_STRING)
    return [ translateBody?.[0]?.trim(), translateBody[1].trim() ]
  },
  stringify(body?: string, title?: string) {
    let needCommitComment = body && body !== 'null'
    let needCommitTitle = title && title !== 'null'

    let translateOrigin = null

    if (!needCommitComment) {
      core.info('Detect the issue comment body is english already, ignore.')
    }
    if (!needCommitTitle) {
      core.info('Detect the issue title body is english already, ignore.')
    }
    if (!needCommitTitle && !needCommitComment) {
      core.info('Detect the issue do not need translated, return.')
      return translateOrigin
    }

    return [ body || 'null', title ].join(MAGIC_JOIN_STRING)
  }
}
