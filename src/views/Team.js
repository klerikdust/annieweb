import React from 'react'
import { Helmet } from 'react-helmet'
import NavBar from '../components/NavBar';
import Cardbox from '../components/Cardbox';
import naphAvatar from '../assets/naphavatar.png';
import panAvatar from '../assets/panavatar.png';
import sunnyAvatar from '../assets/sunnyavatar.png';
import fwubblesAvatar from '../assets/fwubblesavatar.png';
import tantanAvatar from '../assets/tantanavatar.jpg';
import hugoAvatar from '../assets/hugoavatar.jpg';
import { Grid } from '@material-ui/core';
import Title from '../components/Title';
import { mobile } from '../config/Layout';

class Team extends React.Component {
  constructor(props) {
    super(props)
    this.state = {mobileLayout:false};
    this.minifiedWidth = mobile.maxWidth
  }


  componentDidMount(){
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

  render() {

    document.title = "Team | Annie"

    const cardsMargin = {
      marginTop: 50,
      marginBottom: 50
    }

    return (
        <div className="Team">
          <Helmet>
            <title>Team | Annie</title>
          </Helmet>
          <NavBar view="Team"/>
          <Grid container spacing={2} style={{
            padding: this.state.mobileLayout ? 10 : 100,
            textAlign: this.state.mobileLayout ? "center" : "left"}}>


            {/**  Header  */}
            <Grid item xs={12} style={{marginLeft: this.state.mobileLayout ? 0 : 80}}>
              <Title title="The Annie Team" caption="below are amazing people that make Annie possible!"/>
            </Grid>
            
            {/**  Developer List - Body[1] */}
            <Grid item xs={12} style={cardsMargin}>
              <Grid container justify="center" spacing={2}>
                <Grid item>
                  <Cardbox titleName="Panpan" avatarRef={panAvatar} role="Developer"
                  description= "I may come off as timid or rude. I may even not talk to you at first but eventually I will. Every person is not like each other. I’ll try not to skip around the bush and tell it to you straight. "/>
                </Grid>   
                <Grid item>
                  <Cardbox titleName="Naph" avatarRef={naphAvatar} role="UI/UX Engineer"
                  description= "Breathing color and canvas. I'm mainly tinkering Annie's design system and ensuring the fluid experience that you get while using it. :)"/>
                </Grid>  
              </Grid>
            </Grid>

            {/**  Header 2  */}
            <Grid item xs={12} style={{marginLeft: this.state.mobileLayout ? 0 : 80}}>
              <Title title="Contributors" caption="They helped us developing Annie part-time!"/>
            </Grid>

            {/**  Contributor List - Body[2] */}
            <Grid item xs={12} style={cardsMargin}>
              <Grid container justify="center" spacing={2}>
                <Grid item>
                  <Cardbox titleName="Tantan" avatarRef={tantanAvatar} role="Developer"
                  description= "I'm still learning but i have good ideas, please bare with me."/>
                </Grid>                        
                <Grid item>
                  <Cardbox titleName="ametotaiyou" avatarRef={sunnyAvatar} role="Developer"
                  description= "Hey~ I program and draw. Nuff said"/>
                </Grid>
                <Grid item>
                  <Cardbox titleName="Fwubbles" avatarRef={fwubblesAvatar} role="Developer"
                  description= "Clan System Director"/>
                </Grid>
                <Grid item>
                  <Cardbox titleName="Hugo" avatarRef={hugoAvatar} role="Bug Tracker"
                  description= "Only coffee what matters the most."/>
                </Grid>
              </Grid>
            </Grid>


          </Grid>
        </div>
    )
  }
}
export default Team