import { sanitizeHTML } from "../../../../../../../bpl-tools/utils/common";
import { updateData } from "../../../../../../../bpl-tools/utils/functions";
const Theme9 = ({ attributes, ReusableRichText, setAttributes }) => {
  const {
    members = [],
    isLinkNewTab = "false",
    isSocial = true,
    isTitle = true,
  } = attributes || {};
  return (
    <section className="tsbTeamMembersWrapperTheme-9">
      <div className="tsbTeamMembersTeamContainer">
        {members?.map((member, index) =>
          <div key={index} className="tsbTeamMember">
            <div className="tsbTeamMember_img_wrapper">
              <img
                src={member?.photo?.url || "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400"}
                alt="Sarah Chen"
              />
              <div className="tsbTeamMember_social_wrapper">
                <div className="tsbTeamMember_social">
                  {isSocial && member?.social?.map((social, i) => (
                    <li style={{ listStyle: "none" }} key={i}>
                      <a className="tsbMember_social_link" style={{ outline: "none", textDecoration: "none" }}
                        href={social?.link}
                        target={isLinkNewTab ? "_blank" : "_self"}
                        rel="noreferrer"
                      >
                        <i className={social?.icon?.class}></i>
                      </a>
                    </li>
                  ))}

                </div>
              </div>
            </div>


            {ReusableRichText ? <ReusableRichText value={member?.name} className='tsbTeamMemberName' placeholder='name...' tagName="div" onChange={v => setAttributes({ members: updateData(members, v, index, "name") })} /> : <div className="tsbTeamMemberName" dangerouslySetInnerHTML={{ __html: sanitizeHTML(member?.name) }} ></div>}

            {isTitle && ReusableRichText && <ReusableRichText value={member?.title} className="tsbTeamMemberTitle" tagName='div' placeholder='title...' onChange={V => setAttributes({ members: updateData(members, V, index, "title") })} />}
            {isTitle && !ReusableRichText && <div className="tsbTeamMemberTitle" dangerouslySetInnerHTML={{ __html: sanitizeHTML(member?.title) }}></div>}
          </div>
        )}

      </div>
    </section>
  );
};

export default Theme9;
