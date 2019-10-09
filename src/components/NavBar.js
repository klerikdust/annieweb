import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  AppBar, Toolbar, List, ListItem,
  withStyles, Grid, SwipeableDrawer, Button
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const Docs = React.forwardRef((props, ref) => (
  <Link innerRef={ref} to="/docs" {...props} />
));

const Home = React.forwardRef((props, ref) => (
  <Link innerRef={ref} to="/home" {...props} />
));

const Team = React.forwardRef((props, ref) => (
  <Link innerRef={ref} to="/team" {...props} />
));

const About = React.forwardRef((props, ref) => (
  <Link innerRef={ref} to="/about" {...props} />
));


const styleSheet = {
  list : {
    width : 200,
  },
  padding : {
    paddingRight : 30,
    cursor : "pointer",
  },

  sideBarIcon : {
    padding : 0,
    color : "black",
    cursor : "pointer",
  },

  appBar: {
    boxShadow : "none",
    color : "rgba(255, 255, 255, 1)"
  }
}

class ResAppBar extends Component{
  constructor(props){
    super(props);
    this.state = {drawerActivate:false, drawer:false};
    this.createDrawer = this.createDrawer.bind(this);
    this.destroyDrawer = this.destroyDrawer.bind(this);
  }

  componentWillMount(){
    if(window.innerWidth <= 600){
      this.setState({drawerActivate:true});
    }

    window.addEventListener('resize',()=>{
      if(window.innerWidth <= 600){
        this.setState({drawerActivate:true});
      }
      else{
        this.setState({drawerActivate:false})
      }
    });
  }

  //Small Screens
  createDrawer(){
    return (
      <div>
        <AppBar color="rgba(255, 255, 255, 1)" style={{boxShadow:"none"}}>
          <Toolbar  color="rgba(255, 255, 255, 1)">
            <Grid container direction = "row" justify = "space-between" alignItems="center">
              <MenuIcon
                className = {this.props.classes.sideBarIcon}
                onClick={()=>{this.setState({drawer:true})}} />
              <Button size="large" color="primary" component={Home} to="/">Annie</Button>
            </Grid>
          </Toolbar>
        </AppBar>

        <SwipeableDrawer
         open={this.state.drawer}
         onClose={()=>{this.setState({drawer:false})}}
         onOpen={()=>{this.setState({drawer:true})}}>

           <div
             tabIndex={0}
             role="button"
             onClick={()=>{this.setState({drawer:false})}}
             onKeyDown={()=>{this.setState({drawer:false})}}>

            <List className = {this.props.classes.list}>

                <ListItem key = {1} button divider component={About} to="/about"> About </ListItem>
                <ListItem key = {2} button divider component={Team} to="/team"> Team </ListItem>               
                <ListItem key = {3} button divider component={Docs} to="/docs"> Documentation </ListItem>
            </List>

         </div>
       </SwipeableDrawer>

      </div>
    );
  }

  //Larger Screens
  destroyDrawer(){
    return (
      <AppBar position="static" style={{
        boxShadow: 'none',
        color: 'rgba(0, 0, 0, 0.6)',
        backgroundColor: 'rgba(255,255,255,1)',
        }}>

          <Toolbar>
            <Button size="large" color="primary" component={Home} to="/">Annie</Button>
            <div className="Right Toolbar" style={{
              marginLeft: 'auto',
              marginRight: 20
              }}>
              <Button size="large" component={About} to="/about">About</Button>
              <Button size="large" component={Team} to="/team">Team</Button>
              <Button size="large" component={Docs} to="/docs">Documentation</Button>
            </div>
          </Toolbar>
        </AppBar>
    )
  }

  render(){
    return(
      <div>
        {this.state.drawerActivate ? this.createDrawer() : this.destroyDrawer()}
      </div>
    );
  }
}

ResAppBar.propTypes = {
  classes : PropTypes.object.isRequired
};



export default withStyles(styleSheet)(ResAppBar);