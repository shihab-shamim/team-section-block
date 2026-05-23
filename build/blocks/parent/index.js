/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/parent/Edit.js":
/*!***********************************!*\
  !*** ./src/blocks/parent/Edit.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/options */ "./src/utils/options.js");
/* harmony import */ var _team_section_Components_Backend_ClipBoard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../team-section/Components/Backend/ClipBoard */ "./src/blocks/team-section/Components/Backend/ClipBoard.js");

const {
  useBlockProps
} = wp.blockEditor;
const {
  dispatch,
  withSelect
} = wp.data;


const Edit = props => {
  const blockProps = useBlockProps();
  const {
    clientId,
    currentPostId,
    CPTType
  } = props;
  const shortcode = `[tsb id=${currentPostId}]`;
  const isBlockAvailable = blockName => {
    return !!wp.blocks.getBlockType(blockName);
  };
  const insertBlock = blockName => {
    if (!isBlockAvailable(blockName)) {
      return;
    }
    const blockEditor = dispatch("core/block-editor");
    const currentPostType = wp.data.select("core/editor")?.getCurrentPostType?.();
    const isShortcodePost = currentPostType === "tsb";
    blockEditor.updateSettings({
      templateLock: false
    });
    const block = wp.blocks.createBlock(blockName);
    blockEditor.replaceBlock(clientId, block);

    // Only re-lock the editor in the shortcode custom post type
    if (isShortcodePost) {
      setTimeout(() => {
        blockEditor.updateSettings({
          templateLock: "all"
        });
      }, 100);
    }
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tsb-block-selector"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "title"
  }, "Choose a Team Block"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "buttons"
  }, _utils_options__WEBPACK_IMPORTED_MODULE_1__.teamSectionTemplates.map(item => {
    const disabledBlocks = window?.TSB_BLOCK_DATA?.disabledBlocks || [];
    // className matches the folder name for each block
    if (disabledBlocks.includes(item.className)) {
      return null; // Do not render if explicitly disabled in the dashboard
    }
    const available = isBlockAvailable(item.block);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      key: item.block,
      className: `button ${item.className}${!available ? ' pro-locked' : ''}`,
      onClick: () => insertBlock(item.block)
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "icon"
    }, item.icon), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "text",
      title: item.name
    }, item.name), !available && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "pro-badge"
    }, "Pro"));
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withSelect(select => {
  const currentPostId = select("core/editor")?.getCurrentPostId?.();
  const CPTType = select("core/editor")?.getCurrentPostType?.();
  return {
    currentPostId,
    CPTType
  };
})(Edit));

/***/ }),

/***/ "./src/blocks/parent/block.json":
/*!**************************************!*\
  !*** ./src/blocks/parent/block.json ***!
  \**************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"apiVersion":3,"name":"tsb/team-section-selector","version":"1.0.0","title":"Team Section Selector","category":"team-section","description":"Choose and display your favorite team section block","keywords":["team section","team members","team selector","team block"],"textdomain":"team-section","attributes":{"align":{"type":"string","default":""}},"supports":{"align":["wide","full"],"html":false,"inserter":false},"editorScript":["file:./index.js"],"editorStyle":"file:./index.css"}');

/***/ }),

/***/ "./src/blocks/parent/editor.scss":
/*!***************************************!*\
  !*** ./src/blocks/parent/editor.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/team-section/Components/Backend/ClipBoard.js":
/*!*****************************************************************!*\
  !*** ./src/blocks/team-section/Components/Backend/ClipBoard.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ClipBoard_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ClipBoard.scss */ "./src/blocks/team-section/Components/Backend/ClipBoard.scss");



const ClipBoard = ({
  shortCode
}) => {
  const tooltip = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [copied, setCopied] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const handleCopy = e => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (inputRef.current) {
      inputRef.current.select();
      inputRef.current.setSelectionRange(0, 99999);
    }
    const feedback = () => {
      setCopied(true);
      if (tooltip.current) {
        tooltip.current.innerHTML = "Copied Successfully!";
        tooltip.current.classList.add("copied");
      }
      setTimeout(() => {
        setCopied(false);
        if (tooltip.current) {
          tooltip.current.innerHTML = "Copy To Clipboard";
          tooltip.current.classList.remove("copied");
        }
      }, 1500);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(shortCode).then(() => {
        feedback();
      }).catch(err => {
        // console.error("Clipboard API failed, trying fallback", err);
        fallbackCopy();
      });
    } else {
      fallbackCopy();
    }
    function fallbackCopy() {
      try {
        const textArea = document.createElement("textarea");
        textArea.value = shortCode;
        // Move outside screen to avoid scrolling
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        const successful = document.execCommand("copy");
        textArea.remove();
        if (successful) {
          feedback();
        } else {
          console.error("Fallback copy failed: execCommand returned false");
        }
      } catch (err) {
        console.error("Fallback copy failed", err);
      }
    }
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pfbFrontShortCode"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pfbFrontShortCodeInner"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pfbFrontShortCodeInputWrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    ref: tooltip,
    className: "tooltip"
  }, "Copy To Clipboard"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pfbFrontShortCodeInput"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    ref: inputRef,
    readOnly: true,
    value: shortCode,
    onClick: handleCopy
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pfbFrontShortCodeCopyBtn",
    onClick: handleCopy
  }, copied ? "✓" : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    viewBox: "0 0 24 24",
    width: "18",
    height: "18",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "9",
    y: "9",
    width: "13",
    height: "13",
    rx: "2",
    ry: "2"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pfbFrontShortCodeHeader"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "Copy the shortcode and use it anywhere."))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClipBoard);

