import React from 'react';
import { Typography, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Notifications from './notifications';
import Sidebar from './Sidebar';
import VideoPlayer from './VideoPlayer';


const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 100px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '600px',
    border: '2px solid black',

    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
  },
  image: {
    marginLeft: '15px',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
}));

const Video = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      {/* <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography variant="h2" align="center">Video Chat</Typography>
      </AppBar> */}
      <VideoPlayer />
      <div style={{zIndex:'1000'}}> <Sidebar>
        <Notifications />
      </Sidebar>  </div>
    </div>
  );
};

export default Video;