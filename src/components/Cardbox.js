import React from 'react'
import { Slide, withStyles,
   CardContent, Avatar, Typography, CardActionArea } from "@material-ui/core";

   let styling = {
    card: {
      width: 300,
      height: 400,
      borderRadius: "15px",
      boxShadow: "0 1px 20px -12px rgba(33,33,33, 0.5)",
      "-webkit-transition": "all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)",
      transition: "all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)",
      backgroundColor: "rgba(255, 255, 255, 1)",
      opacity: 1,
      
      "&:after": {
        content: "",
        borderRadius: "5px",
        position: "absolute",
        zIndex: -1,
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        opacity: 1,
        "-webkit-transition": "all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)",
        transition: "all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)"
      },
  
      "&:hover": {
        "-webkit-transform": "scale(1.02, 1.02)",
        transform: "scale(1.02, 1.02)",
        boxShadow: "0 16px 70px -12.125px rgba(33,33,33,0.2)",
      },
      
      "&:hover::after": {
          opacity: 1
      }
    },
    cardTextTitle: {
      textAlign: "center",
      fontWeight: 'bold',
      color: 'rgba(0, 0, 0, 0.7)',
      marginTop: 20
    },
    cardTextRole: {
      textAlign: "center",
      fontSize: 15,
      color: 'rgba(0, 0, 0, 0.7)',
    },
    cardTextDescription: {
      textAlign: "center",
      marginTop: 15,
      fontSize: 12,
      color: 'rgba(0, 0, 0, 0.6)',
    },

    defaultMedia: {
      height: 150,
      width: 150,
      marginLeft: 60,
      marginTop: 30,
    },

    iconMedia: {
      height: 100,
      width: 100,
      marginLeft: 85,
      marginTop: 30,
    },

    actionArea: {
      "&:hover $focusHighlight": {
        opacity: 0
      }
    },
    focusHighlight: {}

  }


const Cardbox = (props) => {

    return (
      <div className={props.classes.card}>
        <Slide in={true} direction="up" timeout={1200}>
          <CardActionArea classes={{root: props.classes.actionArea, focusHighlight: props.classes.focusHighlight}}>     
            <CardContent>
              <Avatar alt={props.titleName} src={props.avatarRef} className={props.iconMedia ? props.classes.iconMedia : props.classes.defaultMedia}/>
              <Typography className={props.classes.cardTextTitle} variant={props.smalltitle ? "h5" : "h4"} component={props.smalltitle ? "h5" : "h4"}>
                  {props.titleName}
              </Typography>
              <Typography gutterBottom className={props.classes.cardTextRole} variant="subtitle1" component="h2">
                  {props.role}
              </Typography>
              <Typography className={props.classes.cardTextDescription} variant="subtitle1" component="h2">
                  {props.description}
              </Typography>      
            </CardContent>
          </CardActionArea>
        </Slide>
      </div>
    )
}

export default withStyles(styling)(Cardbox)