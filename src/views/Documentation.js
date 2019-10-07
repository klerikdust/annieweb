import React from 'react'
import Slide from "@material-ui/core/Slide";
import Typography from "@material-ui/core/Typography";
import Link from '@material-ui/core/Link';
import Highlight from 'react-highlight.js';
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
            marginTop: "20vh",
            fontWeight: "bold"
            }}>
            Annie's Documentation
          </Typography>
        </Slide>
          <Typography 
              variant="subtitle1"
              style={{
              color: "rgba(0, 0, 0, 0.6)",
              marginLeft: 100,
              marginTop: 10,
              fontWeight: "thin"
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
            </Typography>

            <Typography 
              variant="h5"
              style={{
              color: "rgba(0, 0, 0, 0.6)",
              marginLeft: 100,
              fontWeight: "bold",
              marginTop: 50,
              }}>
              1. Fork the repository
            </Typography>

            <Typography 
              variant="subtitle2"
              style={{
              color: "rgba(0, 0, 0, 0.6)",
              marginLeft: 100,
              }}>
              <Link href="https://github.com/klerikdust/anniediscord" target="_blank" className="GitHub URL">
                {"Link to Annie's GitHub"}
              </Link>
            </Typography>

            <Typography 
              variant="h5"
              style={{
              color: "rgba(0, 0, 0, 0.6)",
              marginLeft: 100,
              fontWeight: "bold",
              marginTop: 50,
              }}>
              2. Setup local environment
            </Typography>

            <Typography 
              variant="subtitle2"
              style={{
              color: "rgba(0, 0, 0, 0.6)",
              marginLeft: 100,
              }}>
              After getting the codebase into your local machine, please create these additional files in the root directory.<br />
            </Typography>

            <Typography 
              variant="subtitle2"
              style={{
              color: "rgba(0, 0, 0, 0.6)",
              marginTop: 20,
              marginLeft: 130,
              }}>
              • .env<br />
              • .data
            </Typography>

            <Typography 
              variant="h5"
              style={{
              color: "rgba(0, 0, 0, 0.6)",
              marginLeft: 100,
              fontWeight: "bold",
              marginTop: 50,
              }}>
              3. Create environment config
            </Typography>

            <Typography 
              variant="subtitle2"
              style={{
              color: "rgba(0, 0, 0, 0.6)",
              marginLeft: 100,
              fontWeight: "bold",
              }}>
              Create new file called `environment.json` in the .data/ directory and fill it with the following properties :
            </Typography>

            <Typography 
              variant="subtitle2"
              style={{
              color: "rgba(0, 0, 0, 0.6)",
              marginTop: 20,
              marginLeft: 120,
              fontWeight: "bold",
              }}>
             <Highlight language="json">
                  "dev": [Boolean],<br />
                  "prefix": [String],<br />
                  "active_exp": [Boolean],<br />
                  "DISABLE_COOLDOWN": [Boolean],<br />
                  "administrator_id": [Array]
             </Highlight>
            </Typography>

            <Typography 
              variant="subtitle2"
              style={{
              color: "rgba(204,51,51,1)",
              marginTop: 20,
              marginLeft: 120,
              }}>
                "dev" determine the current environment > Set true for local development, and false for production.<br />
                "prefix" used as command code<br />
                "active_exp" toggle for exp gaining<br />
                "DISABLED_COOLDOWN" useful toggle when you are testing exp framework<br />
                "administrator_id" a list of IDs that will be accepted by the cluster during local development.
            </Typography>
      </div>
    )
  }
}
export default Documentation