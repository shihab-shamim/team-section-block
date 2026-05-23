import { useBlockProps } from "@wordpress/block-editor";

import Settings from "./Settings/Settings";
import Style from "../Common/Style";
import GalaxyTeam from "../Frontend/Cards";
import RichTextComponent from "../../utils/RichText";
import { withSelect } from "@wordpress/data";
import ClipBoard from "./ClipBoard";


const Edit = (props) => {
  const { attributes, setAttributes, clientId, device, currentPostId, CPTType } = props;
  const shortcode = `[tsb id=${currentPostId}]`;
  console.log("ORBIT_TEAM_DEBUG_PROPS:", { currentPostId, CPTType, shortcode });

  return (
    <>
      <Settings {...{ attributes, setAttributes, device }} />
      <div>{CPTType === "tsb" && <ClipBoard shortCode={shortcode} />}</div>

      <div {...useBlockProps()}>
        <Style attributes={attributes} id={`block-${clientId}`} />
        <GalaxyTeam
          attributes={attributes}
          RichTextComponent={RichTextComponent}
          setAttributes={setAttributes}
        />
      </div>
    </>
  );
};
export default withSelect((select) => {
  const { getDeviceType } = select("core/editor");
  const currentPostId = select("core/editor").getCurrentPostId();
  const CPTType = select("core/editor").getCurrentPostType?.();

  return {
    device: getDeviceType()?.toLowerCase(),
    currentPostId,
    CPTType,
  };
})(Edit);
