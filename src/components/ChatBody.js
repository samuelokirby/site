import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({

  linkButton: {
    marginTop: 10,
    backgroundColor: '#005ECF',
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'none',
    width: '33%',
    boxShadow: '0px 2px 2px lightgray',
  },

  body: {
    backgroundColor: '#D1ECF9',
    height: 400,
    borderRadius: 25,
    width: 800,
    fontFamily: 'Montserrat',
    fontWeight: 500,
    fontSize: 18,
    boxShadow: '4px 4px 4px lightgray',
    textAlign: "left",
    display: 'flex',
    margin: 'auto',
    flexDirection: 'column-reverse',
    overflow: 'scroll',
  },

  button: {
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
    
    '&:hover': {
        backgroundColor: theme.palette.primary.main,
        boxShadow: '0px 0px 0px gray',
    },
    backgroundColor: theme.palette.primary.main,
    textTransform: 'none',
    pointerEvents: 'none',
  },

}));

const ChatBody = (props) =>{



    const classes = useStyles();

    return(
        <div className={classes.body}>
          <div style={{padding: 30}}>

              {props.children}

          </div>
        </div>
    )
}

export default ChatBody