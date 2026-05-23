/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/team-section/Components/Common/Style.js":
/*!************************************************************!*\
  !*** ./src/blocks/team-section/Components/Common/Style.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/data'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());




const Style = ({
  attributes,
  id
}) => {
  const {
    members = [],
    columns,
    columnGap,
    rowGap,
    layout,
    textAlign,
    padding,
    photoWidth,
    photoMargin,
    nameTypo,
    nameMargin,
    titleTypo,
    titleMargin,
    sepMargin,
    bioTypo,
    bioMargin,
    socialSize,
    socialIconMargin,
    styles,
    theme = "default",
    options = {}
  } = attributes;
  const {
    hoverOnScale = true,
    isShowWaterMark = true
  } = options || {};
  const {
    bg = {},
    width = "100%",
    alignment = "center",
    padding: sectionPadding = {
      top: "0px",
      left: "0px",
      bottom: "0px",
      right: "0px"
    },
    margin = {
      top: "0px",
      left: "0px",
      bottom: "0px",
      right: "0px"
    },
    teamMember = {}
  } = styles || {};
  const mainSl = `#${id}`;
  const membersSl = `${mainSl} .tsbTeamMembers`;
  const gMemberSl = `${membersSl} .tsbMember`;
  const gMemberDetailsSl = `${gMemberSl} .memberDetails`;
  const gMemberSocialSl = `${gMemberDetailsSl} .memberSocial`;
  const tsbTeamMembersWrapperlSl = `${mainSl} .tsbTeamMembersWrapper`;
  const tsbTeamMembersTeamContainerSl = `${tsbTeamMembersWrapperlSl} .tsbTeamMembersTeamContainer`;
  const tsbTeamMembersTeamMemberSl = `${tsbTeamMembersTeamContainerSl} .tsbTeamMembersTeamMember`;
  const tsbTeamMembersTeamMemberThumbSl = `${tsbTeamMembersTeamMemberSl} .tsbTeamMembersTeamMemberThumb`;
  const tsbTeamMemberNameSl = `${mainSl} .tsbTeamMemberName`;
  const coFounderSl = `${tsbTeamMembersTeamContainerSl} .co-funder`;
  const tsbTeamMemberBioSl = `${tsbTeamMembersTeamMemberSl} .tsbTeamMemberBio`;
  const tsbTeamMemberUserNameSl = `${tsbTeamMembersTeamMemberSl} .tsbTeamMemberUserName`;
  const tsbTeamMembersWrapperTheme6Sl = `${mainSl} .tsbTeamMembersWrapperTheme-6`;
  const tsbTeamMembersWrapperTheme7Sl = `${mainSl} .tsbTeamMembersWrapperTheme-7`;
  const tsbTeamMembersWrapperTheme8Sl = `${mainSl} .tsbTeamMembersWrapperTheme-8`;
  const tsbTeamMembersWrapperTheme9Sl = `${mainSl} .tsbTeamMembersWrapperTheme-9`;
  const tsbTeamMembersWrapperTheme10Sl = `${mainSl} .tsbTeamMembersWrapperTheme-10`;
  const tsbTeamMembersWrapperTheme11Sl = `${mainSl} .tsbTeamMemberWrapperTheme-11`;
  // .threeDinfoCard${index}{
  // 	${getBackgroundCSS(card.backgroundImage)}
  // }
  // .threeDinfoCardContentBox${index}{
  // background:${card?.backgroundColor};
  // box-shadow:${getMultiShadowCSS(card?.shadow)};
  // padding:${getBoxCSS(styles?.card?.contentPadding)}
  // }
  // ${dateBoxSl}${index}{
  // box-shadow:${getMultiShadowCSS(card?.tagShadow)};

  // }
  const dynamicAlignment = members.map((card, index) => {
    return `${tsbTeamMembersWrapperTheme6Sl}  .tsbTeamMembersTeamMemberContentContainer-${index}{
			padding-top:${card?.paddingTop};
			}
					`;
  }).join("\n");
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", {
    dangerouslySetInnerHTML: {
      __html: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(`
		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("", nameTypo)?.googleFontLink}
		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("", titleTypo)?.googleFontLink}
		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("", bioTypo)?.googleFontLink}
		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("", teamMember?.name?.typo)?.googleFontLink}
		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("", teamMember?.title?.typo)?.googleFontLink}
		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("", teamMember?.bio?.typo)?.googleFontLink}
		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("", teamMember?.userName?.typo)?.googleFontLink}
		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("", styles?.waterMark?.typo)?.googleFontLink}
		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("", teamMember?.teamRing?.typo)?.googleFontLink}
		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("", teamMember?.serial?.typo)?.googleFontLink}
		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("", teamMember?.states?.label?.typo)?.googleFontLink}
		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("", teamMember?.states?.value?.typo)?.googleFontLink}
		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("", teamMember?.btn?.typo)?.googleFontLink}
		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(`${gMemberDetailsSl} .memberName`, nameTypo)?.styles}
		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(`${gMemberDetailsSl} .memberTitle`, titleTypo)?.styles}
		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(`${gMemberDetailsSl} .memberBio`, bioTypo)?.styles}
		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(`${tsbTeamMemberNameSl}`, teamMember?.name?.typo)?.styles}
		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(`${tsbTeamMembersWrapperTheme7Sl} .team-ring label`, teamMember?.name?.typo)?.styles}
		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(`${tsbTeamMembersWrapperTheme11Sl} .tsbTeamMemberBio`, teamMember?.bio?.typo)?.styles}
		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(`${coFounderSl}:after`, teamMember?.title?.typo)?.styles} 
		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(` ${tsbTeamMembersWrapperTheme7Sl} #center`, teamMember?.teamRing?.typo)?.styles} 
		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(` ${tsbTeamMembersWrapperTheme10Sl} .tsbTeamMember_content_card_number_box`, teamMember?.serial?.typo)?.styles} 
		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(` ${tsbTeamMembersWrapperTheme10Sl} .tsbTeamMember_content_card_stat_label`, teamMember?.states?.label?.typo)?.styles} 
		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(` ${tsbTeamMembersWrapperTheme10Sl} .tsbTeamMember_content_card_stat_value`, teamMember?.states?.value?.typo)?.styles} 
		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(` ${tsbTeamMembersWrapperTheme10Sl} .tsbTeamMember_btn`, teamMember?.btn?.typo)?.styles} 
		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(` ${tsbTeamMembersWrapperTheme11Sl} .tsbTeamMember_view_btn`, teamMember?.btn?.typo)?.styles} 
		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(`${tsbTeamMembersWrapperTheme6Sl} .tsbTeamMembersTeamContainer .tsbTeamMemberTitle`, teamMember?.title?.typo)?.styles} 
	${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(`${tsbTeamMembersWrapperTheme8Sl} .tsbTeamMembersTeamContainer .tsbTeamMemberTitle`, teamMember?.title?.typo)?.styles} 
		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(`${tsbTeamMemberBioSl}`, teamMember?.bio?.typo)?.styles} 
		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(`${tsbTeamMemberUserNameSl}`, teamMember?.userName?.typo)?.styles} 
		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(`${tsbTeamMembersWrapperTheme6Sl} .tsbTeamMembersBgWatermark`, styles?.waterMark?.typo)?.styles} 
		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(`.tsbTeamMemberTitle`, teamMember?.title?.typo)?.styles} 

		${membersSl}{
			grid-gap: ${rowGap} ${columnGap};
		}
		${gMemberSl}{
			text-align: ${textAlign};
			padding: ${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(padding)};
		}
		${gMemberSl} .memberPhoto{
			width: ${photoWidth};
			margin: ${"horizontal" === layout ? "0 20px 0 0" : `${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(photoMargin)}`};
		}
		${gMemberDetailsSl} .memberName{
			margin: ${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(nameMargin)};
		}
		${gMemberDetailsSl} .memberTitle{
			margin: ${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(titleMargin)};
		}
		${gMemberDetailsSl} .memberSeparator{
			margin: ${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(sepMargin)};
		}
		${gMemberDetailsSl} .memberBio{
			margin: ${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(bioMargin)};
		}
		${gMemberSocialSl} .icon,
		${gMemberSocialSl} .memberSocialAdd{
			margin: ${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(socialIconMargin)};
		}
		${gMemberSocialSl} .icon i,
		${gMemberSocialSl} .memberSocialAdd i{
			font-size: ${socialSize};
			width: ${socialSize};
		}

		${members.map((member, index) => {
        const {
          background,
          border,
          shadow,
          photoBorder,
          nameColor,
          titleColor,
          separator,
          bioColor,
          socialIconColors
        } = member;
        const memberSl = `${mainSl} #tsbMember-${index}`;
        const memberDetailsSl = `${memberSl} .memberDetails`;
        const memberSocialSl = `${memberDetailsSl} .memberSocial`;
        return `
				${memberSl}{
					${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(background)}
					${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(border)}
					box-shadow: ${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(shadow?.shadow || shadow)};
				}
				${memberSl} .memberPhoto{
					${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(photoBorder)}
				}
				${memberDetailsSl} .memberName{
					color: ${nameColor};
				}
				${memberDetailsSl} .memberTitle{
					color: ${titleColor};
				}
				${memberSl} .memberSeparator{
					${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(separator)}
				}
				${memberDetailsSl} .memberBio{
					color: ${bioColor};
				}
				${memberSocialSl}{
					justify-content: ${"center" === textAlign ? "center" : "right" === textAlign ? "flex-end" : "flex-start"}
				}
				${memberSocialSl} li a{
					${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(socialIconColors)}
				}
				${memberSocialSl} li.isSelected{
					border: 2px solid ${socialIconColors?.bg};
				}
				${memberSocialSl} li.memberSocialAdd button i{
					color: ${socialIconColors?.bg};
				}
			`;
      }).join(" ")}

	  

		${tsbTeamMembersWrapperlSl}{
		justify-content: ${alignment};
		margin:${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(margin)};
		
		}
		${tsbTeamMembersTeamContainerSl}{
		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(bg)}
		width:${width};
		padding:${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(sectionPadding)};
        grid-template-columns: repeat(${columns?.desktop},1fr);
		column-gap: ${columnGap}; 
        row-gap: ${rowGap};     
 
		}
		
		${tsbTeamMembersTeamMemberSl}{
		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.bg)}
		padding:${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.padding)};
		}
		${tsbTeamMembersTeamMemberSl}:nth-of-type(even){
		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.evenItemBg)}
		}
			${tsbTeamMembersTeamMemberSl}:nth-of-type(even) .tsbTeamMembersTeamMemberThumb {
			${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.photo?.evenItemPhotoBg)}
			}

		${tsbTeamMembersTeamMemberThumbSl}{
		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.photo?.bg)}
		width:${teamMember?.photo?.size};
		height:${teamMember?.photo?.size};
		border-radius:${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.photo?.radius)};
		padding:${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.photo?.padding)};
		}
		${tsbTeamMembersTeamMemberThumbSl} img {
		filter: grayscale(${teamMember?.photo?.grayScale});
		}
		${tsbTeamMemberNameSl}{
		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.name?.colors)}
		padding:${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.name?.padding)};
		border-radius:${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.name?.radius)};
		}
		
		${coFounderSl}:after{
		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.title?.colors)}
		padding:${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.title?.padding)};
		border-radius:${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.title?.radius)};
		}

		${tsbTeamMemberBioSl}{
		color:${teamMember?.bio?.color};
		}

		${tsbTeamMemberUserNameSl}{
		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.userName?.colors)}
		padding:${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.userName?.padding)};
		border-radius:${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.userName?.radius)};
		}
		${mainSl}{
		
		${["theme6", "theme8", "theme9", "theme10", "theme11", "theme12"].includes(theme) && `
			display:flex;
		justify-content:${alignment};

			`}
		}
			


		${tsbTeamMembersWrapperTheme6Sl}{
		${isShowWaterMark && "padding-top:100px;"}
		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(bg)}
		width:${width};
	    margin:${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(margin)};

		}

		${tsbTeamMembersWrapperTheme6Sl} .tsbTeamMembersTeamContainer{
		
		grid-template-columns: repeat(${columns?.desktop}, 1fr);
		column-gap: ${columnGap}; 
        row-gap: ${rowGap};
		padding:${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(sectionPadding)};
		}

		${tsbTeamMembersWrapperTheme6Sl} .tsbTeamMembersTeamContainer .tsbTeamMembersTeamMember{
		 min-height:${teamMember?.height?.desktop};
		 img{
		 min-height: 100%;
         height: ${teamMember?.height?.desktop};
		 filter: grayscale(${teamMember?.grayScale});
		 }
		}


		${tsbTeamMembersWrapperTheme6Sl} .tsbTeamMembersTeamContainer .tsbTeamMembersTeamMember::after{
		 ${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.bg)}
		}
		 ${tsbTeamMembersWrapperTheme6Sl} .tsbTeamMembersTeamContainer .tsbTeamMembersTeamMemberShape::before{
		  ${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.shape?.bg)}
		   width: ${teamMember?.shape?.width};
          height: ${teamMember?.shape?.height};
		 }
		  ${tsbTeamMemberNameSl}{
			color:${teamMember?.name?.color};
			margin:${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.name?.margin)};
			}
			${tsbTeamMembersWrapperTheme6Sl} .tsbTeamMembersTeamContainer .tsbTeamMemberTitle{
			color:${teamMember?.title?.color};
			margin:${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.title?.margin)};
			}

			${tsbTeamMembersWrapperTheme6Sl} .tsbTeamMembersTeamContainer .tsbTeamMembersTeamMember .tsbTeamMemberSocial{
			                        margin:${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.icon?.margin)};
									gap:${teamMember?.icon?.gap}px;
									i {
							color: ${teamMember?.icon?.color};
							font-size: ${teamMember?.icon?.size}px;

							&:hover {
							color: ${teamMember?.icon?.hoverColor};
							}
						}
			}

       ${tsbTeamMembersWrapperTheme6Sl}  .tsbTeamMembersBgWatermark{
	   color:${styles?.waterMark?.color || "#1f1f1f"};
	   transform: translateX(-50%) translateY(${styles?.waterMark?.translateY}) ;
	   

	   }

	   ${tsbTeamMembersWrapperTheme7Sl}{
	  ${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(bg)}
	  padding:${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(sectionPadding)};
	  margin:${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(margin)};
	   }
	  ${tsbTeamMembersWrapperTheme7Sl} .team-ring label{
	   width: ${teamMember?.photo?.width || "88px"};
       height:${teamMember?.photo?.height || "88px"};
	   border-radius: ${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.photo?.radius || {
        top: "50%",
        left: "50%",
        bottom: "50%",
        right: "50%"
      })};
	    color: ${teamMember?.name?.color};	
	   
	  }
		${tsbTeamMembersWrapperTheme7Sl} .team-ring img {
				width: ${teamMember?.photo?.width || "88px"};
				height: ${teamMember?.photo?.height || "88px"};
				border-radius: ${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.photo?.radius || {
        top: "50%",
        left: "50%",
        bottom: "50%",
        right: "50%"
      })};
				object-fit: ${teamMember?.photo?.object};
				
				}
		${tsbTeamMembersWrapperTheme7Sl} .team-ring input:checked + label img {
					transform: scale(${teamMember?.photo?.checkedScale || 2});
					}
					${tsbTeamMembersWrapperTheme7Sl} .team-ring input:checked + label svg {
						
						transform: translate(-50%, -50%) scale(${teamMember?.name?.textScale || 2.30}) rotate(${teamMember?.name?.rotate || 90}deg);
						
						}
		 ${tsbTeamMembersWrapperTheme7Sl} #center{
					width: ${teamMember?.teamRing?.width || '150px'};
					height: ${teamMember?.teamRing?.height || '150px'};
					${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.teamRing?.bg)}

					border-radius: ${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.teamRing?.radius)};
							}
		${tsbTeamMembersWrapperTheme8Sl}{
		 ${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(bg)}
		width:${width};
	    margin:${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(margin)};
		}
			
	  ${tsbTeamMembersWrapperTheme8Sl} .tsbTeamMembersTeamContainer{
	  grid-template-columns: repeat(${columns?.desktop},1fr);
	  column-gap: ${columnGap}; 
      row-gap: ${rowGap};
	  padding:${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(sectionPadding)};
	 
	  }

   ${tsbTeamMembersWrapperTheme8Sl} .tsbTeamMembersTeamContainer .tsbTeamMember .tsbTeamMember_img_wrapper img{
     width:${teamMember.memberPhoto?.width};
     height:${teamMember.memberPhoto?.height};
     object-fit: ${teamMember.memberPhoto?.objectFit}; 
	 filter: grayscale(${teamMember.memberPhoto?.grayScale});
	 

   }
		 ${tsbTeamMembersWrapperTheme8Sl} .tsbTeamMembersTeamContainer .tsbTeamMember .tsbTeamMember_img_wrapper:hover{
		 img {
          filter: grayscale(${teamMember.memberPhoto?.hoverGrayScale});
        }
		 }

		 ${tsbTeamMembersWrapperTheme8Sl} .tsbTeamMembersTeamContainer .tsbTeamMember .social-icon{
		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.social?.bg)}
		padding:${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.social?.padding)};
		 i{
		 color:${teamMember?.social?.color};
		 font-size:${teamMember?.social?.size}px;
		 }
		   &:hover i {
          color: ${teamMember?.social?.hoverColor} !important;
        }
		 }
		${tsbTeamMembersWrapperTheme8Sl} .tsbTeamMembersTeamContainer .tsbTeamMember .tsbTeamMember_content_wrapper .tsbTeamMember_content{
	    ${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.content?.bg)}
		padding:${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.content?.padding)};
		 svg {
              width: ${teamMember?.icon?.size}px;
              height: ${teamMember?.icon?.size}px;
              fill: ${teamMember?.icon?.color};
              color: ${teamMember?.icon?.color};
    
            }
		}
		${tsbTeamMembersWrapperTheme8Sl} .tsbTeamMembersTeamContainer .tsbTeamMember:hover .tsbTeamMember_content_wrapper .tsbTeamMember_content{
	    ${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.content?.hoverBg)}
		  h3,
        p,
        svg {
          color:${teamMember?.content?.hoverColor};
          fill:${teamMember?.content?.hoverColor};

        }
		}
		${tsbTeamMembersWrapperTheme8Sl} .tsbTeamMembersTeamContainer .tsbTeamMember .tsbTeamMember_content_wrapper .tsbTeamMember_content .tsbTeamMemberName{
		 color:${teamMember?.name?.color};
		 
		}
		 ${tsbTeamMembersWrapperTheme8Sl} .tsbTeamMembersTeamContainer .tsbTeamMember .tsbTeamMember_content_wrapper .tsbTeamMember_content .tsbTeamMemberTitle{
		 color:${teamMember?.title?.color};
		 margin:${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.title?.margin)};
		}

        ${tsbTeamMembersWrapperTheme9Sl}{
		 ${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles?.bg)}
		 width:${styles?.width};
		 margin:${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles?.margin)};

		
		}
		${tsbTeamMembersWrapperTheme9Sl} .tsbTeamMembersTeamContainer{
		 padding:${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(sectionPadding)};
		grid-template-columns: repeat(${columns.desktop}, 1fr);
		column-gap:${columnGap};
		row-gap:${rowGap};
		} 
		${tsbTeamMembersWrapperTheme9Sl} .tsbTeamMembersTeamContainer .tsbTeamMember .tsbTeamMember_img_wrapper {
		height:${teamMember?.memberPhoto?.height};
		img{
		object-fit: ${teamMember?.memberPhoto?.objectFit};
		 filter: grayscale(${teamMember?.memberPhoto?.grayScale});
		}
		}
		${tsbTeamMembersWrapperTheme9Sl} .tsbTeamMembersTeamContainer .tsbTeamMember .tsbTeamMember_img_wrapper:hover{
		img{
		 filter: grayscale(${teamMember?.memberPhoto?.hoverGrayScale});
		  transform: scale(${teamMember?.memberPhoto?.hoverScale});
		}

		}
		 ${tsbTeamMembersWrapperTheme9Sl} .tsbTeamMembersTeamContainer .tsbTeamMember .tsbTeamMember_img_wrapper .tsbTeamMember_social_wrapper{
		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.memberPhoto?.bg)}

		 }
        ${tsbTeamMembersWrapperTheme9Sl}  .tsbTeamMembersTeamContainer .tsbTeamMember .tsbTeamMember_social_wrapper .tsbTeamMember_social .tsbMember_social_link{
	    width: ${teamMember?.social?.width};
        height: ${teamMember?.social?.height};
        border-radius: ${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.social?.radius)};
		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.social?.colors)}
		i{font-size:${teamMember?.social?.size}px;}
        
		}
		${tsbTeamMembersWrapperTheme9Sl}  .tsbTeamMembersTeamContainer .tsbTeamMember .tsbTeamMember_social_wrapper .tsbTeamMember_social .tsbMember_social_link:hover{
		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.social?.hoverColors)}
		} 
		${tsbTeamMembersWrapperTheme9Sl} .tsbTeamMemberName{
		color:${teamMember?.name?.color};
		margin:${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.name?.margin)};
		} 
		${tsbTeamMembersWrapperTheme9Sl} .tsbTeamMemberTitle{
		color:${teamMember?.title?.color};
		margin:${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.title?.margin)};
		}

		${tsbTeamMembersWrapperTheme11Sl}{
		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles?.bg)}
		width:${styles?.width};
		padding:${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles?.padding)};
		margin:${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles?.margin)};
		  .tsbTeamMember-grid {
		  grid-template-columns: repeat(${columns?.desktop},1fr);
		  column-gap:${columnGap};
		  row-gap:${rowGap};
		   
		   .tsbTeamMember-card{
            ${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.content?.bg)}
			border-radius:${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.content?.radius)};
			box-shadow:${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.content?.shadow)};
			.tsbTeamMemberTitle{
			color:${teamMember?.title?.color};
			margin:${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.title?.margin)};
			}
			.tsbTeamMemberBio{
			color:${teamMember?.bio?.color};
			}
			.tsbTeamMember-gradient-overlay {
			${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.memberPhoto?.bg)}
			}
			.tsbTeamMember_view_btn{
			color:${teamMember?.btn?.color};
			gap:${teamMember?.btn?.gap}px;
			  svg {
         
          width: ${teamMember?.btn?.iconSize}px;
          height: ${teamMember?.btn?.iconSize}px;
        }
        span{
          width: ${teamMember?.btn?.iconSize}px;
          height: ${teamMember?.btn?.iconSize}px;
        }
			}
		.tsbTeamMember-img {
		height:${teamMember?.memberPhoto?.height};
		object-fit:${teamMember?.memberPhoto?.objectFit};
		
		}
			
		   }
		  }
		}


${tsbTeamMembersWrapperTheme11Sl} .tsbTeamMember-card:hover{
 .tsbTeamMember-img {
        transform: scale(${teamMember?.memberPhoto?.hoverScale});
       
      }
}







		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/data'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())}{
		${theme === "theme6" && dynamicAlignment}
		${tsbTeamMembersTeamMemberSl}:hover{
		transform: scale(${hoverOnScale ? "1" : "0.85"});
		}
		}

			${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/data'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())} {
				${tsbTeamMembersWrapperTheme11Sl}{
		  .tsbTeamMember-grid {
		  grid-template-columns: repeat(${columns?.tablet},1fr);
		  }
		}

		${theme === "theme6" && dynamicAlignment}

			${tsbTeamMembersTeamContainerSl} {
				grid-template-columns: repeat(${columns?.tablet}, 1fr);


			}

			${tsbTeamMembersWrapperTheme6Sl} .tsbTeamMembersTeamContainer {
				grid-template-columns: repeat(${columns?.tablet}, 1fr);
			}
					${tsbTeamMembersWrapperTheme6Sl} .tsbTeamMembersTeamContainer .tsbTeamMembersTeamMember{
		 min-height:${teamMember?.height?.tablet};
		 img{
		 min-height: 100%;
         height: ${teamMember?.height?.tablet};
		 filter: grayscale(${teamMember?.grayScale});
		 }
		}
		 ${tsbTeamMembersWrapperTheme8Sl} .tsbTeamMembersTeamContainer{
	  grid-template-columns: repeat(${columns?.tablet},1fr);
	  }
	  ${tsbTeamMembersWrapperTheme9Sl} .tsbTeamMembersTeamContainer{
		grid-template-columns: repeat(${columns.tablet}, 1fr);
		}

			}
		${tsbTeamMembersWrapperTheme10Sl}{
		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles?.bg)}
		margin:${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles?.margin)};
		padding:${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(styles?.padding)};
		width:${styles?.width};
		}
		${tsbTeamMembersWrapperTheme10Sl}  {
		.tsbTeamMember_img_wrap{
		 max-width:${teamMember?.memberPhoto?.width};
            
		   .tsbTeamMember_img_shadow{
		   ${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.memberPhoto?.bg)}

		   }

		  .tsbTeamMember_img_profile {
		  height:${teamMember?.memberPhoto?.height};
		  object-fit: ${teamMember?.memberPhoto?.objectFit};
		  }
		}
		
		  .tsbTeamMember_content_card{
		   ${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.content?.bg)}
		  padding:${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.content?.padding)};
		  border-radius:${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.content?.radius)};
		  box-shadow:${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.content?.shadow)};
		  
		  }

		  .team-row:hover .tsbTeamMember_img_shadow {
          transform: rotate(${teamMember?.content?.hoverRotate}deg);
        }
		  .tsbTeamMember_content_card_number_box{
		  ${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.serial?.colors)}
          width: ${teamMember?.serial?.width};
          height: ${teamMember?.serial?.height};
          border-radius: ${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.serial?.radius)};
		  }
		  .tsbTeamMemberTitle{
		  color:${teamMember?.title?.color};
		  margin:${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.title?.margin)};
		  }
		  .tsbTeamMember_content_card_stats_grid{
		   border-top:${teamMember?.states?.border?.top?.width} ${teamMember?.states?.border?.top?.style} ${teamMember?.states?.border?.top?.color};
		   border-right:${teamMember?.states?.border?.right?.width} ${teamMember?.states?.border?.right?.style} ${teamMember?.states?.border?.right?.color};
		   border-bottom:${teamMember?.states?.border?.bottom?.width} ${teamMember?.states?.border?.bottom?.style} ${teamMember?.states?.border?.bottom?.color};
		   border-left:${teamMember?.states?.border?.left?.width} ${teamMember?.states?.border?.bottom?.style} ${teamMember?.states?.border?.bottom?.color};
		   padding:${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.states?.padding)};
		   margin:${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.states?.margin)};
		   
		  }
		   .tsbTeamMember_content_card_stat{
		   width:${teamMember?.states?.width};
		   height:${teamMember?.states?.height};
		   border-radius:${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.states?.radius)};
		   svg{
           width:${teamMember?.states?.size}px;
		   height:${teamMember?.states?.size}px;
		   }

		   }
		   .tsbTeamMember_content_card_stat_value{
		   color:${teamMember?.states?.value?.color};
		   }
		   .tsbTeamMember_content_card_stat_label{
		   color:${teamMember?.states?.label?.color};

		   }
		   .tsbTeamMember_content_card_stat_one{
		   ${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.states?.iconOne?.colors)}
		    svg{
			fill:${teamMember?.states?.iconOne?.colors?.color};
			
			}
		   }
			   .tsbTeamMember_content_card_stat_two{
		   ${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.states?.iconTwo?.colors)}
		    svg{
			fill:${teamMember?.states?.iconTwo?.colors?.color};
			
			}
		   }
			.tsbTeamMember_btn{
			 ${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.btn?.colors)}
			 padding:${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.btn?.padding)};
			 border-radius:${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/getCSS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(teamMember?.btn?.radius)};
			}
		}



		${Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../bpl-tools/utils/data'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())}{
			${tsbTeamMembersWrapperTheme11Sl}{
		  .tsbTeamMember-grid {
		  grid-template-columns: repeat(${columns?.mobile},1fr);
		  }
		}

		${tsbTeamMembersTeamContainerSl}{
		 grid-template-columns: repeat(${columns?.mobile},1fr);

		}

		${tsbTeamMembersWrapperTheme6Sl} .tsbTeamMembersTeamContainer{
		grid-template-columns: repeat(${columns?.mobile}, 1fr);
		}

		 ${tsbTeamMembersWrapperTheme6Sl} .tsbTeamMembersTeamContainer .tsbTeamMembersTeamMember{
		 min-height:${teamMember?.height?.mobile};
		 img{
		 min-height: 100%;
         height: ${teamMember?.height?.mobile};
		 }
		}
		   ${members.map((card, index) => {
        return `
        ${tsbTeamMembersWrapperTheme6Sl} .tsbTeamMembersTeamMemberContentContainer-${index}{
          padding-top: 0 !important;
        }
      `;
      }).join("\n")}
		 ${tsbTeamMembersWrapperTheme8Sl} .tsbTeamMembersTeamContainer{
	  grid-template-columns: repeat(${columns?.mobile},1fr);
	  }
	  ${tsbTeamMembersWrapperTheme9Sl} .tsbTeamMembersTeamContainer{
		grid-template-columns: repeat(${columns.mobile}, 1fr);
		}

		}
		`).replace(/\s+/g, " ")
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Style);

/***/ }),

