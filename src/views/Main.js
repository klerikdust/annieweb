import React, { Component } from 'react'
import { Helmet } from 'react-helmet';
import Grow from '@material-ui/core/Grow'
import Slide from '@material-ui/core/Slide'

/**
 *  Importing Icons
 */
import AestheticsIco from '../assets/aesthetic.png'
import ArtsIco from '../assets/arts.png'
import ConnectIco from '../assets/connected.png'
import FeaturesIco from '../assets/features.png'
import GamingIco from '../assets/gaming.png'
import MarketplaceIco from '../assets/market.png'


/**
 *  Custom Components
 */
import { mobile } from '../config/Layout.json'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Cardbox from '../components/Cardbox'
import NavBar from '../components/NavBar'
import HeaderImage from '../components/HeaderImage'
import ServerLink from '../components/ServerLink'


class MainPage extends Component {
    constructor(props) {
        super(props)
        this.state = {mobileLayout:false, onTop:true};
        this.minifiedWidth = mobile.maxWidth
    }

    componentDidMount(){
        window.addEventListener('scroll', this.listenToScroll)

        /**
         *  Checking for mobile layout
         *  <>
         */
        if(window.innerWidth <= this.minifiedWidth){
          this.setState({mobileLayout:true});
        }
    
        window.addEventListener('resize',()=>{
          if(window.innerWidth <= this.minifiedWidth){
            this.setState({mobileLayout:true});
          }
          else{
            this.setState({mobileLayout:false})
          }
        });
      }


      componentWillUnmount() {
        window.removeEventListener('scroll', this.listenToScroll)
      }
      
      listenToScroll = () => {
        //  Display if current view on topmost.
        let onTop =  window.pageYOffset < 60
        this.setState({
          onTop: onTop
        })
      }


    render() {

      return (
          <div className="mainPage" position="relative">

            {/**  Initializing Title  */}
            <Helmet>
              <title>Annie | Dedicated-Art Discord Bot</title>
            </Helmet>

            {/**  Set Navigation Bar */}
            <NavBar view="main"/>
            
            {/**  Main Landing page content  */}
            <Slide in={true} timeout={1000} direction="right">
              <HeaderImage onright imageref="annie1" />
            </Slide>

            <Grid container spacing={2} style={{
              textAlign: `center`,
              marginTop: 220,
              padding: 20,
              zIndex: 1
              }}>

              {/**  Header Title */}
              <Grow in={true} timeout={1200}>
                  <Grid item xs={12} style={{display: "inline"}}>
                    <Typography 
                      variant={this.state.mobileLayout ? `h3` : `h2`}
                      style={{
                        color: "rgba(0, 0, 0, 0.8)",
                        fontWeight: "bold"
                      }}>
                      Say hello to, <span className={this.state.onTop ? "landingtitle" : "landingtitle-scroll-down"}>Annie.</span>
                    </Typography>
                  </Grid>
                </Grow>
          
                {/**  Header Caption */}
                <Grow in={true} timeout={1200}>
                  <Grid item xs={12} style={{display: "inline"}}>
                    <Typography 
                        variant="subtitle1"
                        style={{
                          color: "rgba(0, 0, 0, 0.6)",
                        }}>
                        Redefined Discord Bot that will enrich your guild experience. 
                    </Typography>
                  </Grid>
                </Grow>
            </Grid>
            
            {/**  This image won't be displayed on smaller screen a.k.a mobile layout */}
            {
              !this.state.mobileLayout 
              ? <Slide in={true} timeout={1000} direction="top">
                  <HeaderImage onleft imageref="annie2" yDistance="60vh" />
                </Slide> 
              : null
            }

            {/**  Body Content 1  */}
            <Grid container spacing={4} justify="center">
              <Grid item xs={12}>
                <Typography color="textPrimary" style={{marginTop: "50vh", fontSize: "24pt", textAlign: "center", marginBottom: 50}}>
                  Why you should <span style={{fontWeight: 1000}}>choose</span> Annie?
                </Typography>
              </Grid>
              <Grid item>
                <Cardbox smalltitle iconMedia titleName="Aesthetics" avatarRef={AestheticsIco}
                description="Annie believes color tells more than just a story. We carefully picked variety of good color to bring more meaningful interaction for you."/>
              </Grid>
              <Grid item>
                <Cardbox smalltitle iconMedia titleName="Built for artists" avatarRef={ArtsIco}
                 description="Having trouble with fundamentals? bad drawing habit? or looking for fresh inspirations? Annie got your problem covered."/>
              </Grid>
              <Grid item>
                <Cardbox smalltitle iconMedia titleName="Stay Connected" avatarRef={ConnectIco}
                description="Annie connects every artists around the discord community for you to discover and share creative-like minds."/>
              </Grid>
              <Grid item>
                <Cardbox smalltitle iconMedia titleName="Innovative Features" avatarRef={FeaturesIco}
                description="We know you're tired looking at the same stuff everyday. Fortunately this is not an issue with Annie's constant update."/>
              </Grid>
              <Grid item>
                <Cardbox smalltitle iconMedia titleName="Gamified" avatarRef={GamingIco}
                description="Sometimes things can get boring easily. Even with drawing. So we introduced to you a gamified system such as artquest, achievement and much more."/>
              </Grid>
              <Grid item>
                <Cardbox smalltitle iconMedia titleName="Marketplace" avatarRef={MarketplaceIco}
                description="Annie helps artists to promote their commission post worldwide and get you a potential client faster than ever."/>
              </Grid>
            </Grid>

            {/**  Footer Content  */}
            <Grid container spacing={2} justify="center" style={{textAlign: "center", marginTop: 150}}>
              <Grid item xs={12} style={{margin: 20}}>

                {/**  Footer title */}
                <Typography style={{textAlign: "center", fontSize: 20, fontWeight: "medium", fontStyle:"italic"}}>
                  Annie will be available publicly soon...<br />So join her support server to keep up to date with the latest announcement!
                </Typography>

                {/**  CTA Button  */}
                <Slide in={true} timeout={600} direction="up">   
                  <Grid item xs={12} style={{marginTop: 25, marginBottom: 100}}>
                    <ServerLink />
                  </Grid>
                </Slide>

              </Grid>
            </Grid>
          </div>
      );
    }
}

export default MainPage;