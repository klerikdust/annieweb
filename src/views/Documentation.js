import React from 'react'
import ClusterHostingIcon from '../assets/clusterhosting-icon.png';
import ApiIcon from '../assets/api-icon.png';
import Grow from "@material-ui/core/Grow";
import Typography from "@material-ui/core/Typography";
import NavBar from '../components/NavBar';
import Cardbox from '../components/Cardbox';
import { Grid, CardActionArea } from '@material-ui/core';


class Documentation extends React.Component {
  render() {
    document.title = "Documentation | Annie"

    return (
      <div className="docs">
        <NavBar view="Docs"/>
        <div className="header-text" align="left">
          <Grow
            in={true}
            timeout={1000}>
            <Typography 
              variant="h3"
              style={{
              color: "rgba(0, 0, 0, 1)",
              marginTop: 150,
              marginLeft: 100
              }}>
              Documentation
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
                fontWeight: "thin",
                marginLeft: 100
                }}>
                Here you will find all useful informations related to Annie's API.<br />From how to host your own Annie Cluster to in-depth details of the framework.
              </Typography>
          </Grow>
        </div>
        
        <div className="DocCard"
            style={{
              marginBottom: 100, 
              marginTop: "10vh",
            }}>

              <Grid container justify="center" spacing={2}>
                <Grid item>
                      <Cardbox titleName="API" avatarRef={ApiIcon} lightbox={true}/>
                  </Grid>  
                  <Grid item>
                    <Cardbox titleName="Clustering" avatarRef={ClusterHostingIcon}/>
                  </Grid>  
              </Grid>

        </div>
      </div>
    )
  }
}

export default Documentation