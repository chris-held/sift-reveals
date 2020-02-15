import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import Mission from '../components/mission';
import Services from '../components/services';
import Work from '../components/work';
import Contact from '../components/contact';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Mission />
    <Services />
    {/* <Work /> */}
    <Contact />
  </Layout>
);

export default IndexPage;
