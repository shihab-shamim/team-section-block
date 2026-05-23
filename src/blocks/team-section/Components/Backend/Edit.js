import { __ } from "@wordpress/i18n";
import { withSelect } from "@wordpress/data";
import { useState, useEffect } from "react";
import { RichText, useBlockProps } from "@wordpress/block-editor";
import {
  Spinner,
  Button,
  __experimentalInputControl as InputControl,
} from "@wordpress/components";
import { isBlobURL } from "@wordpress/blob";
import { produce } from "immer";

import {
  Label,
  IconControl,
  MediaPlaceholder,
} from "../../../../../../bpl-tools/Components";

import Settings from "./Settings/Settings";
import Style from "../Common/Style";
import Theme5 from "../Common/themes/Theme5";
import { ReusableRichText } from "./themes/editorRichText";
import Theme6 from "../Common/themes/Theme6";
import Theme7 from "../Common/themes/Theme7";
import Theme8 from "../Common/themes/Theme8";
import Theme9 from "../Common/themes/Theme9";
import Theme10 from "../Common/themes/Theme10";
import Theme11 from "../Common/themes/Theme11";
import ClipBoard from "./ClipBoard";
import { sanitizeURL } from "../../../../../../bpl-tools/utils/common";

const Edit = (props) => {
  const {
    attributes,
    setAttributes,
    clientId,
    isSelected,
    currentPostId,
    CPTType,
  } = props;
  const {
    members = [],
    columns,
    layout,
    isTitle,
    isSep,
    isBio,
    isSocial,
    theme,
  } = attributes;
  const { desktop, tablet, mobile } = columns || {};
  const isPremium = Boolean(tsmbpipecheck ?? false);
  const [isProModalOpen, setIsProModalOpen] = useState(false);
  const premiumProps = { isPremium, setIsProModalOpen };
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedSocial, setSelectedSocial] = useState(null);

  useEffect(() => {
    setActiveIndex(!isSelected || !members.length ? null : 0);
  }, [isSelected]); // Set default activeIndex
  useEffect(() => {
    !isSelected && setSelectedSocial(null);
  }, [isSelected]); // Selected Social

  const updateMember = (
    index,
    type,
    val,
    childIndex = false,
    childType = false
  ) => {
    const newMembers = produce(members, (draft) => {
      if (false !== childIndex && childType) {
        draft[index][type][childIndex][childType] = val;
      } else {
        draft[index][type] = val;
      }
    });
    setAttributes({ members: newMembers });

    setActiveIndex(index);
  };

  const id = `tsbTeamMembers-${clientId}`;
  const shortcode = `[tsb id=${currentPostId}]`;
  const themeSwitch = (theme) => {
    if ("theme5" === theme)
      return (
        <Theme5
          attributes={attributes}
          ReusableRichText={ReusableRichText}
          setAttributes={setAttributes}
        />
      );
    if ("theme6" === theme)
      return (
        <Theme6
          attributes={attributes}
          ReusableRichText={ReusableRichText}
          setAttributes={setAttributes}
        />
      );
    if ("theme7" === theme)
      return (
        <Theme7
          attributes={attributes}
          ReusableRichText={ReusableRichText}
          setAttributes={setAttributes}
        />
      );
    if ("theme8" === theme)
      return (
        <Theme8
          attributes={attributes}
          ReusableRichText={ReusableRichText}
          setAttributes={setAttributes}
        />
      );
    if ("theme9" === theme)
      return (
        <Theme9
          attributes={attributes}
          ReusableRichText={ReusableRichText}
          setAttributes={setAttributes}
        />
      );
    if ("theme10" === theme)
      return (
        <Theme10
          attributes={attributes}
          ReusableRichText={ReusableRichText}
          setAttributes={setAttributes}
        />
      );
    if ("theme11" === theme)
      return (
        <Theme11
          attributes={attributes}
          ReusableRichText={ReusableRichText}
          setAttributes={setAttributes}
        />
      );
  };
  return (
    <>
      <Settings
        attributes={attributes}
        setAttributes={setAttributes}
        updateMember={updateMember}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        isProModalOpen={isProModalOpen}
        setIsProModalOpen={setIsProModalOpen}
        isPremium={isPremium}
        premiumProps={premiumProps}
      />
      <div>{CPTType === "tsb" && <ClipBoard shortCode={shortcode} />}</div>

      <div {...useBlockProps()} id={id}>
        <Style attributes={attributes} id={id} />


        {["default", "theme1", "theme2", "theme3", "theme4"].includes(
          theme
        ) && (
            <div
              className={`tsbTeamMembers ${layout || "vertical"
                } columns-${desktop} columns-tablet-${tablet} columns-mobile-${mobile}`}
            >
              {members.map((item, index) => {
                const { photo, name, title, bio, social = [] } = item;

                return (
                  <div
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`tsbMember ${index === activeIndex ? "bPlNowEditing" : ""
                      }`}
                    id={`tsbMember-${index}`}
                  >
                    {photo?.url ? (
                      <>
                        <img
                          className="memberPhoto"
                          src={photo?.url}
                          alt={photo?.alt}
                        />
                        {isBlobURL(photo?.url) && <Spinner />}
                      </>
                    ) : (
                      <MediaPlaceholder
                        label={__(" Member Photo:", "team-section")}
                        value={photo}
                        onChange={(val) => updateMember(index, "photo", val)}
                      />
                    )}

                    <div className="memberDetails">
                      <RichText
                        className="memberName"
                        tagName="h4"
                        value={name}
                        onChange={(val) => updateMember(index, "name", val)}
                        placeholder={__("Member name", "team-section")}
                        inlineToolbar
                      />

                      {isTitle && (
                        <RichText
                          className="memberTitle"
                          tagName="p"
                          value={title}
                          onChange={(val) => updateMember(index, "title", val)}
                          placeholder={__(
                            "Member designation/title",
                            "team-section"
                          )}
                          inlineToolbar
                        />
                      )}

                      {isSep && <span className="memberSeparator" />}

                      {isBio && (
                        <RichText
                          className="memberBio"
                          tagName="p"
                          value={bio}
                          onChange={(val) => updateMember(index, "bio", val)}
                          placeholder={__(
                            "Biography of the member",
                            "team-section"
                          )}
                          inlineToolbar
                        />
                      )}

                      {isSocial && (
                        <ul className="memberSocial">
                          {social?.map((socialItem, socialIndex) => {
                            const { icon } = socialItem;

                            return (
                              <li
                                key={socialIndex}
                                onClick={() => setSelectedSocial(socialIndex)}
                                className={`icon icon-${index}-${socialIndex} ${isSelected &&
                                  index === activeIndex &&
                                  socialIndex === selectedSocial
                                  ? "isSelected"
                                  : null
                                  }`}
                              >
                                <a href={"#"}>
                                  <i className={icon?.class} />
                                </a>
                              </li>
                            );
                          })}
                        </ul>
                      )}

                      {null !== selectedSocial && index === activeIndex && (
                        <div className="socialAction memberSocialForm">
                          <Label className="mb5">
                            {__("Link:", "team-section")}
                          </Label>
                          <InputControl
                            value={social[selectedSocial]?.link || ""}
                            onChange={(val) => {
                              const safeUrl = sanitizeURL(val);
                              updateMember(
                                index,
                                "social",
                                safeUrl || "",
                                selectedSocial,
                                "link"
                              );
                            }}
                          />

                          <IconControl
                            value={social[selectedSocial]?.icon}
                            onChange={(val) =>
                              updateMember(
                                index,
                                "social",
                                val,
                                selectedSocial,
                                "icon"
                              )
                            }
                            defaults={{
                              class: "fab fa-facebook-f",
                              fontSize: 22,
                            }}
                            isSize={false}
                            isColor={false}
                          />

                          <a
                            className="memberSocialRemove mt15"
                            onClick={(e) => {
                              e.preventDefault();
                              updateMember(index, "social", [
                                ...social.slice(0, selectedSocial),
                                ...social.slice(selectedSocial + 1),
                              ]);
                              setSelectedSocial(null);
                            }}
                          >
                            <i className="fa fa-times" />
                            {__("Remove this link", "team-section")}
                          </a>
                        </div>
                      )}

                      {isSelected && isSocial && index === activeIndex && (
                        <div className="socialAction memberSocialAdd mt20">
                          <Button
                            showTooltip={true}
                            tooltipPosition="top enter"
                            label={__("Add Social Link", "team-section")}
                            onClick={() => {
                              updateMember(index, "social", [
                                ...social,
                                {
                                  link: "#",
                                  icon: { class: "fab fa-facebook-f" },
                                },
                              ]);
                              setSelectedSocial(social.length);
                            }}
                          >
                            <i className="fa fa-plus" /> Add new social
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        {themeSwitch(theme)}

        {!members.length && (
          <h3 className="addMemberFirst">
            {__("Please add a member first!", "team-section")}
          </h3>
        )}
      </div>
    </>
  );
};
// export default Edit;`
export default withSelect((select) => {
  const currentPostId = select("core/editor").getCurrentPostId();
  const CPTType = select("core/editor").getCurrentPostType?.();

  return {
    currentPostId,
    CPTType,
  };
})(Edit);
