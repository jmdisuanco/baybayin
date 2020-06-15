const independentVowels = {
  a: '\u1700',
  i: '\u1701',
  u: '\u1702',
  e: '\u1701',
  o: '\u1702',
}

const consonants = {
  k: `\u1703`,
  g: `\u1704`,
  ng: '\u1705',
  t: '\u1706',
  d: '\u1707',
  r: '\u1707', // unicode ra still pending '/u170D'
  n: '\u1708',
  p: '\u1709',
  b: '\u170A',
  m: '\u170B',
  y: '\u170C',
  l: `\u170E`,
  w: '\u170F',
  s: '\u1710',
  h: '\u1711',
  //j: '\u1707\u170C', // made up
}

const allowed = [
  'a',
  'e',
  'i',
  'o',
  'u',
  'k',
  'g',
  'n',
  't',
  'd',
  'r',
  'n',
  'p',
  'b',
  'm',
  'y',
  'l',
  'w',
  's',
  'h',
  '.',
  ',',
  //'j',
]

const punctuationMarks = {
  comma: '\u1735',
  period: '\u1736',
}

const dependentVowels = {
  i: '\u1712',
  u: '\u1713',
  e: '\u1712',
  o: '\u1713',
}

// virama
const virama = '\u1714'
const vowels = ['a', 'e', 'i', 'o', 'u']

const body = (curr) => {
  if (!vowels.includes(curr)) {
    return allowed.includes(curr) ? consonants[curr] : ''
  } else {
    if (curr === 'a') return ''
    return dependentVowels[curr]
  }
}

const baybayin = (baybay) => {
  if (baybay === '' || baybayin === null || typeof baybayin === 'undefined')
    return ''
  const babaybayin = baybay.toLowerCase().split('')
  const lastChar = babaybayin.length - 1
  const binaybay = babaybayin.reduce((acc, curr, i) => {
    const prevChar = acc.slice(-1)
    const prevOriginal = babaybayin[i - 1]

    if (i === 1) {
      if (curr === 'g' || acc === 'ᜈ') {
        acc = consonants['ng']
      } else {
        acc = vowels.includes(acc)
          ? independentVowels[acc]
          : allowed.includes(acc)
          ? consonants[acc]
          : ''
        acc += vowels.includes(prevOriginal)
          ? vowels.includes(curr)
            ? independentVowels[curr]
            : body(curr)
          : !vowels.includes(curr)
          ? virama + body(curr)
          : body(curr)
      }
    } else if (prevChar === ' ') {
      acc.substring(0, acc.length - 1)
      acc += vowels.includes(curr)
        ? independentVowels[curr]
        : allowed.includes(curr)
        ? consonants[curr]
        : ''
      // acc += body(curr)
    } else if (prevChar === 'ᜈ' && curr === 'g') {
      acc = acc.substring(0, acc.length - 1) + consonants['ng']
    } else if (
      !vowels.includes(curr) &&
      !vowels.includes(prevOriginal) &&
      allowed.includes(curr) &&
      curr !== ',' &&
      curr !== '.'
    ) {
      //put virama on previous character if previous and current character are both consonants
      acc += virama
      acc += body(curr)
    } else if (vowels.includes(prevOriginal) && vowels.includes(curr)) {
      acc += independentVowels[curr]
    } else {
      acc += typeof body(curr) === 'undefined' ? '' : body(curr)
      acc +=
        typeof dependentVowels[curr] === 'undefined'
          ? ''
          : dependentVowels[curr]
    }

    if (curr === ',') {
      if (!vowels.includes(prevOriginal)) acc += virama
      acc += punctuationMarks.comma
    }
    if (curr === '.') {
      if (!vowels.includes(prevOriginal)) acc += virama
      acc += punctuationMarks.period
    }
    if (
      (i === lastChar && !vowels.includes(curr)) ||
      (curr === ' ' && !vowels.includes(curr) && prevOriginal !== ' ')
    ) {
      if (curr !== '.' && curr !== ',' && curr !== ' ') {
        acc += virama
      }
    }
    if (curr === ' ') {
      acc += ' '
    }
    return acc
  })
  return binaybay
}

export default baybayin
