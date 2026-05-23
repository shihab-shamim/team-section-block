import { __ } from "@wordpress/i18n";

import {
  PanelBody,
  PanelRow,
  RangeControl,
  ToggleControl,
  __experimentalUnitControl as UnitControl,
  Dashicon,
  Button,
  SelectControl,
  TextControl,
} from "@wordpress/components";
import { produce } from "immer";

import {
  Label,
  Background,
  ColorControl,
  Device,
  BtnGroup,
  ColorsControl,
  HelpPanel,
  InlineDetailMediaUpload,
  ShadowControl,
  SeparatorControl,
  ItemsPanel,
  IconLibrary,
} from "../../../../../../../bpl-tools/Components";
import {
  BorderControl,
  ChangeImageData,
} from "../../../../../../../bpl-tools/Components/Deprecated";
import { gearIcon } from "../../../../../../../bpl-tools/utils/icons";
import {
  pxUnit,
  perUnit,
  emUnit,
} from "../../../../../../../bpl-tools/utils/options";
import { primaryColor } from "../../../../../../../bpl-tools/utils/data";

import { themes, layouts } from "../../../utils/options";
import theme5ProfileSetting from "../Theme Settings/theme5ProfileSetting";
import { updateData } from "../../../../../../../bpl-tools/utils/functions";
import theme6ProfileSetting from "../Theme Settings/theme6ProfileSetting";
import theme7ProfileSetting from "../Theme Settings/theme7ProfileSetting";
import theme8ProfileSetting from "../Theme Settings/theme8ProfileSetting";
import theme9ProfileSetting from "../Theme Settings/theme9ProfileSetting";
import theme10ProfileSetting from "../Theme Settings/theme10ProfileSetting";
import theme11ProfileSetting from "../Theme Settings/theme11ProfileSetting";
import { themeSwitch } from "../../../utils/functions";
import { BControlPro } from "../../../../../../../bpl-tools/ProControls";

