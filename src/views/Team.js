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
import { Grid } from '@material-ui/core';

class Team extends React.Component {


  render() {

    document.title = "Team | Annie"

    return (
        <div className="Team">
            <NavBar view="Team"/>
            <div className="header-text" align="left" style={{marginLeft: 140, marginTop: 150}}>
              <Slide
              in={true}
              timeout={1000}
              direction="right">
                <Typography 
                variant="h3"
                style={{
                color: "rgba(0, 0, 0, 1)",
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
                style={{color: "rgba(0, 0, 0, 0.5)", marginTop: 5}}>
                Amazing people that make Annie possible!
                </Typography>
              </Slide>
            </div>
            
            <div className="personCard" 
            style={{
              marginBottom: 100, 
              marginTop: 20,
            }}>

              <Grid container justify="center" spacing={8} style={{marginTop: 50}}>
                
                <Grid item>
                  <Cardbox titleName="Naph" avatarRef={naphAvatar} role="Product Manager"
                  description= "Hello there! I'm the owner of AAU and mainly managing product team. I also love designing modern UI!"/>
                </Grid>

                <Grid item>
                  <Cardbox titleName="Panpan" avatarRef={panAvatar} role="Lead Engineer"
                  description= "Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>
                </Grid>                
                
                <Grid item>
                  <Cardbox titleName="Sunny" avatarRef={sunnyAvatar} role="Backend Engineer"
                  description= "Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>
                </Grid>

                <Grid item>
                  <Cardbox titleName="Fwubbles" avatarRef={fwubblesAvatar} role="Backend Engineer"
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

              </Grid>
            </div>
        </div>
    )
  }
}
export default Team