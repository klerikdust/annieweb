import React from 'react'
import { Helmet } from 'react-helmet'
import FaqIcon from '../assets/faq.png';
import VersionIcon from '../assets/version.png';
import BugIcon from '../assets/bug.png';
import NavBar from '../components/NavBar';
import Cardbox from '../components/Cardbox';
import Grid from '@material-ui/core/Grid';
import Title from '../components/Title';
import { mobile } from '../config/Layout';


class Documentation extends React.Component {
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
    const cardsMargin = {
      marginTop: 50,
      marginBottom: 50
    }

    return (
      <div className="docs">
        <Helmet>
          <title>Documentations | Annie</title>
        </Helmet>
        <NavBar view="Docs"/>
        <Grid container spacing={2} style={{
          padding: this.state.mobileLayout ? 10 : 100,
          textAlign: this.state.mobileLayout ? "center" : "left"}}>


          {/**  Header  */}
          <Grid item xs={12} style={{marginLeft: this.state.mobileLayout ? 0 : 80}}>
            <Title title="Documentation" caption="This is where we stored in depth informations about Annie."/>
          </Grid>

          {/**  Docs List - Body */}
          <Grid item xs={12} style={cardsMargin}>
            <Grid container justify="center" spacing={2}>
              <Grid item>
                <Cardbox iconMedia titleName="FAQ" avatarRef={FaqIcon} 
                description="Have any question to ask? we got you covered. We have answered some frequently asked questions in the past. Go take a look!"/>
              </Grid> 
              <Grid item>
                <Cardbox iconMedia titleName="Version History" avatarRef={VersionIcon} 
                description="A pile of version log that luckily we were remembered to record one of them."/>
              </Grid> 
              <Grid item>
                <Cardbox iconMedia titleName="Known Bugs" avatarRef={BugIcon}
                description="We are too lazy to resolve nasty bugs in one night! If you are curious, feel free to check them!"/>
              </Grid>   
            </Grid>
          </Grid>


        </Grid>
      </div>
    )
  }
}

export default Documentation