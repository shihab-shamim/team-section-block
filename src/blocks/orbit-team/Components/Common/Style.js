import {
	mobileBreakpoint,
	tabBreakpoint,
} from "../../../../../../bpl-tools/utils/data";
import {
	getBackgroundCSS,
	getBoxCSS,
	getColorsCSS,
	getMultiShadowCSS,
	getTypoCSS,
} from "../../../../../../bpl-tools/utils/getCSS";

const Style = ({ attributes, id }) => {
	const { styles = {} } = attributes;

	const mainSl = `#${id}`;
	const sectionSl = `${mainSl} .tsbo_galaxy-section`;
	const orbitSectionSl = `${sectionSl} .tsbo_galaxy`;
	const tagSl = `${sectionSl} .tsbo_eyebrow`;
	const titleSl = `${sectionSl} .tsbo_title`;
	const subTitleSl = `${sectionSl} .tsbo_lede`;
	const brandMarkSl = `${sectionSl} .tsbo_core`;
	const markSl = `${sectionSl} .tsbo_core__mark`;
	const subMarkSl = `${sectionSl} .tsbo_core__sub`;
	const titleMarkSl = `${sectionSl} .tsbo_core__title`;
	const teamMemberSl = `${sectionSl} .tsbo_star`;
	const teamRingSl = `${sectionSl} .tsbo_ring`;
	const teamNameSl = `${sectionSl} .tsbo_star .tsbo_name`;

	return (
		<style
			dangerouslySetInnerHTML={{
				__html: `
			${getTypoCSS("", styles?.header?.typo)?.googleFontLink}
			${getTypoCSS("", styles?.header?.title?.typo)?.googleFontLink}
			${getTypoCSS("", styles?.header?.subTitle?.typo)?.googleFontLink}
			${getTypoCSS("", styles?.brandMark?.mark?.typo)?.googleFontLink}
			${getTypoCSS("", styles?.brandMark?.title?.typo)?.googleFontLink}
			${getTypoCSS("", styles?.teamMember?.name?.typo)?.googleFontLink}

				${getTypoCSS(tagSl, styles?.header?.typo)?.styles}
				${getTypoCSS(titleSl, styles?.header?.title?.typo)?.styles}
				${getTypoCSS(subTitleSl, styles?.header?.subTitle?.typo)?.styles}
				${getTypoCSS(markSl, styles?.brandMark?.mark?.typo)?.styles}
				${getTypoCSS(subMarkSl, styles?.brandMark?.mark?.typo)?.styles}
				${getTypoCSS(titleMarkSl, styles?.brandMark?.title?.typo)?.styles}
				${getTypoCSS(teamNameSl, styles?.teamMember?.name?.typo)?.styles}
			
			${sectionSl} {
				${getBackgroundCSS(styles?.bg)}
				min-height: ${styles?.height || "100vh"};
				border-radius:${getBoxCSS(styles?.radius)};
				margin:${getBoxCSS(styles?.margin?.desktop)};
				padding:${getBoxCSS(styles?.padding?.desktop)};
				--orbit-animation-duration: ${styles?.teamMember?.orbit?.animation || 50}s;
				--orbit-ring-width: ${styles?.teamMember?.orbit?.width || "200px"};
			}

			${orbitSectionSl}{
				margin-top: ${styles?.gap?.desktop}px;
			}

			${tagSl}{
				color: ${styles?.header?.color};
				padding: ${getBoxCSS(styles?.header?.padding)};
				border-radius: ${getBoxCSS(styles?.header?.radius)};
			}
			${titleSl}{
				color: ${styles?.header?.title?.color};
		
			}
			${subTitleSl}{
				color: ${styles?.header?.subTitle?.color};
		
			}
				${brandMarkSl}{
				${getBackgroundCSS(styles?.brandMark?.bg)}
				width: ${styles?.brandMark?.width || "180px"};
				height: ${styles?.brandMark?.height || "180px"};
				border-radius: ${getBoxCSS(styles?.brandMark?.radius)};
				box-shadow: ${getMultiShadowCSS(styles?.brandMark?.shadow)};
			}
			${markSl},${subMarkSl}{
				color: ${styles?.brandMark?.mark?.color};
			
			}
				${titleMarkSl}{
				color: ${styles?.brandMark?.title?.color};
				margin:${getBoxCSS(styles?.brandMark?.title?.margin)};
			
			}

			${teamMemberSl}{
				width: ${styles?.teamMember?.width || "64px"};
				height: ${styles?.teamMember?.height || "64px"};
			}
			${teamMemberSl} a {
				border-radius: ${getBoxCSS(styles?.teamMember?.radius)};
				box-shadow: ${getMultiShadowCSS(styles?.teamMember?.shadow)};
				border: ${styles?.teamMember?.border?.width || "1px"} ${styles?.teamMember?.border?.color || "transparent"
					} ${styles?.teamMember?.border?.style || "solid"} ;
			}
			${teamMemberSl} a:hover {
		transform: scale(${styles?.teamMember?.scal});
		border: ${styles?.teamMember?.hoverBorder?.width || "1px"} ${styles?.teamMember?.hoverBorder?.color || "transparent"
					} ${styles?.teamMember?.hoverBorder?.style || "solid"} ;
		box-shadow: ${getMultiShadowCSS(styles?.teamMember?.hoverShadow)};
	}
		${teamRingSl}{
		border-color: ${styles?.teamMember?.orbit?.ring?.color};
		border-width: ${styles?.teamMember?.orbit?.ring?.width};
		border-style: ${styles?.teamMember?.orbit?.ring?.style};
	}
		${teamNameSl}{
	  ${getBackgroundCSS(styles?.teamMember?.name?.bg)}
      color: ${styles?.teamMember?.name?.color};
      padding: ${getBoxCSS(styles?.teamMember?.name?.padding)};
      border-radius: ${getBoxCSS(styles?.teamMember?.name?.radius)};
      border: ${styles?.teamMember?.name?.border?.width || "1px"} ${styles?.teamMember?.name?.border?.color || "transparent"
					} ${styles?.teamMember?.name?.border?.style || "solid"};
    }
		


			${tabBreakpoint}{
				${sectionSl}{
					padding: ${getBoxCSS(styles?.padding?.tablet)};
					margin: ${getBoxCSS(styles?.margin?.tablet)};
				}

				${orbitSectionSl}{
					margin-top: ${styles?.gap?.tablet}px;
				}
			}
				${mobileBreakpoint}{
					${sectionSl}{
						padding: ${getBoxCSS(styles?.padding?.mobile)};
						margin: ${getBoxCSS(styles?.margin?.mobile)};
					}

					${orbitSectionSl}{
						margin-top: ${styles?.gap?.mobile}px;
					}
				}
		`,
			}}
		/>
	);
};
export default Style;
