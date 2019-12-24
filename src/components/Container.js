import React from 'react';
import { Switch, Route, withRouter } from "react-router-dom";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import CssBaseline from "@material-ui/core/CssBaseline";
import Main from '../views/Main';
import Documentation from '../views/Documentation';
import Team from '../views/Team';
import About from '../views/About';
import Commands from '../views/Commands';
import ClusterHosting from '../views/ClusterHosting'
import styled from "styled-components";
import Footer from './Footer'


import '../App.css';

const theme = createMuiTheme({
    palette: {
      primary: {
        main: 'rgba(230, 80, 102, 1)',
      },
      background:{
        default: "rgba(255, 255, 255, 1)"
      }
    },
    typography: {
      fontFamily: "Open Sans"
    },
    props: {
      MuiButtonBase: {
        disableRipple: true
      }
    }
})

/**
 *  Redirecting views rules
 *  @Container
 */
const Container = ({ location }) => {

    return (
        <div>
            <Wrapper>
                <MuiThemeProvider theme={theme}>
                    <CssBaseline />
                    <TransitionGroup>
                        <CSSTransition
                        key={location.key}
                        timeout={{ enter: 300, exit: 300 }}
                        classNames={'fade'}>

                            <section className="route-section">
                                <Switch location={location}>
                                        <Route exact path="/" component={Main} />
                                        <Route exact path="/docs" component={Documentation} />
                                        <Route exact path="/team" component={Team} />
                                        <Route exact path="/about" component={About} />
                                        <Route exact path="/docs/cluster-hosting" component={ClusterHosting} />
                                        <Route exact path="/commands" component={Commands} />
                                </Switch>
                                <Footer />
                            </section>
                            
                        </CSSTransition>
                    </TransitionGroup>
                </MuiThemeProvider>
            </Wrapper>
        </div>
    )

}

const Wrapper = styled.div`
        .fade-enter {
            opacity: 0;
        }
        .fade-enter.fade-enter-active {
            opacity: 0;
            transition: opacity 300ms ease-in;
        }
        .fade-exit {
            opacity: 1;
        }
        
        .fade-exit.fade-exit-active {
            opacity: 0;
            transition: opacity 300ms ease-in;
        }
            
        div.transition-group {
            position: relative;
        }
        section.route-section {
            position: absolute;
            width: 100%;
            top: 0;
            left: 0;
        }
`



export default withRouter(Container)