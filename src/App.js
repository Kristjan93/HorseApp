import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import styled from 'styled-components';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './scenes/Home';
import ShortTours from './scenes/ShortTours';
import LongTours from './scenes/LongTours';
import ShortTour from './scenes/ShortTour';
import About from './scenes/About';
import Contact from './scenes/Contact';
import Down from './scenes/Down';

injectTapEventPlugin();

const SiteContainer = styled.div`
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    padding-top: 64px;
`;

const ContentContainer = styled.div`
    display: flex;
    flex: 1 0 auto;
`;

const FooterContainer = styled.div`

`;

class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider>
        <div>
          <SiteContainer>
            <Header />

            <ContentContainer>
              <Switch>
                <Route exact path="/home" component={Home} />

                <Route exact path="/short-tours" component={ShortTours} />
                <Route exact path="/long-tours" component={LongTours} />

                <Route exact path="/short-tours/:id" component={ShortTour} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
                <Route component={Home} />
              </Switch>
            </ContentContainer> 
            
            <FooterContainer>
              <Footer />
            </FooterContainer>
          </SiteContainer>
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;