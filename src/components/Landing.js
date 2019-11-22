import React from "react";
import { Grow, Slide } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import ServerLink from '../components/ServerLink';

class Landing extends React.Component {
  constructor(props) {
    super(props)
    this.state = {smallScreen: false}
  }

  componentWillMount(){
    if(window.innerWidth <= 1000){
      this.setState({smallScreen:true});
    }

    window.addEventListener('resize',()=>{
      if(window.innerWidth <= 1000){
        this.setState({smallScreen:true});
      }
      else{
        this.setState({smallScreen:false})
      }
    });
  }

  largeImage() {
    return (
      <div className="Image">
      <Slide
          in={true}
          timeout={1000}
          direction="left"
        >
        <img 
            src={require('../assets/annielandingpage.png')}
            alt="LandingImage"
            style={{
              float: "right",
              marginLeft: "20",
              width: "auto",
              height: "100vh",
            }}
          />
      </Slide>
      </div>  
    )
  }


    smallImage() {
      return (
        <div className="Image">
        <Slide
            in={true}
            timeout={1000}
            direction="left"
          >
          <img 
              src={require('../assets/annielandingpage.png')}
              alt="LandingImage"
              style={{
                //position: "absolute",
                marginTop: "200",
                marginLeft: "700",
                float: "left",
                width: "auto",
                height: "100vh",
                opacity: "0.3"
              }}
            />
        </Slide>
        </div>  
      )
    }


  render() {

    return (
      <div className="Landing" style={{marginTop: 60}}>
        <div className="Image">
          {this.state.smallScreen ? this.smallImage() : this.largeImage()}
        </div>
        <div 
          className="Text" 
          align="left"
          style={{
            float: "left",
            marginTop: "40vh",
            marginLeft: "10vw",
            position: "absolute"
          }}>
          <Grow
            in={true}
            timeout={2000}
            direction="right"
          >
            <Typography 
                variant="h2"
                style={{
                  color: "rgba(0, 0, 0, 0.8)",
                  fontWeight: "bold"
                }}>
                Creative Machine.
              </Typography>
          </Grow>
          <Grow
            in={true}
            timeout={3000}
            direction="right"
          >
            <Typography 
                variant="subtitle1"
                style={{
                  color: "rgba(0, 0, 0, 0.6)",
                  marginTop: 7,
                }}>
                Delivering the best artist experience right in your server.
              </Typography>
          </Grow>
          <ServerLink />
        </div>
      </div>
    );
  }
}

export default Landing;
