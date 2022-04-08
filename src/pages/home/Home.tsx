import React from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>School React Kitties</title>
      </Helmet>
      <Container fluid={true} className="text-center">
        <h1>School React Kitties</h1>
      </Container>
    </>
  );
};

export default Home;