/***/ "./src/blocks/team-section/Components/Common/themes/Theme10.js":
/*!*********************************************************************!*\
  !*** ./src/blocks/team-section/Components/Common/themes/Theme10.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



const Theme10 = ({
  attributes,
  ReusableRichText,
  setAttributes
}) => {
  const {
    members = [],
    options = {},
    isLinkNewTab = "false",
    isSocial = true,
    isTitle = true
  } = attributes || {};
  const {
    isShowSereal = true,
    isShowBgShape = true
  } = options;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
    className: "tsbTeamMembersWrapperTheme-10"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, members.map((member, index) => {
    const {
      label = "Connect on LinkedIn",
      link = "#"
    } = member?.btn || {};
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      key: index,
      className: `team-row ${index % 2 === 1 ? "reverse" : ""}`
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "tsbTeamMember_img_wrap"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "tsbTeamMember_img_box"
    }, isShowBgShape && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "tsbTeamMember_img_shadow"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      className: "tsbTeamMember_img_profile",
      src: member?.photo?.url || "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400",
      alt: ""
    }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "tsbTeamMember_content_card"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "profile-header"
    }, isShowSereal && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "tsbTeamMember_content_card_number_box"
    }, index + 1), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, ReusableRichText && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ReusableRichText, {
      className: "tsbTeamMemberName",
      tagName: "p",
      value: member?.name,
      placeholder: "name...",
      onChange: v => setAttributes({
        members: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(members, v, index, "name")
      })
    }), !ReusableRichText && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "tsbTeamMemberName",
      dangerouslySetInnerHTML: {
        __html: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(member?.name || "")
      }
    }), ReusableRichText && isTitle && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ReusableRichText, {
      className: "tsbTeamMemberTitle",
      tagName: "p",
      value: member?.title,
      placeholder: "title...",
      onChange: v => setAttributes({
        members: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(members, v, index, "title")
      })
    }), !ReusableRichText && isTitle && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "tsbTeamMemberTitle",
      dangerouslySetInnerHTML: {
        __html: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(member?.title || "")
      }
    }))), isSocial && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "tsbTeamMember_content_card_stats_grid"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "stat-box"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "tsbTeamMember_content_card_stat tsbTeamMember_content_card_stat_one"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      dangerouslySetInnerHTML: {
        __html: member?.state?.stateOne?.icon || "<svg width=\"32\" height=\"32\" stroke=\"currentColor\" fill=\"none\" stroke-width=\"2\" viewBox=\"0 0 24 24\"><path d=\"M6 3v5a6 6 0 0 0 12 0V3\" /><path d=\"M6 3h12\" /><path d=\"M6 8h12\" /><path d=\"M9 21l3-3 3 3\" /></svg>"
      }
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, ReusableRichText && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ReusableRichText, {
      className: "tsbTeamMember_content_card_stat_value",
      tagName: "p",
      value: member?.state?.stateOne?.value,
      placeholder: "value...",
      onChange: v => setAttributes({
        members: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(members, v, index, "state", "stateOne", "value")
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ReusableRichText, {
      className: "tsbTeamMember_content_card_stat_label",
      tagName: "p",
      value: member?.state?.stateOne?.label,
      placeholder: "label...",
      onChange: v => setAttributes({
        members: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(members, v, index, "state", "stateOne", "label")
      })
    })), !ReusableRichText && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "tsbTeamMember_content_card_stat_value",
      dangerouslySetInnerHTML: {
        __html: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(member?.state?.stateOne?.value || "")
      }
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "tsbTeamMember_content_card_stat_label",
      dangerouslySetInnerHTML: {
        __html: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(member?.state?.stateOne?.label || "")
      }
    })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "stat-box"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "tsbTeamMember_content_card_stat tsbTeamMember_content_card_stat_two"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      dangerouslySetInnerHTML: {
        __html: member?.state?.stateTwo?.icon || "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polygon points=\"13 2 3 14 12 14 11 22 21 10 12 10 13 2\"></polygon></svg>"
      }
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, ReusableRichText && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ReusableRichText, {
      className: "tsbTeamMember_content_card_stat_value",
      tagName: "p",
      value: member?.state?.stateTwo?.value,
      placeholder: "value...",
      onChange: v => setAttributes({
        members: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(members, v, index, "state", "stateTwo", "value")
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ReusableRichText, {
      className: "tsbTeamMember_content_card_stat_label",
      tagName: "p",
      value: member?.state?.stateTwo?.label,
      placeholder: "label...",
      onChange: v => setAttributes({
        members: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(members, v, index, "state", "stateTwo", "label")
      })
    })), !ReusableRichText && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "tsbTeamMember_content_card_stat_value",
      dangerouslySetInnerHTML: {
        __html: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(member?.state?.stateTwo?.value || "")
      }
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "tsbTeamMember_content_card_stat_label",
      dangerouslySetInnerHTML: {
        __html: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(member?.state?.stateTwo?.label || "")
      }
    }))))), ReusableRichText && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "tsbTeamMember_btn_wrap"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ReusableRichText, {
      className: "tsbTeamMember_btn",
      tagName: "span",
      value: label,
      placeholder: "btn text",
      onChange: v => setAttributes({
        members: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(members, v, index, "btn", "label")
      })
    })), !ReusableRichText && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: link,
      target: isLinkNewTab ? "_blank" : "_self",
      rel: "noreferrer",
      style: {
        textDecoration: "none",
        color: "inherit"
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      className: "tsbTeamMember_btn",
      dangerouslySetInnerHTML: {
        __html: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(label)
      }
    }))));
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Theme10);

/***/ }),

