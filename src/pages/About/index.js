// Vendor
import React from 'react';
// Components
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Layout from '../../components/Layout';

const About = () => (
  <Layout title="About" hideReloadButton gutterBottom>
    <Typography variant="display2" component="h1" gutterBottom>
      About application
    </Typography>
    <Typography variant="subheading" component="p" gutterBottom>
      Single page application for data presented in{' '}
      <a href="https://jsonplaceholder.typicode.com/" target="_blank">
        https://jsonplaceholder.typicode.com/
      </a>.
    </Typography>
    <Button
      href="https://github.com/adlite/fake-api-output"
      target="_blank"
      variant="contained"
      color="inherit">
      Visit app repository
    </Button>
  </Layout>
);

export default About;
