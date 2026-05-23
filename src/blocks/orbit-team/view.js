import { createRoot } from "react-dom/client";
import "./style.scss";
import Style from "./Components/Common/Style";
import GalaxyTeam from "./Components/Frontend/Cards";

document.addEventListener("DOMContentLoaded", () => {
  const blockNameEls = document.querySelectorAll(
    ".wp-block-tsb-orbit-team",
  );
  blockNameEls.forEach((blockNameEl) => {
    const attributes = JSON.parse(blockNameEl.dataset.attributes);

    createRoot(blockNameEl).render(
      <>
        <Style attributes={attributes} id={blockNameEl.id} />
        <GalaxyTeam attributes={attributes} />
      </>,
    );

    blockNameEl?.removeAttribute("data-attributes");
  });
});
