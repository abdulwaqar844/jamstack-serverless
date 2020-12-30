import React from "react";
import styles from "./contact.module.css"
import Layout from "./../components/layout";
const contact = () => {
    return (
        <div>
            <Layout>
                <div className={styles.text}>
                <h1>I can be contacted on following pages</h1>
                <br />
                <p><a href="https://www.facebook.com/abdulwaqar844">FaceBook</a></p>
                <p> <a href="https://www.twitter.com/abdulwaqar844">Twitter</a></p>
                <p>Email:abdulwaqar844@gmail.com<br/>Phone No: 923054051834</p>
</div>
            </Layout>

        </div>
    )
}
export default contact;
