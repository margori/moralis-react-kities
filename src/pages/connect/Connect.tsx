import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useMoralis } from 'react-moralis';

const Connect = () => {
  const {
    authenticate,
    isAuthenticated,
    isAuthenticating,
    user,
    account,
    logout,
  } = useMoralis();

  const login = () => {
    if (!isAuthenticated && !isAuthenticating) {
      console.log('login');
      authenticate({ signingMessage: 'Log in using Moralis' })
        .then((user) => {
          console.log('logged in user:', user);
          console.log(user!.get('ethAddress'));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    login();
  });

  return (
    <Container fluid={true} className="text-center">
      <h2>{isAuthenticated ? 'Connected' : 'Connecting...'}</h2>
    </Container>
  );
};

export default Connect;
