import { json } from '@sveltejs/kit';

export async function GET() {
  const image = await fetch('https://random-d.uk/api/v2/quack')
    .then(res => res.json())
    .then(data => data.url);
  const { quote, author } = await fetch('https://zenquotes.io/api/quotes')
    .then(res => res.json())
    .then(data => { 
      return {
        quote: data[0].q,
        author: quackifyAuthor(data[0].a)
      }
    });

  return json({ quote, author, image });
}

/**
 * @param { String } author Name to quackify
 * @returns Quackified author name
 */
const quackifyAuthor = (author) => {
  return formatCapitals(replaceBeforeVowel(author, 'Quack'));
}

/**
 * @param { String } str String to replace
 * @param { String } replacement String to replace with
 * @returns { String } New string with replacement before second vowel. 
 * If no second vowel, before first vowel. If no vowels, returns original string.
 */
const replaceBeforeVowel = (str, replacement) => {
  const match = str.match(/[aeiou]/i);

  if(!match) {
    return replacement + str.slice(1);
  }

  return replacement + str.slice(str.indexOf(match[0]));
}

/**
 * Formats a string to have the first letter of each word capitalized
 * @param { String } str String to format
 * @returns { String } Formatted string with first letter of each word capitalized
 */
const formatCapitals = (str) => {
  var lowercaseString = str.toLowerCase();
  var words = lowercaseString.split(' ');
  
  var formattedWords = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
  
  return formattedWords.join(' ');
}