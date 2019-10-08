import React from 'react'
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const Docs = React.forwardRef((props, ref) => (
  <Link innerRef={ref} to="/docs" {...props} />
));



const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
      },
})); 

const NavBar = () => {

      const classes = useStyles();

      return (
        <div className={classes.root}>
            <AppBar position="static" style={{
            boxShadow: 'none',
            color: 'rgba(0, 0, 0, 0.6)',
            backgroundColor: 'rgba(255,255,255,1)',
            }}>
                <Toolbar>
                    <Button size="large" color="primary" component={Docs} to="/docs">
                        Back to documentation
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
      )
}
export default NavBar;