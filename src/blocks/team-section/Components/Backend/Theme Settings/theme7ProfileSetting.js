import {
  TextControl,

} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { updateData } from "../../../../../../../bpl-tools/utils/functions";
import {
  InlineMediaUpload,
} from "../../../../../../../bpl-tools/Components";

const theme7ProfileSetting = (props) => {
  const { attributes, setAttributes, index } = props;
  const { members } = attributes;
  const { name, title, photo, } = members[index];



  /** Update Member Helper */


  /** Add new social link */

  /** Remove social link */


  return (
    <>

      <InlineMediaUpload
        label={__("Image", "team-section")}
        value={photo?.url}
        onChange={(value) =>
          setAttributes({
            members: updateData(members, value, index, "photo", "url"),
          })
        }
      />


      <TextControl
        className="mt15"
        placeholder="Name..."
        label={__("Name", "team-section")}
        value={name}
        onChange={(value) =>
          setAttributes({
            members: updateData(members, value, index, "name"),
          })
        }
      />


      <TextControl
        className="mt15"
        placeholder="Title..."
        label={__("Title", "team-section")}
        value={title}
        onChange={(value) =>
          setAttributes({
            members: updateData(members, value, index, "title"),
          })
        }
      />



    </>
  );
};

export default theme7ProfileSetting;
