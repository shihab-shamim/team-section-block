import {
  TextControl,
  TextareaControl,



} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { updateData } from "../../../../../../../bpl-tools/utils/functions";
import {
  IconLibrary,
  InlineMediaUpload,

} from "../../../../../../../bpl-tools/Components";
import { sanitizeURL } from "../../../../../../../bpl-tools/utils/common";


const theme11ProfileSetting = (props) => {
  const { attributes, setAttributes, index } = props;
  const { members } = attributes;
  const { name, title, photo, btn = {}, bio = '' } = members[index];
  const { label = "view profile", link = "#", icon = "<svg width=\"20\" height=\"20\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path d=\"M5 12h14\" /><path d=\"M12 5l7 7-7 7\" /></svg>" } = btn || {}

  /** Update Member Helper */






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

      <TextareaControl
        className="mt15"
        placeholder="bio..."
        label={__("Bio", "team-section")}
        value={bio}
        rows={3}
        onChange={(value) =>
          setAttributes({
            members: updateData(members, value, index, "bio"),
          })
        }
      />



      <TextControl className="mt10" label={__("Button Label", "team-section")} value={label} onChange={(value) =>
        setAttributes({
          members: updateData(members, value, index, "btn", "label"),
        })
      } />
      <TextControl className="mt10" label={__("Button Link", "team-section")} value={link} onChange={(value) => {
        const safeUrl = sanitizeURL(value);
        setAttributes({
          members: updateData(members, safeUrl, index, "btn", "link"),
        })
      }
      } />
      <IconLibrary className="mt10" label={__("Button Icon", "team-section")} value={icon} onChange={(value) =>
        setAttributes({
          members: updateData(members, value, index, "btn", "icon"),
        })
      } />



    </>
  );
};

export default theme11ProfileSetting;