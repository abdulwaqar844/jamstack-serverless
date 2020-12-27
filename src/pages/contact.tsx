import React from "react";
import Layout from "./../components/layout";
import FacebookIcon from '@material-ui/icons/Facebook';
const contact = () => {
    return (
        <div>
            <Layout>
                <h1>I can be contacted on following pages</h1>
                <br />
                <FacebookIcon  />
                <p><a href="https://www.facebook.com/abdulwaqar844">FaceBook</a></p>
                <p> <a href="https://www.twitter.com/abdulwaqar844">Twitter</a></p>
                <p>Email:abdulwaqar844@gmail.com<br/>Phone No: 923054051834</p>

            </Layout>

        </div>
    )
}
export default contact;