/***/ }),

/***/ "./src/blocks/team-section/Components/Backend/ClipBoard.scss":
/*!*******************************************************************!*\
  !*** ./src/blocks/team-section/Components/Backend/ClipBoard.scss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/team-section/utils/icons.js":
/*!************************************************!*\
  !*** ./src/blocks/team-section/utils/icons.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   horizontalLineIcon: () => (/* binding */ horizontalLineIcon),
/* harmony export */   orbitTeamIcon: () => (/* binding */ orbitTeamIcon),
/* harmony export */   teamMembersIcon: () => (/* binding */ teamMembersIcon),
/* harmony export */   verticalLineIcon: () => (/* binding */ verticalLineIcon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const teamMembersIcon = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  className: "bPlBlockIcon",
  viewBox: "0 0 505.4 505.4"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M437.1,233.45c14.8-10.4,24.6-27.7,24.6-47.2c0-31.9-25.8-57.7-57.7-57.7c-31.9,0-57.7,25.8-57.7,57.7 c0,19.5,9.7,36.8,24.6,47.2c-12.7,4.4-24.3,11.2-34.1,20c-13.5-11.5-29.4-20.3-46.8-25.5c21.1-12.8,35.3-36.1,35.3-62.6 c0-40.4-32.7-73.1-73.1-73.1c-40.4,0-73.1,32.8-73.1,73.1c0,26.5,14.1,49.8,35.3,62.6c-17.2,5.2-32.9,13.9-46.3,25.2 c-9.8-8.6-21.2-15.3-33.7-19.6c14.8-10.4,24.6-27.7,24.6-47.2c0-31.9-25.8-57.7-57.7-57.7s-57.7,25.8-57.7,57.7 c0,19.5,9.7,36.8,24.6,47.2C28.5,247.25,0,284.95,0,329.25v6.6c0,0.2,0.2,0.4,0.4,0.4h122.3c-0.7,5.5-1.1,11.2-1.1,16.9v6.8 c0,29.4,23.8,53.2,53.2,53.2h155c29.4,0,53.2-23.8,53.2-53.2v-6.8c0-5.7-0.4-11.4-1.1-16.9H505c0.2,0,0.4-0.2,0.4-0.4v-6.6 C505.2,284.85,476.8,247.15,437.1,233.45z M362.3,186.15c0-23,18.7-41.7,41.7-41.7s41.7,18.7,41.7,41.7 c0,22.7-18.3,41.2-40.9,41.7c-0.3,0-0.5,0-0.8,0s-0.5,0-0.8,0C380.5,227.45,362.3,208.95,362.3,186.15z M194.9,165.35 c0-31.5,25.6-57.1,57.1-57.1s57.1,25.6,57.1,57.1c0,30.4-23.9,55.3-53.8,57c-1.1,0-2.2,0-3.3,0c-1.1,0-2.2,0-3.3,0 C218.8,220.65,194.9,195.75,194.9,165.35z M59.3,186.15c0-23,18.7-41.7,41.7-41.7s41.7,18.7,41.7,41.7c0,22.7-18.3,41.2-40.9,41.7 c-0.3,0-0.5,0-0.8,0s-0.5,0-0.8,0C77.6,227.45,59.3,208.95,59.3,186.15z M125.5,320.15H16.2c4.5-42.6,40.5-76,84.2-76.3 c0.2,0,0.4,0,0.6,0s0.4,0,0.6,0c20.8,0.1,39.8,7.8,54.5,20.3C141.7,279.75,131,298.95,125.5,320.15z M366.8,359.95 c0,20.5-16.7,37.2-37.2,37.2h-155c-20.5,0-37.2-16.7-37.2-37.2v-6.8c0-62.1,49.6-112.9,111.3-114.7c1.1,0.1,2.3,0.1,3.4,0.1 s2.3,0,3.4-0.1c61.7,1.8,111.3,52.6,111.3,114.7V359.95z M378.7,320.15c-5.5-21.1-16-40-30.3-55.6c14.8-12.8,34-20.5,55-20.7 c0.2,0,0.4,0,0.6,0s0.4,0,0.6,0c43.7,0.3,79.7,33.7,84.2,76.3H378.7z"
}));
const verticalLineIcon = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 14.707 14.707"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "6.275",
  y: "0",
  width: "2.158",
  height: "14.707"
}));
const horizontalLineIcon = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 357 357"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M357,204H0v-51h357V204z"
}));
const orbitTeamIcon = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  stroke: "currentColor",
  fill: "currentColor",
  strokeWidth: "0",
  viewBox: "0 0 512 512",
  width: 24,
  height: 24,
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M256.25 20.656c-32.78 0-64.03 6.79-92.438 19-8.182-10.618-20.994-17.468-35.437-17.468-24.716 0-44.78 20.033-44.78 44.75 0 8.356 2.324 16.18 6.31 22.874-42.638 42.655-69.093 101.49-69.093 166.282 0 129.617 105.823 234.72 235.438 234.72 129.615-.002 234.72-105.103 234.72-234.72 0-129.618-105.105-235.438-234.72-235.438zm0 19.313c119.515 0 216.094 96.607 216.094 216.124s-96.58 216.094-216.094 216.094c-119.515 0-216.813-96.577-216.813-216.094 0-59.568 24.176-113.438 63.22-152.5 7.273 5.113 16.15 8.094 25.718 8.094 24.716 0 44.75-20.034 44.75-44.75 0-3.453-.385-6.804-1.125-10.032C197.91 46 226.396 39.97 256.25 39.97zm-.125 51.81c-91.3 0-165.875 74.575-165.875 165.876 0 91.3 74.576 165.406 165.875 165.406 35.12 0 67.708-10.965 94.5-29.656 7.13 4.23 15.45 6.656 24.344 6.656 26.396 0 47.81-21.384 47.81-47.78 0-12.763-5.005-24.366-13.155-32.938 7.677-19.067 11.906-39.884 11.906-61.688 0-91.3-74.106-165.875-165.405-165.875zm0 19.126c81.2 0 146.78 65.55 146.78 146.75 0 17.833-3.172 34.924-8.967 50.72-5.81-2.513-12.237-3.907-18.97-3.907-26.396 0-47.78 21.414-47.78 47.81 0 10.59 3.454 20.362 9.28 28.283-23.065 15.084-50.66 23.843-80.343 23.843-81.2 0-147.22-65.55-147.22-146.75s66.02-146.75 147.22-146.75zm-1.063 19.625c-7.462 31.99-21.767 62.112-42.906 83.25-21.14 21.14-48.73 32.913-80.72 40.376 31.99 7.462 62.112 21.736 83.25 42.875 21.14 21.14 32.914 48.764 40.376 80.75 7.463-31.986 19.204-59.61 40.344-80.75 21.14-21.138 51.262-35.412 83.25-42.874-32.236-7.428-59.455-19.11-80.72-40.375-21.262-21.263-35.446-51.013-42.873-83.25zm.094 86.564c20.498 0 37.125 16.627 37.125 37.125 0 20.496-16.626 37.124-37.124 37.124-20.497 0-37.125-16.628-37.125-37.125 0-20.5 16.63-37.126 37.126-37.126z"
}));

