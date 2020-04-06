const projectId = 'lingua-1585925420764'
const apiKey = process.env.GOOGLE_TRANSLATE_API_KEY
const url = `https://translation.googleapis.com/v3/projects/${projectId}:translateText`

export async function translateText(text, source = 'auto', target = 'en') {
  return await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer "${apiKey}"`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      sourceLanguageCode: source,
      targetLanguageCode: target,
      contents: text,
    }),
  })
}
