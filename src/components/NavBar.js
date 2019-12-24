import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  AppBar, Toolbar, List, ListItem,
  withStyles, Grid, SwipeableDrawer, Button
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { mobile } from '../config/Layout';


const Docs = React.forwardRef((props, ref) => (
  <Link innerRef={ref} to="/docs" {...props} />
));

const Home = React.forwardRef((props, ref) => (
  <Link innerRef={ref} to="/home" {...props} />
));

const Team = React.forwardRef((props, ref) => (
  <Link innerRef={ref} to="/team" {...props} />
));
const Commands = React.forwardRef((props, ref) => (
  <Link innerRef={ref} to="/commands" {...props} />
));


const styleSheet = {
  list : {
    width: 200,
    fontSize: "15pt",
    align: "right"
  },
  padding : {
    paddingRight : 30,
    cursor : "pointer",
  },

  sideBarIcon : {
    padding : 0,
    color : "black",
    cursor : "pointer"
  },

  appBar: {
    boxShadow : "none",
    color : "rgba(255, 255, 255, 1)",
  },

  toolbar: {
    dense: true
  },
  listItemText: {
      fontSize:'20pt'
  }
}

class NavBar extends Component{
  constructor(props){
    super(props);
    this.state = {
      drawerActivate: false,
      drawer: false,
      onTop: true
    };
    this.createDrawer = this.createDrawer.bind(this);
    this.destroyDrawer = this.destroyDrawer.bind(this);
    this.minifiedWidth = mobile.maxWidth

  }

  componentDidMount(){
    window.addEventListener('scroll', this.listenToScroll)

    if(window.innerWidth <= this.minifiedWidth){
      this.setState({drawerActivate:true});
    }

    window.addEventListener('resize',()=>{
      if(window.innerWidth <= this.minifiedWidth){
        this.setState({drawerActivate:true});
      }
      else{
        this.setState({drawerActivate:false})
      }
    });
  }
  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll)
  }
  
  listenToScroll = () => {
    //  Display if current view on topmost.
    let onTop =  window.pageYOffset < 60
    this.setState({
      onTop: onTop
    })
  }


  dynamicNavBarStyle() {
    return {
      boxShadow: this.state.onTop ? "none" : "0 1px 20px -12px rgba(33,33,33,0.4)",
      backgroundColor: this.state.onTop ? "transparent" : "white",
      transition: "all 0.2s ease-in"
    }
  }


  /**
   *  Works on `small screen.`
   *  @createDrawer
   */
  createDrawer(){
    return (
      <div>
        <AppBar color="inherit" style={this.dynamicNavBarStyle()}>
          <Toolbar color="inherit">
            <Grid container direction = "row" justify = "space-between" alignItems="center">
              <Button style={{textTransform: "none"}} size="large" color="primary" position="left" component={Home} to="/">
                Annie <span style={{color: "rgba(0, 0, 0, 0.5)", fontWeight:"bold"}}> {this.props.view !== `main` ? this.props.view : ""}</span>
              </Button>
              <MenuIcon
                className = {this.props.classes.sideBarIcon}
                onClick={()=>{this.setState({drawer:true})}} />
            </Grid>
          </Toolbar>
        </AppBar>

        <SwipeableDrawer
         open={this.state.drawer}
         anchor="right"
         onClose={()=>{this.setState({drawer:false})}}
         onOpen={()=>{this.setState({drawer:true})}}
         style={{boxShadow: "none"}}
         >

           <div
             tabIndex={0}
             role="button"
             onClick={()=>{this.setState({drawer:false})}}
             onKeyDown={()=>{this.setState({drawer:false})}}>

            <List className = {this.props.classes.list}>
                <ListItem key = {1} button component={Commands} to="/commands"> Commands </ListItem>
                <ListItem key = {2} button component={Team} to="/team"> Team </ListItem>               
                <ListItem key = {3} button component={Docs} to="/docs"> Documentation </ListItem>
            </List>

         </div>
       </SwipeableDrawer>

      </div>
    );
  }

  //Larger Screens
  destroyDrawer(){

    const buttonStyles = {
      textTransform: "none",
      fontSize: 17,
      fontWeight: 420,
      height: 100,
    }

    return (
      <AppBar color="inherit" style={this.dynamicNavBarStyle()}>

          <Toolbar className={this.props.classes.toolbar}>
            <Button size="large" style={{marginLeft: 50}} component={Home} to="/">Annie</Button>
            <div className="Right Toolbar" style={{
              marginLeft: 'auto',
              marginRight: 20
              }}>
              <Button size="large" style={buttonStyles} color={this.props.view === `Commands` ? `primary` : `default`} component={Team} to="/commands">Commands</Button>
              <Button size="large" style={buttonStyles} color={this.props.view === `Team` ? `primary` : `default`} component={Team} to="/team">Team</Button>
              <Button size="large" style={buttonStyles} color={this.props.view === `Docs` ? `primary` : `default`} component={Docs} to="/docs">Documentation</Button>
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

NavBar.propTypes = {
  classes : PropTypes.object.isRequired
};



export default withStyles(styleSheet)(NavBar);