/***/ }),

/***/ "./src/utils/options.js":
/*!******************************!*\
  !*** ./src/utils/options.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   teamSectionTemplates: () => (/* binding */ teamSectionTemplates)
/* harmony export */ });
/* harmony import */ var _blocks_team_section_utils_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blocks/team-section/utils/icons */ "./src/blocks/team-section/utils/icons.js");

const teamSectionTemplates = [{
  name: "Team Section",
  block: "tsb/team",
  icon: _blocks_team_section_utils_icons__WEBPACK_IMPORTED_MODULE_0__.teamMembersIcon,
  className: "team-section"
}, {
  name: "Orbit Team",
  block: "tsb/orbit-team",
  icon: _blocks_team_section_utils_icons__WEBPACK_IMPORTED_MODULE_0__.orbitTeamIcon,
  className: "orbit-team"
}];

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!************************************!*\
  !*** ./src/blocks/parent/index.js ***!
  \************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block.json */ "./src/blocks/parent/block.json");
/* harmony import */ var _Edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit */ "./src/blocks/parent/Edit.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/parent/editor.scss");
const {
  registerBlockType
} = wp.blocks;



registerBlockType(_block_json__WEBPACK_IMPORTED_MODULE_0__, {
  icon: "groups",
  edit: _Edit__WEBPACK_IMPORTED_MODULE_1__["default"]
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map