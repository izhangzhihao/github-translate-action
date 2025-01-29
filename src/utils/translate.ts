import * as core from '@actions/core'
import OpenAI from 'openai';

const client = new OpenAI({
  baseURL: process.env['OPENAI_ENDPOINT'] ?? "https://openrouter.ai/api/v1",
  apiKey: process.env['OPENAI_API_KEY']?? "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",
});

export async function translate(text: string): Promise<string | undefined> {
  try {
    const modelName = process.env['MODEL_NAME'] ?? 'qwen/qwen-2-7b-instruct:free';
    const content = `这是一个用户提交的issue/issue title，请检查原文是否包含非英文的内容，如果包含请翻译成英文，请注意，这是 markdown 格式的内容，请务必保持格式不变，如果原来的格式有问题可以适当调整，只返回翻译后的内容，否则展示会有问题: ${text}`
    let response = await client.chat.completions.create({
      messages: [{ role: 'user', content: content }],
      model: modelName,
    });
    if (!response || !response.choices) {
      const fallback = process.env['FALLBACK_MODEL_NAME'] ?? 'deepseek/deepseek-r1:free';
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