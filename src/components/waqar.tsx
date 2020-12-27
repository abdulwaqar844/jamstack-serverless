import React from "react";
import Layout from "./layout";
const Dynamic = ({pageContext}) => {
    console.log(pageContext)
    return (
        <Layout>
                <h1>Name:{pageContext.name}</h1>
                <h1>Course:{pageContext.Course}</h1>
                <h1>Quater:{pageContext.Quater}</h1>
                <div>This page is create dynamically at Build Time</div>


        </Layout>
    )
}
export default Dynamic;
