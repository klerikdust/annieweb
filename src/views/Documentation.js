import React from 'react'
import Slide from "@material-ui/core/Slide";
import Typography from "@material-ui/core/Typography";
import NavBar from '../components/NavBar';

class Documentation extends React.Component {
  render() {
    return (
      <div className="docs">
        <NavBar />
        <Slide
          in={true}
          timeout={1000}
          direction="right">
          <Typography 
            variant="h2"
            style={{
            color: "rgba(0, 0, 0, 0.6)",
            fontSize: 60,
            marginLeft: 100,
            marginTop: "20vh"
            }}>
            Annie's Documentation
          </Typography>
        </Slide>
          <Typography 
              variant="subtitle2"
              style={{
              color: "rgba(0, 0, 0, 0.6)",
              marginLeft: 100,
              marginTop: 10
              }}>
              In here you will find anything related to Annie's API.<br />From how to host your own Annie Cluster and in-depth details of the framework.
            </Typography>

            <Typography 
              variant="h5"
              style={{
              color: "rgba(0, 0, 0, 0.6)",
              marginLeft: 100,
              marginTop: 50,
              fontWeight: "bold"
              }}>
             Requirements
            </Typography>

            <Typography 
              variant="subtitle2"
              style={{
              color: "rgba(0, 0, 0, 0.6)",
              marginLeft: 100,
              fontWeight: "bold"
              }}>
              • Node.js v8+<br />
              • Familiar with discord.js
              • 
            </Typography>
      </div>
    )
  }
}
export default Documentation