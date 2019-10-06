import React from 'react'
import Typography from "@material-ui/core/Typography";
import Slide from "@material-ui/core/Slide";
import NavBar from '../components/NavBar';

class Team extends React.Component {
  render() {
    return (
        <div className="Team">
            <NavBar />
            <Slide
            in={true}
            timeout={1000}
            direction="right">
            <Typography 
            variant="h2"
            style={{
            color: "rgba(0, 0, 0, 0.6)",
            fontSize: 50,
            marginLeft: 100,
            }}>
            Development Team
            </Typography>
            </Slide>
        </div>
    )
  }
}
export default Team