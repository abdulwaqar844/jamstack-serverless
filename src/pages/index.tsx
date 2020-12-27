import React from 'react';
import Header from '../components/Header';
import Button from '@material-ui/core/Button';
import Layout from "../components/layout"
const index = () => {
  return (
    <div>
        <Layout>
          <br/>
            <Header text="This is a heading" subtext="The is the sub heading"></Header>
            <p>This is my home page</p>
            <Button variant="contained" color="primary">
                Hello from Material UI 
            </Button>

        </Layout>
    </div>
);
}
export default index;
