export default function convertTag(tag: string): string {
  const t = tag.trim().toLowerCase();
  const filteredTag = t
    .split('')
    .filter((char) => /[a-z]/[Symbol.match](char))
    .join('');
  const tagWithHash = `#${filteredTag}`;

  return tagWithHash;
}
