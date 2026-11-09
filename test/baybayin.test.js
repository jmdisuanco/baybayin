import { expect, test } from 'bun:test'
import baybayin from '../src/baybayin'

const cases = [
  ['hi hi', 'ᜑᜒ ᜑᜒ'], // the i mark was doubled after the first syllable
  ['mabuhay', 'ᜋᜊᜓᜑᜌ᜔'], // u mark was doubled
  ['kumusta ka', 'ᜃᜓᜋᜓᜐ᜔ᜆ ᜃ'],
  ['i am a plinks.', 'ᜁ ᜀᜋ᜔ ᜀ ᜉ᜔ᜎᜒᜈ᜔ᜃ᜔ᜐ᜔᜶'], // "am" lost its virama before the space
  ['plink tayo.', 'ᜉ᜔ᜎᜒᜈ᜔ᜃ᜔ ᜆᜌᜓ᜶'],
]
for (const [latin, expected] of cases) test(latin, () => expect(baybayin(latin)).toBe(expected))
