import {
  TextControl,
  __experimentalInputControl as InputControl,


} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { updateData } from "../../../../../../../bpl-tools/utils/functions";
import {
  IconControl,
  InlineMediaUpload,
  Label,
} from "../../../../../../../bpl-tools/Components";
import { sanitizeURL } from "../../../../../../../bpl-tools/utils/common";


const theme8ProfileSetting = (props) => {
  const { attributes, setAttributes, index } = props;
  const { members } = attributes;
  const { name, title, photo, social = [], icon } = members[index];


  /** Update Member Helper */
  const updateMember = (field, value, socialIndex = null, subField = null) => {
    const updatedMembers = [...members];

    if (field === "social" && socialIndex !== null) {
      const updatedSocial = [...social];
      if (subField) {
        updatedSocial[socialIndex] = {
          ...updatedSocial[socialIndex],
          [subField]: value,
        };
      } else {
        updatedSocial[socialIndex] = value;
      }
      updatedMembers[index] = { ...members[index], social: updatedSocial };
    } else {
      updatedMembers[index] = { ...members[index], [field]: value };
    }

    setAttributes({ members: updatedMembers });
  };

  /** Add new social link */


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


      <Label>Social Media  </Label>
      <div
        className="memberSocialRow"
        style={{
          display: "flex",
          gap: "15px",
          marginTop: "20px",
          flexWrap: "wrap",
        }}
      >

        {/* {social.map((item, socialIndex) => ( */}
        <div
          // key={socialIndex}
          // onClick={() => setSelectedSocial(socialIndex)}
          style={{
            cursor: "pointer",
            padding: "8px 12px",
            border: "2px solid #0073aa",
            //     selectedSocial === socialIndex
            //       ? "2px solid #0073aa"
            //       : "1px solid #ddd",
            borderRadius: "8px",
            //   background:
            //     selectedSocial === socialIndex ? "#f0f8ff" : "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.2s",
          }}
        >
          <i style={{ fontSize: "22px" }} className={social[0].icon?.class} />
        </div>




      </div>

      {/* {selectedSocial !== null && social[selectedSocial] && ( */}
      <div
        className="selectedSocialControls"
        style={{
          marginTop: "15px",
          padding: "10px",
          border: "1px solid #ddd",
          borderRadius: "8px",
          background: "#f9f9f9",
          maxWidth: "350px",
        }}
      >
        <Label className="mb5">{__("Link:", "team-section")}</Label>
        <InputControl
          value={social[0].link}
          onChange={(val) => {
            const safeUrl = sanitizeURL(val);
            updateMember("social", safeUrl, 0, "link")
          }}
          placeholder={__("Link URL", "team-section")}
        />

        <Label className="mb5 mt10">{__("Change Icon:", "team-section")}</Label>
        <IconControl
          value={social[0].icon}
          onChange={(val) =>
            updateMember("social", val, 0, "icon")
          }
          defaults={{ class: "fab fa-facebook-f", fontSize: 22 }}
          isSize={false}
          isColor={false}
        />

      </div>

      <TextControl label={__("Arrow Icon Link", "team-section")} className="mt15" value={icon} onChange={(value) =>
        setAttributes({
          members: updateData(members, value, index, "icon"),
        })
      } />



    </>
  );
};

export default theme8ProfileSetting;