const General = ({
  attributes,
  setAttributes,
  updateMember,
  activeIndex,
  setActiveIndex,
  device,
  premiumProps
}) => {
  const {
    members = [],
    columns,
    columnGap,
    rowGap,
    layout,
    theme,
    isLinkNewTab,
    padding,
    nameTypo,
    isTitle,
    titleTypo,
    isSep,
    isBio,
    isSocial,
    options = {},
  } = attributes;
  const {
    showUserName = true,
    hoverOnScale = true,
    isShowWaterMark = true,
    isShowShape = true,
    waterMark = "TEAM",
    isShowIcon = true
  } = options || {};

  const handleClick = (value) => {
    setAttributes(themeSwitch(value, attributes));

  };
  const newMember = {
    background: { color: "#0000" },
    border: { radius: "3px" },
    shadow: [],
    photo: { id: null, url: "", alt: "", title: "" },
    photoBorder: { radius: "50%" },
    name: "John Smith",
    nameColor: "#333",
    title: "Manager",
    titleColor: "#333",
    separator: {
      width: "20%",
      height: "3px",
      style: "solid",
      color: "#777",
    },
    bio: "I am a self-motivated and self-taught professional who likes to solve problems.",
    bioColor: "#333",
    userName: "@mariemosley",
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
    socialIconColors: { color: "#fff", bg: primaryColor },
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
          paddingTop: "0px",

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

  const duplicateMember = (e) => {
    e.preventDefault();

    setAttributes({
      members: [
        ...members.slice(0, activeIndex),
        { ...members[activeIndex] },
        ...members.slice(activeIndex),
      ],
    });

    setActiveIndex(activeIndex + 1);
  };

  const removeMember = (e) => {
    e.preventDefault();

    setAttributes({
      members: [
        ...members.slice(0, activeIndex),
        ...members.slice(activeIndex + 1),
      ],
    });

    setActiveIndex(0 === activeIndex ? 0 : activeIndex - 1);
  };

  const {
    background = {},
    border = {},
    shadow = [],
    photo,
    photoBorder = {},
    nameColor = "",
    titleColor = "",
    separator = {},
    bioColor = "",
    socialIconColors = {},
  } = members[activeIndex] || {};
  return (
    <>
      {["default", "theme1", "theme2", "theme3", "theme4"].includes(theme) && (
        <>
          <HelpPanel
            slug="team-section"
            docsLink="https://bblockswp.com/docs/team-block"
          />

          <PanelBody
            className="bPlPanelBody addRemoveItems editItem"
            title={__("Add or Remove Members", "team-section")}
          >
            {null !== activeIndex && (
              <>
                <h3 className="bplItemTitle">
                  {__(`Member ${activeIndex + 1}:`, "team-section")}
                </h3>

                <Background
                  label={__("Background:", "team-section")}
                  value={background}
                  onChange={(val) =>
                    updateMember(activeIndex, "background", val)
                  }
                />

                <BorderControl
                  label={__("Border:", "team-section")}
                  value={border}
                  onChange={(val) => updateMember(activeIndex, "border", val)}
                  defaults={{ radius: "3px" }}
                />

                <ShadowControl
                  label={__("Shadow:", "team-section")}
                  value={shadow?.shadow || shadow}
                  onChange={(val) => updateMember(activeIndex, "shadow", val)}
                />

                <Label>{__("Photo:", "team-section")}</Label>
                <InlineDetailMediaUpload
                  value={photo}
                  onChange={(val) => updateMember(activeIndex, "photo", val)}
                  placeholder={__("Enter Image URL", "team-section")}
                />

                <ChangeImageData
                  className="mt20"
                  value={photo}
                  onChange={(val) => updateMember(activeIndex, "photo", val)}
                />

                <BorderControl
                  label={__("Photo Border:", "team-section")}
                  value={photoBorder}
                  onChange={(val) =>
                    updateMember(activeIndex, "photoBorder", val)
                  }
                  defaults={{ radius: "50%" }}
                />

                <ColorControl
                  label={__("Name Color:", "team-section")}
                  value={nameColor}
                  onChange={(val) =>
                    updateMember(activeIndex, "nameColor", val)
                  }
                  defaultColor="#333"
                />

                <ColorControl
                  label={__("Designation/Title Color:", "team-section")}
                  value={titleColor}
                  onChange={(val) =>
                    updateMember(activeIndex, "titleColor", val)
                  }
                  defaultColor="#333"
                />

                <SeparatorControl
                  value={separator}
                  onChange={(val) =>
                    updateMember(activeIndex, "separator", val)
                  }
                  defaults={{
                    width: "20%",
                    height: "3px",
                    color: "#777",
                  }}
                />

                <ColorControl
                  label={__("Bio Color:", "team-section")}
                  value={bioColor}
                  onChange={(val) => updateMember(activeIndex, "bioColor", val)}
                  defaultColor="#333"
                />

                <ColorsControl
                  label={__("Social Icon Colors:", "team-section")}
                  value={socialIconColors}
                  onChange={(val) =>
                    updateMember(activeIndex, "socialIconColors", val)
                  }
                  defaults={{ color: "#fff", bg: primaryColor }}
                />

                <PanelRow className="itemAction mt20 mb15">
                  {1 < members?.length && (
                    <Button
                      className="removeItem"
                      label={__("Remove", "team-section")}
                      onClick={removeMember}
                    >
                      <Dashicon icon="no" />
                      {__("Remove", "team-section")}
                    </Button>
                  )}

                  <Button
                    className="duplicateItem"
                    label={__("Duplicate", "team-section")}
                    onClick={duplicateMember}
                  >
                    {gearIcon}
                    {__("Duplicate", "team-section")}
                  </Button>
                </PanelRow>
              </>
            )}

            <div className="addItem">
              <Button
                label={__("Add New Member", "team-section")}
                onClick={addMember}
              >
                <Dashicon icon="plus" />
                {__("Add New Member", "team-section")}
              </Button>
            </div>
          </PanelBody>

          <PanelBody
            className="bPlPanelBody"
            title={__("Layout", "team-section")}
            initialOpen={false}
          >
            <PanelRow>
              <Label className="mb5">{__("Columns:", "team-section")}</Label>
              <Device />
            </PanelRow>
            <RangeControl
              value={columns[device]}
              onChange={(val) => {
                setAttributes({
                  columns: { ...columns, [device]: val },
                });
              }}
              min={1}
              max={6}
              step={1}
              beforeIcon="grid-view"
            />

            <UnitControl
              className="mt20"
              label={__("Column Gap:", "team-section")}
              labelPosition="left"
              value={columnGap}
              onChange={(val) => setAttributes({ columnGap: val })}
              units={[pxUnit(), perUnit(), emUnit()]}
            />

            <UnitControl
              className="mt20"
              label={__("Row Gap:", "team-section")}
              labelPosition="left"
              value={rowGap}
              onChange={(val) => setAttributes({ rowGap: val })}
              units={[pxUnit(), perUnit(), emUnit()]}
            />

            <PanelRow className="mt20">
              <Label className="">{__("Layout:", "team-section")}</Label>
              <BtnGroup
                value={layout}
                onChange={(val) => {
                  "vertical" === val &&
                    setAttributes({
                      layout: val,
                      columns: { ...columns, desktop: 3, tablet: 2 },
                      textAlign: "center",
                      padding: { ...padding, vertical: "50px" },
                    });
                  "horizontal" === val &&
                    setAttributes({
                      layout: val,
                      columns: { ...columns, desktop: 2, tablet: 1 },
                      textAlign: "left",
                      padding: { ...padding, vertical: "30px" },
                    });
                }}
                options={layouts}
                isIcon={true}
              />
            </PanelRow>

            <PanelRow>
              <Label className="">{__("Theme:", "team-section")}</Label>
              <SelectControl
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
                        "desktop": 3,
                        "tablet": 2,
                        "mobile": 1
                      },
                      rowGap: "30px",
                      columnGap: "30px"


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
                        "desktop": 3,
                        "tablet": 2,
                        "mobile": 1
                      },
                      rowGap: "30px",
                      columnGap: "30px"

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
                        "desktop": 3,
                        "tablet": 2,
                        "mobile": 1
                      },
                      rowGap: "30px",
                      columnGap: "30px"

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
                        "desktop": 3,
                        "tablet": 2,
                        "mobile": 1
                      },
                      rowGap: "30px",
                      columnGap: "30px"

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
                        "desktop": 3,
                        "tablet": 2,
                        "mobile": 1
                      },
                      rowGap: "30px",
                      columnGap: "30px"

                    });
                  ["theme5", "theme6", "theme7", "theme8", "theme9", "theme10", "theme11", "theme12"].includes(val) && handleClick(val)

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
                options={themes}
              />
            </PanelRow>
          </PanelBody>

          <PanelBody
            className="bPlPanelBody"
            title={__("Elements", "team-section")}
            initialOpen={false}
          >
            <ToggleControl
              label={__("Show Title", "team-section")}
              checked={isTitle}
              onChange={(val) => setAttributes({ isTitle: val })}
            />

            <ToggleControl
              className="mt10"
              label={__("Show Separator", "team-section")}
              checked={isSep}
              onChange={(val) => setAttributes({ isSep: val })}
            />

            <ToggleControl
              className="mt10"
              label={__("Show Bio", "team-section")}
              checked={isBio}
              onChange={(val) => setAttributes({ isBio: val })}
            />

            <ToggleControl
              className="mt10"
              label={__("Show Social", "team-section")}
              checked={isSocial}
              onChange={(val) => setAttributes({ isSocial: val })}
            />

            <ToggleControl
              className="mt10"
              label={__("Open Link in New Tab", "team-section")}
              checked={isLinkNewTab}
              onChange={(val) => setAttributes({ isLinkNewTab: val })}
            />
          </PanelBody>
        </>
      )}
      {"theme5" === theme && (
        <>
          <HelpPanel
            slug="team-section"
            docsLink="https://bblockswp.com/docs/team-block"
          />
          <PanelBody
            className="bPlPanelBody addRemoveItems editItem"
            title={__("Add or Remove Members", "team-section")}
          >
            <ItemsPanel
              newItem={newMember}
              design="sortable"
              attributes={attributes}
              setAttributes={setAttributes}
              arrKey="members"
              itemLabel="Member"
              ItemSettings={theme5ProfileSetting}
              premiumProps={premiumProps}
            />
          </PanelBody>
          <PanelBody
            className="bPlPanelBody"
            title={__("Layout", "team-section")}
            initialOpen={false}
          >
            <PanelRow>
              <Label className="mb5">{__("Columns:", "team-section")}</Label>
              <Device />
            </PanelRow>
            <BControlPro Component={RangeControl} {...premiumProps}
              value={columns[device]}
              onChange={(val) => {
                setAttributes({
                  columns: { ...columns, [device]: val },
                });
              }}
              min={1}
              max={6}
              step={1}
              beforeIcon="grid-view"
            />

            <BControlPro Component={UnitControl} {...premiumProps}
              className="mt20"
              label={__("Column Gap:", "team-section")}
              labelPosition="left"
              value={columnGap}
              onChange={(val) => setAttributes({ columnGap: val })}
              units={[pxUnit(), perUnit(), emUnit()]}
            />

            <BControlPro Component={UnitControl} {...premiumProps}
              className="mt20"
              label={__("Row Gap:", "team-section")}
              labelPosition="left"
              value={rowGap}
              onChange={(val) => setAttributes({ rowGap: val })}
              units={[pxUnit(), perUnit(), emUnit()]}
            />

            <PanelRow>
              <Label className="">{__("Theme:", "team-section")}</Label>
              <SelectControl
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
                        "desktop": 3,
                        "tablet": 2,
                        "mobile": 1
                      },
                      rowGap: "30px",
                      columnGap: "30px"


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
                        "desktop": 3,
                        "tablet": 2,
                        "mobile": 1
                      },
                      rowGap: "30px",
                      columnGap: "30px"

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
                        "desktop": 3,
                        "tablet": 2,
                        "mobile": 1
                      },
                      rowGap: "30px",
                      columnGap: "30px"

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
                        "desktop": 3,
                        "tablet": 2,
                        "mobile": 1
                      },
                      rowGap: "30px",
                      columnGap: "30px"

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
                        "desktop": 3,
                        "tablet": 2,
                        "mobile": 1
                      },
                      rowGap: "30px",
                      columnGap: "30px"

                    });
                  ["theme5", "theme6", "theme7", "theme8", "theme9", "theme10", "theme11", "theme12"].includes(val) && handleClick(val)

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
                options={themes}
              />
            </PanelRow>
          </PanelBody>

          <PanelBody
            className="bPlPanelBody"
            title={__("Elements", "team-section")}
            initialOpen={false}
          >
            <BControlPro Component={ToggleControl} {...premiumProps}
              label={__("Show Title", "team-section")}
              checked={isTitle}
              onChange={(val) => setAttributes({ isTitle: val })}
            />

            <BControlPro Component={ToggleControl} {...premiumProps}
              className="mt10"
              label={__("Show Bio", "team-section")}
              checked={isBio}
              onChange={(val) => setAttributes({ isBio: val })}
            />

            <BControlPro Component={ToggleControl} {...premiumProps}
              className="mt10"
              label={__("Show User Name", "team-section")}
              checked={showUserName}
              onChange={(val) =>
                setAttributes({
                  options: updateData(options, val, "showUserName"),
                })
              }
            />
            <BControlPro Component={ToggleControl} {...premiumProps}
              className="mt10"
              label={__("Hover On Scale", "team-section")}
              checked={hoverOnScale}
              onChange={(val) =>
                setAttributes({
                  options: updateData(options, val, "hoverOnScale"),
                })
              }
            />

            <BControlPro Component={ToggleControl} {...premiumProps}
              className="mt10"
              label={__("Open Link in New Tab", "team-section")}
              checked={isLinkNewTab}
              onChange={(val) => setAttributes({ isLinkNewTab: val })}
            />
          </PanelBody>
        </>
      )}

      {"theme6" === theme && (
        <>
          <HelpPanel
            slug="team-section"
            docsLink="https://bblockswp.com/docs/team-block"
          />

          <PanelBody
            className="bPlPanelBody addRemoveItems editItem"
            title={__("Add or Remove Members", "team-section")}
          >
            <ItemsPanel
              newItem={newMember}
              design="sortable"
              attributes={attributes}
              setAttributes={setAttributes}
              arrKey="members"
              itemLabel="Member"
              ItemSettings={theme6ProfileSetting}
            // premiumProps={premiumProps}
            />
          </PanelBody>

          <PanelBody
            className="bPlPanelBody"
            title={__("Layout", "team-section")}
            initialOpen={false}
          >
            <PanelRow>
              <Label className="mb5">{__("Columns:", "team-section")}</Label>
              <Device />
            </PanelRow>
            <BControlPro Component={RangeControl} {...premiumProps}
              value={columns[device]}
              onChange={(val) => {
                setAttributes({
                  columns: { ...columns, [device]: val },
                });
              }}
              min={1}
              max={6}
              step={1}
              beforeIcon="grid-view"
            />

            <BControlPro Component={UnitControl} {...premiumProps}
              className="mt20"
              label={__("Column Gap:", "team-section")}
              labelPosition="left"
              value={columnGap}
              onChange={(val) => setAttributes({ columnGap: val })}
              units={[pxUnit(), perUnit(), emUnit()]}
            />

            <BControlPro Component={UnitControl} {...premiumProps}
              className="mt20"
              label={__("Row Gap:", "team-section")}
              labelPosition="left"
              value={rowGap}
              onChange={(val) => setAttributes({ rowGap: val })}
              units={[pxUnit(), perUnit(), emUnit()]}
            />

            <PanelRow>
              <Label className="">{__("Theme:", "team-section")}</Label>
              <SelectControl
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
                        "desktop": 3,
                        "tablet": 2,
                        "mobile": 1
                      },
                      rowGap: "30px",
                      columnGap: "30px"


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
                        "desktop": 3,
                        "tablet": 2,
                        "mobile": 1
                      },
                      rowGap: "30px",
                      columnGap: "30px"

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
                        "desktop": 3,
                        "tablet": 2,
                        "mobile": 1
                      },
                      rowGap: "30px",
                      columnGap: "30px"

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
                        "desktop": 3,
                        "tablet": 2,
                        "mobile": 1
                      },
                      rowGap: "30px",
                      columnGap: "30px"

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
                        "desktop": 3,
                        "tablet": 2,
                        "mobile": 1
                      },
                      rowGap: "30px",
                      columnGap: "30px"

                    });
                  ["theme5", "theme6", "theme7", "theme8", "theme9", "theme10", "theme11", "theme12"].includes(val) && handleClick(val)

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
                options={themes}
              />
            </PanelRow>
          </PanelBody>

          <PanelBody
            className="bPlPanelBody"
            title={__("Elements", "team-section")}
            initialOpen={false}
          >
            <BControlPro Component={ToggleControl} {...premiumProps}
              label={__("Show Water Mark", "team-section")}
              checked={isShowWaterMark}
              onChange={(val) =>
                setAttributes({
                  options: updateData(options, val, "isShowWaterMark"),
                })
              }
            />
            {isShowWaterMark && (
              <BControlPro Component={TextControl} {...premiumProps}
                className="mt10"
                label={__("Water Mark Text")}
                value={waterMark}
                onChange={(val) =>
                  setAttributes({
                    options: updateData(options, val, "waterMark"),
                  })
                }
              />
            )}
            <BControlPro Component={ToggleControl} {...premiumProps}
              className="mt10"
              label={__("Show Background Shape", "team-section")}
              checked={isShowShape}
              onChange={(val) =>
                setAttributes({
                  options: updateData(options, val, "isShowShape"),
                })
              }
            />
            <BControlPro Component={ToggleControl} {...premiumProps}
              className="mt10"
              label={__("Show Title", "team-section")}
              checked={isTitle}
              onChange={(val) => setAttributes({ isTitle: val })}
            />

            <BControlPro Component={ToggleControl} {...premiumProps}
              className="mt10"
              label={__("Show Social", "team-section")}
              checked={isSocial}
              onChange={(val) => setAttributes({ isSocial: val })}
            />

            <BControlPro Component={ToggleControl} {...premiumProps}
              className="mt10"
              label={__("Open Link in New Tab", "team-section")}
              checked={isLinkNewTab}
              onChange={(val) => setAttributes({ isLinkNewTab: val })}
            />
          </PanelBody>
        </>
      )}

      {"theme7" === theme && (
        <>

          <HelpPanel
            slug="team-section"
            docsLink="https://bblockswp.com/docs/team-block"
          />

          <PanelBody
            className="bPlPanelBody addRemoveItems editItem"
            title={__("Add or Remove Members", "team-section")}
          >
            <ItemsPanel
              newItem={newMember}
              design="sortable"
              attributes={attributes}
              setAttributes={setAttributes}
              arrKey="members"
              itemLabel="Member"
              ItemSettings={theme7ProfileSetting}
            // premiumProps={premiumProps}
            />
          </PanelBody>
          <PanelBody
            className="bPlPanelBody"
            title={__("Layout", "team-section")}
            initialOpen={false}
          >

            <PanelRow>
              <Label className="">{__("Theme:", "team-section")}</Label>
              <SelectControl
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
                        "desktop": 3,
                        "tablet": 2,
                        "mobile": 1
                      },
                      rowGap: "30px",
                      columnGap: "30px"


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
                        "desktop": 3,
                        "tablet": 2,
                        "mobile": 1
                      },
                      rowGap: "30px",
                      columnGap: "30px"

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
                        "desktop": 3,
                        "tablet": 2,
                        "mobile": 1
                      },
                      rowGap: "30px",
                      columnGap: "30px"

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
                        "desktop": 3,
                        "tablet": 2,
                        "mobile": 1
                      },
                      rowGap: "30px",
                      columnGap: "30px"

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
                        "desktop": 3,
                        "tablet": 2,
                        "mobile": 1
                      },
                      rowGap: "30px",
                      columnGap: "30px"

                    });
                  ["theme5", "theme6", "theme7", "theme8", "theme9", "theme10", "theme11", "theme12"].includes(val) && handleClick(val)

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
                options={themes}
              />
            </PanelRow>
          </PanelBody>

          <PanelBody
            className="bPlPanelBody"
            title={__("Elements", "team-section")}
            initialOpen={false}
          >
            <BControlPro Component={ToggleControl} {...premiumProps}
              label={__("Show Team Ring", "team-section")}
              checked={isShowWaterMark}
              onChange={(val) =>
                setAttributes({
                  options: updateData(options, val, "isShowWaterMark"),
                })
              }
            />
            {isShowWaterMark && (
              <BControlPro Component={TextControl} {...premiumProps}
                className="mt10"
                label={__("Team Ring Text")}
                value={waterMark}
                onChange={(val) =>
                  setAttributes({
                    options: updateData(options, val, "waterMark"),
                  })
                }
              />
            )}

          </PanelBody>
        </>
      )

      }

      {"theme8" === theme && (<>
        <HelpPanel
          slug="team-section"
          docsLink="https://bblockswp.com/docs/team-block"
        />

        <PanelBody
          className="bPlPanelBody addRemoveItems editItem"
          title={__("Add or Remove Members", "team-section")}
        >
          <ItemsPanel
            newItem={newMember}
            design="sortable"
            attributes={attributes}
            setAttributes={setAttributes}
            arrKey="members"
            itemLabel="Member"
            ItemSettings={theme8ProfileSetting}
          // premiumProps={premiumProps}
          />
        </PanelBody>

        <PanelBody
          className="bPlPanelBody"
          title={__("Layout", "team-section")}
          initialOpen={false}
        >
          <PanelRow>
            <Label className="mb5">{__("Columns:", "team-section")}</Label>
            <Device />
          </PanelRow>
          <BControlPro Component={RangeControl} {...premiumProps}
            value={columns[device]}
            onChange={(val) => {
              setAttributes({
                columns: { ...columns, [device]: val },
              });
            }}
            min={1}
            max={6}
            step={1}
            beforeIcon="grid-view"
          />

          <BControlPro Component={UnitControl} {...premiumProps}
            className="mt20"
            label={__("Column Gap:", "team-section")}
            labelPosition="left"
            value={columnGap}
            onChange={(val) => setAttributes({ columnGap: val })}
            units={[pxUnit(), perUnit(), emUnit()]}
          />

          <BControlPro Component={UnitControl} {...premiumProps}
            className="mt20"
            label={__("Row Gap:", "team-section")}
            labelPosition="left"
            value={rowGap}
            onChange={(val) => setAttributes({ rowGap: val })}
            units={[pxUnit(), perUnit(), emUnit()]}
          />

          <PanelRow>
            <Label className="">{__("Theme:", "team-section")}</Label>
            <SelectControl
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
                      "desktop": 3,
                      "tablet": 2,
                      "mobile": 1
                    },
                    rowGap: "30px",
                    columnGap: "30px"


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
                      "desktop": 3,
                      "tablet": 2,
                      "mobile": 1
                    },
                    rowGap: "30px",
                    columnGap: "30px"

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
                      "desktop": 3,
                      "tablet": 2,
                      "mobile": 1
                    },
                    rowGap: "30px",
                    columnGap: "30px"

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
                      "desktop": 3,
                      "tablet": 2,
                      "mobile": 1
                    },
                    rowGap: "30px",
                    columnGap: "30px"

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
                      "desktop": 3,
                      "tablet": 2,
                      "mobile": 1
                    },
                    rowGap: "30px",
                    columnGap: "30px"

                  });
                ["theme5", "theme6", "theme7", "theme8", "theme9", "theme10", "theme11", "theme12"].includes(val) && handleClick(val)

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
              options={themes}
            />
          </PanelRow>
        </PanelBody>


        <PanelBody
          className="bPlPanelBody"
          title={__("Elements", "team-section")}
          initialOpen={false}
        >
          <BControlPro Component={ToggleControl} {...premiumProps}
            className="mt10"
            label={__("Show Title", "team-section")}
            checked={isTitle}
            onChange={(val) => setAttributes({ isTitle: val })}
          />

          <BControlPro Component={ToggleControl} {...premiumProps}
            className="mt10"
            label={__("Show Social", "team-section")}
            checked={isSocial}
            onChange={(val) => setAttributes({ isSocial: val })}
          />
          <BControlPro Component={ToggleControl} {...premiumProps} className="mt10"
            label={__("Open Link in New Tab", "team-section")}
            checked={isLinkNewTab}
            onChange={(val) =>
              setAttributes({
                isLinkNewTab: val
              })
            }
          />
          <BControlPro Component={ToggleControl} {...premiumProps} className="mt10"
            label={__("Show Icon", "team-section")}
            checked={isShowIcon}
            onChange={(val) =>
              setAttributes({
                options: updateData(options, val, "isShowIcon")
              })
            }
          />
          {isShowIcon && <>
            <BControlPro Component={IconLibrary} {...premiumProps} className="mt10" value={options?.icon} label={__("Icon", "team-section")} onChange={v => setAttributes({ options: updateData(options, v, "icon") })} />

          </>}


        </PanelBody>


      </>)}

      {"theme9" === theme && (<>
        <HelpPanel
          slug="team-section"
          docsLink="https://bblockswp.com/docs/team-block"
        />

        <PanelBody
          className="bPlPanelBody addRemoveItems editItem"
          title={__("Add or Remove Members", "team-section")}
        >
          <ItemsPanel
            newItem={newMember}
            design="sortable"
            attributes={attributes}
            setAttributes={setAttributes}
            arrKey="members"
            itemLabel="Member"
            ItemSettings={theme9ProfileSetting}
          // premiumProps={premiumProps}
          />
        </PanelBody>

        <PanelBody
          className="bPlPanelBody"
          title={__("Layout", "team-section")}
          initialOpen={false}
        >
          <PanelRow>
            <Label className="mb5">{__("Columns:", "team-section")}</Label>
            <Device />
          </PanelRow>
          <BControlPro Component={RangeControl} {...premiumProps}
            value={columns[device]}
            onChange={(val) => {
              setAttributes({
                columns: { ...columns, [device]: val },
              });
            }}
            min={1}
            max={6}
            step={1}
            beforeIcon="grid-view"
          />

          <BControlPro Component={UnitControl} {...premiumProps}
            className="mt20"
            label={__("Column Gap:", "team-section")}
            labelPosition="left"
            value={columnGap}
            onChange={(val) => setAttributes({ columnGap: val })}
            units={[pxUnit(), perUnit(), emUnit()]}
          />

          <BControlPro Component={UnitControl} {...premiumProps}
            className="mt20"
            label={__("Row Gap:", "team-section")}
            labelPosition="left"
            value={rowGap}
            onChange={(val) => setAttributes({ rowGap: val })}
            units={[pxUnit(), perUnit(), emUnit()]}
          />

          <PanelRow>
            <Label className="">{__("Theme:", "team-section")}</Label>
            <SelectControl
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
                      "desktop": 3,
                      "tablet": 2,
                      "mobile": 1
                    },
                    rowGap: "30px",
                    columnGap: "30px"


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
                      "desktop": 3,
                      "tablet": 2,
                      "mobile": 1
                    },
                    rowGap: "30px",
                    columnGap: "30px"

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
                      "desktop": 3,
                      "tablet": 2,
                      "mobile": 1
                    },
                    rowGap: "30px",
                    columnGap: "30px"

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
                      "desktop": 3,
                      "tablet": 2,
                      "mobile": 1
                    },
                    rowGap: "30px",
                    columnGap: "30px"

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
                      "desktop": 3,
                      "tablet": 2,
                      "mobile": 1
                    },
                    rowGap: "30px",
                    columnGap: "30px"

                  });
                ["theme5", "theme6", "theme7", "theme8", "theme9", "theme10", "theme11", "theme12"].includes(val) && handleClick(val)

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
              options={themes}
            />
          </PanelRow>
        </PanelBody>

        <PanelBody
          className="bPlPanelBody"
          title={__("Elements", "team-section")}
          initialOpen={false}
        >
          <BControlPro Component={ToggleControl} {...premiumProps}
            className="mt10"
            label={__("Show Title", "team-section")}
            checked={isTitle}
            onChange={(val) => setAttributes({ isTitle: val })}
          />

          <BControlPro Component={ToggleControl} {...premiumProps}
            className="mt10"
            label={__("Show Social", "team-section")}
            checked={isSocial}
            onChange={(val) => setAttributes({ isSocial: val })}
          />
          <BControlPro Component={ToggleControl} {...premiumProps} className="mt10"
            label={__("Open Link in New Tab", "team-section")}
            checked={isLinkNewTab}
            onChange={(val) =>
              setAttributes({
                isLinkNewTab: val
              })
            }
          />




        </PanelBody>
      </>)}


      {"theme10" === theme && (<>
        <HelpPanel
          slug="team-section"
          docsLink="https://bblockswp.com/docs/team-block"
        />

        <PanelBody
          className="bPlPanelBody addRemoveItems editItem"
          title={__("Add or Remove Members", "team-section")}
        >
          <ItemsPanel
            newItem={newMember}
            design="sortable"
            attributes={attributes}
            setAttributes={setAttributes}
            arrKey="members"
            itemLabel="Member"
            ItemSettings={theme10ProfileSetting}
          // premiumProps={premiumProps}
          />
        </PanelBody>
        <PanelBody
          className="bPlPanelBody"
          title={__("Layout", "team-section")}
          initialOpen={false}
        >
          <PanelRow>
            <Label className="">{__("Theme:", "team-section")}</Label>
            <SelectControl
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
                      "desktop": 3,
                      "tablet": 2,
                      "mobile": 1
                    },
                    rowGap: "30px",
                    columnGap: "30px"


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
                      "desktop": 3,
                      "tablet": 2,
                      "mobile": 1
                    },
                    rowGap: "30px",
                    columnGap: "30px"

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
                      "desktop": 3,
                      "tablet": 2,
                      "mobile": 1
                    },
                    rowGap: "30px",
                    columnGap: "30px"

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
                      "desktop": 3,
                      "tablet": 2,
                      "mobile": 1
                    },
                    rowGap: "30px",
                    columnGap: "30px"

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
                      "desktop": 3,
                      "tablet": 2,
                      "mobile": 1
                    },
                    rowGap: "30px",
                    columnGap: "30px"

                  });
                ["theme5", "theme6", "theme7", "theme8", "theme9", "theme10", "theme11", "theme12"].includes(val) && handleClick(val)

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
              options={themes}
            />
          </PanelRow>
        </PanelBody>


        <PanelBody
          className="bPlPanelBody"
          title={__("Elements", "team-section")}
          initialOpen={false}
        >
          <BControlPro Component={ToggleControl} {...premiumProps}
            className="mt10"
            label={__("Show Title", "team-section")}
            checked={isTitle}
            onChange={(val) => setAttributes({ isTitle: val })}
          />

          <BControlPro Component={ToggleControl} {...premiumProps}
            className="mt10"
            label={__("Show States", "team-section")}
            checked={isSocial}
            onChange={(val) => setAttributes({ isSocial: val })}
          />
          <BControlPro Component={ToggleControl} {...premiumProps}
            className="mt10"
            label={__("Show Serial", "team-section")}
            checked={options?.isShowSereal}
            onChange={(val) => setAttributes({ options: updateData(options, val, "isShowSereal") })}
          />
          <BControlPro Component={ToggleControl} {...premiumProps}
            className="mt10"
            label={__("Show Background Shape", "team-section")}
            checked={options?.isShowBgShape}
            onChange={(val) => setAttributes({ options: updateData(options, val, "isShowBgShape") })}
          />
          <BControlPro Component={ToggleControl} {...premiumProps} className="mt10"
            label={__("Open Link in New Tab", "team-section")}
            checked={isLinkNewTab}
            onChange={(val) =>
              setAttributes({
                isLinkNewTab: val
              })
            }
          />




        </PanelBody>

      </>)}

      {"theme11" === theme && (<>
        <HelpPanel
          slug="team-section"
          docsLink="https://bblockswp.com/docs/team-block"
        />

        <PanelBody
          className="bPlPanelBody addRemoveItems editItem"
          title={__("Add or Remove Members", "team-section")}
        >
          <ItemsPanel
            newItem={newMember}
            design="sortable"
            attributes={attributes}
            setAttributes={setAttributes}
            arrKey="members"
            itemLabel="Member"
            ItemSettings={theme11ProfileSetting}
          // premiumProps={premiumProps}
          />
        </PanelBody>

        <PanelBody
          className="bPlPanelBody"
          title={__("Layout", "team-section")}
          initialOpen={false}
        >
          <PanelRow>
            <Label className="mb5">{__("Columns:", "team-section")}</Label>
            <Device />
          </PanelRow>
          <BControlPro Component={RangeControl} {...premiumProps}
            value={columns[device]}
            onChange={(val) => {
              setAttributes({
                columns: { ...columns, [device]: val },
              });
            }}
            min={1}
            max={6}
            step={1}
            beforeIcon="grid-view"
          />

          <BControlPro Component={UnitControl} {...premiumProps}
            className="mt20"
            label={__("Column Gap:", "team-section")}
            labelPosition="left"
            value={columnGap}
            onChange={(val) => setAttributes({ columnGap: val })}
            units={[pxUnit(), perUnit(), emUnit()]}
          />

          <BControlPro Component={UnitControl} {...premiumProps}
            className="mt20"
            label={__("Row Gap:", "team-section")}
            labelPosition="left"
            value={rowGap}
            onChange={(val) => setAttributes({ rowGap: val })}
            units={[pxUnit(), perUnit(), emUnit()]}
          />

          <PanelRow>
            <Label className="">{__("Theme:", "team-section")}</Label>
            <SelectControl
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
                      "desktop": 3,
                      "tablet": 2,
                      "mobile": 1
                    },
                    rowGap: "30px",
                    columnGap: "30px"


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
                      "desktop": 3,
                      "tablet": 2,
                      "mobile": 1
                    },
                    rowGap: "30px",
                    columnGap: "30px"

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
                      "desktop": 3,
                      "tablet": 2,
                      "mobile": 1
                    },
                    rowGap: "30px",
                    columnGap: "30px"

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
                      "desktop": 3,
                      "tablet": 2,
                      "mobile": 1
                    },
                    rowGap: "30px",
                    columnGap: "30px"

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
                      "desktop": 3,
                      "tablet": 2,
                      "mobile": 1
                    },
                    rowGap: "30px",
                    columnGap: "30px"

                  });
                ["theme5", "theme6", "theme7", "theme8", "theme9", "theme10", "theme11", "theme12"].includes(val) && handleClick(val)

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
              options={themes}
            />
          </PanelRow>
        </PanelBody>
        <PanelBody
          className="bPlPanelBody"
          title={__("Elements", "team-section")}
          initialOpen={false}
        >



          <BControlPro Component={ToggleControl} {...premiumProps}
            className="mt10"
            label={__("Show Title", "team-section")}
            checked={isTitle}
            onChange={(val) => setAttributes({ isTitle: val })}
          />


          <BControlPro Component={ToggleControl} {...premiumProps}
            className="mt10"
            label={__("Open Link in New Tab", "team-section")}
            checked={isLinkNewTab}
            onChange={(val) => setAttributes({ isLinkNewTab: val })}
          />
        </PanelBody>



      </>)}
    </>
  );
};

export default General;
