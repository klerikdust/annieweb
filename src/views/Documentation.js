import React from 'react'
import ClusterHostingIcon from '../assets/clusterhosting-icon.png';
import ApiIcon from '../assets/api-icon.png';
import { Grow, Slide } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Link } from 'react-router-dom';
import { withStyles } from "@material-ui/core/styles";
import NavBar from '../components/NavBar';

const styling = {
  card: {
    width: 220,
    height: 220,
    disableRipple: true,
    borderRadius: "15px",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    transition: "boxShadow 500ms",
    '&:hover': {
      color: "rgba(50, 50, 50, 1)",
      borderRadius: "5px",
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
    },
    '&:focus': {
      color: "rgba(255, 255, 255, 1)"
    }
  },
  cardText: {
    textAlign: "center",
    fontWeight: 'bold',
    fontSize: 20,
    color: 'rgba(0, 0, 0, 0.6)',
    marginBottom: 100
  },
  media: {
    height: 150,
    width: 150,
    marginLeft: 37
  },

}

const Documentation = (props) => {

  document.title = "Documentation | Annie"

    return (
      <div className="docs">
        <NavBar view="Docs"/>
        <div className="header-text" align="center">
          <Grow
            in={true}
            timeout={1000}>
            <Typography 
              variant="h2"
              style={{
              color: "rgba(0, 0, 0, 1)",
              fontSize: 60,
              marginTop: 150,
              }}>
              Annie's <span style={{fontWeight: "bold"}}>Documentation</span>
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
                Here you will find any useful information related to Annie's API.<br />From how to host your own Annie Cluster and in-depth details of the framework.
              </Typography>
          </Grow>
        </div>
        
        
        <div className="cards" style={{
          marginBottom: 100, 
          marginTop: 20,
          display:"flex",
          justifyContent: "center",
          alignItems: "center"}}>
          <div className="card-1" style={{marginRight:"5vh"}}>
          <Slide
            in={true}
            timeout={1000}
            direction="right"
            >
            <Card className={props.classes.card}>
              <CardActionArea>
                <Link to="/docs/cluster-hosting" style={{ textDecoration: 'none' }}>
                  <CardMedia
                    className={props.classes.media}
                    component="img"
                    src={ClusterHostingIcon}
                    title="Cluster Hosting"
                  />
                  <CardContent>
                    <Typography gutterBottom className={props.classes.cardText} variant="h5" component="h2">
                      Cluster Hosting
                    </Typography>
                  </CardContent>
                  </Link>
                </CardActionArea>         
            </Card>
            </Slide>
          </div>
          <div className="card-2">
          <Slide
            in={true}
            timeout={1000}
            direction="left"
            >
            <Card className={props.classes.card}>
              <CardActionArea>
                <CardMedia
                  className={props.classes.media}
                  component="img"
                  height="20%"
                  width="20%"
                  src={ApiIcon}
                  title="API"
                />
                <CardContent>
                  <Typography gutterBottom className={props.classes.cardText} variant="h5" component="h2">
                    API
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            </Slide>
          </div>           
        </div>
      </div>
    )
}
export default withStyles(styling)(Documentation)