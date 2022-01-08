/**
 *
 * @param prevTags the previous tags that are to be inspected for inclusion. If the tag is already in the store or state the function will return false
 * @param tag the tag that is to be validated
 */
export default function isValidTag(prevTags: string[], tag: string): boolean {
  if (prevTags.includes(tag) || tag.trim() === '') return false;
  else return true;
}
