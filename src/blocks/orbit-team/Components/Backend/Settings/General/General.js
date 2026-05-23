import { __ } from "@wordpress/i18n";

import {
  PanelBody,
  SelectControl,
  TextControl,
  ToggleControl,
} from "@wordpress/components";
import { updateData } from "../../../../utils/functions";
import {
  BButtonGroup,
  BtnGroup,
  InlineMediaUpload,
  ItemsPanel,
} from "../../../../../../../../bpl-tools/Components";

const MemberSettings = ({ index, value, onChange }) => {
  const item = value[index] || {};
  return (
    <>
      <TextControl
        label={__("Name", "orbit-team")}
        value={item.name}
        onChange={(v) => onChange(updateData(value, v, index, "name"))}
      />
      <InlineMediaUpload
        label={__("Image", "orbit-team")}
        value={item.img}
        onChange={(v) => onChange(updateData(value, v, index, "img"))}
      />
      <TextControl
        label={__("Link", "orbit-team")}
        value={item.link}
        onChange={(v) => onChange(updateData(value, v, index, "link"))}
      />
    </>
  );
};

const General = ({ attributes, setAttributes }) => {
  const { orbitTeam = {}, teamMembers = [], options = {} } = attributes;

  const handleAddOrbit = () => {
    const orbitNames = [
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
      "ten",
    ];
    const currentMembers = teamMembers || [];
    if (currentMembers.length < 10) {
      const nextIndex = currentMembers.length;
      const nextName = orbitNames[nextIndex];
      const memberCount = nextIndex + 1;

      const demoMembers = Array.from({ length: memberCount }, (_, i) => ({
        name: `Member ${i + 1}`,
        img: `https://i.pravatar.cc/120?img=47`,
        link: "#",
      }));

      const newOrbit = { [nextName]: demoMembers };
      setAttributes({
        teamMembers: [...currentMembers, newOrbit],
      });
    }
  };

  const handleRemoveOrbit = () => {
    const currentMembers = teamMembers || [];
    if (currentMembers.length > 1) {
      const newMembers = currentMembers.slice(0, -1);
      setAttributes({
        teamMembers: newMembers,
      });

      // Reset orbitValue if the currently selected orbit was removed
      const lastOrbitKey = Object.keys(
        currentMembers[currentMembers.length - 1],
      )[0];
      if (options.orbitValue === lastOrbitKey) {
        const nextSelected =
          newMembers.length > 0
            ? Object.keys(newMembers[newMembers.length - 1])[0]
            : "";
        setAttributes({ options: { ...options, orbitValue: nextSelected } });
      }
    }
  };

  return (
    <>
      <PanelBody
        className="bPlPanelBody"
        title={__("Header", "orbit-team")}
        initialOpen={false}
      >
        {options?.showTag && (
          <TextControl
            label={__("Tag", "orbit-team")}
            className="mt10"
            placeholder="Enter tag"
            value={orbitTeam.tag}
            onChange={(v) =>
              setAttributes({ orbitTeam: updateData(orbitTeam, v, "tag") })
            }
          />
        )}
        {options?.showTitle && (
          <TextControl
            label={__("Title", "orbit-team")}
            className="mt10"
            placeholder="Enter title"
            value={orbitTeam.title}
            onChange={(v) =>
              setAttributes({ orbitTeam: updateData(orbitTeam, v, "title") })
            }
          />
        )}
        {options?.showSubTitle && (
          <TextControl
            label={__("Sub Title", "orbit-team")}
            className="mt10"
            placeholder="Enter sub title"
            value={orbitTeam.subTitle}
            onChange={(v) =>
              setAttributes({ orbitTeam: updateData(orbitTeam, v, "subTitle") })
            }
          />
        )}
      </PanelBody>
      <PanelBody
        className="bPlPanelBody"
        title={__("Brand Mark", "orbit-team")}
        initialOpen={false}
      >
        {!options?.uploadImage && (
          <>
            <TextControl
              label={__("Mark", "orbit-team")}
              className="mt10"
              placeholder="Enter mark"
              value={orbitTeam.brankMark}
              onChange={(v) =>
                setAttributes({
                  orbitTeam: updateData(orbitTeam, v, "brankMark"),
                })
              }
            />
            <TextControl
              label={__("Title", "orbit-team")}
              className="mt10"
              placeholder="Enter title"
              value={orbitTeam.brankTitle}
              onChange={(v) =>
                setAttributes({
                  orbitTeam: updateData(orbitTeam, v, "brankTitle"),
                })
              }
            />
            <TextControl
              label={__("Est.", "orbit-team")}
              className="mt10"
              placeholder="Enter est"
              value={orbitTeam.brankEst}
              onChange={(v) =>
                setAttributes({
                  orbitTeam: updateData(orbitTeam, v, "brankEst"),
                })
              }
            />
          </>
        )}
        <ToggleControl
          className="mt10"
          label={__("Upload Image", "orbit-team")}
          checked={options.uploadImage}
          onChange={(v) =>
            setAttributes({ options: updateData(options, v, "uploadImage") })
          }
        />
        {options.uploadImage && (
          <InlineMediaUpload
            label={__("Image", "orbit-team")}
            className="mt10"
            value={options.image}
            onChange={(v) =>
              setAttributes({ options: updateData(options, v, "image") })
            }
          />
        )}
      </PanelBody>
      <PanelBody
        title={__("Orbit Team Add Or Remove", "orbit-team")}
        className="bPlPanelBody"
        initialOpen={false}
      >
        <BButtonGroup
          className="mt10"
          label={__("", "orbit-team")}
          value={options.orbitValue}
          onChange={(v) =>
            setAttributes({ options: updateData(options, v, "orbitValue") })
          }
          options={
            teamMembers?.map((item) => {
              const key = Object.keys(item)[0];
              return {
                value: key,
                label: key.charAt(0).toUpperCase() + key.slice(1), // Capitalizes the first letter (e.g. "One")
              };
            }) || []
          }
        />

        {options.orbitValue && (
          <ItemsPanel
            design="sortable"
            itemLabel={__("Member", "orbit-team")}
            value={
              teamMembers.find(
                (orbit) => Object.keys(orbit)[0] === options.orbitValue,
              )?.[options.orbitValue] || []
            }
            onChange={(newMembers) => {
              const orbitIndex = teamMembers.findIndex(
                (orbit) => Object.keys(orbit)[0] === options.orbitValue,
              );
              if (orbitIndex !== -1) {
                const updatedTeamMembers = [...teamMembers];
                updatedTeamMembers[orbitIndex] = {
                  [options.orbitValue]: newMembers,
                };
                setAttributes({ teamMembers: updatedTeamMembers });
              }
            }}
            newItem={{
              name: "",
              img: "https://i.pravatar.cc/120?img=47",
              link: "#",
            }}
            ItemSettings={MemberSettings}
          />
        )}

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "15px",
          }}
        >
          <button
            onClick={handleAddOrbit}
            style={{
              padding: "10px 20px",
              background: "#007cba",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: "500",
              fontSize: "12px",
              transition: "background 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.background = "#006799")}
            onMouseOut={(e) => (e.target.style.background = "#007cba")}
            disabled={teamMembers?.length >= 10}
          >
            {teamMembers?.length >= 10
              ? __("Limit Reached", "orbit-team")
              : __("Add Orbit", "orbit-team")}
          </button>
          <button
            onClick={handleRemoveOrbit}
            style={{
              padding: "10px 20px",
              background: "#d63638",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: "500",
              fontSize: "12px",
              marginLeft: "10px",
              transition: "background 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.background = "#b32d2e")}
            onMouseOut={(e) => (e.target.style.background = "#d63638")}
            disabled={teamMembers?.length <= 1}
          >
            {__("Remove Orbit", "orbit-team")}
          </button>
        </div>
      </PanelBody>
      <PanelBody
        initialOpen={false}
        className="bPlPanelBody"
        title={__("Elements", "orbit-team")}
      >
        <ToggleControl
          className="mt10"
          label={__("Show Tag", "orbit-team")}
          checked={options.showTag}
          onChange={(v) =>
            setAttributes({ options: updateData(options, v, "showTag") })
          }
        />
        <ToggleControl
          className="mt10"
          label={__("Show Title", "orbit-team")}
          checked={options.showTitle}
          onChange={(v) =>
            setAttributes({ options: updateData(options, v, "showTitle") })
          }
        />
        <ToggleControl
          className="mt10"
          label={__("Show Sub Title", "orbit-team")}
          checked={options.showSubTitle}
          onChange={(v) =>
            setAttributes({ options: updateData(options, v, "showSubTitle") })
          }
        />
        <ToggleControl
          className="mt10"
          label={__("Link Open In New Tab", "orbit-team")}
          checked={options.linkOpen}
          onChange={(v) =>
            setAttributes({ options: updateData(options, v, "linkOpen") })
          }
        />
      </PanelBody>
    </>
  );
};

export default General;
