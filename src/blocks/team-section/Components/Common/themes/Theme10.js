
import { sanitizeHTML } from "../../../../../bpl-tools/utils/common";
import { updateData } from "../../../../../bpl-tools/utils/functions";

const Theme10 = ({ attributes, ReusableRichText, setAttributes }) => {
  const {
    members = [],
    options = {},
    isLinkNewTab = "false",
    isSocial = true,
    isTitle = true,
  } = attributes || {};

  const { isShowSereal = true, isShowBgShape = true } = options;

  return (
    <section className="tsbTeamMembersWrapperTheme-10">
      <div>
        {members.map((member, index) => {
          const { label = "Connect on LinkedIn", link = "#" } =
            member?.btn || {};

          return (
            <div
              key={index}
              className={`team-row ${index % 2 === 1 ? "reverse" : ""}`}
            >
              {/* IMAGE */}
              <div className="tsbTeamMember_img_wrap">
                <div className="tsbTeamMember_img_box">
                  {isShowBgShape && (
                    <div className="tsbTeamMember_img_shadow" />
                  )}
                  <img
                    className="tsbTeamMember_img_profile"
                    src={
                      member?.photo?.url ||
                      "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400"
                    }
                    alt=""
                  />
                </div>
              </div>

              {/* CONTENT */}
              <div className="tsbTeamMember_content_card">
                <div className="profile-header">
                  {isShowSereal && (
                    <div className="tsbTeamMember_content_card_number_box">
                      {index + 1}
                    </div>
                  )}

                  <div>
                    {/* NAME */}
                    {ReusableRichText && (
                      <ReusableRichText
                        className="tsbTeamMemberName"
                        tagName="p"
                        value={member?.name}
                        placeholder="name..."
                        onChange={(v) =>
                          setAttributes({
                            members: updateData(members, v, index, "name"),
                          })
                        }
                      />
                    )}

                    {!ReusableRichText && (
                      <p
                        className="tsbTeamMemberName"
                        dangerouslySetInnerHTML={{
                          __html: sanitizeHTML(member?.name || ""),
                        }}
                      ></p>
                    )}

                    {/* TITLE */}
                    {ReusableRichText && isTitle && (
                      <ReusableRichText
                        className="tsbTeamMemberTitle"
                        tagName="p"
                        value={member?.title}
                        placeholder="title..."
                        onChange={(v) =>
                          setAttributes({
                            members: updateData(members, v, index, "title"),
                          })
                        }
                      />
                    )}

                    {!ReusableRichText && isTitle && (
                      <p
                        className="tsbTeamMemberTitle"
                        dangerouslySetInnerHTML={{
                          __html: sanitizeHTML(member?.title || ""),
                        }}
                      ></p>
                    )}
                  </div>
                </div>

                {/* STATS */}
                {isSocial && (
                  <div className="tsbTeamMember_content_card_stats_grid">
                    {/* STATE ONE */}
                    <div className="stat-box">
                      <div className="tsbTeamMember_content_card_stat tsbTeamMember_content_card_stat_one">
                        <span
                          dangerouslySetInnerHTML={{
                            __html:
                              member?.state?.stateOne?.icon ||
                              "<svg width=\"32\" height=\"32\" stroke=\"currentColor\" fill=\"none\" stroke-width=\"2\" viewBox=\"0 0 24 24\"><path d=\"M6 3v5a6 6 0 0 0 12 0V3\" /><path d=\"M6 3h12\" /><path d=\"M6 8h12\" /><path d=\"M9 21l3-3 3 3\" /></svg>",
                          }}
                        ></span>
                      </div>

                      <div>
                        {ReusableRichText && (
                          <>
                            <ReusableRichText
                              className="tsbTeamMember_content_card_stat_value"
                              tagName="p"
                              value={member?.state?.stateOne?.value}
                              placeholder="value..."
                              onChange={(v) =>
                                setAttributes({
                                  members: updateData(
                                    members,
                                    v,
                                    index,
                                    "state",
                                    "stateOne",
                                    "value"
                                  ),
                                })
                              }
                            />
                            <ReusableRichText
                              className="tsbTeamMember_content_card_stat_label"
                              tagName="p"
                              value={member?.state?.stateOne?.label}
                              placeholder="label..."
                              onChange={(v) =>
                                setAttributes({
                                  members: updateData(
                                    members,
                                    v,
                                    index,
                                    "state",
                                    "stateOne",
                                    "label"
                                  ),
                                })
                              }
                            />
                          </>
                        )}

                        {!ReusableRichText && (
                          <>
                            <p
                              className="tsbTeamMember_content_card_stat_value"
                              dangerouslySetInnerHTML={{
                                __html: sanitizeHTML(
                                  member?.state?.stateOne?.value || ""
                                ),
                              }}
                            ></p>
                            <p
                              className="tsbTeamMember_content_card_stat_label"
                              dangerouslySetInnerHTML={{
                                __html: sanitizeHTML(
                                  member?.state?.stateOne?.label || ""
                                ),
                              }}
                            ></p>
                          </>
                        )}
                      </div>
                    </div>

                    {/* STATE TWO */}
                    <div className="stat-box">
                      <div className="tsbTeamMember_content_card_stat tsbTeamMember_content_card_stat_two">
                        <span
                          dangerouslySetInnerHTML={{
                            __html:
                              member?.state?.stateTwo?.icon ||
                              "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polygon points=\"13 2 3 14 12 14 11 22 21 10 12 10 13 2\"></polygon></svg>",
                          }}
                        ></span>
                      </div>

                      <div>
                        {ReusableRichText && (
                          <>
                            <ReusableRichText
                              className="tsbTeamMember_content_card_stat_value"
                              tagName="p"
                              value={member?.state?.stateTwo?.value}
                              placeholder="value..."
                              onChange={(v) =>
                                setAttributes({
                                  members: updateData(
                                    members,
                                    v,
                                    index,
                                    "state",
                                    "stateTwo",
                                    "value"
                                  ),
                                })
                              }
                            />
                            <ReusableRichText
                              className="tsbTeamMember_content_card_stat_label"
                              tagName="p"
                              value={member?.state?.stateTwo?.label}
                              placeholder="label..."
                              onChange={(v) =>
                                setAttributes({
                                  members: updateData(
                                    members,
                                    v,
                                    index,
                                    "state",
                                    "stateTwo",
                                    "label"
                                  ),
                                })
                              }
                            />
                          </>
                        )}

                        {!ReusableRichText && (
                          <>
                            <p
                              className="tsbTeamMember_content_card_stat_value"
                              dangerouslySetInnerHTML={{
                                __html: sanitizeHTML(
                                  member?.state?.stateTwo?.value || ""
                                ),
                              }}
                            ></p>
                            <p
                              className="tsbTeamMember_content_card_stat_label"
                              dangerouslySetInnerHTML={{
                                __html: sanitizeHTML(
                                  member?.state?.stateTwo?.label || ""
                                ),
                              }}
                            ></p>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* BUTTON */}
                {ReusableRichText && (
                  <span className="tsbTeamMember_btn_wrap">
                    <ReusableRichText
                      className="tsbTeamMember_btn"
                      tagName="span"
                      value={label}
                      placeholder="btn text"
                      onChange={(v) =>
                        setAttributes({
                          members: updateData(
                            members,
                            v,
                            index,
                            "btn",
                            "label"
                          ),
                        })
                      }
                    />
                  </span>
                )}

                {!ReusableRichText && (
                  <a
                    href={link}
                    target={isLinkNewTab ? "_blank" : "_self"}
                    rel="noreferrer"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <button
                      className="tsbTeamMember_btn"
                      dangerouslySetInnerHTML={{
                        __html: sanitizeHTML(label),
                      }}
                    ></button>
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Theme10;
