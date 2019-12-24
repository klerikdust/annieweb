import React from 'react'
import { Typography, Grow } from "@material-ui/core";
import { mobile } from '../config/Layout';


class Title extends React.Component {
    constructor(props) {
        super(props)
        this.state = {mobileLayout:false};
        this.minifiedWidth = mobile.maxWidth
        this.title = props.title
        this.caption = props.caption
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
        return (
            <div>
                <Grow in={true} timeout={600}>
                    <Typography 
                    variant="h3"
                    style={{
                    color: "rgba(0, 0, 0, 1)",
                    marginTop: 100,
                    }}>
                    {this.title}
                    </Typography>
                </Grow>
                <Grow in={true} timeout={1000}>
                    <Typography 
                    variant="subtitle2"
                    style={{
                    color: "rgba(0, 0, 0, 0.6)",
                    marginTop: 10,
                    fontWeight: "thin"
                    }}>
                    {this.caption}
                    </Typography>
                </Grow>
            </div>
        )        
    }
}

export default Title;