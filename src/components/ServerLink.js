import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Fab } from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles(theme => ({
  button: {
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
        <Fab
          variant="extended"
          size="large"
          color="primary"
          className={classes.button}
          href="https://discord.gg/7nDes9P"
          target="_blank"
          style={{textTransform: "none"}}
        >
          <HomeIcon className={classes.extendedIcon} />
          Let me in!
        </Fab>
    </div>
  );
}