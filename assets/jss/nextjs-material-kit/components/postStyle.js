const postStyle = {

        // "*": {
        //   WebkitBoxSizing: "border-box",
        //   MozBoxSizing: "border-box",
        //   boxSizing: "border-box",
        //   outline: "0",
        //   resize: "none"
        // },
        // "div,h3,li,p,span": {
        //   margin: "0",
        //   padding: "0",
        //   border: "0",
        //   fontSize: "100%",
        //   font: "inherit",
        //   verticalAlign: "baseline"
        // },
        // "h3,li,p,span": {
        //   WebkitUserSelect: "none",
        //   MozUserSelect: "none",
        //   msUserSelect: "none",
        //   userSelect: "none"
        // },
        // h3: {
        //   fontFamily: '"Arcade Normal",Helvetica,Arial,sans-serif',
        //   color: "#fff",
        //   marginBottom: ".5em"
        // },
        // ".h3": { fontSize: "20px" },
        // p: {
        //   marginBottom: "1.2em",
        //   fontSize: "24px",
        //   lineHeight: "1.2em",
        //   color: "#fff"
        // },
        // "@media only screen and (max-width:991px)": { p: { textAlign: "justify" } },
        // "p:last-child": { marginBottom: "0" },
        // "::-moz-selection": { background: "#611342", color: "#fdc40f" },
        // "::selection": { background: "#611342", color: "#fdc40f" },
        // ".customBorder": { position: "relative" },
        // ".customBorder:after,.customBorder:before": {
        //   content: '""',
        //   display: "block",
        //   width: [
        //     "-webkit-calc(100% - 7.5px * 2)",
        //     "-moz-calc(100% - 7.5px * 2)",
        //     "calc(100% - 7.5px * 2)"
        //   ],
        //   height: "7.5px",
        //   position: "absolute",
        //   backgroundColor: "#fff",
        //   left: "7.5px",
        //   zIndex: "2"
        // },
        // ".customBorder:before": { top: "0" },
        // ".customBorder:after": { bottom: "0" },
        // ".customBorder .innerBorders": {
        //   position: "absolute",
        //   left: "0",
        //   top: "0",
        //   width: "100%",
        //   height: "100%",
        //   zIndex: "2"
        // },
        // ".customBorder .innerBorders:after,.customBorder .innerBorders:before": {
        //   content: '""',
        //   display: "block",
        //   width: "7.5px",
        //   height: [
        //     "-webkit-calc(100% - 7.5px * 2)",
        //     "-moz-calc(100% - 7.5px * 2)",
        //     "calc(100% - 7.5px * 2)"
        //   ],
        //   position: "absolute",
        //   backgroundColor: "#fff",
        //   top: "7.5px",
        //   zIndex: "2"
        // },
        // ".customBorder .innerBorders:before": { left: "0" },
        // ".customBorder .innerBorders:after": { right: "0" },
        // ".customBorder .innerBorders .background": {
        //   position: "absolute",
        //   left: "7.5px",
        //   top: "7.5px",
        //   width: [
        //     "-webkit-calc(100% - 7.5px * 2)",
        //     "-moz-calc(100% - 7.5px * 2)",
        //     "calc(100% - 7.5px * 2)"
        //   ],
        //   height: [
        //     "-webkit-calc(100% - 7.5px * 2)",
        //     "-moz-calc(100% - 7.5px * 2)",
        //     "calc(100% - 7.5px * 2)"
        //   ],
        //   backgroundColor: "rgba(0,0,0,.5)"
        // },
        // ".customBorder .innerBorders .background span": {
        //   display: "block",
        //   width: "7.5px",
        //   height: "7.5px",
        //   backgroundColor: "green",
        //   position: "absolute",
        //   zIndex: "1"
        // },
        // ".customBorder .innerBorders .background span.tl": { left: "0", top: "0" },
        // ".customBorder .innerBorders .background span.tr": { right: "0", top: "0" },
        // ".customBorder .innerBorders .background span.bl": {
        //   left: "0",
        //   bottom: "0"
        // },
        // ".customBorder .innerBorders .background span.br": {
        //   right: "0",
        //   bottom: "0"
        // },
        // ".customBorder .inner": {
        //   padding: "30px 25px",
        //   position: "relative",
        //   zIndex: "2"
        // },
        // ".customBorder.small-border:after,.customBorder.small-border:before": {
        //   height: "3px",
        //   width: [
        //     "-webkit-calc(100% - 3px * 2)",
        //     "-moz-calc(100% - 3px * 2)",
        //     "calc(100% - 3px * 2)"
        //   ],
        //   left: "3px"
        // },
        // ".customBorder.small-border .innerBorders:after,.customBorder.small-border .innerBorders:before": {
        //   width: "3px",
        //   height: [
        //     "-webkit-calc(100% - 3px * 2)",
        //     "-moz-calc(100% - 3px * 2)",
        //     "calc(100% - 3px * 2)"
        //   ],
        //   top: "3px"
        // },
        // ".customBorder.small-border .innerBorders .background": {
        //   left: "3px",
        //   top: "3px",
        //   width: [
        //     "-webkit-calc(100% - 3px * 2)",
        //     "-moz-calc(100% - 3px * 2)",
        //     "calc(100% - 3px * 2)"
        //   ],
        //   height: [
        //     "-webkit-calc(100% - 3px * 2)",
        //     "-moz-calc(100% - 3px * 2)",
        //     "calc(100% - 3px * 2)"
        //   ]
        // },
        // ".customBorder.small-border .innerBorders .background span": {
        //   width: "3px",
        //   height: "3px"
        // },
        // "#faqs .results ul li": { marginBottom: "1em" },
        // "#faqs .results ul li .inner": { padding: "0" },
        // "#faqs .results ul li .question": {
        //   marginBottom: "0",
        //   position: "relative",
        //   padding: "30px 45px 30px 25px"
        // },
        // "@media only screen and (max-width:768px)": {
        //   "#faqs .results ul li .question": { fontSize: "16px" }
        // },
        // "#faqs .results ul li .question:after": {
        //   content: '""',
        //   backgroundImage:
        //     "url(https://blastgalaxy.nl/wp-content/themes/blastgalaxy/src/images/angle-white.svg)",
        //   backgroundRepeat: "no-repeat",
        //   WebkitBackgroundSize: "contain",
        //   MozBackgroundSize: "contain",
        //   OBackgroundSize: "contain",
        //   backgroundSize: "contain",
        //   backgroundPosition: "center",
        //   height: "25px",
        //   width: "15px",
        //   position: "absolute",
        //   right: "15px",
        //   top: "50%",
        //   WebkitTransform: "translateY(-50%)",
        //   MozTransform: "translateY(-50%)",
        //   msTransform: "translateY(-50%)",
        //   OTransform: "translateY(-50%)",
        //   transform: "translateY(-50%)",
        //   zIndex: "1",
        //   WebkitTransition: "all .2s ease-in-out",
        //   OTransition: "all .2s ease-in-out",
        //   MozTransition: "all .2s ease-in-out",
        //   transition: "all .2s ease-in-out"
        // },
        // "#faqs .results ul li .answer": {
        //   display: "none",
        //   padding: "0 25px 30px 25px"
        // },
        // "@font-face": {
        //   fontFamily: '"Arcade Normal"',
        //   src:
        //     'url(https://blastgalaxy.nl/wp-content/themes/blastgalaxy/dist/fonts/arcade_normal/ARCADE_N.eot) format("eot"),url(https://blastgalaxy.nl/wp-content/themes/blastgalaxy/dist/fonts/arcade_normal/ARCADE_N.woff) format("woff"),url(https://blastgalaxy.nl/wp-content/themes/blastgalaxy/dist/fonts/arcade_normal/ARCADE_N.ttf) format("truetype"),url(https://blastgalaxy.nl/wp-content/themes/blastgalaxy/dist/fonts/arcade_normal/ARCADE_N.svg#ArcadeNormal) format("svg")',
        //   fontWeight: "400",
        //   fontStyle: "normal"
        // }
 
      





//     customBorder: {
//         position: "relative",
//         "::before": {
//             height: "3px",
//             width: "-webkit-calc(100% - 3px * 2)",
//             width: '-moz-calc(100% - 3px * 2)',
//             width: "calc(100% - 3px * 2)",
//             left: "3px"
//         }
//     },
//     innerBorders: {
//         position: 'absolute',
//         left: '0',
//         top: '0',
//         width: '100%',
//         height: '100%',
//         zIndex: '2',
//     },
//     tl: {
//         left: "0",
//         top: "0",
//         width: "3px",
//         height: "3px"
//     },
//     backGround: {
//         left: "3px",
//   top: "3px",
//   width: "calc(100% - 3px * 2)",
//   height: "calc(100% - 3px * 2)",
//   position: "absolute",
//   backgroundColor: "rgba(0,0,0,.5)"
//     },
//     ".customBorder:before": { top: "0" },
//     ".customBorder:after": { bottom: "0" },
//     ".customBorder .innerBorders": {
//       position: "absolute",
//       left: "0",
//       top: "0",
//       width: "100%",
//       height: "100%",
//       zIndex: "2"
//     },
//     ".customBorder .innerBorders:after,.customBorder .innerBorders:before": {
//         content: '""',
//         display: "block",
//         width: "7.5px",
//         height: [
//           "-webkit-calc(100% - 7.5px * 2)",
//           "-moz-calc(100% - 7.5px * 2)",
//           "calc(100% - 7.5px * 2)"
//         ],
//         position: "absolute",
//         backgroundColor: "#fff",
//         top: "7.5px",
//         zIndex: "2"
//       },

 
   

    
  };
  
  export default postStyle;
  