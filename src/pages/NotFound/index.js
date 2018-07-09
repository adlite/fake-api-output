// Vendor
import React from 'react';
import Layout from '../../components/Layout';
import Fetcher from '../../components/Fetcher';

const NotFound = () => (
  <Layout title="Not found">
    <Fetcher isLoading={false} error="Page not found" />
  </Layout>
);

export default NotFound;
