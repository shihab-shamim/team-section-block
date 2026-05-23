import { TextControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { updateData } from "../../../../../bpl-tools/utils/functions";
import { TextareaControl } from "@wordpress/components";
import { InlineMediaUpload } from "../../../../../bpl-tools/Components";
import { sanitizeURL } from "../../../../../bpl-tools/utils/common";


const theme5ProfileSetting = (props) => {
          const { attributes, setAttributes, index } = props;
  const { members } = attributes;
  const {name,bio,userName,title,userNameLink,photo}=members[index]


    return (
        <>
            <InlineMediaUpload placeholder='image ...' label={__("Image","team-section")} value={photo?.url} onChange={(value) =>
            setAttributes({
              members: updateData(members, value, index, "photo","url"),
            })
          }  />
            
            <TextControl className="mt15" placeholder="name..." label={__("Name","team-section")} value={name}  onChange={(value) =>
            setAttributes({
              members: updateData(members, value, index, "name"),
            })
          } />

          <TextControl className="mt15" placeholder="title..." label={__("Title","team-section")} value={title}  onChange={(value) =>
            setAttributes({
              members: updateData(members, value, index, "title"),
            })
          } />

          <TextareaControl rows={3} label={__("Bio","team-section")} value={bio}  onChange={(value) =>
            setAttributes({
              members: updateData(members, value, index, "bio"),
            })
          } />
           <TextControl  label={__("User Name","team-section")} value={userName}  onChange={(value) =>
            setAttributes({
              members: updateData(members, value, index, "userName"),
            })
          } />
           <TextControl  label={__("User Name Link","team-section")} value={userNameLink}  onChange={(value) =>
            {
               const safeUrl = sanitizeURL(value);
              setAttributes({
              members: updateData(members, safeUrl, index, "userNameLink"),
            })
          }
          } />

            
        </>
    );
};

export default theme5ProfileSetting;