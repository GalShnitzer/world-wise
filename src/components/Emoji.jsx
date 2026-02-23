import { getTwemojiUrl } from "../utils/emoji";

function Emoji({ emoji, label, className, size, loading = "lazy" }) {
  if (!emoji) return null;

  const altText = label ? `${label} flag` : "";
  const style = size ? { width: size, height: size } : undefined;

  return (
    <img
      className={className}
      src={getTwemojiUrl(emoji)}
      alt={altText}
      style={style}
      loading={loading}
    />
  );
}

export default Emoji;
