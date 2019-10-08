import React from 'react'
import Typography from "@material-ui/core/Typography";
import Link from '@material-ui/core/Link';
import Highlight from 'react-highlight.js';
import DocNavBar from '../components/DocNavBar';

class ClusterHosting extends React.Component {
  render() {

    document.title = "Cluster Hosting | Annie"

    return (
      <div className="ClusterHosting">
        <DocNavBar />
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
              variant="subtitle1"
              style={{
              color: "rgba(204,51,51,1)",
              marginTop: 20,
              marginLeft: 120,
              fontSize: 10,
              fontWeight: "thin"
              }}>
                "dev" determine the current environment > Set true for local development, and false for production.<br />
                "prefix" used as command code<br />
                "active_exp" toggle for exp gaining<br />
                "DISABLED_COOLDOWN" useful toggle when you are testing exp framework<br />
                "administrator_id" a list of IDs that will be accepted by the cluster during local development.
            </Typography>

            <Typography 
              variant="h5"
              style={{
              color: "rgba(0, 0, 0, 0.6)",
              marginLeft: 100,
              fontWeight: "bold",
              marginTop: 50,
              }}>
              3. Setup database
            </Typography>

            <Typography 
              variant="subtitle2"
              style={{
              color: "rgba(0, 0, 0, 0.6)",
              marginLeft: 100,
              fontWeight: "bold",
              }}>
               If you are one of the member in Development Team, you can easily get the db file in our <span style={{color: "blue"}}>#github</span> discord channel.
            </Typography>

            <Typography 
              variant="h5"
              style={{
              color: "rgba(0, 0, 0, 0.6)",
              marginLeft: 100,
              fontWeight: "bold",
              marginTop: 50,
              }}>
              5. Filling up token
            </Typography>

            <Typography 
              variant="subtitle1"
              style={{
              color: "rgba(0, 0, 0, 0.6)",
              marginLeft: 100,
              }}>
               Put your bot token inside .env that we have created before, in the following format : 
            </Typography>

            <Typography 
              variant="subtitle1"
              style={{
              color: "rgba(204,51,51,1)",
              marginTop: 20,
              marginLeft: 120,
              fontSize: 15,
              }}>
                TOKEN=yourtokenhere
            </Typography>

            <Typography 
              variant="h5"
              style={{
              color: "rgba(0, 0, 0, 0.6)",
              marginLeft: 100,
              fontWeight: "bold",
              marginTop: 50,
              }}>
              6. Installing dependencies
            </Typography>

            <Typography 
              variant="subtitle1"
              style={{
              color: "rgba(0, 0, 0, 0.6)",
              marginLeft: 100,
              }}>
               Run `npm i` to install all the required packages.
            </Typography>

            <Typography 
              variant="h5"
              style={{
              color: "rgba(0, 0, 0, 0.6)",
              marginLeft: 100,
              fontWeight: "bold",
              marginTop: 50,
              }}>
              7. Launch the server
            </Typography>
     
            <Typography 
              variant="subtitle1"
              style={{
              color: "rgba(0, 0, 0, 0.6)",
              marginLeft: 100,
              }}>
               Run `npm run beta` and you will see your Annie's Cluster come alive if you have followed all the instruction above properly.
            </Typography>
      </div>
    )
  }
}
export default ClusterHosting