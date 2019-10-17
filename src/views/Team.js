import React from 'react'
import Typography from "@material-ui/core/Typography";
import Slide from "@material-ui/core/Slide";
import NavBar from '../components/NavBar';
import Cardbox from '../components/Cardbox';
import naphAvatar from '../assets/naphavatar.png';
import panAvatar from '../assets/panavatar.png';
import sunnyAvatar from '../assets/sunnyavatar.png';
import fwubblesAvatar from '../assets/fwubblesavatar.png';
import raluAvatar from '../assets/raluavatar.png';
import shinAvatar from '../assets/shinavatar.png';
import poppyAvatar from '../assets/poppyavatar.png';
import renAvatar from '../assets/reenakiavatar.png';
import tantanAvatar from '../assets/tantanavatar.jpg';
import hugoAvatar from '../assets/hugoavatar.jpg';
import hikaAvatar from '../assets/hikaavatar.jpg';
import kitoAvatar from '../assets/kitomiavatar.jpg';
import { Grid } from '@material-ui/core';

class Team extends React.Component {
  constructor(props) {
    super(props)
    this.state = {smallScreen: false}
  }

  componentWillMount(){
    if(window.innerWidth <= 600){
      this.setState({smallScreen:true});
    }

    window.addEventListener('resize',()=>{
      if(window.innerWidth <= 600){
        this.setState({smallScreen:true});
      }
      else{
        this.setState({smallScreen:false})
      }
    });
  }

  render() {

    document.title = "Team | Annie"

    return (
        <div className="Team">
        <NavBar view="Team"/>
          <div className="Image">
            <Slide
            in={true}
            timeout={1000}
            direction="left"
            >
              <img 
              src={require('../assets/teamlanding.png')}
              alt="LandingImage"
              style={{
                float: "right",
                width: "auto",
                height: "100vh",
                marginLeft: "20",
                marginTop: "-35vh",
                opacity: this.state.smallScreen ? "0.3" : "1"
              }}
              />
            </Slide>
          </div>  


          <div className="header-text" align="left" style={{
              marginLeft: this.state.smallScreen ? 20 : 100,
              float: "left",
              position: "absolute"}}>
              <Slide
              in={true}
              timeout={1000}
              direction="right">
                <Typography 
                gutterBottom
                variant="h2"
                style={{
                color: "rgba(0, 0, 0, 1)",
                fontWeight: 430,
                }}>
                  Development Team
                </Typography>
              </Slide>

              <Slide
              in={true}
              timeout={1200}
              direction="right">
                <Typography 
                variant="subtitle1"
                style={{
                  color: "rgba(0, 0, 0, 0.5)",
                  fontWeight: 500
                }}>
                Below are amazing people that make Annie possible!
                </Typography>
              </Slide>
            </div>
            
            <div className="personCard" 
            style={{
              marginBottom: 100, 
              marginTop: "45vh",
            }}>

              <Grid container justify="center" spacing={2}>
                
                <Grid item>
                  <Cardbox titleName="Naph" avatarRef={naphAvatar} role="UI/UX Engineer"
                  description= "Hello there! I'm the owner of AAU and mainly managing product team. I also love designing modern UI!"/>
                </Grid>

                <Grid item>
                  <Cardbox titleName="Panpan" avatarRef={panAvatar} role="Lead Developer"
                  description= "Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>
                </Grid>                
                
                <Grid item>
                  <Cardbox titleName="ametotaiyou" avatarRef={sunnyAvatar} role="Developer"
                  description= "Hey~ I program and draw. Nuff said"/>
                </Grid>

                <Grid item>
                  <Cardbox titleName="Fwubbles" avatarRef={fwubblesAvatar} role="Developer"
                  description= "Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>
                </Grid>

                <Grid item>
                  <Cardbox titleName="Tantan" avatarRef={tantanAvatar} role="Infrastructure Engineer"
                  description= "Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>
                </Grid>

                <Grid item>
                  <Cardbox titleName="Hugo" avatarRef={hugoAvatar} role="QA Engineer"
                  description= "Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>
                </Grid>

                <Grid item>
                  <Cardbox titleName="Poppy" avatarRef={poppyAvatar} role="Lead Creative"
                  description= "Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>
                </Grid>

                <Grid item>
                  <Cardbox titleName="Ralu" avatarRef={raluAvatar} role="CG Artist"
                  description= "Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>
                </Grid>

                <Grid item>
                  <Cardbox titleName="Shin" avatarRef={shinAvatar} role="CG Artist"
                  description= "Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>
                </Grid>

                <Grid item>
                  <Cardbox titleName="Ren" avatarRef={renAvatar} role="CG Artist"
                  description= "Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>
                </Grid>

                <Grid item>
                  <Cardbox titleName="Kitomi" avatarRef={kitoAvatar} role="CG Artist"
                  description= "I'm formerly the owner of AAU. Matcha KitKat are my favorite and Lily is a precious Cinnamon bun~"/>
                </Grid>

                <Grid item>
                  <Cardbox titleName="Hika" avatarRef={hikaAvatar} role="CG Artist"
                  description= "Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>
                </Grid>

              </Grid>
            </div>
        </div>
    )
  }
}
export default Team