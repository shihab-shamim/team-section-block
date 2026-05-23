const { registerBlockType } = wp.blocks;
import metadata from "./block.json";
import Edit from "./Edit";
import "./editor.scss";

registerBlockType(metadata, {
  icon: "groups",
  edit: Edit,
});