/***/ "./src/blocks/team-section/Components/Common/themes/Theme11.js":
/*!*********************************************************************!*\
  !*** ./src/blocks/team-section/Components/Common/themes/Theme11.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



const Theme11 = ({
  attributes,
  ReusableRichText,
  setAttributes
}) => {
  const {
    members = [],
    isLinkNewTab = "false",
    isTitle = true
  } = attributes || {};
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
    className: "tsbTeamMemberWrapperTheme-11"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tsbTeamMember-grid"
  }, members.map((member, index) => {
    const {
      name,
      title,
      photo,
      bio,
      btn
    } = member || {};
    const {
      label = "view profile",
      link = "#",
      icon = "<svg width=\"20\" height=\"20\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path d=\"M5 12h14\" /><path d=\"M12 5l7 7-7 7\" /></svg>"
    } = btn || {};
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      key: index,
      className: "tsbTeamMember-card"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "tsbTeamMember-inner"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "tsbTeamMember-img-box"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      className: "tsbTeamMember-img",
      src: photo?.url || "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400",
      alt: ""
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "tsbTeamMember-gradient-overlay"
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "tsbTeamMember-text-box"
    }, isTitle && !ReusableRichText && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "tsbTeamMemberTitle",
      dangerouslySetInnerHTML: {
        __html: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(title || "")
      }
    }), isTitle && ReusableRichText && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ReusableRichText, {
      className: "tsbTeamMemberTitle",
      value: title,
      tagName: "p",
      placeholder: "title...",
      onChange: v => setAttributes({
        members: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(members, v, index, "title")
      })
    }), ReusableRichText ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ReusableRichText, {
      className: "tsbTeamMemberName",
      value: name,
      placeholder: "name...",
      tagName: "h3",
      onChange: v => setAttributes({
        members: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(members, v, index, "name")
      })
    }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
      className: "tsbTeamMemberName",
      dangerouslySetInnerHTML: {
        __html: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(name || "")
      }
    }), ReusableRichText ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ReusableRichText, {
      className: "tsbTeamMemberBio",
      value: bio,
      placeholder: "bio...",
      tagName: "p",
      onChange: v => setAttributes({
        members: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(members, v, index, "bio")
      })
    }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "tsbTeamMemberBio",
      dangerouslySetInnerHTML: {
        __html: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(bio || "")
      }
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      style: {
        textDecoration: "none",
        border: "none",
        boxShadow: "none",
        outline: "none"
      },
      target: isLinkNewTab ? "_blank" : "_self",
      rel: "noreferrer",
      href: link,
      className: "tsbTeamMember_view_btn"
    }, label, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      dangerouslySetInnerHTML: {
        __html: icon
      }
    })))));
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Theme11);

/***/ }),

