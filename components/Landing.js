import React from "react";
import Slide from "@material-ui/core/Slide";
import Typography from "@material-ui/core/Typography";

class Landing extends React.Component {



  render() {
    return (
      <div className="Landing">
        <div className="Image">
        <img 
            src={require('../assets/annieava.png')}
            alt="LandingImage"
            style={{
              float: "right",
              marginTop: 100,
              marginRight: 100
            }}
          />
        </div>
        <div 
          className="Text" 
          align="left"
          style={{
            float: "left",
            marginTop: 250
          }}>
          <Slide
            in={true}
            timeout={1000}
            direction="right"
          >
            <Typography 
                variant="h1"
                style={{
                  color: "rgba(0, 0, 0, 0.6)",
                  fontSize: 90,
                  marginLeft: 100,
                }}>
                Hey, It's <span style={{
                  fontWeight: "bold",
                  //color: "rgba(102,204,255,0.7)"}}
                  }}>
                  Annie.
                  </span>
              </Typography>
          </Slide>
          <Slide
            in={true}
            timeout={2000}
            direction="right"
          >
            <Typography 
                variant="subtitle2"
                style={{
                  color: "rgba(0, 0, 0, 0.6)",
                  marginLeft: 100,
                  marginTop: 15
                }}>
                Powerful. Artistic. Lovable.
              </Typography>
          </Slide>
        </div>
      </div>
    );
  }
}

export default Landing;
