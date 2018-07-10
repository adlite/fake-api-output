// Vendor
import React from 'react';
// Components
import Typography from '@material-ui/core/Typography';
import Layout from '../../components/Layout';

const About = () => (
  <Layout title="About" hideReloadButton gutterBottom>
    <Typography variant="display2" component="h1" gutterBottom>
      About application
    </Typography>
    <Typography component="p">Fake API Output application</Typography>
  </Layout>
);

export default About;
