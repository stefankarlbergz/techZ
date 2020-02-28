import React from "react";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Card from "components/Card/Card.js";

import imagesStyles from "assets/jss/nextjs-material-kit/imagesStyles.js";

import { cardTitle } from "assets/jss/nextjs-material-kit.js";

const styles = {
  ...imagesStyles,
  cardTitle,
};

const useStyles = makeStyles(styles);

export default function Post({ alt, date, image, title, url }) {
  const classes = useStyles();
  return(
    <Card>
      <img className={classes.imgCard} src={image} alt="Card-img" />
      <div className={classes.imgCardOverlay}>
        <h4 className={classes.cardTitle}>{title} -{date}</h4>
        <p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
   
      </div>
    </Card>
  );
}

// Card.propTypes = {
//   className: PropTypes.string,
//   plain: PropTypes.bool,
//   carousel: PropTypes.bool
// };

// CardBody.propTypes = {
//   className: PropTypes.string
// };

// CardFooter.propTypes = {
//   className: PropTypes.string
// };

// CardHeader.propTypes = {
//   className: PropTypes.string,
//   color: PropTypes.oneOf(["warning", "success", "danger", "info", "primary"]),
//   plain: PropTypes.bool
// };

 // <div className="container">
      //   <a href={url}>
      //     <img alt={alt}/>
      //   </a>
      //   <div className="text">
      //     <h2>{title}</h2>
      //     <h4>{date}</h4>
      //     test
      //   </div>

      // export default Post({ alt, date, image, title, url }) {