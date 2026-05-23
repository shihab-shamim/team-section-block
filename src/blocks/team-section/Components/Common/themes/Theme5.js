import { updateData } from "../../../../../../../bpl-tools/utils/functions";
import { sanitizeHTML } from '../../../../../../../bpl-tools/utils/common'
const Theme5 = ({ attributes, ReusableRichText, setAttributes }) => {
  const {
    members = [],
    isLinkNewTab = false,
    isTitle = true,
    isBio = true,
    options = {}
  } = attributes || {};


  const { showUserName = true } = options || {}

  return (
    <div className="tsbTeamMembersWrapper ">
      <ul className="tsbTeamMembersTeamContainer">
        {members?.map((member, index) => (
          <li
            key={index}
            className={`tsbTeamMembersTeamMember ${isTitle && "co-funder"}`}
            data-role={member?.title}
          >
            <div className="tsbTeamMembersTeamMemberThumb">
              <img
                src={
                  member?.photo?.url ||
                  "https://templates.bplugins.com/wp-content/uploads/2025/11/team-section-member-1.png"
                }
              />
            </div>
            <div className="tsbTeamMembersTeamMemberThumbDescription">
              {ReusableRichText ? (
                <ReusableRichText
                  placeholder=' name ...'

                  onChange={(value) =>
                    setAttributes({
                      members: updateData(members, value, index, "name"),
                    })
                  }
                  tagName="h3"
                  className="tsbTeamMemberName"
                  value={member?.name}
                />
              ) : (
                <h3 className="tsbTeamMemberName" dangerouslySetInnerHTML={{ __html: sanitizeHTML(member?.name) }}></h3>
              )}
              {/* <h3 className="tsbTeamMemberName" >{member?.name || "Name"}</h3> */}
              <p>

                {ReusableRichText && isBio && (<ReusableRichText tagName="span"
                  placeholder=' bio...'
                  className="tsbTeamMemberBio"
                  value={member?.bio}
                  onChange={(value) =>
                    setAttributes({
                      members: updateData(members, value, index, "bio"),
                    })
                  }
                />)}
                {!ReusableRichText && isBio && (<span className="tsbTeamMemberBio" dangerouslySetInnerHTML={{ __html: sanitizeHTML(member?.bio) }}></span>)}
                <br />

                {ReusableRichText && showUserName && (<ReusableRichText placeholder=' username...' className="tsbTeamMemberUserName" value={member?.userName} tagName='a' onChange={(value) =>
                  setAttributes({
                    members: updateData(members, value, index, "userName"),
                  })
                } />)}

                {!ReusableRichText && showUserName && (<a
                  className="tsbTeamMemberUserName"
                  href={member?.userNameLink || ""}
                  target={isLinkNewTab ? "_blank" : "_self"}
                  rel="noreferrer"
                  dangerouslySetInnerHTML={{ __html: sanitizeHTML(member?.userName) }}
                >

                </a>)}
              </p>
            </div>
          </li>
        ))}

      </ul>
    </div>
  );
};

export default Theme5;
