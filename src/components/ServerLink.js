import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grow, Fab } from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles(theme => ({
  button: {
    marginRight: 278,
    marginTop: 20,
    boxShadow: "none"
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <div>
        <Grow
        in={true}
        timeout={3000}
        >
        <Fab
          variant="extended"
          size="large"
          color="primary"
          className={classes.button}
          href="https://discord.link/aau"
          target="_blank"
          style={{textTransform: "none"}}
        >
          <HomeIcon className={classes.extendedIcon} />
          Support Server
        </Fab>
        </Grow>
    </div>
  );
}