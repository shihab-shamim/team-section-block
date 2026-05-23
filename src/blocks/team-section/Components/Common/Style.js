import { escapeHTML } from "../../../../bpl-tools/utils/common";
import {
  deskBreakpoint,
  mobileBreakpoint,
  tabBreakpoint,
} from "../../../../bpl-tools/utils/data";
import {
  getBackgroundCSS,
  getBorderCSS,
  getBoxCSS,
  getColorsCSS,
  getMultiShadowCSS,
  getSeparatorCSS,
  getSpaceCSS,
  getTypoCSS,
} from "../../../../bpl-tools/utils/getCSS";

const Style = ({ attributes, id }) => {
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
    options = {},
  } = attributes;

  const { hoverOnScale = true, isShowWaterMark = true } = options || {};
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
  const dynamicAlignment = members
    .map((card, index) => {
      return `${tsbTeamMembersWrapperTheme6Sl}  .tsbTeamMembersTeamMemberContentContainer-${index}{
			padding-top:${card?.paddingTop};
			}
					`;
    })
    .join("\n");

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: escapeHTML(`
		${getTypoCSS("", nameTypo)?.googleFontLink}
		${getTypoCSS("", titleTypo)?.googleFontLink}
		${getTypoCSS("", bioTypo)?.googleFontLink}
		${getTypoCSS("", teamMember?.name?.typo)?.googleFontLink}
		${getTypoCSS("", teamMember?.title?.typo)?.googleFontLink}
		${getTypoCSS("", teamMember?.bio?.typo)?.googleFontLink}
		${getTypoCSS("", teamMember?.userName?.typo)?.googleFontLink}
		${getTypoCSS("", styles?.waterMark?.typo)?.googleFontLink}
		${getTypoCSS("", teamMember?.teamRing?.typo)?.googleFontLink}
		${getTypoCSS("", teamMember?.serial?.typo)?.googleFontLink}
		${getTypoCSS("", teamMember?.states?.label?.typo)?.googleFontLink}
		${getTypoCSS("", teamMember?.states?.value?.typo)?.googleFontLink}
		${getTypoCSS("", teamMember?.btn?.typo)?.googleFontLink}
		${getTypoCSS(`${gMemberDetailsSl} .memberName`, nameTypo)?.styles}
		${getTypoCSS(`${gMemberDetailsSl} .memberTitle`, titleTypo)?.styles}
		${getTypoCSS(`${gMemberDetailsSl} .memberBio`, bioTypo)?.styles}
		${getTypoCSS(`${tsbTeamMemberNameSl}`, teamMember?.name?.typo)?.styles}
		${getTypoCSS(`${tsbTeamMembersWrapperTheme7Sl} .team-ring label`, teamMember?.name?.typo)?.styles}
		${getTypoCSS(`${tsbTeamMembersWrapperTheme11Sl} .tsbTeamMemberBio`, teamMember?.bio?.typo)?.styles}
		${getTypoCSS(`${coFounderSl}:after`, teamMember?.title?.typo)?.styles} 
		${getTypoCSS(` ${tsbTeamMembersWrapperTheme7Sl} #center`, teamMember?.teamRing?.typo)?.styles} 
		${getTypoCSS(` ${tsbTeamMembersWrapperTheme10Sl} .tsbTeamMember_content_card_number_box`, teamMember?.serial?.typo)?.styles} 
		${getTypoCSS(` ${tsbTeamMembersWrapperTheme10Sl} .tsbTeamMember_content_card_stat_label`, teamMember?.states?.label?.typo)?.styles} 
		${getTypoCSS(` ${tsbTeamMembersWrapperTheme10Sl} .tsbTeamMember_content_card_stat_value`, teamMember?.states?.value?.typo)?.styles} 
		${getTypoCSS(` ${tsbTeamMembersWrapperTheme10Sl} .tsbTeamMember_btn`, teamMember?.btn?.typo)?.styles} 
		${getTypoCSS(` ${tsbTeamMembersWrapperTheme11Sl} .tsbTeamMember_view_btn`, teamMember?.btn?.typo)?.styles} 
		${
      getTypoCSS(
        `${tsbTeamMembersWrapperTheme6Sl} .tsbTeamMembersTeamContainer .tsbTeamMemberTitle`,
        teamMember?.title?.typo
      )?.styles
    } 
	${
      getTypoCSS(
        `${tsbTeamMembersWrapperTheme8Sl} .tsbTeamMembersTeamContainer .tsbTeamMemberTitle`,
        teamMember?.title?.typo
      )?.styles
    } 
		${getTypoCSS(`${tsbTeamMemberBioSl}`, teamMember?.bio?.typo)?.styles} 
		${getTypoCSS(`${tsbTeamMemberUserNameSl}`, teamMember?.userName?.typo)?.styles} 
		${
      getTypoCSS(
        `${tsbTeamMembersWrapperTheme6Sl} .tsbTeamMembersBgWatermark`,
        styles?.waterMark?.typo
      )?.styles
    } 
		${
      getTypoCSS(
        `.tsbTeamMemberTitle`,
        teamMember?.title?.typo
      )?.styles
    } 

		${membersSl}{
			grid-gap: ${rowGap} ${columnGap};
		}
		${gMemberSl}{
			text-align: ${textAlign};
			padding: ${getSpaceCSS(padding)};
		}
		${gMemberSl} .memberPhoto{
			width: ${photoWidth};
			margin: ${
        "horizontal" === layout ? "0 20px 0 0" : `${getSpaceCSS(photoMargin)}`
      };
		}
		${gMemberDetailsSl} .memberName{
			margin: ${getSpaceCSS(nameMargin)};
		}
		${gMemberDetailsSl} .memberTitle{
			margin: ${getSpaceCSS(titleMargin)};
		}
		${gMemberDetailsSl} .memberSeparator{
			margin: ${getSpaceCSS(sepMargin)};
		}
		${gMemberDetailsSl} .memberBio{
			margin: ${getSpaceCSS(bioMargin)};
		}
		${gMemberSocialSl} .icon,
		${gMemberSocialSl} .memberSocialAdd{
			margin: ${getSpaceCSS(socialIconMargin)};
		}
		${gMemberSocialSl} .icon i,
		${gMemberSocialSl} .memberSocialAdd i{
			font-size: ${socialSize};
			width: ${socialSize};
		}

		${members
      .map((member, index) => {
        const {
          background,
          border,
          shadow,
          photoBorder,
          nameColor,
          titleColor,
          separator,
          bioColor,
          socialIconColors,
        } = member;

        const memberSl = `${mainSl} #tsbMember-${index}`;
        const memberDetailsSl = `${memberSl} .memberDetails`;
        const memberSocialSl = `${memberDetailsSl} .memberSocial`;

        return `
				${memberSl}{
					${getBackgroundCSS(background)}
					${getBorderCSS(border)}
					box-shadow: ${getMultiShadowCSS(shadow?.shadow || shadow)};
				}
				${memberSl} .memberPhoto{
					${getBorderCSS(photoBorder)}
				}
				${memberDetailsSl} .memberName{
					color: ${nameColor};
				}
				${memberDetailsSl} .memberTitle{
					color: ${titleColor};
				}
				${memberSl} .memberSeparator{
					${getSeparatorCSS(separator)}
				}
				${memberDetailsSl} .memberBio{
					color: ${bioColor};
				}
				${memberSocialSl}{
					justify-content: ${
            "center" === textAlign
              ? "center"
              : "right" === textAlign
              ? "flex-end"
              : "flex-start"
          }
				}
				${memberSocialSl} li a{
					${getColorsCSS(socialIconColors)}
				}
				${memberSocialSl} li.isSelected{
					border: 2px solid ${socialIconColors?.bg};
				}
				${memberSocialSl} li.memberSocialAdd button i{
					color: ${socialIconColors?.bg};
				}
			`;
      })
      .join(" ")}

	  

		${tsbTeamMembersWrapperlSl}{
		justify-content: ${alignment};
		margin:${getBoxCSS(margin)};
		
		}
		${tsbTeamMembersTeamContainerSl}{
		${getBackgroundCSS(bg)}
		width:${width};
		padding:${getBoxCSS(sectionPadding)};
        grid-template-columns: repeat(${columns?.desktop},1fr);
		column-gap: ${columnGap}; 
        row-gap: ${rowGap};     
 
		}
		
		${tsbTeamMembersTeamMemberSl}{
		${getBackgroundCSS(teamMember?.bg)}
		padding:${getBoxCSS(teamMember?.padding)};
		}
		${tsbTeamMembersTeamMemberSl}:nth-of-type(even){
		${getBackgroundCSS(teamMember?.evenItemBg)}
		}
			${tsbTeamMembersTeamMemberSl}:nth-of-type(even) .tsbTeamMembersTeamMemberThumb {
			${getBackgroundCSS(teamMember?.photo?.evenItemPhotoBg)}
			}

		${tsbTeamMembersTeamMemberThumbSl}{
		${getBackgroundCSS(teamMember?.photo?.bg)}
		width:${teamMember?.photo?.size};
		height:${teamMember?.photo?.size};
		border-radius:${getBoxCSS(teamMember?.photo?.radius)};
		padding:${getBoxCSS(teamMember?.photo?.padding)};
		}
		${tsbTeamMembersTeamMemberThumbSl} img {
		filter: grayscale(${teamMember?.photo?.grayScale});
		}
		${tsbTeamMemberNameSl}{
		${getColorsCSS(teamMember?.name?.colors)}
		padding:${getBoxCSS(teamMember?.name?.padding)};
		border-radius:${getBoxCSS(teamMember?.name?.radius)};
		}
		
		${coFounderSl}:after{
		${getColorsCSS(teamMember?.title?.colors)}
		padding:${getBoxCSS(teamMember?.title?.padding)};
		border-radius:${getBoxCSS(teamMember?.title?.radius)};
		}

		${tsbTeamMemberBioSl}{
		color:${teamMember?.bio?.color};
		}

		${tsbTeamMemberUserNameSl}{
		${getColorsCSS(teamMember?.userName?.colors)}
		padding:${getBoxCSS(teamMember?.userName?.padding)};
		border-radius:${getBoxCSS(teamMember?.userName?.radius)};
		}
		${mainSl}{
		
		${
			["theme6","theme8","theme9","theme10","theme11","theme12"].includes(theme)  &&`
			display:flex;
		justify-content:${alignment};

			`
    }
		}
			


		${tsbTeamMembersWrapperTheme6Sl}{
		${isShowWaterMark && "padding-top:100px;"}
		${getBackgroundCSS(bg)}
		width:${width};
	    margin:${getBoxCSS(margin)};

		}

		${tsbTeamMembersWrapperTheme6Sl} .tsbTeamMembersTeamContainer{
		
		grid-template-columns: repeat(${columns?.desktop}, 1fr);
		column-gap: ${columnGap}; 
        row-gap: ${rowGap};
		padding:${getBoxCSS(sectionPadding)};
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
		 ${getBackgroundCSS(teamMember?.bg)}
		}
		 ${tsbTeamMembersWrapperTheme6Sl} .tsbTeamMembersTeamContainer .tsbTeamMembersTeamMemberShape::before{
		  ${getBackgroundCSS(teamMember?.shape?.bg)}
		   width: ${teamMember?.shape?.width};
          height: ${teamMember?.shape?.height};
		 }
		  ${tsbTeamMemberNameSl}{
			color:${teamMember?.name?.color};
			margin:${getBoxCSS(teamMember?.name?.margin)};
			}
			${tsbTeamMembersWrapperTheme6Sl} .tsbTeamMembersTeamContainer .tsbTeamMemberTitle{
			color:${teamMember?.title?.color};
			margin:${getBoxCSS(teamMember?.title?.margin)};
			}

			${tsbTeamMembersWrapperTheme6Sl} .tsbTeamMembersTeamContainer .tsbTeamMembersTeamMember .tsbTeamMemberSocial{
			                        margin:${getBoxCSS(teamMember?.icon?.margin)};
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
	  ${getBackgroundCSS(bg)}
	  padding:${getBoxCSS(sectionPadding)};
	  margin:${getBoxCSS(margin)};
	   }
	  ${tsbTeamMembersWrapperTheme7Sl} .team-ring label{
	   width: ${teamMember?.photo?.width || "88px"};
       height:${teamMember?.photo?.height || "88px"};
	   border-radius: ${getBoxCSS(
       teamMember?.photo?.radius || {
         top: "50%",
         left: "50%",
         bottom: "50%",
         right: "50%",
       }
     )};
	    color: ${teamMember?.name?.color};	
	   
	  }
		${tsbTeamMembersWrapperTheme7Sl} .team-ring img {
				width: ${teamMember?.photo?.width || "88px"};
				height: ${teamMember?.photo?.height || "88px"};
				border-radius: ${getBoxCSS(
          teamMember?.photo?.radius || {
            top: "50%",
            left: "50%",
            bottom: "50%",
            right: "50%",
          }
        )};
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
					${getColorsCSS(teamMember?.teamRing?.bg)}

					border-radius: ${getBoxCSS(teamMember?.teamRing?.radius)};
							}
		${tsbTeamMembersWrapperTheme8Sl}{
		 ${getBackgroundCSS(bg)}
		width:${width};
	    margin:${getBoxCSS(margin)};
		}
			
	  ${tsbTeamMembersWrapperTheme8Sl} .tsbTeamMembersTeamContainer{
	  grid-template-columns: repeat(${columns?.desktop},1fr);
	  column-gap: ${columnGap}; 
      row-gap: ${rowGap};
	  padding:${getBoxCSS(sectionPadding)};
	 
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
		${getBackgroundCSS(teamMember?.social?.bg)}
		padding:${getBoxCSS(teamMember?.social?.padding)};
		 i{
		 color:${teamMember?.social?.color};
		 font-size:${teamMember?.social?.size}px;
		 }
		   &:hover i {
          color: ${teamMember?.social?.hoverColor} !important;
        }
		 }
		${tsbTeamMembersWrapperTheme8Sl} .tsbTeamMembersTeamContainer .tsbTeamMember .tsbTeamMember_content_wrapper .tsbTeamMember_content{
	    ${getBackgroundCSS(teamMember?.content?.bg)}
		padding:${getBoxCSS(teamMember?.content?.padding)};
		 svg {
              width: ${teamMember?.icon?.size}px;
              height: ${teamMember?.icon?.size}px;
              fill: ${teamMember?.icon?.color};
              color: ${teamMember?.icon?.color};
    
            }
		}
		${tsbTeamMembersWrapperTheme8Sl} .tsbTeamMembersTeamContainer .tsbTeamMember:hover .tsbTeamMember_content_wrapper .tsbTeamMember_content{
	    ${getBackgroundCSS(teamMember?.content?.hoverBg)}
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
		 margin:${getBoxCSS(teamMember?.title?.margin)};
		}

        ${tsbTeamMembersWrapperTheme9Sl}{
		 ${getBackgroundCSS(styles?.bg)}
		 width:${styles?.width};
		 margin:${getBoxCSS(styles?.margin)};

		
		}
		${tsbTeamMembersWrapperTheme9Sl} .tsbTeamMembersTeamContainer{
		 padding:${getBoxCSS(sectionPadding)};
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
		${getBackgroundCSS(teamMember?.memberPhoto?.bg)}

		 }
        ${tsbTeamMembersWrapperTheme9Sl}  .tsbTeamMembersTeamContainer .tsbTeamMember .tsbTeamMember_social_wrapper .tsbTeamMember_social .tsbMember_social_link{
	    width: ${teamMember?.social?.width};
        height: ${teamMember?.social?.height};
        border-radius: ${getBoxCSS(teamMember?.social?.radius)};
		${getColorsCSS(teamMember?.social?.colors)}
		i{font-size:${teamMember?.social?.size}px;}
        
		}
		${tsbTeamMembersWrapperTheme9Sl}  .tsbTeamMembersTeamContainer .tsbTeamMember .tsbTeamMember_social_wrapper .tsbTeamMember_social .tsbMember_social_link:hover{
		${getColorsCSS(teamMember?.social?.hoverColors)}
		} 
		${tsbTeamMembersWrapperTheme9Sl} .tsbTeamMemberName{
		color:${teamMember?.name?.color};
		margin:${getBoxCSS(teamMember?.name?.margin)};
		} 
		${tsbTeamMembersWrapperTheme9Sl} .tsbTeamMemberTitle{
		color:${teamMember?.title?.color};
		margin:${getBoxCSS(teamMember?.title?.margin)};
		}

		${tsbTeamMembersWrapperTheme11Sl}{
		${getBackgroundCSS(styles?.bg)}
		width:${styles?.width};
		padding:${getBoxCSS(styles?.padding)};
		margin:${getBoxCSS(styles?.margin)};
		  .tsbTeamMember-grid {
		  grid-template-columns: repeat(${columns?.desktop},1fr);
		  column-gap:${columnGap};
		  row-gap:${rowGap};
		   
		   .tsbTeamMember-card{
            ${getBackgroundCSS(teamMember?.content?.bg)}
			border-radius:${getBoxCSS(teamMember?.content?.radius)};
			box-shadow:${getMultiShadowCSS(teamMember?.content?.shadow)};
			.tsbTeamMemberTitle{
			color:${teamMember?.title?.color};
			margin:${getBoxCSS(teamMember?.title?.margin)};
			}
			.tsbTeamMemberBio{
			color:${teamMember?.bio?.color};
			}
			.tsbTeamMember-gradient-overlay {
			${getBackgroundCSS(teamMember?.memberPhoto?.bg)}
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







		${deskBreakpoint}{
		${theme === "theme6" && dynamicAlignment}
		${tsbTeamMembersTeamMemberSl}:hover{
		transform: scale(${hoverOnScale ? "1" : "0.85"});
		}
		}

			${tabBreakpoint} {
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
		${getBackgroundCSS(styles?.bg)}
		margin:${getBoxCSS(styles?.margin)};
		padding:${getBoxCSS(styles?.padding)};
		width:${styles?.width};
		}
		${tsbTeamMembersWrapperTheme10Sl}  {
		.tsbTeamMember_img_wrap{
		 max-width:${teamMember?.memberPhoto?.width};
            
		   .tsbTeamMember_img_shadow{
		   ${getBackgroundCSS(teamMember?.memberPhoto?.bg)}

		   }

		  .tsbTeamMember_img_profile {
		  height:${teamMember?.memberPhoto?.height};
		  object-fit: ${teamMember?.memberPhoto?.objectFit};
		  }
		}
		
		  .tsbTeamMember_content_card{
		   ${getBackgroundCSS(teamMember?.content?.bg)}
		  padding:${getBoxCSS(teamMember?.content?.padding)};
		  border-radius:${getBoxCSS(teamMember?.content?.radius)};
		  box-shadow:${getMultiShadowCSS(teamMember?.content?.shadow)};
		  
		  }

		  .team-row:hover .tsbTeamMember_img_shadow {
          transform: rotate(${teamMember?.content?.hoverRotate}deg);
        }
		  .tsbTeamMember_content_card_number_box{
		  ${getColorsCSS(teamMember?.serial?.colors)}
          width: ${teamMember?.serial?.width};
          height: ${teamMember?.serial?.height};
          border-radius: ${getBoxCSS(teamMember?.serial?.radius)};
		  }
		  .tsbTeamMemberTitle{
		  color:${teamMember?.title?.color};
		  margin:${getBoxCSS(teamMember?.title?.margin)};
		  }
		  .tsbTeamMember_content_card_stats_grid{
		   border-top:${teamMember?.states?.border?.top?.width} ${teamMember?.states?.border?.top?.style} ${teamMember?.states?.border?.top?.color};
		   border-right:${teamMember?.states?.border?.right?.width} ${teamMember?.states?.border?.right?.style} ${teamMember?.states?.border?.right?.color};
		   border-bottom:${teamMember?.states?.border?.bottom?.width} ${teamMember?.states?.border?.bottom?.style} ${teamMember?.states?.border?.bottom?.color};
		   border-left:${teamMember?.states?.border?.left?.width} ${teamMember?.states?.border?.bottom?.style} ${teamMember?.states?.border?.bottom?.color};
		   padding:${getBoxCSS(teamMember?.states?.padding)};
		   margin:${getBoxCSS(teamMember?.states?.margin)};
		   
		  }
		   .tsbTeamMember_content_card_stat{
		   width:${teamMember?.states?.width};
		   height:${teamMember?.states?.height};
		   border-radius:${getBoxCSS(teamMember?.states?.radius)};
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
		   ${getColorsCSS(teamMember?.states?.iconOne?.colors)}
		    svg{
			fill:${teamMember?.states?.iconOne?.colors?.color};
			
			}
		   }
			   .tsbTeamMember_content_card_stat_two{
		   ${getColorsCSS(teamMember?.states?.iconTwo?.colors)}
		    svg{
			fill:${teamMember?.states?.iconTwo?.colors?.color};
			
			}
		   }
			.tsbTeamMember_btn{
			 ${getColorsCSS(teamMember?.btn?.colors)}
			 padding:${getBoxCSS(teamMember?.btn?.padding)};
			 border-radius:${getBoxCSS(teamMember?.btn?.radius)};
			}
		}



		${mobileBreakpoint}{
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
		   ${members
         .map((card, index) => {
           return `
        ${tsbTeamMembersWrapperTheme6Sl} .tsbTeamMembersTeamMemberContentContainer-${index}{
          padding-top: 0 !important;
        }
      `;
         })
         .join("\n")}
		 ${tsbTeamMembersWrapperTheme8Sl} .tsbTeamMembersTeamContainer{
	  grid-template-columns: repeat(${columns?.mobile},1fr);
	  }
	  ${tsbTeamMembersWrapperTheme9Sl} .tsbTeamMembersTeamContainer{
		grid-template-columns: repeat(${columns.mobile}, 1fr);
		}

		}
		`).replace(/\s+/g, " "),
      }}
    />
  );
};
export default Style;
