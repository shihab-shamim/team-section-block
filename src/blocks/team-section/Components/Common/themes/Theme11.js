import { sanitizeHTML } from "../../../../../../../bpl-tools/utils/common";
import { updateData } from "../../../../../../../bpl-tools/utils/functions";

const Theme11 = ({ attributes, ReusableRichText, setAttributes }) => {

  const {
    members = [],
    isLinkNewTab = "false",
    isTitle = true,
  } = attributes || {};

  return (
    <section className="tsbTeamMemberWrapperTheme-11">
      <div className="tsbTeamMember-grid">
        {members.map((member, index) => {
          const { name, title, photo, bio, btn } = member || {};
          const {
            label = "view profile",
            link = "#",
            icon = "<svg width=\"20\" height=\"20\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path d=\"M5 12h14\" /><path d=\"M12 5l7 7-7 7\" /></svg>",
          } = btn || {};

          return (
            <div key={index} className="tsbTeamMember-card">
              <div className="tsbTeamMember-inner">
                <div className="tsbTeamMember-img-box">
                  <img
                    className="tsbTeamMember-img"
                    src={
                      photo?.url ||
                      "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400"
                    }
                    alt=""
                  />
                  <div className="tsbTeamMember-gradient-overlay"></div>
                </div>

                <div className="tsbTeamMember-text-box">
                  {/* TITLE */}
                  {isTitle && !ReusableRichText && (
                    <p
                      className="tsbTeamMemberTitle"
                      dangerouslySetInnerHTML={{
                        __html: sanitizeHTML(title || ""),
                      }}
                    ></p>
                  )}

                  {isTitle && ReusableRichText && (
                    <ReusableRichText
                      className="tsbTeamMemberTitle"
                      value={title}
                      tagName="p"
                      placeholder="title..."
                      onChange={(v) =>
                        setAttributes({
                          members: updateData(members, v, index, "title"),
                        })
                      }
                    />
                  )}

                  {/* NAME */}
                  {ReusableRichText ? (
                    <ReusableRichText
                      className="tsbTeamMemberName"
                      value={name}
                      placeholder="name..."
                      tagName="h3"
                      onChange={(v) =>
                        setAttributes({
                          members: updateData(members, v, index, "name"),
                        })
                      }
                    />
                  ) : (
                    <h3
                      className="tsbTeamMemberName"
                      dangerouslySetInnerHTML={{
                        __html: sanitizeHTML(name || ""),
                      }}
                    ></h3>
                  )}

                  {/* BIO */}
                  {ReusableRichText ? (
                    <ReusableRichText
                      className="tsbTeamMemberBio"
                      value={bio}
                      placeholder="bio..."
                      tagName="p"
                      onChange={(v) =>
                        setAttributes({
                          members: updateData(members, v, index, "bio"),
                        })
                      }
                    />
                  ) : (
                    <p
                      className="tsbTeamMemberBio"
                      dangerouslySetInnerHTML={{
                        __html: sanitizeHTML(bio || ""),
                      }}
                    ></p>
                  )}

                  {/* BUTTON (UNCHANGED) */}
                  <a
                    style={{
                      textDecoration: "none",
                      border: "none",
                      boxShadow: "none",
                      outline: "none",
                    }}
                    target={isLinkNewTab ? "_blank" : "_self"}
                    rel="noreferrer"
                    href={link}
                    className="tsbTeamMember_view_btn"
                  >
                    {label}
                    <span dangerouslySetInnerHTML={{ __html: icon }}></span>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Theme11;