/***/ "./src/blocks/team-section/Components/Common/themes/Theme5.js":
/*!********************************************************************!*\
  !*** ./src/blocks/team-section/Components/Common/themes/Theme5.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



const Theme5 = ({
  attributes,
  ReusableRichText,
  setAttributes
}) => {
  const {
    members = [],
    isLinkNewTab = false,
    isTitle = true,
    isBio = true,
    options = {}
  } = attributes || {};
  const {
    showUserName = true
  } = options || {};
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tsbTeamMembersWrapper "
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    className: "tsbTeamMembersTeamContainer"
  }, members?.map((member, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    key: index,
    className: `tsbTeamMembersTeamMember ${isTitle && "co-funder"}`,
    "data-role": member?.title
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tsbTeamMembersTeamMemberThumb"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: member?.photo?.url || "https://templates.bplugins.com/wp-content/uploads/2025/11/team-section-member-1.png"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tsbTeamMembersTeamMemberThumbDescription"
  }, ReusableRichText ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ReusableRichText, {
    placeholder: " name ...",
    onChange: value => setAttributes({
      members: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(members, value, index, "name")
    }),
    tagName: "h3",
    className: "tsbTeamMemberName",
    value: member?.name
  }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "tsbTeamMemberName",
    dangerouslySetInnerHTML: {
      __html: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(member?.name)
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, ReusableRichText && isBio && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ReusableRichText, {
    tagName: "span",
    placeholder: " bio...",
    className: "tsbTeamMemberBio",
    value: member?.bio,
    onChange: value => setAttributes({
      members: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(members, value, index, "bio")
    })
  }), !ReusableRichText && isBio && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "tsbTeamMemberBio",
    dangerouslySetInnerHTML: {
      __html: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(member?.bio)
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), ReusableRichText && showUserName && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ReusableRichText, {
    placeholder: " username...",
    className: "tsbTeamMemberUserName",
    value: member?.userName,
    tagName: "a",
    onChange: value => setAttributes({
      members: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(members, value, index, "userName")
    })
  }), !ReusableRichText && showUserName && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    className: "tsbTeamMemberUserName",
    href: member?.userNameLink || "",
    target: isLinkNewTab ? "_blank" : "_self",
    rel: "noreferrer",
    dangerouslySetInnerHTML: {
      __html: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(member?.userName)
    }
  })))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Theme5);

/***/ }),

