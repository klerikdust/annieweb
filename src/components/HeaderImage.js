import React from "react"

class MainLandingImage extends React.Component {
  constructor(props) {
      super(props)
      this.state = {mobileLayout:false};
      this.minifiedWidth = 1000
      this.imageref = props.imageref
      this.imageStyle = {
        large: {
          position: `absolute`,
          top: props.yDistance ? props.yDistance : 100,
          height: "100vh",
          left: props.onleft ? "0px" : null,
          right: props.onright ? "0px" : null,
          opacity: "0.3",
          zIndex: -1   
        },
        small: {
          position: `absolute`,
          top: props.yDistance ? props.yDistance+200 : 100,
          height: "100vh",
          left: props.onleft ? "0px" : null,
          right: props.onright ? "0px" : null,
          opacity: "0.2",
          zIndex: -1
        }
      }
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


  largeImage() {
    return (
      <img 
        src={require(`../assets/${this.imageref}.png`)}
        alt="LandingImage-Large"
        style={this.imageStyle.large}
        
      />
    )
  }


  smallImage() {
    return (
      <img 
        src={require(`../assets/${this.imageref}.png`)}
        alt="LandingImage-Small"
        style={this.imageStyle.small}
      />
    )
  }


  render() {
    return this.state.mobileLayout ? this.smallImage() : this.largeImage()
  }
}

export default MainLandingImage
