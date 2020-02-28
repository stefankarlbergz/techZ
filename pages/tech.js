import React, {useState, useEffect} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import Link from "next/link";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
import Post from 'components/post'
// sections for this page

import styles from "assets/jss/nextjs-material-kit/pages/components.js";
import BackgroundVideo from 'components/BackgroundVideo/BackgroundVideo';

const useStyles = makeStyles(styles);

const client = require('contentful').createClient({
  space: "3rnc1fzczbik",
  accessToken: "LFv8DUnkOvSD3uP9RC55EFhoGaD4FdJFNqMfNyX8W4g"
})


async function fetchEntries() {
  const entries = await client.getEntries()
  if (entries.items) return entries.items
  console.log(`Error getting Entries for ${contentType.name}.`)
}



export default function Components(props) {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function getPosts() {
      const allPosts = await fetchEntries()
      setPosts([...allPosts])
    }
    getPosts()
  }, [])

  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="Zooma Tech"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
      />
       <BackgroundVideo />


      <div className={classNames(classes.main, classes.mainRaised)}>
        {/* <h2>Weekly meetings</h2> */}


       {posts.length > 0
        ? posts.map(p => (
            <Post
              alt={p.fields.alt}
              date={p.fields.date}
              key={p.fields.title}
              image={p.fields.image}
              title={p.fields.title}
              url={p.fields.url}
            />
          ))
        : null}
      </div>
      <Footer />
    </div>
  );
}
