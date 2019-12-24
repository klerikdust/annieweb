import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';

const useStyles = makeStyles(theme => ({
  root: {
    width: `100%`,
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.primary.main,
  },
  nested: {
    paddingLeft: theme.spacing(4),
    backgroundColor: "rgba(33, 33, 33, 0.1)"
  },
  desc: {
    fontWeight: `bold`,
    color: `rgba(0, 0, 0, 1)`
  }
}));

export default function NestedList({label= `unfilled`, content=``, desc=null, secondary=null}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
      <div>
        <List className={classes.root}>
          <ListItem button onClick={handleClick}>
            <ListItemText primary={label} secondary={secondary} />
            {desc ? <ListItemText className={classes.desc} primary={desc} style={{textAlign: `right`}} /> : null}
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem className={classes.nested}>
                <ListItemText primary={content} style={{color: "rgba(176, 176, 176, 1)"}}/>
              </ListItem>
            </List>
          </Collapse>
        </List>
      </div>
  );
}