import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import ErrorHandler from './shared/ErrorHandler';
import Footer from './shared/Footer';
import Header from './shared/Header';
import Flights from './flights/Flights';

const App = () => {

  const renderRoutes = () => {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/flights" component={Flights} />
          <Redirect to="/flights" />
        </Switch>
      </Suspense>
    )
  }

  return (
    <React.Fragment>
      <CssBaseline />

      <Header></Header>

      <Container component="main">
        <Router>
          <ErrorHandler>{renderRoutes()}</ErrorHandler>
        </Router>
      </Container>

      <Footer></Footer>

    </React.Fragment>
  );
}

export default App;