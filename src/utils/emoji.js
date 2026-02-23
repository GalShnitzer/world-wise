export function getTwemojiUrl(emoji) {
  if (!emoji) return "";

  const codePoints = Array.from(emoji)
    .map((char) => char.codePointAt(0).toString(16))
    .join("-");

  return `https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/${codePoints}.svg`;
}
