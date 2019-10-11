import React from 'react'
import { Slide, withStyles,
   CardContent, Avatar, Card, Typography } from "@material-ui/core";

const styling = {
  card: {
    width: 300,
    height: 400,
    disableRipple: true,
    borderRadius: "15px",
    boxShadow: "0 1px 20px -12px rgba(33,33,33,0.4)",
    "-webkit-transition": "all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)",
    transition: "all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)",
    
    "&:after": {
      content: "",
      borderRadius: "5px",
      position: "absolute",
      zIndex: -1,
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      opacity: 0,
      "-webkit-transition": "all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)",
      transition: "all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)"
    },

    "&:hover": {
      "-webkit-transform": "scale(1.02, 1.02)",
      transform: "scale(1.02, 1.02)",
      boxShadow: "0 16px 70px -12.125px rgba(33,33,33,0.2)"
    },
    
    "&:hover::after": {
        opacity: 1
    }
  },
  cardTextTitle: {
    textAlign: "center",
    fontWeight: 'bold',
    fontSize: 30,
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
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.6)',
  },
  media: {
    height: 150,
    width: 150,
    marginLeft: 60,
    marginTop: 30
  },

}

const Cardbox = (props) => {
    return (
        <div className={props.classes.card}>
          <Slide
            in={true}
            timeout={1000}
            direction="right"
            >
            <Card className="card" style={{boxShadow: 'none'}}>
                <CardContent>
                  <Avatar alt={props.titleName} src={props.avatarRef} className={props.classes.media} />
                  <Typography className={props.classes.cardTextTitle} variant="h5" component="h2">
                      {props.titleName}
                  </Typography>
                  <Typography gutterBottom className={props.classes.cardTextRole} variant="subtitle1" component="h2">
                      {props.role}
                  </Typography>
                  <Typography gutterBottom className={props.classes.cardTextDescription} variant="subtitle1" component="h2">
                      {props.description}
                  </Typography>      
                </CardContent>
            </Card>
          </Slide>      
        </div>
    )
}

export default withStyles(styling)(Cardbox)