/***/ "./src/blocks/team-section/Components/Common/themes/Theme6.js":
/*!********************************************************************!*\
  !*** ./src/blocks/team-section/Components/Common/themes/Theme6.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



const Theme6 = ({
  attributes,
  ReusableRichText,
  setAttributes
}) => {
  const {
    members = [],
    isLinkNewTab = false,
    isTitle = true,
    options = {},
    isSocial = true
  } = attributes || {};
  const {
    isShowWaterMark = true,
    isShowShape = true,
    waterMark = "TEAM"
  } = options;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
    className: "tsbTeamMembersWrapperTheme-6"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, isShowWaterMark && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "tsbTeamMembersBgWatermark"
  }, waterMark), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tsbTeamMembersTeamContainer"
  }, members.map((member, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: index,
    className: `tsbTeamMembersTeamMemberContentContainer-${index}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: index,
    className: `tsbTeamMembersTeamMember  ${isShowShape && "tsbTeamMembersTeamMemberShape"}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: member?.photo?.url || "https://templates.bplugins.com/wp-content/uploads/2025/11/team-section-member-1.png",
    alt: "Antonia Moore"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tsbTeamMembersTeamMember-content"
  }, ReusableRichText ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ReusableRichText, {
    placeholder: " name ...",
    onChange: value => setAttributes({
      members: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(members, value, index, "name")
    }),
    tagName: "h3",
    className: "tsbTeamMemberName",
    value: member?.name
  }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "tsbTeamMemberName",
    dangerouslySetInnerHTML: {
      __html: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(member?.name)
    }
  }), isTitle && ReusableRichText ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ReusableRichText, {
    placeholder: " title ...",
    onChange: value => setAttributes({
      members: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(members, value, index, "title")
    }),
    tagName: "p",
    className: "tsbTeamMemberTitle",
    value: member?.title
  }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "tsbTeamMemberTitle",
    dangerouslySetInnerHTML: {
      __html: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(member?.title)
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    className: "tsbTeamMemberSocial"
  }, isSocial && member?.social?.map((social, i) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    key: i
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: social?.link,
    target: isLinkNewTab ? "_blank" : "_self",
    rel: "noreferrer"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: social?.icon?.class
  }))))))))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Theme6);

/***/ }),

