import { produce } from "immer";

export const themeSwitch = (theme = "default", attributes) =>
  produce(attributes, (draft) => {
    draft["theme"] = theme;

    switch (theme) {
      case "theme5":
        draft["isTitle"] = true;
        draft["isBio"] = true;
        draft["columnGap"] = "0px";
        draft["rowGap"] = "30px";
        draft["columns"] = {
          desktop: 1,
          tablet: 1,
          mobile: 1,
        };
        draft["styles"] = {
          bg: {},
          width: "100%",
          alignment: "center",
          padding: {
            top: "0px",
            right: "0px",
            bottom: "0px",
            left: "0px",
          },
          margin: {
            top: "0px",
            right: "0px",
            bottom: "0px",
            left: "0px",
          },
          teamMember: {
            padding: {
              top: "11px",
              left: "11px",
              bottom: "11px",
              right: "11px",
            },
            bg: {
              type: "gradient",
              gradient:
                "linear-gradient(83deg,rgb(255,221,64) 97%,rgba(0,0,0,0) 97%)",
            },
            evenItemBg: {
              type: "gradient",
              gradient:
                "linear-gradient(277deg,rgb(255,221,64) 97%,rgba(0,0,0,0) 97%)",
            },
            photo: {
              bg: {
                type: "gradient",
                gradient:
                  "linear-gradient(274deg,rgb(47,49,58) 70%,rgb(255,221,64) 70%)",
              },
              size: "100px",
              padding: {
                top: "8px",
                left: "8px",
                bottom: "8px",
                right: "8px",
              },
              radius: {
                top: "4px",
                left: "4px",
                bottom: "4px",
                right: "4px",
              },
              grayScale: 1,
              evenItemPhotoBg: {
                type: "gradient",
                gradient:
                  "linear-gradient(86deg,rgb(47,49,58) 70%,rgb(255,221,64) 70%)",
              },
            },
            name: {
              colors: { color: "#ffdd40", bg: "#282a31" },
              padding: {
                top: "15px",
                right: "23px",
                bottom: "15px",
                left: "23px",
              },
              radius: {
                top: "4px",
                right: "4px",
                bottom: "4px",
                left: "4px",
              },
              typo: {
                fontFamily: "Default",
                fontCategory: "sans-serif",
                fontWeight: null,
                isUploadFont: true,
                fontSize: {
                  desktop: "20px",
                  tablet: "18px",
                  mobile: "14px",
                },
                fontStyle: "normal",
                textTransform: "none",
                textDecoration: "none",
                lineHeight: "",
                letterSpace: "0px",
              },
            },
            title: {
              colors: { color: "#2f313a", bg: "#ffdd40" },
              padding: {
                top: "6px",
                right: "12px",
                bottom: "8px",
                left: "12px",
              },
              radius: {
                top: "4px",
                right: "4px",
                bottom: "4px",
                left: "4px",
              },
              typo: {
                fontFamily: "Default",
                fontCategory: "sans-serif",
                fontWeight: 600,
                isUploadFont: true,
                fontSize: {
                  desktop: "14px",
                  tablet: "14px",
                  mobile: "11px",
                },
                fontStyle: "normal",
                textTransform: "none",
                textDecoration: "none",
                lineHeight: "",
                letterSpace: "0px",
              },
            },
            bio: {
              color: "black",
              typo: {
                fontFamily: "Default",
                fontCategory: "sans-serif",
                fontWeight: null,
                isUploadFont: true,
                fontSize: {
                  desktop: "20px",
                  tablet: "20px",
                  mobile: "14px",
                },
                fontStyle: "normal",
                textTransform: "none",
                textDecoration: "none",
                lineHeight: "",
                letterSpace: "0px",
              },
            },
            userName: {
              colors: { color: "#ffdd40", bg: "#2f313a" },
              padding: {
                top: "2px",
                right: "8px",
                bottom: "6px",
                left: "8px",
              },
              radius: {
                top: "8px",
                right: "8px",
                bottom: "8px",
                left: "8px",
              },
              typo: {
                fontFamily: "Default",
                fontCategory: "sans-serif",
                fontWeight: null,
                isUploadFont: true,
                fontSize: {
                  desktop: "20px",
                  tablet: "20px",
                  mobile: "14px",
                },
                fontStyle: "normal",
                textTransform: "none",
                textDecoration: "none",
                lineHeight: "",
                letterSpace: "0px",
              },
            },
          },
        };
        draft["options"] = {
          showUserName: true,
          hoverOnScale: true,
        };

        break;

      case "theme6":
        draft["isTitle"] = true;
        draft["isSocial"] = true;
        draft["columnGap"] = "0px";
        draft["rowGap"] = "0px";
        draft["columns"] = {
          desktop: 3,
          tablet: 2,
          mobile: 1,
        };

        draft["styles"] = {
          bg: {},
          width: "94%",
          alignment: "center",
          padding: {
            top: "0px",
            right: "0px",
            bottom: "0px",
            left: "0px",
          },
          margin: {
            top: "0px",
            right: "0px",
            bottom: "0px",
            left: "0px",
          },
          teamMember: {
            bg: {
              type: "gradient",
              gradient: "linear-gradient(180deg,#40424433, #080808E6)",
            },
            height: {
              desktop: "720px",
              tablet: "500px",
              mobile: "400px",
            },
            shape: {
              bg: {
                type: "gradient",
                gradient: "linear-gradient(270deg,#ff9472, #f2709c)",
              },
              width: "80px",
              height: "100px",
            },
            grayScale: 1,
            name: {
              color: "#FFFFFF",

              typo: {
                fontFamily: "Default",
                fontCategory: "sans-serif",
                fontWeight: null,
                isUploadFont: true,
                fontSize: {
                  desktop: "20px",
                  tablet: "20px",
                  mobile: "20px",
                },
                fontStyle: "normal",
                textTransform: "none",
                textDecoration: "none",
                lineHeight: "",
                letterSpace: "0px",
              },
              margin: {
                top: "0px",
                right: "0px",
                bottom: "0px",
                left: "0px",
              },
            },
            title: {
              color: "#ffffff",
              margin: {
                top: "0px",
                right: "0px",
                bottom: "0px",
                left: "0px",
              },
              typo: {
                fontFamily: "Default",
                fontCategory: "sans-serif",
                fontWeight: 400,
                isUploadFont: true,
                fontSize: {
                  desktop: "18px",
                  tablet: "18px",
                  mobile: "16px",
                },
                fontStyle: "normal",
                textTransform: "none",
                textDecoration: "none",
                lineHeight: "",
                letterSpace: "0px",
              },
            },
            icon: {
              size: 20,
              color: "#ffffff",
              hoverColor: "#f2709c",
              margin: {
                top: "5px",
                right: "0px",
                bottom: "0px",
                left: "0px",
              },
              gap: 10,
            },
          },
          waterMark: {
            color: "#1f1f1f",
            typo: {
              fontFamily: "Default",
              fontCategory: "sans-serif",
              fontWeight: 800,
              isUploadFont: true,
              fontSize: {
                desktop: "306px",
                tablet: "136px",
                mobile: "96px",
              },
              fontStyle: "normal",
              textTransform: "none",
              textDecoration: "none",
              lineHeight: "",
              letterSpace: "0px",
            },
            translateY: "-49%",
          },
        };

        draft["options"] = {
          isShowWaterMark: true,
          isShowShape: true,
          waterMark: "TEAM",
        };

        break;

      case "theme7":
        draft["options"] = {
          waterMark: "THE TEAM",
          isShowWaterMark: true,
        };
        draft["styles"] = {
          bg: {},
          padding: {
            top: "0px",
            right: "0px",
            bottom: "0px",
            left: "0px",
          },
          margin: {
            top: "0px",
            right: "0px",
            bottom: "0px",
            left: "0px",
          },
          teamMember: {
            //  bg: {
            //   "type": "gradient",
            //   "gradient": "linear-gradient(180deg,#40424433, #080808E6)"
            // },
            //  height:{
            //   "desktop":"720px",
            //   "tablet":"500px",
            //   "mobile":"400px"

            // },
            //   shape:{
            //   "type": "gradient",
            //   "gradient": "linear-gradient(270deg,#ff9472, #f2709c)"

            // },
            // grayScale:1,
            name: {
              color: "#0ea5e9",

              typo: {
                fontFamily: "Default",
                fontCategory: "sans-serif",
                fontWeight: null,
                isUploadFont: true,
                fontSize: {
                  desktop: "18px",
                  tablet: "18px",
                  mobile: "14px",
                },
                fontStyle: "normal",
                textTransform: "none",
                textDecoration: "none",
                lineHeight: "",
                letterSpace: "0px",
              },
              margin: {
                top: "0px",
                right: "0px",
                bottom: "0px",
                left: "0px",
              },
              rotate: 90,
              textScale: 2.3,
            },
            teamRing: {
              width: "150px",
              height: "150px",
              bg: { bgType: "solid", bg: "#0284c7", color: "#ffffff" },
              radius: {
                top: "50%",
                left: "50%",
                bottom: "50%",
                right: "50%",
              },
              typo: {
                fontFamily: "Default",
                fontCategory: "sans-serif",
                fontWeight: null,
                isUploadFont: true,
                fontSize: {
                  desktop: "18px",
                  tablet: "18px",
                  mobile: "14px",
                },
                fontStyle: "normal",
                textTransform: "none",
                textDecoration: "none",
                lineHeight: "",
                letterSpace: "0px",
              },
            },
            // title: {
            //   "color": "#ffffff",
            //   margin: {
            //     "top": "0px",
            //     "right": "0px",
            //     "bottom": "0px",
            //     "left": "0px"
            //   },
            //   typo: {
            //     "fontFamily": "Default",
            //     "fontCategory": "sans-serif",
            //     "fontWeight": 400,
            //     "isUploadFont": true,
            //     "fontSize": {
            //       "desktop": "18px",
            //       "tablet": "18px",
            //       "mobile": "16px"
            //     },
            //     "fontStyle": "normal",
            //     "textTransform": "none",
            //     "textDecoration": "none",
            //     "lineHeight": "",
            //     "letterSpace": "0px"
            //   }
            // },
            //   icon:{
            //     size:20,
            //     color:'#ffffff',
            //     hoverColor:'#f2709c',
            //      margin: {
            //   "top": "5px",
            //   "right": "0px",
            //   "bottom": "0px",
            //   "left": "0px"
            // },
            // gap:10
            //   }
            photo: {
              width: "88px",
              height: "88px",
              radius: {
                top: "50%",
                left: "50%",
                bottom: "50%",
                right: "50%",
              },
              object: "cover",
              checkedScale: 2,
            },
          },
         
          
        };

        break;
      case "theme8":
        draft["isTitle"] = true;
        draft["isSocial"] = true;
        draft["columnGap"] = "32px";
        draft["rowGap"] = "32px";
        draft["columns"] = {
          desktop: 3,
          tablet: 2,
          mobile: 1,
        };
        draft["isLinkNewTab"] = false;
        draft["styles"] = {
          bg: {},
          width: "100%",
          alignment: "center",
          padding: {
            top: "0px",
            right: "0px",
            bottom: "0px",
            left: "0px",
          },
          margin: {
            top: "0px",
            right: "0px",
            bottom: "0px",
            left: "0px",
          },
          teamMember: {
            name: {
              color: "#111",

              typo: {
                fontFamily: "Default",
                fontCategory: "sans-serif",
                fontWeight: 800,
                isUploadFont: true,
                fontSize: {
                  desktop: "18px",
                  tablet: "18px",
                  mobile: "18px",
                },
                fontStyle: "normal",
                textTransform: "none",
                textDecoration: "none",
                lineHeight: "",
                letterSpace: "0px",
              },
              margin: {
                top: "0px",
                right: "0px",
                bottom: "5px",
                left: "0px",
              },
              padding: {
                top: "0px",
                right: "0px",
                bottom: "0px",
                left: "0px",
              },
            },
            title: {
              color: "#454545",
              margin: {
                top: "0px",
                right: "0px",
                bottom: "0px",
                left: "0px",
              },
              typo: {
                fontFamily: "Default",
                fontCategory: "sans-serif",
                fontWeight: 400,
                isUploadFont: true,
                fontSize: {
                  desktop: "14px",
                  tablet: "14px",
                  mobile: "14px",
                },
                fontStyle: "normal",
                textTransform: "none",
                textDecoration: "none",
                lineHeight: "",
                letterSpace: "0px",
              },
            },
            icon: {
              size: 60,
              color: "#003ef5",
              hoverColor: "#f2709c",
              margin: {
                top: "5px",
                right: "0px",
                bottom: "0px",
                left: "0px",
              },
              gap: 10,
            },
            memberPhoto: {
              width: "336px",
              height: "336px",
              objectFit: "cover",
              grayScale: 100,
              hoverGrayScale: 0,
            },
            social: {
              bg: { type: "solid", color: "#111" },
              color: "#fff",
              hoverColor: "#003ef5",
              padding: {
                top: "16px",
                bottom: "16px",
                right: "28px",
                left: "28px",
              },
              size: 22,
            },
            content: {
              bg: { type: "solid", color: "#fff" },
              hoverBg: { type: "solid", color: "#003ef5" },
              hoverColor: "#fff",
              padding: {
                top: "72px",
                right: "32px",
                bottom: "0px",
                left: "51px",
              },
              title: {
                color: "#111",
                type: {},
              },
            },
          },
        };

        draft["options"] = {
          link: "#",
          isShowIcon: true,
          icon: "<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='w-6 h-6'><path stroke-linecap='round' stroke-linejoin='round' d='M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3'/></svg>",
        };

        break;
      case "theme9":
        
        draft["isLinkNewTab"] = false;
        draft["isTitle"] = true;
        draft["isSocial"] = true;
        draft["columnGap"] = "32px";
        draft["rowGap"] = "32px";
        draft["columns"] = {
          desktop: 3,
          tablet: 2,
          mobile: 1,
        };
        draft["styles"] = {
          bg: {},
          width: "100%",
          alignment: "center",
          padding: {
            top: "80px",
            right: "20px",
            bottom: "80px",
            left: "20px",
          },
          margin: {
            top: "0px",
            right: "0px",
            bottom: "0px",
            left: "0px",
          },
          teamMember:{
             memberPhoto: {
              width: "336px",
              height: "430px",
              objectFit: "cover",
              grayScale: 100,
              hoverGrayScale: 0,
              bg:{type:"gradient",gradient:"linear-gradient(to top, rgba(15, 23, 42, .8), transparent)"},
              hoverScale:1.1
            },
            social:{
              colors:{color:"#0f172a",bg:"#ffffff",bgType:"solid"},
              hoverColors:{color:"#fff",bg:"#0f172a",bgType:"solid"},
              width:"42px",
              height:"42px",
              size:22,
              radius:{
                top:"50%",
                left:"50%",
                right:"50%",
                bottom:"50%",
              }
            },
            name:{
              typo: {
                fontFamily: "Default",
                fontCategory: "sans-serif",
                fontWeight: 800,
                isUploadFont: true,
                fontSize: {
                  desktop: "22px",
                  tablet: "22px",
                  mobile: "22px",
                },
                fontStyle: "normal",
                textTransform: "none",
                textDecoration: "none",
                lineHeight: "",
                letterSpace: "0px",
              },
              color: "#0f172a",
              margin:{
                top:"0px",
                right:"0px",
                bottom:"0px",
                left:"0px",

              }
            },
            title:{
              typo: {
                fontFamily: "Default",
                fontCategory: "sans-serif",
                fontWeight: 400,
                isUploadFont: true,
                fontSize: {
                  desktop: "16px",
                  tablet: "16px",
                  mobile: "16px",
                },
                fontStyle: "normal",
                textTransform: "none",
                textDecoration: "none",
                lineHeight: "",
                letterSpace: "0px",
              },
              color:"#475569",
              margin:{
                top:"0px",
                left:"0px",
                bottom:"0px",
                right:"0px",
              }
            }
          }
        };

  
        break;

        case "theme10":
        draft["isLinkNewTab"] = false;
        draft["isTitle"] = true;
        draft["isSocial"] = true;
  draft["options"] = {
          link: "#",
          isShowIcon: true,
          icon: "<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='w-6 h-6'><path stroke-linecap='round' stroke-linejoin='round' d='M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3'/></svg>",
          isShowSereal:true,
          isShowBgShape:true,
        };
         draft["styles"] = {
          bg: {},
          width: "100%",
          alignment: "center",
          padding: {
            top: "80px",
            right: "20px",
            bottom: "80px",
            left: "20px",
          },
          margin: {
            top: "0px",
            right: "0px",
            bottom: "0px",
            left: "0px",
          },
          teamMember:{
             memberPhoto: {
              width: "420px",
              height: "350px",
              objectFit: "cover",
              grayScale: 100,
              hoverGrayScale: 0,
              bg:{type:"gradient",gradient:"linear-gradient(to right bottom, rgb(15, 23, 42), rgb(51, 65, 85))"},
              hoverScale:1.1
            },
            social:{
              colors:{color:"#0f172a",bg:"#ffffff",bgType:"solid"},
              hoverColors:{color:"#fff",bg:"#0f172a",bgType:"solid"},
              width:"42px",
              height:"42px",
              size:22,
              radius:{
                top:"50%",
                left:"50%",
                right:"50%",
                bottom:"50%",
              }
            },
            name:{
              typo: {
                fontFamily: "Default",
                fontCategory: "sans-serif",
                fontWeight: 800,
                isUploadFont: true,
                fontSize: {
                  desktop: "22px",
                  tablet: "22px",
                  mobile: "22px",
                },
                fontStyle: "normal",
                textTransform: "none",
                textDecoration: "none",
                lineHeight: "",
                letterSpace: "0px",
              },
              color: "#0f172a",
              margin:{
                top:"0px",
                right:"0px",
                bottom:"0px",
                left:"0px",

              }
            },
            title:{
              typo: {
                fontFamily: "Default",
                fontCategory: "sans-serif",
                fontWeight: 400,
                isUploadFont: true,
                fontSize: {
                  desktop: "16px",
                  tablet: "16px",
                  mobile: "16px",
                },
                fontStyle: "normal",
                textTransform: "none",
                textDecoration: "none",
                lineHeight: "",
                letterSpace: "0px",
              },
              color:"#475569",
              margin:{
                top:"0px",
                left:"0px",
                bottom:"0px",
                right:"0px",
              }
            },
            content:{
              bg:{type:"solid",color:"#fff"},
              padding:{
                top:"32px",
                right:"32px",
                bottom:"32px",
                left:"32px",
              },
              radius:{
                top:"24px",
                right:"24px",
                bottom:"24px",
                left:"24px",
              },
              shadow:[
                {
                  hOffset: "0px",
                  vOffset: "12px",
                  blur: "30px",
                  spreed: "0px",
                  color: "rgba(0, 0, 0, 0.12)",
                  isInset: false
                }
              ],
              hoverRotate:6,

            },
            serial:{
              colors:{color:"#fff",type:"solid",bg:"#0f172a"},
              width:"50px",
              height:"50px",
              radius:{
                top:"50%",
                right:"50%",
                bottom:"50%",
                left:"50%",
              },
              typo: {
                fontFamily: "Default",
                fontCategory: "sans-serif",
                fontWeight: 700,
                isUploadFont: true,
                fontSize: {
                  desktop: "20px",
                  tablet: "20px",
                  mobile: "20px",
                },
                fontStyle: "normal",
                textTransform: "none",
                textDecoration: "none",
                lineHeight: "",
                letterSpace: "0px",
              }

            },
            states:{
              border:{
                top: {
                  width: "1px",
                  style: "solid",
                  color: "#e2e8f0"
                },
                right: {
                  width: "0px",
                  style: "",
                  color: ""
                },
                bottom: {
                  width: "0px",
                  style: "",
                  color: ""
                },
                left: {
                  width: "0px",
                  style: "",
                  color: ""
                }
              },
              padding:{
                top:"24px",
                right:"0px",
                bottom:"0px",
                left:"0px",
              },
               margin:{
                top:"24px",
                right:"0px",
                bottom:"0px",
                left:"0px",
              },
              value:{
                typo:{
                fontFamily: "Default",
                fontCategory: "sans-serif",
                fontWeight: 700,
                isUploadFont: true,
                fontSize: {
                  desktop: "28px",
                  tablet: "28px",
                  mobile: "28px",
                },
                fontStyle: "normal",
                textTransform: "none",
                textDecoration: "none",
                lineHeight: "",
                letterSpace: "0px",
              },
              color:"#000",
              },
                 label:{
                typo:{
                fontFamily: "Default",
                fontCategory: "sans-serif",
                fontWeight: null,
                isUploadFont: true,
                fontSize: {
                  desktop: "16px",
                  tablet: "16px",
                  mobile: "16px",
                },
                fontStyle: "normal",
                textTransform: "none",
                textDecoration: "none",
                lineHeight: "",
                letterSpace: "0px",
              },
              color:"#475569",
              },
              width:"60px",
              height:"60px",
              iconOne:{
                colors:{color:"#2563eb",bgType:"solid",bg:"#eff6ff"}
              },

               iconTwo:{
                colors:{color:"#059669",bgType:"solid",bg:"#ecfdf5"}
              },
              size:32,
              radius:{
                top:"20px",
                right:"20px",
                bottom:"20px",
                left:"20px",
              }
            },
            btn:{
              colors:{color:"#fff",bgType:"solid",bg:"#0f172a"},
              padding:{
                top:"16px",
                left:"0px",
                bottom:"16px",
                right:"0px",
              },
                radius:{
                top:"14px",
                left:"14px",
                bottom:"14px",
                right:"14px",
              },
               typo: {
                fontFamily: "Default",
                fontCategory: "sans-serif",
                fontWeight: 600,
                isUploadFont: true,
                fontSize: {
                  desktop: "16px",
                  tablet: "16px",
                  mobile: "16px",
                },
                fontStyle: "normal",
                textTransform: "none",
                textDecoration: "none",
                lineHeight: "",
                letterSpace: "0px",
              }
            }
          }
        };
        break;
        case "theme11":
           
        draft["isLinkNewTab"] = false;
        draft["isTitle"] = true;
        draft["isSocial"] = true;
        draft["columnGap"] = "24px";
        draft["rowGap"] = "24px";
        draft["columns"] = {
          desktop: 2,
          tablet: 1,
          mobile: 1,
        };
         draft["styles"] = {
          bg: {},
          width: "1200px",
          alignment: "center",
          padding: {
            top: "80px",
            right: "20px",
            bottom: "80px",
            left: "20px",
          },
          margin: {
            top: "0px",
            right: "0px",
            bottom: "0px",
            left: "0px",
          },
          teamMember:{
             memberPhoto: {
              // width: "420px",
              height: "100%",
              objectFit: "cover",
              // grayScale: 100,
              hoverGrayScale: 0,
              bg:{type:"gradient",gradient:"linear-gradient(to right, transparent, white)"},
              hoverScale:1.1
            },
       
             bio: {
              color: "#475569",
              typo: {
                fontFamily: "Default",
                fontCategory: "sans-serif",
                fontWeight: null,
                isUploadFont: true,
                fontSize: {
                  desktop: "16px",
                  tablet: "16px",
                  mobile: "16px",
                },
                fontStyle: "normal",
                textTransform: "none",
                textDecoration: "none",
                lineHeight: "",
                letterSpace: "0px",
              },
            },
            name:{
              typo: {
                fontFamily: "Default",
                fontCategory: "sans-serif",
                fontWeight: 700,
                isUploadFont: true,
                fontSize: {
                  desktop: "28px",
                  tablet: "28px",
                  mobile: "28px",
                },
                fontStyle: "normal",
                textTransform: "none",
                textDecoration: "none",
                lineHeight: "",
                letterSpace: "0px",
              },
              color: "#0f172a",
              margin:{
                top:"10px",
                right:"0px",
                bottom:"10px",
                left:"0px",

              }
            },
            title:{
              typo: {
                fontFamily: "Default",
                fontCategory: "sans-serif",
                fontWeight: 6000,
                isUploadFont: true,
                fontSize: {
                  desktop: "13px",
                  tablet: "13px",
                  mobile: "13px",
                },
                fontStyle: "normal",
                textTransform: "none",
                textDecoration: "none",
                lineHeight: "",
                letterSpace: "0px",
              },
              color:"#2563eb",
              margin:{
                top:"0px",
                left:"0px",
                bottom:"0px",
                right:"0px",
              }
            },
            content:{
              bg:{type:"solid",color:"#fff"},
              padding:{
                top:"32px",
                right:"32px",
                bottom:"32px",
                left:"32px",
              },
              radius:{
                top:"24px",
                right:"24px",
                bottom:"24px",
                left:"24px",
              },
              shadow:[
                {
                  hOffset: "0px",
                  vOffset: "12px",
                  blur: "30px",
                  spreed: "0px",
                  color: "rgba(0, 0, 0, 0.12)",
                  isInset: false
                }
              ],
              hoverRotate:6,

            },
            // serial:{
            //   colors:{color:"#fff",type:"solid",bg:"#0f172a"},
            //   width:"50px",
            //   height:"50px",
            //   radius:{
            //     top:"50%",
            //     right:"50%",
            //     bottom:"50%",
            //     left:"50%",
            //   },
            //   typo: {
            //     fontFamily: "Default",
            //     fontCategory: "sans-serif",
            //     fontWeight: 700,
            //     isUploadFont: true,
            //     fontSize: {
            //       desktop: "20px",
            //       tablet: "20px",
            //       mobile: "20px",
            //     },
            //     fontStyle: "normal",
            //     textTransform: "none",
            //     textDecoration: "none",
            //     lineHeight: "",
            //     letterSpace: "0px",
            //   }

            // },
            // states:{
            //   border:{
            //     top: {
            //       width: "1px",
            //       style: "solid",
            //       color: "#e2e8f0"
            //     },
            //     right: {
            //       width: "0px",
            //       style: "",
            //       color: ""
            //     },
            //     bottom: {
            //       width: "0px",
            //       style: "",
            //       color: ""
            //     },
            //     left: {
            //       width: "0px",
            //       style: "",
            //       color: ""
            //     }
            //   },
            //   padding:{
            //     top:"24px",
            //     right:"0px",
            //     bottom:"0px",
            //     left:"0px",
            //   },
            //    margin:{
            //     top:"24px",
            //     right:"0px",
            //     bottom:"0px",
            //     left:"0px",
            //   },
            //   value:{
            //     typo:{
            //     fontFamily: "Default",
            //     fontCategory: "sans-serif",
            //     fontWeight: 700,
            //     isUploadFont: true,
            //     fontSize: {
            //       desktop: "28px",
            //       tablet: "28px",
            //       mobile: "28px",
            //     },
            //     fontStyle: "normal",
            //     textTransform: "none",
            //     textDecoration: "none",
            //     lineHeight: "",
            //     letterSpace: "0px",
            //   },
            //   color:"#000",
            //   },
            //      label:{
            //     typo:{
            //     fontFamily: "Default",
            //     fontCategory: "sans-serif",
            //     fontWeight: null,
            //     isUploadFont: true,
            //     fontSize: {
            //       desktop: "16px",
            //       tablet: "16px",
            //       mobile: "16px",
            //     },
            //     fontStyle: "normal",
            //     textTransform: "none",
            //     textDecoration: "none",
            //     lineHeight: "",
            //     letterSpace: "0px",
            //   },
            //   color:"#475569",
            //   },
            //   width:"60px",
            //   height:"60px",
            //   iconOne:{
            //     colors:{color:"#2563eb",bgType:"solid",bg:"#eff6ff"}
            //   },

            //    iconTwo:{
            //     colors:{color:"#059669",bgType:"solid",bg:"#ecfdf5"}
            //   },
            //   size:32,
            //   radius:{
            //     top:"20px",
            //     right:"20px",
            //     bottom:"20px",
            //     left:"20px",
            //   }
            // },
            btn:{
              color:"#0f172a",
           
            
               typo: {
                fontFamily: "Default",
                fontCategory: "sans-serif",
                fontWeight: 600,
                isUploadFont: true,
                fontSize: {
                  desktop: "16px",
                  tablet: "16px",
                  mobile: "16px",
                },
                fontStyle: "normal",
                textTransform: "none",
                textDecoration: "none",
                lineHeight: "",
                letterSpace: "0px",
              },
              gap:8,
              iconSize:20,
            }
          }
        };
         break;
    }

  });

  export const sanitizeURL = (inputUrl) => {
  if (inputUrl === null || inputUrl === undefined) return null;

  const raw = String(inputUrl).trim();
  if (!raw) return null;

  // Allow ONLY site-relative URLs like "/about"
  if (raw.startsWith('/') && !raw.startsWith('//')) {
    return raw;
  }

  try {
    // Use base to parse consistently
    const url = new URL(raw, window.location.origin);

    // Allowlist protocols (block javascript:, data:, vbscript:, file:, etc.)
    const allowed = new Set(['http:', 'https:']);
    if (!allowed.has(url.protocol)) return null;

    return url.toString();
  } catch {
    return null;
  }
};

