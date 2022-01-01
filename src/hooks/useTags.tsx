import { useState } from 'react';

export default function useTags() {
  const [tags, setTags] = useState<string[]>([]);

  const addTag = (tag: string) => {
    if (tags.includes(tag) || tag.trim() === '') {
      return;
    }

    setTags((prev) => [...prev, tag.trim()]);
  };

  const removeTag = (tag: string) => {
    setTags((prev) => prev.filter((t) => t !== tag));
  };

  return { addTag, removeTag, tags };
}
