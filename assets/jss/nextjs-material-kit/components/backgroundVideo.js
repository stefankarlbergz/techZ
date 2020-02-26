import {
  roseColor,
  primaryColor,
  infoColor,
  successColor,
  warningColor,
  dangerColor
} from "assets/jss/nextjs-material-kit.js";

const backgroundVideo = theme => ({

container: {
  position: "relative",
  minHeight: "300px",
  maxHeight: "800px",
  overflow: "hidden",
  marginBottom: "500px",
},

/* Style the video: 100% width and height to cover the entire window */
video: {
  width: "100%",
  height: "100%",
},

/* Add some content at the bottom of the video/page */
// content: {
//   position: "absolute",
//   top: "0",
//   color: "#f1f1f1",
//   backgroundColor: dangerColor,
//   width: "100%",
//   height: "100%",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   padding: "0",
// },

// subContent: {
//     textAlign: "center",
//     padding: "10px",
//     "& p": {
//       color: "#eeeeeead",
//       fontSize: "1.3rem",
//     },
//     "& button": {
//       fontWeight: "bold",
//     marginTop: "30px",
//     color: "#f1f1f1",
//     border: "#f1f1f1 1px solid",
//     padding: "10px 5px",
//     backgroundColor: "hsla(0, 0%, 0%, 0)",
//     fontSize: "1.25rem",
//     borderRadius: "5px",
//     },
//     "& button:hover": {
//     backgroundColor: "#f1f1f1",
//     color: "#000000c0",
//     },
//     "& img": {
//       width: "200px",
//       height: "200px",
//       borderRadius: "50%",
//       display: "block",
//       margin: "15px auto",
//       border: "#f1f1f1 1px solid",
//       },
//   }

});

export default backgroundVideo;