/**
 * French typesetting helpers.
 * Prevents short function words (et, de, la, à, pas…) from sitting alone
 * at the end of a line by gluing them to the following word with NBSP.
 *
 * Also handles EN translation when the language is set via setLanguage().
 */

const NBSP = '\u00A0';

let _lang: 'fr' | 'en' = 'fr';
let _en: Record<string, string> = {};

export function setLanguage(lang: 'fr' | 'en', translations: Record<string, string>) {
  _lang = lang;
  _en = translations;
}

/** Words that must stay with the next word (never end a line alone). */
const GLUE_WORDS = new Set([
  // 1–2 letters
  'a',
  'à',
  'au',
  'ce',
  'ci',
  'de',
  'du',
  'en',
  'et',
  'eu',
  'il',
  'je',
  'la',
  'le',
  'ma',
  'me',
  'ne',
  'ni',
  'on',
  'or',
  'ou',
  'où',
  'sa',
  'se',
  'si',
  'ta',
  'te',
  'tu',
  'un',
  'y',
  // 3 letters
  'aux',
  'ces',
  'cet',
  'des',
  'dit',
  'est',
  'les',
  'lui',
  'mes',
  'mon',
  'nos',
  'par',
  'pas',
  'peu',
  'que',
  'qui',
  'ses',
  'son',
  'sur',
  'tes',
  'ton',
  'une',
  'vos',
  // 4+ frequent function / glue words
  'avec',
  'bien',
  'car',
  'chez',
  'dans',
  'donc',
  'dont',
  'elle',
  'mais',
  'nous',
  'plus',
  'pour',
  'sans',
  'sous',
  'très',
  'trop',
  'vers',
  'via',
  'votre',
  'notre',
  'leurs',
  'cette',
  'entre',
  'après',
  'avant',
  'selon',
  'toute',
  'tout',
  'tous',
  'dès',
  'lors',
  'puis',
  'hors',
  'près',
  'vers',
  'vers',
  // contracted forms (straight + curly apostrophe handled via normalize)
  "d'un",
  "d'une",
  "l'un",
  "l'une",
  "qu'un",
  "qu'une",
  "n'est",
  "c'est",
  "s'en",
  "j'ai",
  "d'ia",
  "l'ia",
]);

function normalizeToken(word: string): string {
  return word
    .replace(/^[«“"'([{]+/u, '')
    .replace(/[»”"')\]}.,;:!?…]+$/u, '')
    .replace(/’/g, "'")
    .toLowerCase()
    .normalize('NFC');
}

function shouldGlue(word: string): boolean {
  const clean = normalizeToken(word);
  if (!clean) return false;
  // Elisions already attached to next word in French ("d'un"), but if a bare
  // elision token appears, keep it with what follows.
  if (/^[dljmstcnq]'/i.test(clean) && clean.length <= 4) return true;
  if (GLUE_WORDS.has(clean)) return true;
  // Any remaining 1–2 letter token is almost always a function word
  if (clean.length <= 2) return true;
  return false;
}

/**
 * Insert non-breaking spaces after short French words so they cannot
 * wrap alone at the end of a line.
 */
export function glueShortWords(text: string): string {
  // Glue short word → next word inside the same string
  let result = text.replace(
    /([^\s\n]+)([ \t]+)(?=[^\s\n])/g,
    (full, word: string) => {
      if (shouldGlue(word)) return `${word}${NBSP}`;
      return full;
    },
  );

  // Trailing short word + space (e.g. before nested <em>) — keep glued
  // to whatever follows in the DOM.
  result = result.replace(/([^\s\n]+)([ \t]+)$/g, (full, word: string) => {
    if (shouldGlue(word)) return `${word}${NBSP}`;
    return full;
  });

  return result;
}

/**
 * Translate + typeset.
 * If EN and a translation exists, returns the English text.
 * For FR (or untranslated strings), applies French NBSP rules.
 */
export function ft(text: string): string {
  if (_lang === 'en' && _en[text]) {
    return _en[text];
  }
  return glueShortWords(text);
}