/***/ "./src/blocks/team-section/Components/Common/themes/Theme7.js":
/*!********************************************************************!*\
  !*** ./src/blocks/team-section/Components/Common/themes/Theme7.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



const Theme7 = ({
  attributes,
  ReusableRichText,
  setAttributes
}) => {
  const {
    members = [],
    options = {}
  } = attributes || {};
  const {
    isShowWaterMark = true,
    waterMark = "THE TEAM"
  } = options;
  const radiosRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]);
  const handleRadioClick = index => e => {
    e.preventDefault();
    const radio = radiosRef.current[index];
    setTimeout(() => {
      radio.checked = !radio.checked;
    }, 0);
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tsbTeamMembersWrapperTheme-7"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "team-ring",
    style: {
      "--total": members.length,
      "--radius": `${Math.min(20, members.length) * 0.7}rem`,
      "--avatar-size": `${Math.max(40, 100 - members.length)}px`
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "center"
  }, isShowWaterMark && ReusableRichText && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ReusableRichText, {
    value: waterMark,
    tagName: "span",
    onChange: val => setAttributes({
      options: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(options, val, "waterMark")
    })
  }), isShowWaterMark && !ReusableRichText && waterMark), members.map((member, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    className: "tsbInputTpye",
    type: "radio",
    name: "avatar",
    id: `r${index}`,
    hidden: true,
    ref: el => radiosRef.current[index] = el,
    onClick: handleRadioClick(index),
    key: index
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "avatar",
    htmlFor: `r${index}`,
    style: {
      "--i": index
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: member?.photo?.url || 'https://templates.bplugins.com/wp-content/uploads/2025/11/team-section-member-2.png',
    alt: member.name
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    viewBox: "0 0 300 300"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("text", {
    fill: "currentColor"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("textPath", {
    xlinkHref: "#circlePath",
    style: {
      zIndex: 999999999999999
    }
  }, member.name, " - ", member.title))))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "0",
    height: "0"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    id: "circlePath",
    d: "M150,150 m-100,0 a100,100 0 1,1 200,0 a100,100 0 1,1 -200,0"
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Theme7);

/***/ }),

