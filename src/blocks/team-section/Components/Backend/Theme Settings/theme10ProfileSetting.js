import {
  TextControl,



} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { updateData } from "../../../../../../../bpl-tools/utils/functions";
import {
  IconLibrary,
  InlineMediaUpload,

} from "../../../../../../../bpl-tools/Components";
import { sanitizeURL } from "../../../../../../../bpl-tools/utils/common";


const theme10ProfileSetting = (props) => {
  const { attributes, setAttributes, index } = props;
  const { members } = attributes;
  const { name, title, photo, state = {}, btn = {} } = members[index];


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


      <TextControl label={__("State One", "team-section")} value={state?.stateOne?.label || ""} onChange={(value) =>
        setAttributes({
          members: updateData(members, value, index, "state", "stateOne", "label"),
        })
      } />
      <TextControl label={__("State One Value", "team-section")} value={state?.stateOne?.value || ""} onChange={(value) =>
        setAttributes({
          members: updateData(members, value, index, "state", "stateOne", "value"),
        })
      } />
      <IconLibrary label={__("State One Icon", "team-section")} value={state?.stateOne?.icon || "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-zap text-emerald-600\"><polygon points=\"13 2 3 14 12 14 11 22 21 10 12 10 13 2\"></polygon></svg>"} onChange={(value) =>
        setAttributes({
          members: updateData(members, value, index, "state", "stateOne", "icon"),
        })
      } />


      <TextControl label={__("State Two", "team-section")} value={state?.stateTwo?.label || ""} onChange={(value) =>
        setAttributes({
          members: updateData(members, value, index, "state", "stateTwo", "label"),
        })
      } />
      <TextControl label={__("State One Value", "team-section")} value={state?.stateTwo?.value || ""} onChange={(value) =>
        setAttributes({
          members: updateData(members, value, index, "state", "stateTwo", "value"),
        })
      } />
      <IconLibrary label={__("State One Icon", "team-section")} value={state?.stateTwo?.icon || "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-zap text-emerald-600\"><polygon points=\"13 2 3 14 12 14 11 22 21 10 12 10 13 2\"></polygon></svg>"} onChange={(value) =>
        setAttributes({
          members: updateData(members, value, index, "state", "stateTwo", "icon"),
        })
      } />


      <TextControl className="mt10" label={__("Button Label", "team-section")} value={btn?.label || ""} onChange={(value) => {

        setAttributes({
          members: updateData(members, value, index, "btn", "label"),
        })
      }
      } />
      <TextControl label={__("Button Link", "team-section")} value={btn?.link || ""} onChange={(value) => {
        const safeUrl = sanitizeURL(value);
        setAttributes({
          members: updateData(members, safeUrl, index, "btn", "link"),
        })
      }
      } />



    </>
  );
};

export default theme10ProfileSetting;


// theme10ProfileSetting