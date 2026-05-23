import {
  TextControl,
  __experimentalInputControl as InputControl,
  Button,


} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { useState } from "@wordpress/element";
import { updateData } from "../../../../../../../bpl-tools/utils/functions";
import {
  IconControl,
  InlineMediaUpload,
  Label,
} from "../../../../../../../bpl-tools/Components";
import { sanitizeURL } from "../../../../../../../bpl-tools/utils/common";


const theme9ProfileSetting = (props) => {
  const { attributes, setAttributes, index } = props;
  const { members } = attributes;
  const { name, title, photo, social = [], } = members[index];

  const [selectedSocial, setSelectedSocial] = useState(null);

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
  const handleAddSocial = () => {
    const newSocial = [
      ...social,
      { link: "#", icon: { class: "fab fa-facebook-f" } },
    ];
    updateMember("social", newSocial);
    setSelectedSocial(social.length);
  };

  /** Remove social link */
  const handleRemoveSocial = (socialIndex) => {
    const newSocial = social.filter((_, i) => i !== socialIndex);
    updateMember("social", newSocial);
    setSelectedSocial(null);
  };

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


      <Label>Social Media Links </Label>
      <div
        className="memberSocialRow"
        style={{
          display: "flex",
          gap: "15px",
          marginTop: "20px",
          flexWrap: "wrap",
        }}
      >

        {social.map((item, socialIndex) => (
          <div
            key={socialIndex}
            onClick={() => setSelectedSocial(socialIndex)}
            style={{
              cursor: "pointer",
              padding: "8px 12px",
              border:
                selectedSocial === socialIndex
                  ? "2px solid #0073aa"
                  : "1px solid #ddd",
              borderRadius: "8px",
              background:
                selectedSocial === socialIndex ? "#f0f8ff" : "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.2s",
            }}
          >
            <i style={{ fontSize: "22px" }} className={item.icon?.class} />
          </div>
        ))}


        <Button
          variant="primary"
          onClick={handleAddSocial}
          style={{ height: "40px", display: "flex", justifyContent: "center", alignItems: "center" }}
        >
          <i className="fa fa-plus" /> <span style={{ marginLeft: "10px" }}>{__(" Add Social", "team-section")}</span>
        </Button>
      </div>

      {selectedSocial !== null && social[selectedSocial] && (
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
            value={social[selectedSocial].link}
            onChange={(val) => {
              const safeUrl = sanitizeURL(val);
              updateMember("social", safeUrl, selectedSocial, "link")
            }}
            placeholder={__("Link URL", "team-section")}
          />

          <Label className="mb5 mt10">{__("Change Icon:", "team-section")}</Label>
          <IconControl
            value={social[selectedSocial].icon}
            onChange={(val) =>
              updateMember("social", val, selectedSocial, "icon")
            }
            defaults={{ class: "fab fa-facebook-f", fontSize: 22 }}
            isSize={false}
            isColor={false}
          />

          <Button
            isDestructive
            variant="secondary"
            className="mt10"
            onClick={() => handleRemoveSocial(selectedSocial)}
          >
            <i className="fa fa-times" /> {__("Remove", "team-section")}
          </Button>
        </div>
      )}


    </>
  );
};

export default theme9ProfileSetting;