/***/ "./src/blocks/team-section/Components/Common/themes/Theme8.js":
/*!********************************************************************!*\
  !*** ./src/blocks/team-section/Components/Common/themes/Theme8.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



const Theme8 = ({
  attributes,
  ReusableRichText,
  setAttributes
}) => {
  const {
    members = [],
    options = {},
    isLinkNewTab = "false",
    isSocial = true,
    isTitle = true
  } = attributes || {};
  const {
    isShowIcon = true,
    icon
  } = options;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
    className: "tsbTeamMembersWrapperTheme-8"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tsbTeamMembersTeamContainer"
  }, members.map((member, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: index,
    className: "tsbTeamMember"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tsbTeamMember_img_wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: member?.photo?.url || "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: member?.name
  })), isSocial && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: member.social[0].link,
    target: isLinkNewTab ? "_blank" : "_self",
    rel: "noreferrer",
    className: "social-icon"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: member.social[0].icon.class
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tsbTeamMember_content_wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    href: "#",
    className: "tsbTeamMember_content"
  }, ReusableRichText ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ReusableRichText, {
    className: "tsbTeamMemberName",
    tagName: "h3",
    value: member?.name,
    placeholder: "name...",
    onChange: value => setAttributes({
      members: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(members, value, index, "name")
    })
  }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "tsbTeamMemberName",
    dangerouslySetInnerHTML: {
      __html: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(member?.name)
    }
  }), !ReusableRichText && isTitle && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "tsbTeamMemberTitle",
    dangerouslySetInnerHTML: {
      __html: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(member?.title)
    }
  }), ReusableRichText && isTitle && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ReusableRichText, {
    tagName: "p",
    className: "tsbTeamMemberTitle",
    value: member?.title,
    placeholder: "Title...",
    onChange: value => setAttributes({
      members: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(members, value, index, "title")
    })
  }), isShowIcon && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    style: {
      display: "block",
      textDecoration: "none",
      outline: "none",
      boxShadow: "none"
    },
    href: member?.icon,
    target: isLinkNewTab ? "_blank" : "_self",
    rel: "noreferrer"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    dangerouslySetInnerHTML: {
      __html: icon
    }
  })))))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Theme8);

/***/ }),

/***/ "./src/blocks/team-section/Components/Common/themes/Theme9.js":
/*!********************************************************************!*\
  !*** ./src/blocks/team-section/Components/Common/themes/Theme9.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



const Theme9 = ({
  attributes,
  ReusableRichText,
  setAttributes
}) => {
  const {
    members = [],
    isLinkNewTab = "false",
    isSocial = true,
    isTitle = true
  } = attributes || {};
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
    className: "tsbTeamMembersWrapperTheme-9"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tsbTeamMembersTeamContainer"
  }, members?.map((member, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: index,
    className: "tsbTeamMember"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tsbTeamMember_img_wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: member?.photo?.url || "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
    alt: "Sarah Chen"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tsbTeamMember_social_wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tsbTeamMember_social"
  }, isSocial && member?.social?.map((social, i) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    style: {
      listStyle: "none"
    },
    key: i
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    className: "tsbMember_social_link",
    style: {
      outline: "none",
      textDecoration: "none"
    },
    href: social?.link,
    target: isLinkNewTab ? "_blank" : "_self",
    rel: "noreferrer"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: social?.icon?.class
  }))))))), ReusableRichText ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ReusableRichText, {
    value: member?.name,
    className: "tsbTeamMemberName",
    placeholder: "name...",
    tagName: "div",
    onChange: v => setAttributes({
      members: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(members, v, index, "name")
    })
  }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tsbTeamMemberName",
    dangerouslySetInnerHTML: {
      __html: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(member?.name)
    }
  }), isTitle && ReusableRichText && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ReusableRichText, {
    value: member?.title,
    className: "tsbTeamMemberTitle",
    tagName: "div",
    placeholder: "title...",
    onChange: V => setAttributes({
      members: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(members, V, index, "title")
    })
  }), isTitle && !ReusableRichText && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tsbTeamMemberTitle",
    dangerouslySetInnerHTML: {
      __html: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../bpl-tools/utils/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(member?.title)
    }
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Theme9);

/***/ }),

