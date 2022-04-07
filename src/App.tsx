import React from 'react';
import { useMoralis } from 'react-moralis';
import Header from './components/Header';
import { Helmet } from 'react-helmet';
import 'bootswatch/dist/pulse/bootstrap.min.css';
import { Container, Stack } from 'react-bootstrap';

function App() {
  const {
    authenticate,
    isAuthenticated,
    isAuthenticating,
    user,
    account,
    logout,
  } = useMoralis();

  const login = async () => {
    if (!isAuthenticated) {
      await authenticate({ signingMessage: 'Log in using Moralis' })
        .then(function (user) {
          console.log('logged in user:', user);
          console.log(user!.get('ethAddress'));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  const logOut = async () => {
    await logout();
    console.log('logged out');
  };

  return (
    <>
      <Helmet>
        <title>School React Kitties</title>
      </Helmet>
      <Header />
      <Stack gap={2} className="col-md-5 mx-auto">
        <h1>Moralis Hello World!</h1>
        <button onClick={login}>Moralis Metamask Login</button>
        <button onClick={logOut} disabled={isAuthenticating}>
          Logout
        </button>
      </Stack>
    </>
  );
}

export default App;
