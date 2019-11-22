import React from 'react'
import Typography from "@material-ui/core/Typography";
import Grow from "@material-ui/core/Grow";
import NavBar from '../components/NavBar';
import Cardbox from '../components/Cardbox';
import naphAvatar from '../assets/naphavatar.png';
import panAvatar from '../assets/panavatar.png';
import sunnyAvatar from '../assets/sunnyavatar.png';
import fwubblesAvatar from '../assets/fwubblesavatar.png';
import tantanAvatar from '../assets/tantanavatar.jpg';
import hugoAvatar from '../assets/hugoavatar.jpg';
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
            <div className="header" style={{marginLeft: 100}}>
            <Grow
            in={true}
            timeout={1000}>
            <Typography 
              variant="h3"
              style={{
              color: "rgba(0, 0, 0, 1)",
              marginTop: 150,
              }}>
              Development Team
            </Typography>
          </Grow>
          <Grow
            in={true}
            timeout={2000}>
            <Typography 
                variant="subtitle1"
                style={{
                color: "rgba(0, 0, 0, 0.6)",
                marginTop: 10,
                fontWeight: "thin"
                }}>
               Below are amazing people that make annie possible!
              </Typography>
          </Grow>
              </div>

            
            <div className="personCard" 
            style={{
              marginBottom: 100, 
              marginTop: 100,
            }}>

              <Grid container justify="center" spacing={2}>

                <Grid item>
                  <Cardbox titleName="Panpan" avatarRef={panAvatar} role="Lead Developer"
                  description= "Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>
                </Grid>   

                <Grid item>
                  <Cardbox titleName="Naph" avatarRef={naphAvatar} role="UI/UX Engineer"
                  description= "Hello there! I'm the owner of AAU and mainly managing visual part of annie. I love designing modern UI!"/>
                </Grid> 
                
                <Grid item>
                  <Cardbox titleName="Tantan" avatarRef={tantanAvatar} role="Infrastructure Engineer"
                  description= "I'm still learning but i have good ideas, please bare with me."/>
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
                  <Cardbox titleName="Hugo" avatarRef={hugoAvatar} role="Developer"
                  description= "Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>
                </Grid>
              </Grid>
            </div>
        </div>
    )
  }
}
export default Team