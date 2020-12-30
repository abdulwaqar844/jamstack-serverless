import React from "react";
import styles from "./index.module.css"
import Layout from "../components/layout"
const Hello = () => {
  return (
    <Layout>

    <div className={styles.text}>

      <h4><b>I am Who I Am!</b></h4>
      <img style={{height:"150px",width:"150px"}} src={"https://pbs.twimg.com/profile_images/1302920104057999360/9G6-5JJ9_400x400.jpg"} alt="profile photo"/>
      <h6><i>With Passion For Real, Good Food</i></h6>
      <p>Just me, myself and I, exploring the universe of unknownment. I have a heart of love and an interest of lorem ipsum and mauris neque quam blog. I want to share my world with you. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
        
      </div>
 </Layout>
  )
}
export default Hello;
