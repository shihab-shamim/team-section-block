import { __ } from "@wordpress/i18n";
import { withSelect } from "@wordpress/data";
import {
  InspectorControls,
  AlignmentToolbar,
  BlockControls,
} from "@wordpress/block-editor";
import {
  TabPanel,
  //   __experimentalUnitControl as UnitControl,
  Dashicon,
  ToolbarGroup,
  ToolbarButton,
} from "@wordpress/components";
import { produce } from "immer";

import { BBlocksAds } from "../../../../../../../bpl-tools/Components";

import { primaryColor } from "../../../../../../../bpl-tools/utils/data";
import { ProModal } from "../../../../../../../bpl-tools/ProControls";

import { generalStyleTabs, toolTipPresets } from "../../../utils/options";
import BlockPreview from "./panel/BlockPreview";
import General from "../General/General";
import Style from "../Style/Style";
import { themeSwitch } from "../../../utils/functions";
// import General from "../General/General"

const Settings = ({
  attributes,
  setAttributes,
  setActiveIndex,
  updateMember,
  isPremium,
  setIsProModalOpen,
  isProModalOpen,
  activeIndex,
  device,
  premiumProps,
}) => {
  const {
    members = [],
    theme,
    textAlign,
    padding,
    nameTypo,
    titleTypo,
  } = attributes;
  //   console.log(shihab);
  const addMember = () => {
    const {
      background = { color: "#0000" },
      border = { radius: "3px" },
      shadow = {},
      photoBorder = { radius: "50%" },
      nameColor = "#333",
      titleColor = "#333",
      separator = {
        width: "20%",
        height: "3px",
        style: "solid",
        color: "#777",
      },
      bioColor = "#333",
      socialIconColors = { color: "#fff", bg: primaryColor },
    } = members[0] || {};

    setAttributes({
      members: [
        ...members,
        {
          background,
          border,
          shadow,
          photo: { id: null, url: "", alt: "", title: "" },
          photoBorder,
          name: "John Smith",
          nameColor,
          title: "Manager",
          titleColor,
          separator,
          bio: "I am a self-motivated and self-taught professional who likes to solve problems.",
          bioColor,
          social: [
            {
              link: "#",
              icon: { class: "fab fa-facebook-f", fontSize: 22, color: "#fff" },
            },
            {
              link: "#",
              icon: { class: "fab fa-twitter", fontSize: 22, color: "#fff" },
            },
            {
              link: "#",
              icon: {
                class: "fab fa-linkedin-in",
                fontSize: 22,
                color: "#fff",
              },
            },
          ],
          socialIconColors,
        },
      ],
    });
    setActiveIndex(members.length);
  };

  const updateAllMembers = (params) => {
    const newMembers = produce(members, (draft) => {
      draft.map((_, index) => {
        for (const param of params) {
          const type = param[0];
          const value = param[1];

          draft[index][type] = value;
        }
      });
    });
    setAttributes({ members: newMembers });
  };

  const handleClick = (value) => {
    setAttributes(themeSwitch(value, attributes));
  };

  return (
    <>
      <InspectorControls>
        <div className="bPlInspectorInfo">
          <BBlocksAds />
        </div>

        <TabPanel
          className="bPlTabPanel"
          activeClass="activeTab"
          tabs={generalStyleTabs}
        >
          {(tab) => (
            <>
              {"general" === tab.name && (
                <General
                  premiumProps={premiumProps}
                  attributes={attributes}
                  setAttributes={setAttributes}
                  updateMember={updateMember}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  device={device}
                  isPremium={isPremium}
                  setIsProModalOpen={setIsProModalOpen}
                  isProModalOpen={isProModalOpen}
                />
              )}

              {"style" === tab.name && (
                <Style
                  premiumProps={premiumProps}
                  attributes={attributes}
                  setAttributes={setAttributes}
                  updateMember={updateMember}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  device={device}
                  isPremium={isPremium}
                  setIsProModalOpen={setIsProModalOpen}
                  isProModalOpen={isProModalOpen}
                />
              )}
            </>
          )}
        </TabPanel>
      </InspectorControls>

      <BlockControls>
        <ToolbarGroup className="bPlToolbar">
          <ToolbarButton
            label={__("Add New Member", "team-section")}
            onClick={addMember}
          >
            <Dashicon icon="plus" />
          </ToolbarButton>
        </ToolbarGroup>

        <AlignmentToolbar
          value={textAlign}
          onChange={(val) => setAttributes({ textAlign: val })}
        />
        <BlockPreview
          options={toolTipPresets}
          isPremium={isPremium}
          value={theme}
          onChange={(val) => {
            setAttributes({ theme: val });
            "default" === val &&
              setAttributes({
                padding: { ...padding, vertical: "50px", horizontal: "20px" },
                photoWidth: "170px",
                nameTypo: { ...nameTypo, fontSize: 20, textTransform: "none" },
                titleTypo: {
                  ...titleTypo,
                  fontSize: 16,
                  textTransform: "none",
                },
                isSep: true,
                isBio: true,
                socialSize: "22px",
                columns: {
                  desktop: 3,
                  tablet: 2,
                  mobile: 1,
                },
                rowGap: "30px",
                columnGap: "30px",
              });
            "theme1" === val &&
              setAttributes({
                padding: { ...padding, vertical: "50px", horizontal: "20px" },
                photoWidth: "190px",
                nameTypo: { ...nameTypo, fontSize: 20, textTransform: "none" },
                titleTypo: {
                  ...titleTypo,
                  fontSize: 14,
                  textTransform: "uppercase",
                },
                isSep: true,
                isBio: true,
                socialSize: "22px",
                columns: {
                  desktop: 3,
                  tablet: 2,
                  mobile: 1,
                },
                rowGap: "30px",
                columnGap: "30px",
              });
            "theme2" === val &&
              setAttributes({
                padding: { ...padding, vertical: "50px", horizontal: "20px" },
                photoWidth: "190px",
                nameTypo: { ...nameTypo, fontSize: 20, textTransform: "none" },
                titleTypo: {
                  ...titleTypo,
                  fontSize: 14,
                  textTransform: "uppercase",
                },
                isSep: true,
                isBio: false,
                socialSize: "22px",
                columns: {
                  desktop: 3,
                  tablet: 2,
                  mobile: 1,
                },
                rowGap: "30px",
                columnGap: "30px",
              });
            "theme3" === val &&
              setAttributes({
                padding: { ...padding, vertical: "50px", horizontal: "20px" },
                photoWidth: "170px",
                nameTypo: { ...nameTypo, fontSize: 24, textTransform: "none" },
                titleTypo: {
                  ...titleTypo,
                  fontSize: 18,
                  textTransform: "none",
                },
                isSep: false,
                isBio: false,
                socialSize: "28px",
                columns: {
                  desktop: 3,
                  tablet: 2,
                  mobile: 1,
                },
                rowGap: "30px",
                columnGap: "30px",
              });
            "theme4" === val &&
              setAttributes({
                padding: { ...padding, vertical: "15px", horizontal: "15px" },
                photoWidth: "100%",
                nameTypo: {
                  ...nameTypo,
                  fontSize: 20,
                  textTransform: "uppercase",
                },
                titleTypo: {
                  ...titleTypo,
                  fontSize: 15,
                  textTransform: "none",
                },
                isSep: false,
                isBio: false,
                socialSize: "22px",
                columns: {
                  desktop: 3,
                  tablet: 2,
                  mobile: 1,
                },
                rowGap: "30px",
                columnGap: "30px",
              });
            [
              "theme5",
              "theme6",
              "theme7",
              "theme8",
              "theme9",
              "theme10",
              "theme11",
              "theme12",
            ].includes(val) && handleClick(val);

            members.map((member) => {
              const {
                background,
                border,
                photoBorder,
                separator,
                socialIconColors,
              } = member;

              const defaultParams = [
                ["background", { ...background, color: "#0000" }],
                ["border", { ...border, radius: "3px" }],
                [
                  "shadow",
                  [{ hOffset: "", vOffset: "", blur: "0px", color: "#7090b0" }],
                ],
                [
                  "photoBorder",
                  {
                    ...photoBorder,
                    width: "0px",
                    color: "#0000",
                    radius: "50%",
                  },
                ],
                ["nameColor", "#333"],
                ["titleColor", "#333"],
                ["separator", { ...separator, color: "#777" }],
                ["bioColor", "#333"],
                [
                  "socialIconColors",
                  { ...socialIconColors, color: "#fff", bg: primaryColor },
                ],
              ];
              const theme1Params = [
                ["background", { ...background, color: "#0000" }],
                ["border", { ...border, radius: "3px" }],
                [
                  "shadow",
                  [
                    {
                      hOffset: "",
                      vOffset: "",
                      blur: "20px",
                      color: "#e8edfb",
                    },
                  ],
                ],
                [
                  "photoBorder",
                  {
                    ...photoBorder,
                    width: "10px",
                    color: "#e8edfb",
                    radius: "50%",
                  },
                ],
                ["nameColor", "#333"],
                ["titleColor", "#7a7a7a"],
                ["separator", { ...separator, color: primaryColor }],
                ["bioColor", "#7a7a7a"],
                [
                  "socialIconColors",
                  { ...socialIconColors, color: "#fff", bg: primaryColor },
                ],
              ];
              const theme2Params = [
                ["background", { ...background, color: "#0000" }],
                ["border", { ...border, radius: "3px" }],
                [
                  "shadow",
                  [{ hOffset: "", vOffset: "", blur: "0px", color: "#7090b0" }],
                ],
                [
                  "photoBorder",
                  {
                    ...photoBorder,
                    width: "0px",
                    color: "#0000",
                    radius: "50%",
                  },
                ],
                ["nameColor", "#333"],
                ["titleColor", "#7a7a7a"],
                ["separator", { ...separator, color: "#999" }],
                ["bioColor", "#7a7a7a"],
                [
                  "socialIconColors",
                  { ...socialIconColors, color: primaryColor, bg: "#0000" },
                ],
              ];
              const theme3Params = [
                ["background", { ...background, color: "#f2f3f7" }],
                ["border", { ...border, radius: "10px" }],
                [
                  "shadow",
                  [
                    {
                      hOffset: "-10px",
                      vOffset: "-10px",
                      blur: "20px",
                      color: "#f7f7f7",
                    },
                    {
                      hOffset: "10px",
                      vOffset: "10px",
                      blur: "20px",
                      color: "#d7e0e8",
                    },
                  ],
                ],
                [
                  "photoBorder",
                  {
                    ...photoBorder,
                    width: "0px",
                    color: "#0000",
                    radius: "50%",
                  },
                ],
                ["nameColor", "#32285C"],
                ["titleColor", "#677592"],
                ["separator", { ...separator, color: "#777" }],
                ["bioColor", "#333"],
                [
                  "socialIconColors",
                  { ...socialIconColors, color: "#677592", bg: "#0000" },
                ],
              ];
              const theme4Params = [
                ["background", { ...background, color: primaryColor }],
                ["border", { ...border, radius: "0px" }],
                [
                  "shadow",
                  [{ hOffset: "", vOffset: "", blur: "0px", color: "#7090b0" }],
                ],
                [
                  "photoBorder",
                  {
                    ...photoBorder,
                    width: "0px",
                    color: "#0000",
                    radius: "0px",
                  },
                ],
                ["nameColor", "#fff"],
                ["titleColor", "#fff"],
                ["separator", { ...separator, color: "#777" }],
                ["bioColor", "#fff"],
                [
                  "socialIconColors",
                  { ...socialIconColors, color: primaryColor, bg: "#fff" },
                ],
              ];

              "default" === val && updateAllMembers(defaultParams);
              "theme1" === val && updateAllMembers(theme1Params);
              "theme2" === val && updateAllMembers(theme2Params);
              "theme3" === val && updateAllMembers(theme3Params);
              "theme4" === val && updateAllMembers(theme4Params);
            });
          }}
        />
      </BlockControls>
      <ProModal
        isProModalOpen={isProModalOpen}
        setIsProModalOpen={setIsProModalOpen}
        link="/wp-admin/edit.php?post_type=tsb&page=team-section-dashboard#/pricing"
      >
        <li>
          <strong>{__("Pro: ", "clipboard")}</strong>
          {__("Everything in free", "clipboard")}
        </li>
        <li>
          <strong>{__("Pro: ", "clipboard")}</strong>
          {__("Custom button colors and styles", "clipboard")}
        </li>
        <li>
          <strong>{__("Pro: ", "clipboard")}</strong>
          {__("Advanced typography and color controls", "clipboard")}
        </li>
        <li>
          <strong>{__("Pro: ", "clipboard")}</strong>
          {__("Padding, margin, border, and shadow customization", "clipboard")}
        </li>
        <li>
          <strong>{__("Pro: ", "clipboard")}</strong>
          {__("Hover effects for inputs and buttons", "clipboard")}
        </li>
        <li>
          <strong>{__("Pro: ", "clipboard")}</strong>
          {__("Icon library integration and size/color controls", "clipboard")}
        </li>
      </ProModal>
    </>
  );
};
export default withSelect((select) => {
  const { getDeviceType } = select("core/editor");

  return {
    device: getDeviceType()?.toLowerCase(),
  };
})(Settings);
