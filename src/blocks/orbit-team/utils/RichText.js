import { RichText } from "@wordpress/block-editor";

const RichTextComponent = ({
  val,
  onChange,
  tagName,
  className,
  placeholder,
}) => {
  return (
    <RichText
      placeholder={placeholder}
      tagName={tagName}
      value={val}
      onChange={onChange}
      className={className}
    />
  );
};

export default RichTextComponent;
