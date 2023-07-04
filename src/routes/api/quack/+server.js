import { json } from '@sveltejs/kit';

export async function GET() {
  const image = await fetch('https://random-d.uk/api/v2/quack')
    .then(res => res.json())
    .then(data => data.url);
  const { q: quote, a: author } = await fetch('https://zenquotes.io/api/quotes')
    .then(res => res.json())
    .then(data => data[0]);

  return json({
    quote,
    author: replaceBeforeVowel(author, 'Quack'),
    image
  });
}

/**
 * @param { string } str String to replace
 * @param { string } replacement String to replace with
 * @returns New string with replacement before second vowel. 
 * If no second vowel, before first vowel. If no vowels, returns original string.
 */
function replaceBeforeVowel(str, replacement) {
  const match = str.match(/[aeiou]/i);

  let index;
  if(match) {
    if (match.length >= 2) {
      index = str.indexOf(match[1]);
    } else {
      index = str.indexOf(match[0]);
    }
  } else {
    return replacement + str.slice(1);
  }

  return replacement + str.slice(index);
}