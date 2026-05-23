import { useState } from "react";
import { __ } from "@wordpress/i18n";
import {
  BorderBoxControl,
  BorderControl,
  PanelBody,
  PanelRow,
  RangeControl,
  __experimentalUnitControl as UnitControl,
} from "@wordpress/components";
import {
  Background,
  BoxControl,
  ColorControl,
  Device,
  Label,
  ShadowControl,
  Typography,
} from "../../../../../../../../bpl-tools/Components";
const Style = ({ attributes, setAttributes, device }) => {
  const { styles = {}, options = {} } = attributes;

  return (
    <>
      <PanelBody
        className="bPlPanelBody"
        title={__("Container", "orbit-team")}
        initialOpen={false}
      >
        <Background
          value={styles.bg}
          onChange={(value) =>
            setAttributes({ styles: { ...styles, bg: value } })
          }
        />

        <UnitControl
          className="mt10"
          label={__("MinHeight", "orbit-team")}
          step={1}
          value={styles?.height}
          onChange={(value) =>
            setAttributes({ styles: { ...styles, height: value } })
          }
        />
        <BoxControl
          label={__("Border Radius", "orbit-team")}
          className="mt10"
          values={styles?.radius}
          onChange={(value) =>
            setAttributes({ styles: { ...styles, radius: value } })
          }
        />

        <PanelRow>
          <Label> Margin</Label>
          <Device />
        </PanelRow>
        <BoxControl
          className="mt10"
          values={styles?.margin[device]}
          onChange={(value) =>
            setAttributes({
              styles: {
                ...styles,
                margin: { ...styles.margin, [device]: value },
              },
            })
          }
        />
        <PanelRow>
          <Label> Padding</Label>
          <Device />
        </PanelRow>
        <BoxControl
          className="mt10"
          values={styles?.padding[device]}
          onChange={(value) =>
            setAttributes({
              styles: {
                ...styles,
                padding: { ...styles.padding, [device]: value },
              },
            })
          }
        />
        <PanelRow>
          <Label> Heading Gap</Label>
          <Device />
        </PanelRow>
        <RangeControl
          className="mt10"
          min={1}
          max={500}
          step={1}
          value={styles?.gap[device]}
          onChange={(value) =>
            setAttributes({
              styles: {
                ...styles,
                gap: { ...styles.gap, [device]: value },
              },
            })
          }
        />
      </PanelBody>

      {(options?.showSubTitle || options?.showTitle || options?.showTag) && (
        <PanelBody
          className="bPlPanelBody"
          title={__("Header", "orbit-team")}
          initialOpen={false}
        >
          <ColorControl
            label={__("Tag Color", "orbit-team")}
            value={styles?.header?.color}
            onChange={(value) =>
              setAttributes({
                styles: {
                  ...styles,
                  header: { ...styles.header, color: value },
                },
              })
            }
          />
          <Typography
            className="mt10"
            label={__("Tag Typography", "orbit-team")}
            value={styles?.header?.typo}
            onChange={(value) =>
              setAttributes({
                styles: {
                  ...styles,
                  header: { ...styles.header, typo: value },
                },
              })
            }
          />
          <BoxControl
            label={__("Tag Padding", "orbit-team")}
            className="mt10"
            values={styles?.header?.padding}
            onChange={(value) =>
              setAttributes({
                styles: {
                  ...styles,
                  header: { ...styles.header, padding: value },
                },
              })
            }
          />
          <BoxControl
            label={__("Tag Border Radius", "orbit-team")}
            className="mt10"
            values={styles?.header?.radius}
            onChange={(value) =>
              setAttributes({
                styles: {
                  ...styles,
                  header: { ...styles.header, radius: value },
                },
              })
            }
          />

          <ColorControl
            label={__("Title Color", "orbit-team")}
            value={styles?.header?.title?.color}
            onChange={(value) =>
              setAttributes({
                styles: {
                  ...styles,
                  header: {
                    ...styles.header,
                    title: { ...styles.header.title, color: value },
                  },
                },
              })
            }
          />
          <Typography
            className="mt10"
            label={__("Title Typography", "orbit-team")}
            value={styles?.header?.title?.typo}
            onChange={(value) =>
              setAttributes({
                styles: {
                  ...styles,
                  header: {
                    ...styles.header,
                    title: { ...styles.header.title, typo: value },
                  },
                },
              })
            }
          />
          <ColorControl
            label={__("Sub Title Color", "orbit-team")}
            value={styles?.header?.subTitle?.color}
            onChange={(value) =>
              setAttributes({
                styles: {
                  ...styles,
                  header: {
                    ...styles.header,
                    subTitle: { ...styles.header.subTitle, color: value },
                  },
                },
              })
            }
          />
          <Typography
            className="mt10"
            label={__("Sub Title Typography", "orbit-team")}
            value={styles?.header?.subTitle?.typo}
            onChange={(value) =>
              setAttributes({
                styles: {
                  ...styles,
                  header: {
                    ...styles.header,
                    subTitle: { ...styles.header.subTitle, typo: value },
                  },
                },
              })
            }
          />
        </PanelBody>
      )}

      <PanelBody
        initialOpen={false}
        className="bPlPanelBody"
        title={__("Brank Mark", "orbit-team")}
      >
        <Background
          label={__("Background", "orbit-team")}
          value={styles?.brandMark?.bg}
          onChange={(value) =>
            setAttributes({
              styles: {
                ...styles,
                brandMark: { ...styles.brandMark, bg: value },
              },
            })
          }
        />
        <UnitControl
          className="mt10"
          label={__("Width", "orbit-team")}
          value={styles?.brandMark?.width}
          onChange={(value) =>
            setAttributes({
              styles: {
                ...styles,
                brandMark: { ...styles.brandMark, width: value },
              },
            })
          }
        />
        <UnitControl
          className="mt10"
          label={__("Height", "orbit-team")}
          value={styles?.brandMark?.height}
          onChange={(value) =>
            setAttributes({
              styles: {
                ...styles,
                brandMark: { ...styles.brandMark, height: value },
              },
            })
          }
        />
        <BoxControl
          className="mt10"
          label={__("Border Radius", "orbit-team")}
          values={styles?.brandMark?.radius}
          onChange={(value) =>
            setAttributes({
              styles: {
                ...styles,
                brandMark: { ...styles.brandMark, radius: value },
              },
            })
          }
        />
        <ShadowControl
          className="mt10"
          label={__("Shadow", "orbit-team")}
          value={styles?.brandMark?.shadow}
          onChange={(value) =>
            setAttributes({
              styles: {
                ...styles,
                brandMark: { ...styles.brandMark, shadow: value },
              },
            })
          }
        />
        {!options?.uploadImage && (
          <>
            {" "}
            <ColorControl
              label={__("Mark Color", "orbit-team")}
              value={styles?.brandMark?.mark?.color}
              onChange={(value) =>
                setAttributes({
                  styles: {
                    ...styles,
                    brandMark: {
                      ...styles.brandMark,
                      mark: { ...styles.brandMark.mark, color: value },
                    },
                  },
                })
              }
            />
            <Typography
              label={__("Mark Typography", "orbit-team")}
              value={styles?.brandMark?.mark?.typo}
              onChange={(value) =>
                setAttributes({
                  styles: {
                    ...styles,
                    brandMark: {
                      ...styles.brandMark,
                      mark: { ...styles.brandMark.mark, typo: value },
                    },
                  },
                })
              }
            />
            <ColorControl
              className="mt10"
              label={__("Title Color", "orbit-team")}
              value={styles?.brandMark?.title?.color}
              onChange={(value) =>
                setAttributes({
                  styles: {
                    ...styles,
                    brandMark: {
                      ...styles.brandMark,
                      title: { ...styles.brandMark.title, color: value },
                    },
                  },
                })
              }
            />
            <Typography
              className="mt10"
              label={__("Title Typography", "orbit-team")}
              value={styles?.brandMark?.title?.typo}
              onChange={(value) =>
                setAttributes({
                  styles: {
                    ...styles,
                    brandMark: {
                      ...styles.brandMark,
                      title: { ...styles.brandMark.title, typo: value },
                    },
                  },
                })
              }
            />
            <BoxControl
              className="mt10"
              label={__("Margin", "orbit-team")}
              values={styles?.brandMark?.title?.margin}
              onChange={(value) =>
                setAttributes({
                  styles: {
                    ...styles,
                    brandMark: {
                      ...styles.brandMark,
                      title: { ...styles.brandMark.title, margin: value },
                    },
                  },
                })
              }
            />
          </>
        )}
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        initialOpen={false}
        title={__("Team Member", "orbit-team")}
      >
        <UnitControl
          className="mt10"
          label={__("Width", "orbit-team")}
          value={styles?.teamMember?.width}
          onChange={(value) =>
            setAttributes({
              styles: {
                ...styles,
                teamMember: { ...styles.teamMember, width: value },
              },
            })
          }
        />
        <UnitControl
          className="mt10"
          label={__("Height", "orbit-team")}
          value={styles?.teamMember?.height}
          onChange={(value) =>
            setAttributes({
              styles: {
                ...styles,
                teamMember: { ...styles.teamMember, height: value },
              },
            })
          }
        />
        <BoxControl
          className="mt10"
          label={__("Border Radius", "orbit-team")}
          values={styles?.teamMember?.radius}
          onChange={(value) =>
            setAttributes({
              styles: {
                ...styles,
                teamMember: { ...styles.teamMember, radius: value },
              },
            })
          }
        />
        <ShadowControl
          className="mt10"
          label={__("Shadow", "orbit-team")}
          value={styles?.teamMember?.shadow}
          onChange={(value) =>
            setAttributes({
              styles: {
                ...styles,
                teamMember: { ...styles.teamMember, shadow: value },
              },
            })
          }
        />
        <BorderControl
          className="mt10"
          label={__("Border", "orbit-team")}
          value={styles?.teamMember?.border}
          onChange={(value) =>
            setAttributes({
              styles: {
                ...styles,
                teamMember: { ...styles.teamMember, border: value },
              },
            })
          }
        />
        <RangeControl
          className="mt10"
          label={__("Scale", "orbit-team")}
          value={styles?.teamMember?.scal}
          onChange={(value) =>
            setAttributes({
              styles: {
                ...styles,
                teamMember: { ...styles.teamMember, scal: value },
              },
            })
          }
          min={0}
          max={2}
          step={0.01}
        />
        <ShadowControl
          className="mt10"
          label={__("Hover Shadow", "orbit-team")}
          value={styles?.teamMember?.hoverShadow}
          onChange={(value) =>
            setAttributes({
              styles: {
                ...styles,
                teamMember: { ...styles.teamMember, hoverShadow: value },
              },
            })
          }
        />
        <BorderControl
          className="mt10"
          label={__("Hover Border", "orbit-team")}
          value={styles?.teamMember?.hoverBorder}
          onChange={(value) =>
            setAttributes({
              styles: {
                ...styles,
                teamMember: { ...styles.teamMember, hoverBorder: value },
              },
            })
          }
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        initialOpen={false}
        title={__("Orbit Ring", "orbit-team")}
      >
        <BorderControl
          className="mt10"
          label={__("Ring (Only Width, Color, Style)", "orbit-team")}
          value={styles?.teamMember?.orbit?.ring}
          onChange={(value) =>
            setAttributes({
              styles: {
                ...styles,
                teamMember: {
                  ...styles.teamMember,
                  orbit: { ...styles.teamMember.orbit, ring: value },
                },
              },
            })
          }
        />
        <RangeControl
          className="mt15"
          label={__("Animation Duration", "orbit-team")}
          value={styles?.teamMember?.orbit?.animation}
          onChange={(value) =>
            setAttributes({
              styles: {
                ...styles,
                teamMember: {
                  ...styles.teamMember,
                  orbit: { ...styles.teamMember.orbit, animation: value },
                },
              },
            })
          }
          min={0}
          max={200}
          step={1}
        />
        <UnitControl
          className="mt15"
          label={__("Orbit Gap", "orbit-team")}
          value={styles?.teamMember?.orbit?.width}
          onChange={(value) =>
            setAttributes({
              styles: {
                ...styles,
                teamMember: {
                  ...styles.teamMember,
                  orbit: { ...styles.teamMember.orbit, width: value },
                },
              },
            })
          }
        />
      </PanelBody>
      <PanelBody
        className="bPlPanelBody"
        initialOpen={false}
        title={__("Team Member Name", "orbit-team")}
      >
        <Typography
          label={__("Typography", "orbit-team")}
          value={styles?.teamMember?.name?.typo}
          onChange={(value) =>
            setAttributes({
              styles: {
                ...styles,
                teamMember: {
                  ...styles.teamMember,
                  name: { ...styles.teamMember.name, typo: value },
                },
              },
            })
          }
        />
        <ColorControl
          className="mt10"
          label={__("Color", "orbit-team")}
          value={styles?.teamMember?.name?.color}
          onChange={(value) =>
            setAttributes({
              styles: {
                ...styles,
                teamMember: {
                  ...styles.teamMember,
                  name: { ...styles.teamMember.name, color: value },
                },
              },
            })
          }
        />
        <Background
          className="mt10"
          label={__("Background", "orbit-team")}
          value={styles?.teamMember?.name?.bg}
          onChange={(value) =>
            setAttributes({
              styles: {
                ...styles,
                teamMember: {
                  ...styles.teamMember,
                  name: { ...styles.teamMember.name, bg: value },
                },
              },
            })
          }
        />
        <BoxControl
          className="mt10"
          label={__("Padding", "orbit-team")}
          values={styles?.teamMember?.name?.padding}
          onChange={(value) =>
            setAttributes({
              styles: {
                ...styles,
                teamMember: {
                  ...styles.teamMember,
                  name: { ...styles.teamMember.name, padding: value },
                },
              },
            })
          }
        />
        <BoxControl
          className="mt10"
          label={__("Border Radius", "orbit-team")}
          values={styles?.teamMember?.name?.radius}
          onChange={(value) =>
            setAttributes({
              styles: {
                ...styles,
                teamMember: {
                  ...styles.teamMember,
                  name: { ...styles.teamMember.name, radius: value },
                },
              },
            })
          }
        />
        <BorderControl
          className="mt10"
          label={__("Border", "orbit-team")}
          value={styles?.teamMember?.name?.border}
          onChange={(value) =>
            setAttributes({
              styles: {
                ...styles,
                teamMember: {
                  ...styles.teamMember,
                  name: { ...styles.teamMember.name, border: value },
                },
              },
            })
          }
        />
      </PanelBody>
    </>
  );
};

export default Style;
