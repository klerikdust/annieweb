import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grow, Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  button: {
    marginRight: 278,
    marginTop: 20
  },
}));

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <div>
        <Grow
        in={true}
        timeout={3000}
        >
        <Button
          variant="outlined"
          size="large"
          color="primary"
          className={classes.button}
          href="https://discord.gg/YFaCQVn"
          target="_blank"
        >
          Support Server
        </Button>
        </Grow>
    </div>
  );
}