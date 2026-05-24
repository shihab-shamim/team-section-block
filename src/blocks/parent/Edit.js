const { useBlockProps } = wp.blockEditor;
const { dispatch, withSelect } = wp.data;
const { useEffect } = wp.element;
import { teamSectionTemplates } from '../../utils/options';

const Edit = (props) => {
  const blockProps = useBlockProps();
  const { clientId, currentPostId, CPTType } = props;

  useEffect(() => {
    if (CPTType && CPTType !== "tsb") {
      dispatch("core/block-editor").removeBlock(clientId);
    }
  }, [CPTType, clientId]);

  const isBlockAvailable = (blockName) => {
    return !!wp.blocks.getBlockType(blockName);
  };

  const insertBlock = (blockName) => {
    if (!isBlockAvailable(blockName)) {
      return;
    }

    const blockEditor = dispatch("core/block-editor");
    const currentPostType = wp.data.select("core/editor")?.getCurrentPostType?.();
    const isShortcodePost = currentPostType === "tsb";

    blockEditor.updateSettings({ templateLock: false });

    const block = wp.blocks.createBlock(blockName);

    blockEditor.replaceBlock(clientId, block);

    // Only re-lock the editor in the shortcode custom post type
    if (isShortcodePost) {
      setTimeout(() => {
        blockEditor.updateSettings({ templateLock: "all" });
      }, 100);
    }
  };



  if (CPTType !== "tsb") {
    return null;
  }

  return (
    <div {...blockProps}>
      <div className="tsb-block-selector">
        <h2 className="title">Choose a Team Section Block</h2>

        <div className="buttons">
          {teamSectionTemplates.map((item) => {
            const disabledBlocks = window?.TSB_BLOCK_DATA?.disabledBlocks || [];
            // className matches the folder name for each block
            if (disabledBlocks.includes(item.className)) {
              return null; // Do not render if explicitly disabled in the dashboard
            }

            const available = isBlockAvailable(item.block);
            return (
              <button
                key={item.block}
                className={`button ${item.className}${!available ? ' pro-locked' : ''}`}
                onClick={() => insertBlock(item.block)}
              >
                <span className="icon">{item.icon}</span>
                <span className="text" title={item.name}>{item.name}</span>
                {!available && <span className="pro-badge">Pro</span>}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default withSelect((select) => {
  const currentPostId = select("core/editor")?.getCurrentPostId?.();
  const CPTType = select("core/editor")?.getCurrentPostType?.();

  return {
    currentPostId,
    CPTType,
  };
})(Edit);

