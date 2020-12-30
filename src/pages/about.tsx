import React from "react";
import Layout from "./../components/layout";
import styles from "./about.module.css";
const about = () => {
    return (
        <div>
            <Layout>
                <div className={styles.text}>
                <h1 >About me </h1>
                <h3>
                    My Name is Abdul Waqar. <br />
                    I have completed my Graduation In Computer Science <br />
                    form VU. </h3>
                <h4>Now i am enrolled in PIAIC Program for AI Course batch 35.
                <br />
                 I aslo joined PanaCloud Bootcamp. Where a dedicated and hardworking Team teaching us
                 <br />
                 JAMStack serverless Web Applications , Mobile Natice Application and much more.
             </h4>
</div>
            </Layout>


        </div>
    )
}
export default about;
