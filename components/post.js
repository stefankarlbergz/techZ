import React from "react";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Card from "components/Card/Card.js";

import styles from "assets/jss/nextjs-material-kit/components/postStyle.js";

// import classNames from "classnames";
// // nodejs library to set properties for components
// import PropTypes from "prop-types";

const useStyles = makeStyles(styles);

export default function Post({ alt, date, image, title, url }) {
  const classes = useStyles();
//   const cardClasses = classNames({
//     [classes.customBorder]: customBorder,
//     [classes.innerBorders]: innerBorders,
// 	[classes.background]: background,
// 	[classes.tl]: tl,
//     [classes.tr]: tr,
// 	[classes.bl]: bl,
// 	[classes.br]: br,
// 	[classes.inner]: inner,
// 	[classes.h3Question]: h3Question,
// 	[classes.answer]: answer
//   });

  return(
    <Card>
      {/* <img className={classes.imgCard} src={image} alt="Card-img" /> */}
      {/* <div className={classes.imgCardOverlay}>
        <h4 className={classes.cardTitle}>{title} -{date}</h4>
        <p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
   
      </div> */}
      <div className="customBorder">
					<div className="innerBorders">
						<div className="background">
							<span className="tl"></span>
							<span className="tr"></span>
							<span className="bl"></span>
							<span className="br"></span>
						</div>
					</div>

					<div className="inner">
						<h3 className="h3Question">{title} -{date}</h3>

						<div className="answer">
							<p>A: There are multiple options to check your jacket or bag, from complimentary to paid.</p>						
              </div>
					</div>
				</div>


				{/* <div className="customBorder">
					<div className={classes.innerBorders}>
						<div className={classes.background}>
							<span className={classes.tl}></span>
							<span className={classes.tr}></span>
							<span className={classes.bl}></span>
							<span className={classes.br}></span>
						</div>
					</div>

					<div className={classes.inner}>
						<h3 className={classes.h3Question}>{title} -{date}</h3>

						<div className={classes.answer}>
							<p>A: There are multiple options to check your jacket or bag, from complimentary to paid.</p>						
              </div>
					</div>
				</div> */}

    </Card>
  );
}


