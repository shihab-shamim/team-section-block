import {  sanitizeHTML } from "../../../../../bpl-tools/utils/common";
import { updateData } from "../../../../../bpl-tools/utils/functions";

const Theme8 = ({ attributes, ReusableRichText, setAttributes }) => {
  const {
    members = [],
    options = {},
    isLinkNewTab = "false",
    isSocial = true,
    isTitle = true,
  } = attributes || {};
  const { isShowIcon = true, icon } = options;

  return (
    <section className="tsbTeamMembersWrapperTheme-8">
      <div className="tsbTeamMembersTeamContainer">
        {members.map((member, index) => (
          <div key={index} className="tsbTeamMember">
            <div className="tsbTeamMember_img_wrapper">
              <img
                src={
                  member?.photo?.url ||
                  "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
                alt={member?.name}
              />
            </div>

            {isSocial && (
              <a
                href={member.social[0].link}
                target={isLinkNewTab ? "_blank" : "_self"}
                rel="noreferrer"
                className="social-icon"
              >
                <i className={member.social[0].icon.class}></i>
              </a>
            )}

            <div className="tsbTeamMember_content_wrapper">
              <span href="#" className="tsbTeamMember_content">
                {ReusableRichText ? (
                  <ReusableRichText
                    className="tsbTeamMemberName"
                    tagName="h3"
                    value={member?.name}
                    placeholder="name..."
                    onChange={(value) =>
                      setAttributes({
                        members: updateData(members, value, index, "name"),
                      })
                    }
                  />
                ) : (
                  <h3 className="tsbTeamMemberName" dangerouslySetInnerHTML={{ __html: sanitizeHTML(member?.name) }} ></h3>
                )}
                {!ReusableRichText && isTitle && (
                  <p className="tsbTeamMemberTitle" dangerouslySetInnerHTML={{ __html: sanitizeHTML(member?.title) }}></p>
                )}
                {ReusableRichText && isTitle && (
                  <ReusableRichText tagName="p" className="tsbTeamMemberTitle" value={member?.title} placeholder="Title..."  onChange={(value) =>
                      setAttributes({
                        members: updateData(members, value, index, "title"),
                      })
                    }></ReusableRichText>
                )}
                {isShowIcon && (
                  <div>
                    <a
                      style={{
                        display: "block",
                        textDecoration: "none",
                        outline: "none",
                        boxShadow: "none",
                      }}
                      href={member?.icon}
                      target={isLinkNewTab ? "_blank" : "_self"}
                      rel="noreferrer"
                    >
                      <span dangerouslySetInnerHTML={{ __html: icon }}></span>
                      {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    // className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg> */}
                    </a>
                  </div>
                )}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Theme8;
