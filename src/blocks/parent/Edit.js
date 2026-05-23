const { useBlockProps } = wp.blockEditor;
const { dispatch, withSelect } = wp.data;
import { teamSectionTemplates } from '../../utils/options';
import ClipBoard from '../team-section/Components/Backend/ClipBoard';

const Edit = (props) => {
  const blockProps = useBlockProps();
  const { clientId, currentPostId, CPTType } = props;
  const shortcode = `[tsb id=${currentPostId}]`;

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



  return (
    <div {...blockProps}>
      <div className="tsb-block-selector">
        <h2 className="title">Choose a Team Block</h2>

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