/***/ "./src/blocks/team-section/style.scss":
/*!********************************************!*\
  !*** ./src/blocks/team-section/style.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

module.exports = window["ReactDOM"];

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
/*!*****************************************!*\
  !*** ./src/blocks/team-section/view.js ***!
  \*****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/team-section/style.scss");
/* harmony import */ var _Components_Common_Style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/Common/Style */ "./src/blocks/team-section/Components/Common/Style.js");
/* harmony import */ var _Components_Common_themes_Theme5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/Common/themes/Theme5 */ "./src/blocks/team-section/Components/Common/themes/Theme5.js");
/* harmony import */ var _Components_Common_themes_Theme6__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Components/Common/themes/Theme6 */ "./src/blocks/team-section/Components/Common/themes/Theme6.js");
/* harmony import */ var _Components_Common_themes_Theme7__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Components/Common/themes/Theme7 */ "./src/blocks/team-section/Components/Common/themes/Theme7.js");
/* harmony import */ var _Components_Common_themes_Theme8__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Components/Common/themes/Theme8 */ "./src/blocks/team-section/Components/Common/themes/Theme8.js");
/* harmony import */ var _Components_Common_themes_Theme9__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Components/Common/themes/Theme9 */ "./src/blocks/team-section/Components/Common/themes/Theme9.js");
/* harmony import */ var _Components_Common_themes_Theme10__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Components/Common/themes/Theme10 */ "./src/blocks/team-section/Components/Common/themes/Theme10.js");
/* harmony import */ var _Components_Common_themes_Theme11__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Components/Common/themes/Theme11 */ "./src/blocks/team-section/Components/Common/themes/Theme11.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../bpl-tools/utils/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());












document.addEventListener('DOMContentLoaded', () => {
  const teamEls = document.querySelectorAll('.wp-block-tsb-team');
  teamEls.forEach(teamEl => {
    const attributes = JSON.parse(teamEl.dataset.attributes);
    //  const pipecheck = teamEl.dataset.pipecheck ?? false;
    const isPremium = tsmbpipecheck;
    const {
      members = [],
      columns,
      layout,
      isLinkNewTab,
      isTitle,
      isSep,
      isBio,
      isSocial,
      theme
    } = attributes;
    const {
      desktop,
      tablet,
      mobile
    } = columns || {};

    // 			const handlePricinnNavigate = () => {
    //         window.open(
    // 			'wp-admin/edit.php?post_type=tsb&page=team-section-dashboard#/pricing',
    //                                 '_blank',
    //                                 'noopener,noreferrer'
    //                             );
    //   };
    const themeSwitch = theme => {
      if ("theme5" === theme) return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Components_Common_themes_Theme5__WEBPACK_IMPORTED_MODULE_4__["default"], {
        attributes: attributes
      });
      if ("theme6" === theme) return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Components_Common_themes_Theme6__WEBPACK_IMPORTED_MODULE_5__["default"], {
        attributes: attributes
      });
      if ("theme7" === theme) return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Components_Common_themes_Theme7__WEBPACK_IMPORTED_MODULE_6__["default"], {
        attributes: attributes
      });
      if ("theme8" === theme) return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Components_Common_themes_Theme8__WEBPACK_IMPORTED_MODULE_7__["default"], {
        attributes: attributes
      });
      if ("theme9" === theme) return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Components_Common_themes_Theme9__WEBPACK_IMPORTED_MODULE_8__["default"], {
        attributes: attributes
      });
      if ("theme10" === theme) return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Components_Common_themes_Theme10__WEBPACK_IMPORTED_MODULE_9__["default"], {
        attributes: attributes
      });
      if ("theme11" === theme) return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Components_Common_themes_Theme11__WEBPACK_IMPORTED_MODULE_10__["default"], {
        attributes: attributes
      });
    };
    (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createRoot)(teamEl).render((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Components_Common_Style__WEBPACK_IMPORTED_MODULE_3__["default"], {
      attributes: attributes,
      id: teamEl.id
    }), ["default", "theme1", "theme2", "theme3", "theme4"].includes(theme) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `tsbTeamMembers ${layout || 'vertical'} columns-${desktop} columns-tablet-${tablet} columns-mobile-${mobile}`
    }, members.map((item, index) => {
      const {
        photo,
        name,
        title,
        bio,
        social = []
      } = item;
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        key: index,
        className: "tsbMember",
        id: `tsbMember-${index}`
      }, photo?.url && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        className: "memberPhoto",
        src: photo.url,
        alt: photo?.alt
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "memberDetails"
      }, name && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", {
        className: "memberName",
        dangerouslySetInnerHTML: {
          __html: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../bpl-tools/utils/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(name)
        }
      }), isTitle && title && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
        className: "memberTitle",
        dangerouslySetInnerHTML: {
          __html: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../bpl-tools/utils/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(title)
        }
      }), isSep && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
        className: "memberSeparator"
      }), isBio && bio && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
        className: "memberBio",
        dangerouslySetInnerHTML: {
          __html: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../bpl-tools/utils/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(bio)
        }
      }), isSocial && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
        className: "memberSocial"
      }, social?.map((socialItem, socialIndex) => {
        const {
          link,
          icon
        } = socialItem;
        const safeUrl = Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../bpl-tools/utils/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(link) || "#";
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
          key: socialIndex,
          className: `icon icon-${index}-${socialIndex}`
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
          href: safeUrl,
          target: isLinkNewTab ? '_blank' : '_self',
          rel: "noreferrer"
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
          className: icon?.class
        })));
      }))));
    })), !isPremium && !["default", "theme1", "theme2", "theme3", "theme4"].includes(theme) ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "tsm-premium-slider-wrapper"
    }, themeSwitch(theme), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "tsm-premium-overlay"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "tsm-premium-overlay-content"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "This theme is available in the Pro version."), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "/wp-admin/edit.php?post_type=tsb&page=team-section-dashboard#/pricing",
      target: "_blank",
      className: "tsm-upgrade-btn"
    }, "Upgrade to Pro")))) : themeSwitch(theme)));
    teamEl?.removeAttribute('data-attributes');
  });
});
})();

/******/ })()
;
//# sourceMappingURL=view.js.map