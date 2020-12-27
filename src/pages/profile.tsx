import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/Layout"
import Profile1 from "../components/profile1";
import Profile2 from "../components/profile2"
import Default from "../components/DefaultClient"
import { Link } from "gatsby";
const Profile = () => {
  return (
    <Layout>
        <div>
            <Link to="/profile/profile1" >Profile 1</Link>
            <Link to="/profile/profile2" >Profile 2</Link>

        </div>
      <Router basepath="/profile">
        <Profile1 path="/profile1" />
        <Profile2 path="/profile2" />
        <Default path="/" />
      </Router>
    </Layout>
  )
}

export default Profile;