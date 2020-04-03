import { Translate } from '@google-cloud/translate'

const translate = new Translate()

export async function translateText(text, target = 'en') {
  let [translations] = await translate.translate(text, target)
  translations = Array.isArray(translations) ? translations : [translations]

  console.log('Translations:')
  translations.forEach((translation, i) => {
    console.log(`${text[i]} => (${target}) ${translation}`)
  })

  return translations
}
