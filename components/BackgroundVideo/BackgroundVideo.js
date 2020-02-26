import React from 'react';
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import videoz from "assets/img/zoomaTechZ.mp4";



const container = {
  position: "relative",
  minHeight: "300px",
  maxHeight: "800px",
  overflow: "hidden",
  marginBottom: "0px",
};

const video = {
  width: "100%",
  height: "100%",
};


const BackgroundVideo = () => {
    const videoSource = videoz
    return (
        <div style={container} >
            {/* <GridContainer>
            <GridItem>
              <div>
                <h1>TECH MEETINGS</h1>
                <h3>
                  test
                </h3>
              </div>
            </GridItem>
          </GridContainer> */}
            <video src={require('assets/img/zoomaTechZ.mp4')} autoPlay="autoplay" loop="loop" muted style={video} >

                {/* <source src={videoSource} type="video/mp4" /> */}
                Your browser does not support the video tag.
            </video>
        </div>
    )
}

export default BackgroundVideo