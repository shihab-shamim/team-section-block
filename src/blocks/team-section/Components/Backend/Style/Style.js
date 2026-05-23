import { __ } from "@wordpress/i18n";

import {
  PanelBody,
  PanelRow,
  __experimentalUnitControl as UnitControl,
  RangeControl,
  BorderBoxControl,
} from "@wordpress/components";

import {
  Label,
  BtnGroup,
  Typography,
  Background,
  BButtonGroup,
  BoxControl,
  ColorsControl,
  ColorControl,
  Device,
  ShadowControl,
} from "../../../../../../../bpl-tools/Components";
import { SpaceControl } from "../../../../../../../bpl-tools/Components/Deprecated";
import {
  pxUnit,
  perUnit,
  emUnit,
} from "../../../../../../../bpl-tools/utils/options";

import { aligns } from "../../../utils/options";
import { updateData } from "../../../../../../../bpl-tools/utils/functions";
import { SelectControl } from "@wordpress/components";
import { BControlPro } from "../../../../../../../bpl-tools/ProControls";

const Style = ({
  attributes,
  setAttributes,
  device,
  premiumProps
  //   isPremium,
  //   setIsProModalOpen,
  //   isProModalOpen,
}) => {
  const {
    textAlign,
    padding,
    photoWidth,
    photoMargin,
    nameTypo,
    nameMargin,
    isTitle,
    titleTypo,
    titleMargin,
    isSep,
    sepMargin,
    isBio,
    bioTypo,
    bioMargin,
    isSocial,
    socialSize,
    socialIconMargin,
    theme = "default",
    styles,
    options = {},
  } = attributes;
  const {
    bg = {},
    width = "100%",
    alignment = "center",
    padding: sectionPadding = {
      top: "0px",
      left: "0px",
      bottom: "0px",
      right: "0px",
    },
    margin = { top: "0px", left: "0px", bottom: "0px", right: "0px" },
    teamMember = {},
  } = styles || {};

  return (
    <>
      {["default", "theme1", "theme2", "theme3", "theme4"].includes(theme) && (
        <>
          <PanelBody
            className="bPlPanelBody"
            title={__("Member", "team-section")}
          >
            <PanelRow>
              <Label className="">{__("Text Align:", "team-section")}</Label>
              <BtnGroup
                value={textAlign}
                onChange={(val) => setAttributes({ textAlign: val })}
                options={aligns}
                isIcon={true}
              />
            </PanelRow>

            <SpaceControl
              className="mt20"
              label={__("Padding:", "team-section")}
              value={padding}
              onChange={(val) => setAttributes({ padding: val })}
              defaults={{ vertical: "50px", horizontal: "20px" }}
            />
          </PanelBody>

          <PanelBody
            className="bPlPanelBody"
            title={__("Member Photo", "team-section")}
            initialOpen={false}
          >
            <UnitControl
              label={__("Width:", "team-section")}
              labelPosition="left"
              value={photoWidth}
              onChange={(val) => setAttributes({ photoWidth: val })}
              units={[pxUnit(), perUnit(), emUnit()]}
            />

            <SpaceControl
              className="mt20"
              label={__("Margin:", "team-section")}
              value={photoMargin}
              onChange={(val) => setAttributes({ photoMargin: val })}
              defaults={{ side: 4, bottom: "20px" }}
            />
          </PanelBody>

          <PanelBody
            className="bPlPanelBody"
            title={__("Member Name", "team-section")}
            initialOpen={false}
          >
            <Typography
              value={nameTypo}
              onChange={(val) => setAttributes({ nameTypo: val })}
              defaults={{
                fontSize: { desktop: 20, tablet: 18, mobile: 16 },
                fontWeight: 600,
              }}
            />

            <SpaceControl
              className="mt20"
              label={__("Margin:", "team-section")}
              value={nameMargin}
              onChange={(val) => setAttributes({ nameMargin: val })}
              defaults={{ side: 4, bottom: "10px" }}
            />
          </PanelBody>

          {isTitle && (
            <PanelBody
              className="bPlPanelBody"
              title={__("Designation/Title", "team-section")}
              initialOpen={false}
            >
              <Typography
                value={titleTypo}
                onChange={(val) => setAttributes({ titleTypo: val })}
                defaults={{
                  fontSize: { desktop: 16, tablet: 16, mobile: 16 },
                }}
              />

              <SpaceControl
                className="mt20"
                label={__("Margin:", "team-section")}
                value={titleMargin}
                onChange={(val) => setAttributes({ titleMargin: val })}
                defaults={{ side: 4, bottom: "10px" }}
              />
            </PanelBody>
          )}

          {isSep && (
            <PanelBody
              className="bPlPanelBody"
              title={__("Separator", "team-section")}
              initialOpen={false}
            >
              <SpaceControl
                className="mt20"
                label={__("Margin:", "team-section")}
                value={sepMargin}
                onChange={(val) => setAttributes({ sepMargin: val })}
                defaults={{ side: 4, bottom: "15px" }}
              />
            </PanelBody>
          )}

          {isBio && (
            <PanelBody
              className="bPlPanelBody"
              title={__("Member Bio", "team-section")}
              initialOpen={false}
            >
              <Typography
                value={bioTypo}
                onChange={(val) => setAttributes({ bioTypo: val })}
                defaults={{
                  fontSize: { desktop: 15, tablet: 15, mobile: 15 },
                }}
              />

              <SpaceControl
                className="mt20"
                label={__("Margin:", "team-section")}
                value={bioMargin}
                onChange={(val) => setAttributes({ bioMargin: val })}
                defaults={{ side: 4, bottom: "15px" }}
              />
            </PanelBody>
          )}

          {isSocial && (
            <PanelBody
              className="bPlPanelBody"
              title={__("Member Social", "team-section")}
              initialOpen={false}
            >
              <UnitControl
                label={__("Icon Size:", "team-section")}
                labelPosition="left"
                value={socialSize}
                onChange={(val) => setAttributes({ socialSize: val })}
                units={[pxUnit(), perUnit(), emUnit()]}
              />

              <SpaceControl
                className="mt20"
                label={__("Icon Margin:", "team-section")}
                value={socialIconMargin}
                onChange={(val) => setAttributes({ socialIconMargin: val })}
                defaults={{ vertical: "10px", horizontal: "10px" }}
              />
            </PanelBody>
          )}
        </>
      )}

      {"theme5" === theme && (
        <>
          <PanelBody
            className="bPlPanelBody"
            title={__("Container", "team-section")}
            initialOpen={true}
          >
            <BControlPro Component={UnitControl} {...premiumProps}
              step={1}
              label={__("Width", "team-section")}
              value={width}
              onChange={(v) =>
                setAttributes({ styles: updateData(styles, v, "width") })
              }
            />

            <BControlPro Component={BButtonGroup} {...premiumProps}
              className="mt15"
              label={__("Alignment", "team-section")}
              value={alignment}
              options={[
                { label: "Left", value: "left" },
                { label: "Center", value: "center" },
                { label: "Right", value: "right" },
              ]}
              onChange={(v) =>
                setAttributes({ styles: updateData(styles, v, "alignment") })
              }
            />

            <BControlPro Component={Background} {...premiumProps}
              className="mt15"
              label={__("Background", "team-section")}
              value={bg}
              onChange={(v) =>
                setAttributes({ styles: updateData(styles, v, "bg") })
              }
            />

            <BControlPro Component={BoxControl} {...premiumProps}
              className="mt15"
              label={__("Padding", "team-section")}
              values={sectionPadding}
              onChange={(v) =>
                setAttributes({ styles: updateData(styles, v, "padding") })
              }
            />

            <BControlPro Component={BoxControl} {...premiumProps}
              className="mt15"
              label={__("Margin", "team-section")}
              values={margin}
              onChange={(v) =>
                setAttributes({ styles: updateData(styles, v, "margin") })
              }
            />
          </PanelBody>

          <PanelBody
            className="bPlPanelBody"
            title={__("Member", "team-section")}
            initialOpen={false}
          >
            <BControlPro Component={Background} {...premiumProps}
              label={__("Background", "team-section")}
              value={teamMember?.bg}
              onChange={(v) =>
                setAttributes({
                  styles: updateData(styles, v, "teamMember", "bg"),
                })
              }
            />
            <BControlPro Component={Background} {...premiumProps}
              label={__("Even Item  Background", "team-section")}
              value={teamMember?.evenItemBg}
              onChange={(v) =>
                setAttributes({
                  styles: updateData(styles, v, "teamMember", "evenItemBg"),
                })
              }
            />

            <BControlPro Component={BoxControl} {...premiumProps}
              label={__("Padding", "team-section")}
              values={teamMember?.padding}
              onChange={(v) =>
                setAttributes({
                  styles: updateData(styles, v, "teamMember", "padding"),
                })
              }
            />
          </PanelBody>

          <PanelBody
            initialOpen={false}
            className="bPlPanelBody"
            title={__("Member Photo", "team-section")}
          >
            <BControlPro Component={UnitControl} {...premiumProps}
              label={__("Width", "team-section")}
              value={teamMember?.photo?.size}
              onChange={(v) =>
                setAttributes({
                  styles: updateData(styles, v, "teamMember", "photo", "size"),
                })
              }
            />

            <BControlPro Component={Background} {...premiumProps}
              label={__("Background", "team-section")}
              value={teamMember?.photo?.bg}
              onChange={(v) =>
                setAttributes({
                  styles: updateData(styles, v, "teamMember", "photo", "bg"),
                })
              }
            />
            <BControlPro Component={Background} {...premiumProps}
              label={__("Event Item Photo Background", "team-section")}
              value={teamMember?.photo?.evenItemPhotoBg}
              onChange={(v) =>
                setAttributes({
                  styles: updateData(
                    styles,
                    v,
                    "teamMember",
                    "photo",
                    "evenItemPhotoBg"
                  ),
                })
              }
            />

            <BControlPro Component={BoxControl} {...premiumProps}
              className="mt15"
              label={__("Padding", "team-section")}
              values={teamMember?.photo?.padding}
              onChange={(v) =>
                setAttributes({
                  styles: updateData(
                    styles,
                    v,
                    "teamMember",
                    "photo",
                    "padding"
                  ),
                })
              }
            />

            <BControlPro Component={BoxControl} {...premiumProps}
              className="mt15"
              label={__("Radius", "team-section")}
              values={teamMember?.photo?.radius}
              onChange={(v) =>
                setAttributes({
                  styles: updateData(
                    styles,
                    v,
                    "teamMember",
                    "photo",
                    "radius"
                  ),
                })
              }
            />

            <BControlPro Component={RangeControl} {...premiumProps}
              className="mt15"
              min={0}
              step={0.1}
              max={1}
              label={__("Photo Filter(gray scale)", "team-section")}
              value={teamMember?.photo?.grayScale}
              onChange={(v) =>
                setAttributes({
                  styles: updateData(
                    styles,
                    v,
                    "teamMember",
                    "photo",
                    "grayScale"
                  ),
                })
              }
            />
          </PanelBody>
          <PanelBody
            initialOpen={false}
            className="bPlPanelBody"
            title={__("Member Name", "team-section")}
          >
            <BControlPro Component={ColorsControl} {...premiumProps}
              label={__("Colors", "team-section")}
              value={teamMember?.name?.colors}
              onChange={(v) =>
                setAttributes({
                  styles: updateData(styles, v, "teamMember", "name", "colors"),
                })
              }
            />

            <BControlPro Component={BoxControl} {...premiumProps}
              className="mt15"
              label={__("Padding", "team-section")}
              values={teamMember?.name?.padding}
              onChange={(v) =>
                setAttributes({
                  styles: updateData(
                    styles,
                    v,
                    "teamMember",
                    "name",
                    "padding"
                  ),
                })
              }
            />

            <BControlPro Component={BoxControl} {...premiumProps}
              className="mt15"
              label={__("Radius", "team-section")}
              values={teamMember?.name?.radius}
              onChange={(v) =>
                setAttributes({
                  styles: updateData(styles, v, "teamMember", "name", "radius"),
                })
              }
            />

            <BControlPro Component={Typography} {...premiumProps}
              className="mt15"
              label={__("Typography", "team-section")}
              value={teamMember?.name?.typo}
              onChange={(v) =>
                setAttributes({
                  styles: updateData(styles, v, "teamMember", "name", "typo"),
                })
              }
            />
          </PanelBody>

          <PanelBody
            initialOpen={false}
            className="bPlPanelBody"
            title={__("Member Title", "team-section")}
          >
            {/* teamMember?.title?.colors */}
            <BControlPro Component={ColorsControl} {...premiumProps}
              label={__("Colors", "team-section")}
              value={teamMember?.title?.colors}
              onChange={(v) =>
                setAttributes({
                  styles: updateData(
                    styles,
                    v,
                    "teamMember",
                    "title",
                    "colors"
                  ),
                })
              }
            />
            <BControlPro Component={BoxControl} {...premiumProps}
              className="mt15"
              label={__("Padding", "team-section")}
              values={teamMember?.title?.padding}
              onChange={(v) =>
                setAttributes({
                  styles: updateData(
                    styles,
                    v,
                    "teamMember",
                    "title",
                    "padding"
                  ),
                })
              }
            />
            <BControlPro Component={BoxControl} {...premiumProps}
              className="mt15"
              label={__("Radius", "team-section")}
              values={teamMember?.title?.radius}
              onChange={(v) =>
                setAttributes({
                  styles: updateData(
                    styles,
                    v,
                    "teamMember",
                    "title",
                    "radius"
                  ),
                })
              }
            />
            <BControlPro Component={Typography} {...premiumProps}
              className="mt15"
              label={__("Typography", "team-section")}
              value={teamMember?.title?.typo}
              onChange={(v) =>
                setAttributes({
                  styles: updateData(styles, v, "teamMember", "title", "typo"),
                })
              }
            />
          </PanelBody>

          <PanelBody
            initialOpen={false}
            className="bPlPanelBody"
            title={__("Bio", "team-section")}
          >
            <BControlPro Component={ColorsControl} {...premiumProps}
              label={__("Colors", "team-section")}
              value={teamMember?.bio?.color}
              onChange={(v) =>
                setAttributes({
                  styles: updateData(styles, v, "teamMember", "bio", "color"),
                })
              }
            />
            <BControlPro Component={Typography} {...premiumProps}
              className="mt15"
              label={__("Typography", "team-section")}
              value={teamMember?.bio?.typo}
              onChange={(v) =>
                setAttributes({
                  styles: updateData(styles, v, "teamMember", "bio", "typo"),
                })
              }
            />
          </PanelBody>

          <PanelBody
            initialOpen={false}
            className="bPlPanelBody"
            title={__("UserName", "team-section")}
          >
            {/* teamMember?.title?.colors */}
            <BControlPro Component={ColorsControl} {...premiumProps}
              label={__("Colors", "team-section")}
              value={teamMember?.userName?.colors}
              onChange={(v) =>
                setAttributes({
                  styles: updateData(
                    styles,
                    v,
                    "teamMember",
                    "userName",
                    "colors"
                  ),
                })
              }
            />
            <BControlPro Component={BoxControl} {...premiumProps}
              className="mt15"
              label={__("Padding", "team-section")}
              values={teamMember?.userName?.padding}
              onChange={(v) =>
                setAttributes({
                  styles: updateData(
                    styles,
                    v,
                    "teamMember",
                    "userName",
                    "padding"
                  ),
                })
              }
            />
            <BControlPro Component={BoxControl} {...premiumProps}
              className="mt15"
              label={__("Radius", "team-section")}
              values={teamMember?.userName?.radius}
              onChange={(v) =>
                setAttributes({
                  styles: updateData(
                    styles,
                    v,
                    "teamMember",
                    "userName",
                    "radius"
                  ),
                })
              }
            />
            <BControlPro Component={Typography} {...premiumProps}
              className="mt15"
              label={__("Typography", "team-section")}
              value={teamMember?.userName?.typo}
              onChange={(v) =>
                setAttributes({
                  styles: updateData(
                    styles,
                    v,
                    "teamMember",
                    "userName",
                    "typo"
                  ),
                })
              }
            />
          </PanelBody>
        </>
      )}
      {"theme6" === theme && (
        <>
          <PanelBody
            className="bPlPanelBody"
            title={__("Container", "team-section")}
            initialOpen={false}
          >
            <BControlPro Component={UnitControl} {...premiumProps}
              label={__("Width", "team-section")}
              value={width}
              onChange={(v) =>
                setAttributes({ styles: updateData(styles, v, "width") })
              }
            />

            <BControlPro Component={BButtonGroup} {...premiumProps}
              className="mt15"
              label={__("Alignment", "team-section")}
              value={alignment}
              options={[
                { label: "Left", value: "left" },
                { label: "Center", value: "center" },
                { label: "Right", value: "right" },
              ]}
              onChange={(v) =>
                setAttributes({ styles: updateData(styles, v, "alignment") })
              }
            />

            <BControlPro Component={Background} {...premiumProps}
              className="mt15"
              label={__("Background", "team-section")}
              value={bg}
              onChange={(v) =>
                setAttributes({ styles: updateData(styles, v, "bg") })
              }
            />

            <BControlPro Component={BoxControl} {...premiumProps}
              className="mt15"
              label={__("Padding", "team-section")}
              values={sectionPadding}
              onChange={(v) =>
                setAttributes({ styles: updateData(styles, v, "padding") })
              }
            />

            <BControlPro Component={BoxControl} {...premiumProps}
              className="mt15"
              label={__("Margin", "team-section")}
              values={margin}
              onChange={(v) =>
                setAttributes({ styles: updateData(styles, v, "margin") })
              }
            />
          </PanelBody>

          <PanelBody
            className="bPlPanelBody"
            title={__("Member", "team-section")}
            initialOpen={false}
          >
            <PanelRow>
              <Label>Height</Label>
              <Device />
            </PanelRow>

            <BControlPro Component={UnitControl} {...premiumProps}
              value={teamMember?.height[device]}
              onChange={(v) =>
                setAttributes({
                  styles: updateData(styles, v, "teamMember", "height", device),
                })
              }
            />
            {options?.isShowShape && (
              <BControlPro Component={Background} {...premiumProps}
                className="mt15"
                label={__("Shape Background Color", "team-section")}
                value={teamMember?.shape}
                onChange={(v) =>
                  setAttributes({
                    styles: updateData(styles, v, "teamMember", "shape"),
                  })
                }
              />
            )}
            <BControlPro Component={Background} {...premiumProps}
              className="mt15"
              label={__("Overly", "team-section")}
              value={teamMember?.bg}
              onChange={(v) =>
                setAttributes({
                  styles: updateData(styles, v, "teamMember", "bg"),
                })
              }
            />

            <BControlPro Component={RangeControl} {...premiumProps}
              className="mt15"
              min={0}
              step={0.1}
              max={1}
              label={__("Photo Filter(gray scale)", "team-section")}
              value={teamMember?.grayScale}
              onChange={(v) =>
                setAttributes({
                  styles: updateData(styles, v, "teamMember", "grayScale"),
                })
              }
            />
          </PanelBody>

          {options?.isShowWaterMark && (
            <PanelBody
              className="bPlPanelBody"
              title={__("Water Mark", "team-section")}
              initialOpen={false}
            >
              <BControlPro Component={ColorControl} {...premiumProps}
                label={__("Color", "team-section")}
                value={styles?.waterMark?.color || "#1f1f1f"}
                onChange={(val) =>
                  setAttributes({
                    styles: updateData(styles, val, "waterMark", "color"),
                  })
                }
              />
              <BControlPro Component={Typography} {...premiumProps}
                label={__("Typography", "team-section")}
                value={styles?.waterMark?.typo || ""}
                onChange={(val) =>
                  setAttributes({
                    styles: updateData(styles, val, "waterMark", "typo"),
                  })
                }
              />
              <BControlPro Component={UnitControl} {...premiumProps}
                className="mt15"
                step={1}
                unit="%"
                label={__("Position (Top to Bottom )", "team-section")}
                value={styles?.waterMark?.translateY}
                onChange={(val) =>
                  setAttributes({
                    styles: updateData(styles, val, "waterMark", "translateY"),
                  })
                }
              />
            </PanelBody>
          )}

          <PanelBody
            className="bPlPanelBody"
            title={__("Name", "team-section")}
            initialOpen={false}
          >
            <BControlPro Component={ColorControl} {...premiumProps}
              label={__("Color", "team-section")}
              value={teamMember?.name?.color}
              onChange={(v) =>
                setAttributes({
                  styles: updateData(styles, v, "teamMember", "name", "color"),
                })
              }
            />

            <BControlPro Component={BoxControl} {...premiumProps}
              className="mt15"
              label={__("Margin", "team-section")}
              values={teamMember?.name?.margin}
              onChange={(v) =>
                setAttributes({
                  styles: updateData(styles, v, "teamMember", "name", "margin"),
                })
              }
            />

            <BControlPro Component={Typography} {...premiumProps}
              className="mt15"
              label={__("Typography", "team-section")}
              value={teamMember?.name?.typo}
              onChange={(v) =>
                setAttributes({
                  styles: updateData(styles, v, "teamMember", "name", "typo"),
                })
              }
            />
          </PanelBody>

          <PanelBody
            className="bPlPanelBody"
            title={__("Title", "team-section")}
            initialOpen={false}
          >
            <BControlPro Component={ColorControl} {...premiumProps}
              label={__("Color", "team-section")}
              value={teamMember?.title?.color}
              onChange={(v) =>
                setAttributes({
                  styles: updateData(styles, v, "teamMember", "title", "color"),
                })
              }
            />
            <BControlPro Component={BoxControl} {...premiumProps}
              className="mt15"
              label={__("Margin", "team-section")}
              values={teamMember?.title?.margin}
              onChange={(v) =>
                setAttributes({
                  styles: updateData(
                    styles,
                    v,
                    "teamMember",
                    "title",
                    "margin"
                  ),
                })
              }
            />
            <BControlPro Component={Typography} {...premiumProps}
              className="mt15"
              label={__("Typography", "team-section")}
              value={teamMember?.title?.typo}
              onChange={(v) =>
                setAttributes({
                  styles: updateData(styles, v, "teamMember", "title", "typo"),
                })
              }
            />
          </PanelBody>

          {isSocial && (
            <PanelBody
              className="bPlPanelBody"
              title={__("Social", "team-section")}
              initialOpen={false}
            >
              <BControlPro Component={RangeControl} {...premiumProps}
                label={__("Icon Size", "team-section")}
                value={teamMember?.icon?.size}
                onChange={(v) =>
                  setAttributes({
                    styles: updateData(styles, v, "teamMember", "icon", "size"),
                  })
                }
              />
              <BControlPro Component={ColorControl} {...premiumProps}
                label={__("Icon Color", "team-section")}
                value={teamMember?.icon?.color}
                onChange={(v) =>
                  setAttributes({
                    styles: updateData(
                      styles,
                      v,
                      "teamMember",
                      "icon",
                      "color"
                    ),
                  })
                }
              />
              <BControlPro Component={ColorControl} {...premiumProps}
                label={__("Icon Hover Color", "team-section")}
                value={teamMember?.icon?.hoverColor}
                onChange={(v) =>
                  setAttributes({
                    styles: updateData(
                      styles,
                      v,
                      "teamMember",
                      "icon",
                      "hoverColor"
                    ),
                  })
                }
              />
              <BControlPro Component={BoxControl} {...premiumProps}
                className="mt15"
                label={__("Margin", "team-section")}
                values={teamMember?.icon?.margin}
                onChange={(v) =>
                  setAttributes({
                    styles: updateData(
                      styles,
                      v,
                      "teamMember",
                      "icon",
                      "margin"
                    ),
                  })
                }
              />

              <BControlPro Component={RangeControl} {...premiumProps}
                className="mt15"
                label={__("Icon Gap", "team-section")}
                value={teamMember?.icon?.gap}
                onChange={(v) =>
                  setAttributes({
                    styles: updateData(styles, v, "teamMember", "icon", "gap"),
                  })
                }
              />
            </PanelBody>
          )}

          {options?.isShowShape && <PanelBody className="bPlPanelBody"
            title={__("Background Shape", "team-section")}
            initialOpen={false}>
            <BControlPro Component={UnitControl} {...premiumProps} label={__("Width", "team-section")} value={teamMember?.shape?.width} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "shape", "width") })} />
            <BControlPro Component={UnitControl} {...premiumProps} className="mt15" label={__("Height", "team-section")} value={teamMember?.shape?.height} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "shape", "height") })} />

            <BControlPro Component={Background} {...premiumProps} label={__("Background", "team-section")} value={teamMember?.shape?.bg} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "shape", "bg") })} />

          </PanelBody>}
        </>
      )}
      {"theme7" === theme && (
        <>
          <PanelBody
            className="bPlPanelBody"
            title={__("Container", "team-section")}
            initialOpen={true}
          >
            <BControlPro Component={Background} {...premiumProps}
              className="mt15"
              label={__("Background", "team-section")}
              value={bg}
              onChange={(v) =>
                setAttributes({ styles: updateData(styles, v, "bg") })
              }
            />

            <BControlPro Component={BoxControl} {...premiumProps}
              className="mt15"
              label={__("Padding", "team-section")}
              values={sectionPadding}
              onChange={(v) =>
                setAttributes({ styles: updateData(styles, v, "padding") })
              }
            />

            <BControlPro Component={BoxControl} {...premiumProps}
              className="mt15"
              label={__("Margin", "team-section")}
              values={margin}
              onChange={(v) =>
                setAttributes({ styles: updateData(styles, v, "margin") })
              }
            />
          </PanelBody>

          <PanelBody
            className="bPlPanelBody"
            title={__("Member Photo", "team-section")}
            initialOpen={false}
          >
            <BControlPro Component={UnitControl} {...premiumProps}
              label={__("Width", "team-section")}
              value={teamMember?.photo?.width || "88px"}
              onChange={(val) =>
                setAttributes({
                  styles: updateData(
                    styles,
                    val,
                    "teamMember",
                    "photo",
                    "width"
                  ),
                })
              }
            />
            <BControlPro Component={UnitControl} {...premiumProps}
              className="mt15"
              label={__("Height", "team-section")}
              value={teamMember?.photo?.height || "88px"}
              onChange={(val) =>
                setAttributes({
                  styles: updateData(
                    styles,
                    val,
                    "teamMember",
                    "photo",
                    "height"
                  ),
                })
              }
            />

            <BControlPro Component={BoxControl} {...premiumProps}
              className="mt15"
              label={__("Radius", "team-section")}
              values={
                teamMember?.photo?.radius || {
                  top: "50%",
                  left: "50%",
                  bottom: "50%",
                  right: "50%",
                }
              }
              onChange={(val) =>
                setAttributes({
                  styles: updateData(
                    styles,
                    val,
                    "teamMember",
                    "photo",
                    "radius"
                  ),
                })
              }
            />

            <BControlPro Component={SelectControl} {...premiumProps} className="mt15" label={__("Object Fit", "team-section")}
              value={teamMember?.photo?.object}
              options={[
                { label: "Cover (Crop & Fill)", value: "cover" },
                { label: "Contain (Fit Inside)", value: "contain" },
                { label: "Fill (Stretch)", value: "fill" },
                { label: "None (Original Size)", value: "none" },
                { label: "Scale Down (Smaller Fit)", value: "scale-down" },
              ]}
              onChange={(val) =>
                setAttributes({
                  styles: updateData(
                    styles,
                    val,
                    "teamMember",
                    "photo",
                    "object"
                  ),
                })
              }
            />
            <BControlPro Component={RangeControl} {...premiumProps} min={1} max={4} step={.1} className="mt15" label={__("Checked Image Scale", "team-section")}
              value={teamMember?.photo?.checkedScale || 2} onChange={(val) =>
                setAttributes({
                  styles: updateData(
                    styles,
                    val,
                    "teamMember",
                    "photo",
                    "checkedScale"
                  ),
                })
              } />
          </PanelBody>

          <PanelBody className="bPlPanelBody"
            title={__("Name & Title", "team-section")}
            initialOpen={false}>
            <BControlPro Component={ColorControl} {...premiumProps} label={__("color", "team-section")} value={teamMember?.name?.color} onChange={val => setAttributes({ styles: updateData(styles, val, "teamMember", "name", "color") })} />
            <BControlPro Component={Typography} {...premiumProps} className='mt15' label={__("Typography", "team-section")} value={teamMember?.name?.typo} onChange={val => setAttributes({ styles: updateData(styles, val, "teamMember", "name", "typo") })} />
            <RangeControl min={0} max={180} step={1} className="mt15" label={__("Checked Rotate", "team-section")}
              value={teamMember?.name?.rotate || 90} onChange={(val) =>
                setAttributes({
                  styles: updateData(
                    styles,
                    val,
                    "teamMember",
                    "name",
                    "rotate"
                  ),
                })
              } />

            <BControlPro Component={RangeControl} {...premiumProps} min={2} max={6} step={.1} className="mt15" label={__("Checked Name & Title Scale", "team-section")}
              value={teamMember?.name?.textScale || 2.30} onChange={(val) =>
                setAttributes({
                  styles: updateData(
                    styles,
                    val,
                    "teamMember",
                    "name",
                    "textScale"
                  ),
                })
              } />
          </PanelBody>
          <PanelBody className="bPlPanelBody"
            title={__("Team Ring", "team-section")}
            initialOpen={false}>
            <BControlPro Component={UnitControl} {...premiumProps}
              className="mt15"
              label={__("Width", "team-section")}
              value={teamMember?.teamRing?.width}
              onChange={(val) =>
                setAttributes({
                  styles: updateData(
                    styles,
                    val,
                    "teamMember",
                    "teamRing",
                    "width"
                  ),
                })
              }
            />
            <BControlPro Component={UnitControl} {...premiumProps}
              className="mt15"
              label={__("Height", "team-section")}
              value={teamMember?.teamRing?.height}
              onChange={(val) =>
                setAttributes({
                  styles: updateData(
                    styles,
                    val,
                    "teamMember",
                    "teamRing",
                    "height"
                  ),
                })
              }
            />
            <BControlPro Component={ColorsControl} {...premiumProps} className="mt15"
              label={__("Background", "team-section")}
              value={teamMember?.teamRing?.bg}
              onChange={(val) =>
                setAttributes({
                  styles: updateData(
                    styles,
                    val,
                    "teamMember",
                    "teamRing",
                    "bg"
                  ),
                })
              } />
            <BControlPro Component={Typography} {...premiumProps} className="mt15"
              label={__("Text Typography", "team-section")}
              value={teamMember?.teamRing?.typo}
              onChange={(val) =>
                setAttributes({
                  styles: updateData(
                    styles,
                    val,
                    "teamMember",
                    "teamRing",
                    "typo"
                  ),
                })
              } />


            <BControlPro Component={BoxControl} {...premiumProps} className="mt15"
              label={__("Radius", "team-section")}
              values={teamMember?.teamRing?.radius}
              onChange={(val) =>
                setAttributes({
                  styles: updateData(
                    styles,
                    val,
                    "teamMember",
                    "teamRing",
                    "radius"
                  ),
                })
              } />



          </PanelBody>
        </>
      )}
      {"theme8" === theme && (<>
        <PanelBody
          className="bPlPanelBody"
          title={__("Container", "team-section")}
          initialOpen={false}
        >
          <BControlPro Component={UnitControl} {...premiumProps}
            label={__("Width", "team-section")}
            value={width}
            onChange={(v) =>
              setAttributes({ styles: updateData(styles, v, "width") })
            }
          />

          <BControlPro Component={BButtonGroup} {...premiumProps}
            className="mt15"
            label={__("Alignment", "team-section")}
            value={alignment}
            options={[
              { label: "Left", value: "left" },
              { label: "Center", value: "center" },
              { label: "Right", value: "right" },
            ]}
            onChange={(v) =>
              setAttributes({ styles: updateData(styles, v, "alignment") })
            }
          />

          <BControlPro Component={Background} {...premiumProps}
            className="mt15"
            label={__("Background", "team-section")}
            value={bg}
            onChange={(v) =>
              setAttributes({ styles: updateData(styles, v, "bg") })
            }
          />

          <BControlPro Component={BoxControl} {...premiumProps}
            className="mt15"
            label={__("Padding", "team-section")}
            values={sectionPadding}
            onChange={(v) =>
              setAttributes({ styles: updateData(styles, v, "padding") })
            }
          />

          <BControlPro Component={BoxControl} {...premiumProps}
            className="mt15"
            label={__("Margin", "team-section")}
            values={margin}
            onChange={(v) =>
              setAttributes({ styles: updateData(styles, v, "margin") })
            }
          />
        </PanelBody>

        <PanelBody className="bPlPanelBody"
          title={__("Member Photo", "team-section")}
          initialOpen={false}>
          <BControlPro Component={UnitControl} {...premiumProps} label={__("Width", "team-section")} value={teamMember.memberPhoto?.width} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "memberPhoto", "width") })} />
          <BControlPro Component={UnitControl} {...premiumProps} className="mt15" label={__("Height", "team-section")} value={teamMember.memberPhoto?.height} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "memberPhoto", "height") })} />

          <BControlPro Component={SelectControl} {...premiumProps} value={teamMember.memberPhoto?.objectFit} className="mt15" label={__("Image  Fit", "team-section")} options={[
            { label: "Cover", value: "cover" },
            { label: "Contain", value: "contain" },
            { label: "Fill", value: "fill" },
            { label: "None", value: "none" },
            { label: "Scale Down", value: "scale-down" }
          ]}
            onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "memberPhoto", "objectFit") })}
          />
          <BControlPro Component={RangeControl} {...premiumProps} min={0} max={100} label={__("Image Filter(gray)", "team-section")} className="mt15" value={teamMember.memberPhoto?.grayScale} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "memberPhoto", "grayScale") })} />

          <BControlPro Component={RangeControl} {...premiumProps} min={0} max={100} label={__("Hover Image Filter(gray)", "team-section")} className="mt15" value={teamMember.memberPhoto?.hoverGrayScale} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "memberPhoto", "hoverGrayScale") })} />

        </PanelBody>

        {isSocial && <PanelBody className="bPlPanelBody"
          title={__("Member Social", "team-section")}
          initialOpen={false}>
          <BControlPro Component={Background} {...premiumProps} label={__("Background", "team-section")} value={teamMember?.social?.bg} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "social", "bg") })} />

          <BControlPro Component={ColorControl} {...premiumProps} className="mt15" label={__("Color", "team-section")} value={teamMember?.social?.color} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "social", "color") })} />

          <BControlPro Component={ColorControl} {...premiumProps} className="mt15" label={__("Hover Color", "team-section")} value={teamMember?.social?.hoverColor} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "social", "hoverColor") })} />
          <BControlPro Component={BoxControl} {...premiumProps} values={teamMember?.social?.padding} className="mt15" label={__("Padding", "team-section")} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "social", "padding") })} />

          <BControlPro Component={RangeControl} {...premiumProps} min={0} max={100} className="mt15" label={__("Icon Size", "team-section")} value={teamMember?.social?.size} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "social", "size") })} />

        </PanelBody>}

        <PanelBody className="bPlPanelBody"
          title={__("Member Content", "team-section")}
          initialOpen={false} >
          <BControlPro Component={Background} {...premiumProps} label={__("Background", "team-section")} value={teamMember?.content?.bg} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "content", "bg") })} />
          <BControlPro Component={Background} {...premiumProps} className='mt15' label={__("Hover Background", "team-section")} value={teamMember?.content?.hoverBg} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "content", "hoverBg") })} />
          <BControlPro Component={ColorControl} {...premiumProps} className='mt15' label={__("Hover Color", "team-section")} value={teamMember?.content?.hoverColor} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "content", "hoverColor") })} />
          <BControlPro Component={BoxControl} {...premiumProps} className='mt15' label={__("Padding", "team-section")} values={teamMember?.content?.padding} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "content", "padding") })} />


        </PanelBody>

        <PanelBody className="bPlPanelBody"
          title={__("Member Name", "team-section")}
          initialOpen={false}>
          <BControlPro Component={ColorControl} {...premiumProps} className='mt15' label={__(" Color", "team-section")} value={teamMember?.name?.color} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "name", "color") })} />
          <BControlPro Component={Typography} {...premiumProps} className='mt15' label={__(" Typography", "team-section")} value={teamMember?.name?.typo} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "name", "typo") })} />
          <BControlPro Component={BoxControl} {...premiumProps} className='mt15' label={__(" Margin", "team-section")} values={teamMember?.name?.margin} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "name", "margin") })} />


        </PanelBody>

        <PanelBody className="bPlPanelBody"
          title={__("Member Title", "team-section")}
          initialOpen={false}>
          <BControlPro Component={ColorControl} {...premiumProps} className='mt15' label={__(" Color", "team-section")} value={teamMember?.title?.color} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "title", "color") })} />
          <BControlPro Component={Typography} {...premiumProps} className='mt15' label={__(" Typography", "team-section")} value={teamMember?.title?.typo} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "title", "typo") })} />
          <BControlPro Component={BoxControl} {...premiumProps} className='mt15' label={__(" Margin", "team-section")} values={teamMember?.title?.margin} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "title", "margin") })} />


        </PanelBody>

        {options?.isShowIcon && <PanelBody className="bPlPanelBody"
          title={__("Icon", "team-section")}
          initialOpen={false}>
          <BControlPro Component={ColorControl} {...premiumProps} className='mt15' label={__(" Color", "team-section")} value={teamMember?.icon?.color} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "icon", "color") })} />
          <BControlPro Component={RangeControl} {...premiumProps} className='mt15' label={__("Size", "team-section")} value={teamMember?.icon?.size} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "icon", "size") })} />


        </PanelBody>}


      </>)}
      {"theme9" === theme && (<>

        <PanelBody
          className="bPlPanelBody"
          title={__("Container", "team-section")}
          initialOpen={false}
        >
          <BControlPro Component={UnitControl} {...premiumProps}
            step={1}
            label={__("Width", "team-section")}
            value={width}
            onChange={(v) =>
              setAttributes({ styles: updateData(styles, v, "width") })
            }
          />

          <BControlPro Component={BButtonGroup} {...premiumProps}
            className="mt15"
            label={__("Alignment", "team-section")}
            value={alignment}
            options={[
              { label: "Left", value: "left" },
              { label: "Center", value: "center" },
              { label: "Right", value: "right" },
            ]}
            onChange={(v) =>
              setAttributes({ styles: updateData(styles, v, "alignment") })
            }
          />

          <BControlPro Component={Background} {...premiumProps}
            className="mt15"
            label={__("Background", "team-section")}
            value={bg}
            onChange={(v) =>
              setAttributes({ styles: updateData(styles, v, "bg") })
            }
          />

          <BControlPro Component={BoxControl} {...premiumProps}
            className="mt15"
            label={__("Padding", "team-section")}
            values={sectionPadding}
            onChange={(v) =>
              setAttributes({ styles: updateData(styles, v, "padding") })
            }
          />

          <BControlPro Component={BoxControl} {...premiumProps}
            className="mt15"
            label={__("Margin", "team-section")}
            values={margin}
            onChange={(v) =>
              setAttributes({ styles: updateData(styles, v, "margin") })
            }
          />
        </PanelBody>

        <PanelBody className="bPlPanelBody"
          title={__("Member Photo", "team-section")}
          initialOpen={false}>
          <BControlPro Component={Background} {...premiumProps} label={__("Photo Overly", "team-section")} value={teamMember?.memberPhoto?.bg} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "memberPhoto", "bg") })} />
          <BControlPro Component={UnitControl} {...premiumProps} className="mt15" label={__("Height", "team-section")} value={teamMember.memberPhoto?.height} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "memberPhoto", "height") })} />

          <BControlPro Component={SelectControl} {...premiumProps} value={teamMember.memberPhoto?.objectFit} className="mt15" label={__("Photo  Fit", "team-section")} options={[
            { label: "Cover", value: "cover" },
            { label: "Contain", value: "contain" },
            { label: "Fill", value: "fill" },
            { label: "None", value: "none" },
            { label: "Scale Down", value: "scale-down" }
          ]}
            onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "memberPhoto", "objectFit") })}
          />
          <BControlPro Component={RangeControl} {...premiumProps} min={0} max={100} label={__("Photo Filter(gray)", "team-section")} className="mt15" value={teamMember.memberPhoto?.grayScale} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "memberPhoto", "grayScale") })} />

          <BControlPro Component={RangeControl} {...premiumProps} min={0} max={100} label={__("Hover Photo Filter(gray)", "team-section")} className="mt15" value={teamMember.memberPhoto?.hoverGrayScale} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "memberPhoto", "hoverGrayScale") })} />
          <BControlPro Component={RangeControl} {...premiumProps} min={0} max={3} label={__("Hover Photo Scale", "team-section")} className="mt15" value={teamMember.memberPhoto?.hoverScale} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "memberPhoto", "hoverScale") })} />

        </PanelBody>

        {isSocial && (<PanelBody className="bPlPanelBody"
          title={__("Member Social", "team-section")}
          initialOpen={false}>
          <BControlPro Component={UnitControl} {...premiumProps} label={__("Width", "team-section")} value={teamMember?.social?.width} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "social", "width") })} />
          <BControlPro Component={UnitControl} {...premiumProps} label={__("Height", "team-section")} className="mt15" value={teamMember?.social?.width} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "social", "height") })} />
          <BControlPro Component={ColorsControl} {...premiumProps} value={teamMember?.social?.colors} label={__("Colors", "team-section")} className="mt15" onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "social", "colors") })} />
          <BControlPro Component={ColorsControl} {...premiumProps} value={teamMember?.social?.hoverColors} label={__("Hover Colors", "team-section")} className="mt15" onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "social", "hoverColors") })} />
          <BControlPro Component={BoxControl} {...premiumProps} label={__("Radius", "team-section")} className="mt15" values={teamMember?.social?.radius} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "social", "radius") })} />
          <BControlPro Component={RangeControl} {...premiumProps} label={__("Icon Size", "team-section")} className="mt15" value={teamMember?.social?.size} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "social", "size") })} />

        </PanelBody>)}

        <PanelBody className="bPlPanelBody"
          title={__("Member Name", "team-section")}
          initialOpen={false}>

          <BControlPro Component={ColorControl} {...premiumProps} label={__("Color", "team-section")} value={teamMember?.name?.color} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "name", "color") })} />
          <BControlPro Component={Typography} {...premiumProps} label={__("Typography", "team-section")} value={teamMember?.name?.typo} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "name", "typo") })} />
          <BControlPro Component={BoxControl} {...premiumProps} label={__("Margin", "team-section")} values={teamMember?.name?.margin} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "name", "margin") })} />


        </PanelBody>

        <PanelBody className="bPlPanelBody"
          title={__("Member Title", "team-section")}
          initialOpen={false}>
          <BControlPro Component={ColorControl} {...premiumProps} label={__("Color", "team-section")} value={teamMember?.title?.color} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "title", "color") })} />
          <BControlPro Component={Typography} {...premiumProps} label={__("Typography", "team-section")} value={teamMember?.title?.typo} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "title", "typo") })} />
          <BControlPro Component={BoxControl} {...premiumProps} label={__("Margin", "team-section")} values={teamMember?.title?.margin} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "title", "margin") })} />



        </PanelBody>
      </>)}

      {"theme10" === theme && (<>
        <PanelBody
          className="bPlPanelBody"
          title={__("Container", "team-section")}
          initialOpen={false}
        >
          <BControlPro Component={UnitControl} {...premiumProps}
            step={1}
            label={__("Width", "team-section")}
            value={width}
            onChange={(v) =>
              setAttributes({ styles: updateData(styles, v, "width") })
            }
          />

          <BControlPro Component={BButtonGroup} {...premiumProps}
            className="mt15"
            label={__("Alignment", "team-section")}
            value={alignment}
            options={[
              { label: "Left", value: "left" },
              { label: "Center", value: "center" },
              { label: "Right", value: "right" },
            ]}
            onChange={(v) =>
              setAttributes({ styles: updateData(styles, v, "alignment") })
            }
          />

          <BControlPro Component={Background} {...premiumProps}
            className="mt15"
            label={__("Background", "team-section")}
            value={bg}
            onChange={(v) =>
              setAttributes({ styles: updateData(styles, v, "bg") })
            }
          />

          <BControlPro Component={BoxControl} {...premiumProps}
            className="mt15"
            label={__("Padding", "team-section")}
            values={sectionPadding}
            onChange={(v) =>
              setAttributes({ styles: updateData(styles, v, "padding") })
            }
          />

          <BControlPro Component={BoxControl} {...premiumProps}
            className="mt15"
            label={__("Margin", "team-section")}
            values={margin}
            onChange={(v) =>
              setAttributes({ styles: updateData(styles, v, "margin") })
            }
          />
        </PanelBody>
        <PanelBody className="bPlPanelBody"
          title={__("Member Photo", "team-section")}
          initialOpen={false}
        >
          <BControlPro Component={UnitControl} {...premiumProps} label={__("Max Width", "team-section")} value={teamMember?.memberPhoto?.width} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "memberPhoto", "width") })} />
          <BControlPro Component={UnitControl} {...premiumProps} className="mt15" label={__("Height", "team-section")} value={teamMember?.memberPhoto?.height} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "memberPhoto", "height") })} />
          <BControlPro Component={SelectControl} {...premiumProps} value={teamMember.memberPhoto?.objectFit} className="mt15" label={__("Photo  Fit", "team-section")} options={[
            { label: "Cover", value: "cover" },
            { label: "Contain", value: "contain" },
            { label: "Fill", value: "fill" },
            { label: "None", value: "none" },
            { label: "Scale Down", value: "scale-down" }
          ]}
            onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "memberPhoto", "objectFit") })}
          />

          <BControlPro Component={Background} {...premiumProps} className="mt15" label={__("Photo Shape Background ", "team-section")} value={teamMember?.memberPhoto?.bg} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "memberPhoto", "bg") })} />

        </PanelBody>

        <PanelBody className="bPlPanelBody"
          title={__("Member Content", "team-section")}
          initialOpen={false}>
          <BControlPro Component={Background} {...premiumProps} className="mt15" label={__("Background ", "team-section")} value={teamMember?.content?.bg} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "content", "bg") })} />
          <BControlPro Component={BoxControl} {...premiumProps} className="mt15" label={__("Padding ", "team-section")} values={teamMember?.content?.padding} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "content", "padding") })} />
          <BControlPro Component={BoxControl} {...premiumProps} className="mt15" label={__("Radius ", "team-section")} values={teamMember?.content?.radius} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "content", "radius") })} />

          <BControlPro Component={ShadowControl} {...premiumProps} className="mt15" label={__("Shadow ", "team-section")} value={teamMember?.content?.shadow} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "content", "shadow") })} />

          <BControlPro Component={RangeControl} {...premiumProps} max={360} className="mt15" label={__("Shape hover Rotate ", "team-section")} value={teamMember?.content?.hoverRotate} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "content", "hoverRotate") })} />


        </PanelBody>

        {options?.isShowSereal && (<PanelBody className="bPlPanelBody"
          title={__("Member Serial", "team-section")}
          initialOpen={false}>
          {/*
                        width: ${teamMember?.serial?.width};
                        height: ${teamMember?.serial?.height};
                        border-radius: ${getBoxCSS(teamMember?.serial?.radius)}; */}
          <BControlPro Component={UnitControl} {...premiumProps} label={__("Width ", "team-section")} value={teamMember?.serial?.width} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "serial", "width") })} />
          <BControlPro Component={UnitControl} {...premiumProps} className="mt15" label={__("Height ", "team-section")} value={teamMember?.serial?.height} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "serial", "height") })} />

          <BControlPro Component={ColorControl} {...premiumProps} className="mt15" label={__("Colors ", "team-section")} value={teamMember?.serial?.colors} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "serial", "colors") })} />

          <BControlPro Component={BoxControl} {...premiumProps} className="mt15" label={__("Radius ", "team-section")} values={teamMember?.serial?.radius} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "serial", "radius") })} />
          <BControlPro Component={Typography} {...premiumProps} className="mt15" label={__("Typography ", "team-section")} value={teamMember?.serial?.typo} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "serial", "typo") })} />


        </PanelBody>)}

        <PanelBody className="bPlPanelBody"
          title={__("Member Name", "team-section")}
          initialOpen={false}>
          <BControlPro Component={ColorControl} {...premiumProps} className="mt15" label={__("Color ", "team-section")} value={teamMember?.name?.color} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "name", "color") })} />
          <BControlPro Component={BoxControl} {...premiumProps} className="mt15" label={__("Margin ", "team-section")} values={teamMember?.name?.margin} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "name", "margin") })} />
          <BControlPro Component={Typography} {...premiumProps} className="mt15" label={__("Typography ", "team-section")} value={teamMember?.name?.typo} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "name", "typo") })} />

        </PanelBody>

        {isTitle && <PanelBody className="bPlPanelBody"
          title={__("Member Title", "team-section")}
          initialOpen={false}>
          <BControlPro Component={ColorControl} {...premiumProps} className="mt15" label={__("Color ", "team-section")} value={teamMember?.title?.color} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "title", "color") })} />
          <BControlPro Component={BoxControl} {...premiumProps} className="mt15" label={__("Margin ", "team-section")} values={teamMember?.title?.margin} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "title", "margin") })} />
          <BControlPro Component={Typography} {...premiumProps} className="mt15" label={__("Typography ", "team-section")} value={teamMember?.title?.typo} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "title", "typo") })} />

        </PanelBody>}

        {isSocial && <PanelBody className="bPlPanelBody"
          title={__("Member State", "team-section")}
          initialOpen={false}>


          <BControlPro Component={BoxControl} {...premiumProps} label={__("Padding ", "team-section")} values={teamMember?.states?.padding} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "states", "padding") })} />
          <BControlPro Component={BoxControl} {...premiumProps} label={__("Margin ", "team-section")} values={teamMember?.states?.margin} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "states", "margin") })} />
          <BControlPro Component={BorderBoxControl} {...premiumProps} className="mt15" label={__("Border ", "team-section")} value={teamMember?.states?.border} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "states", "border") })} />

          <BControlPro Component={ColorControl} {...premiumProps} className="mt15" label={__("Value Color ", "team-section")} value={teamMember?.states?.value?.color} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "states", "value", "color") })} />
          <BControlPro Component={ColorControl} {...premiumProps} className="mt15" label={__("Label Color ", "team-section")} value={teamMember?.states?.label?.color} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "states", "label", "color") })} />

          <BControlPro Component={Typography} {...premiumProps} className="mt15" label={__("Value Typography ", "team-section")} value={teamMember?.states?.value?.typo} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "states", "value", "typo") })} />
          <BControlPro Component={Typography} {...premiumProps} className="mt15" label={__("Label Typography ", "team-section")} value={teamMember?.states?.label?.typo} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "states", "label", "typo") })} />


          <BControlPro Component={UnitControl} {...premiumProps} className="mt15" label={__("Icon Container width ", "team-section")} value={teamMember?.states?.width} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "states", "width") })} />
          <BControlPro Component={UnitControl} {...premiumProps} className="mt15" label={__("Icon Container Height ", "team-section")} value={teamMember?.states?.height} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "states", "height") })} />
          <BControlPro Component={BoxControl} {...premiumProps} className="mt15" label={__("Radius ", "team-section")} values={teamMember?.states?.radius} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "states", "radius") })} />

          <BControlPro Component={ColorsControl} {...premiumProps} className="mt15" label={__("Icon One Colors", "team-section")} value={teamMember?.states?.iconOne?.colors} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "states", "iconOne", "colors") })} />

          <BControlPro Component={RangeControl} {...premiumProps} className="mt15" label={__("Icon Size", "team-section")} value={teamMember?.states?.size} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "states", "size") })} />

        </PanelBody>}

        <PanelBody className="bPlPanelBody"
          title={__("Member Button", "team-section")}
          initialOpen={false}>
          <BControlPro Component={Typography} {...premiumProps} className="mt15" label={__(" Typography", "team-section")} value={teamMember?.btn?.typo} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "btn", "typo") })} />
          <BControlPro Component={ColorsControl} {...premiumProps} className="mt15" label={__(" Colors", "team-section")} value={teamMember?.btn?.colors} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "btn", "colors") })} />
          <BControlPro Component={BoxControl} {...premiumProps} className="mt15" label={__(" Padding", "team-section")} values={teamMember?.btn?.padding} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "btn", "padding") })} />
          <BControlPro Component={BoxControl} {...premiumProps} className="mt15" label={__(" Radius", "team-section")} values={teamMember?.btn?.radius} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "btn", "radius") })} />


        </PanelBody>

      </>)}
      {"theme11" === theme && (<>
        <PanelBody
          className="bPlPanelBody"
          title={__("Container", "team-section")}
          initialOpen={false}
        >
          <BControlPro Component={UnitControl} {...premiumProps}
            step={1}
            label={__("Width", "team-section")}
            value={width}
            onChange={(v) =>
              setAttributes({ styles: updateData(styles, v, "width") })
            }
          />

          <BControlPro Component={BButtonGroup} {...premiumProps}
            className="mt15"
            label={__("Alignment", "team-section")}
            value={alignment}
            options={[
              { label: "Left", value: "left" },
              { label: "Center", value: "center" },
              { label: "Right", value: "right" },
            ]}
            onChange={(v) =>
              setAttributes({ styles: updateData(styles, v, "alignment") })
            }
          />

          <BControlPro Component={Background} {...premiumProps}
            className="mt15"
            label={__("Background", "team-section")}
            value={bg}
            onChange={(v) =>
              setAttributes({ styles: updateData(styles, v, "bg") })
            }
          />

          <BControlPro Component={BoxControl} {...premiumProps}
            className="mt15"
            label={__("Padding", "team-section")}
            values={sectionPadding}
            onChange={(v) =>
              setAttributes({ styles: updateData(styles, v, "padding") })
            }
          />

          <BControlPro Component={BoxControl} {...premiumProps}
            className="mt15"
            label={__("Margin", "team-section")}
            values={margin}
            onChange={(v) =>
              setAttributes({ styles: updateData(styles, v, "margin") })
            }
          />
        </PanelBody>

        <PanelBody className="bPlPanelBody"
          title={__("Member Content", "team-section")}
          initialOpen={false}>
          <BControlPro Component={Background} {...premiumProps} className="mt15" label={__("Background ", "team-section")} value={teamMember?.content?.bg} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "content", "bg") })} />
          <BControlPro Component={BoxControl} {...premiumProps} className="mt15" label={__("Padding ", "team-section")} values={teamMember?.content?.padding} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "content", "padding") })} />
          <BControlPro Component={BoxControl} {...premiumProps} className="mt15" label={__("Radius ", "team-section")} values={teamMember?.content?.radius} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "content", "radius") })} />

          <BControlPro Component={ShadowControl} {...premiumProps} className="mt15" label={__("Shadow ", "team-section")} value={teamMember?.content?.shadow} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "content", "shadow") })} />



        </PanelBody>

        <PanelBody className="bPlPanelBody"
          title={__("Member Photo", "team-section")}
          initialOpen={true}>
          <BControlPro Component={UnitControl} {...premiumProps} label={__("Height", "team-section")} value={teamMember?.memberPhoto?.height} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "memberPhoto", "height") })} />
          <BControlPro Component={SelectControl} {...premiumProps} className="mt15" label={__("Object Fit", "team-section")}
            value={teamMember?.memberPhoto?.objectFit}
            options={[
              { label: "Cover (Crop & Fill)", value: "cover" },
              { label: "Contain (Fit Inside)", value: "contain" },
              { label: "Fill (Stretch)", value: "fill" },
              { label: "None (Original Size)", value: "none" },
              { label: "Scale Down (Smaller Fit)", value: "scale-down" },
            ]}
            onChange={(val) =>
              setAttributes({
                styles: updateData(
                  styles,
                  val,
                  "teamMember",
                  "memberPhoto",
                  "objectFit"
                ),
              })
            }
          />
          <BControlPro Component={RangeControl} {...premiumProps} min={0} max={3} step={.1} label={__("Hover Photo Scale", "team-section")} className="mt15" value={teamMember.memberPhoto?.hoverScale} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "memberPhoto", "hoverScale") })} />

          <BControlPro Component={Background} {...premiumProps} label={__("Overly Color", "team-section")} value={teamMember?.memberPhoto?.bg} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "memberPhoto", "bg") })} />

        </PanelBody>

        {isTitle && <PanelBody className="bPlPanelBody"
          title={__("Member Title", "team-section")}
          initialOpen={false}>
          <BControlPro Component={ColorControl} {...premiumProps} className="mt15" label={__("Color ", "team-section")} value={teamMember?.title?.color} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "title", "color") })} />
          <BControlPro Component={BoxControl} {...premiumProps} className="mt15" label={__("Margin ", "team-section")} values={teamMember?.title?.margin} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "title", "margin") })} />
          <BControlPro Component={Typography} {...premiumProps} className="mt15" label={__("Typography ", "team-section")} value={teamMember?.title?.typo} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "title", "typo") })} />

        </PanelBody>}

        <PanelBody className="bPlPanelBody"
          title={__("Member Name", "team-section")}
          initialOpen={false}>
          <BControlPro Component={ColorControl} {...premiumProps} className="mt15" label={__("Color ", "team-section")} value={teamMember?.name?.color} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "name", "color") })} />
          <BControlPro Component={BoxControl} {...premiumProps} className="mt15" label={__("Margin ", "team-section")} values={teamMember?.name?.margin} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "name", "margin") })} />
          <BControlPro Component={Typography} {...premiumProps} className="mt15" label={__("Typography ", "team-section")} value={teamMember?.name?.typo} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "name", "typo") })} />

        </PanelBody>
        <PanelBody className="bPlPanelBody"
          title={__("Member Bio", "team-section")}
          initialOpen={false}>
          <BControlPro Component={ColorControl} {...premiumProps} className="mt15" label={__("Color ", "team-section")} value={teamMember?.bio?.color} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "bio", "color") })} />
          <BControlPro Component={Typography} {...premiumProps} className="mt15" label={__("Typography ", "team-section")} value={teamMember?.bio?.typo} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "bio", "typo") })} />

        </PanelBody>

        <PanelBody className="bPlPanelBody"
          title={__("Member Button", "team-section")}
          initialOpen={false}>
          <BControlPro Component={ColorControl} {...premiumProps} className="mt15" label={__("Color ", "team-section")} value={teamMember?.btn?.color} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "btn", "color") })} />
          <BControlPro Component={RangeControl} {...premiumProps} className="mt15" label={__("Gap ", "team-section")} value={teamMember?.btn?.gap} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "btn", "gap") })} />
          <BControlPro Component={Typography} {...premiumProps} className="mt15" label={__("Typography ", "team-section")} value={teamMember?.btn?.typo} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "btn", "typo") })} />
          <BControlPro Component={RangeControl} {...premiumProps} className="mt15" label={__("Icon Size ", "team-section")} value={teamMember?.btn?.iconSize} onChange={v => setAttributes({ styles: updateData(styles, v, "teamMember", "btn", "iconSize") })} />


        </PanelBody>
      </>)}
    </>
  );
};

export default Style;
