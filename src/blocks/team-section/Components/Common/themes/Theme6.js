import {  sanitizeHTML } from "../../../../../bpl-tools/utils/common";
import { updateData } from "../../../../../bpl-tools/utils/functions";

const Theme6 = ({ attributes, ReusableRichText, setAttributes }) => {
  const {
    members = [],
    isLinkNewTab = false,
    isTitle = true,
    options = {},
    isSocial=true
  } = attributes || {};
  const {isShowWaterMark=true,isShowShape=true,waterMark="TEAM"}=options


  return (
    <section className="tsbTeamMembersWrapperTheme-6">
      <div>
        {isShowWaterMark && <span className="tsbTeamMembersBgWatermark">{waterMark}</span>}
      <div className="tsbTeamMembersTeamContainer">

        {members.map((member, index) => (
          <div key={index} className={`tsbTeamMembersTeamMemberContentContainer-${index}`}>
            <div key={index} className={`tsbTeamMembersTeamMember  ${isShowShape&&"tsbTeamMembersTeamMemberShape"}`}>
            <img
              src={
                member?.photo?.url ||
                "https://templates.bplugins.com/wp-content/uploads/2025/11/team-section-member-1.png"
              }
              alt="Antonia Moore"
            />
            <div className="tsbTeamMembersTeamMember-content">

              {ReusableRichText? <ReusableRichText
                              placeholder=' name ...'
              
                                onChange={(value) =>
                                  setAttributes({
                                    members: updateData(members, value, index, "name"),
                                  })
                                }
                                tagName="h3"
                                className="tsbTeamMemberName"
                                value={member?.name}
                              />:<h3 className="tsbTeamMemberName" dangerouslySetInnerHTML={{ __html: sanitizeHTML(member?.name) }} ></h3>}
             {isTitle && ReusableRichText ?<ReusableRichText
                              placeholder=' title ...'
              
                                onChange={(value) =>
                                  setAttributes({
                                    members: updateData(members, value, index, "title"),
                                  })
                                }
                                tagName="p"
                                className="tsbTeamMemberTitle"
                                value={member?.title}
                              />:<p className="tsbTeamMemberTitle" dangerouslySetInnerHTML={{ __html: sanitizeHTML(member?.title) }} ></p>}
              <ul className="tsbTeamMemberSocial">
              
                { isSocial&&member?.social?.map((social, i) => (
                  <li key={i}>
                    <a href={social?.link}
                    target={isLinkNewTab ? "_blank" : "_self"}
                    rel="noreferrer"
                     >
                      <i className={social?.icon?.class}></i>
                    </a>
                  </li>
                ))}

              </ul>
            </div>
          </div>
            </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Theme6;
