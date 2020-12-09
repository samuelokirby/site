import React from 'react';
import { Card, Typography, Button, IconButton, Container, makeStyles } from '@material-ui/core';
import { Helmet } from 'react-helmet';
import LivePerson from '../media/LivePersonLogo.png';
import SocialSquare from '../components/SocialSquare';
import TwitterIcon from '../icons/TwitterIcon';
import MediumIcon from '../icons/MediumIcon';
import LinkedInIcon from '../icons/LinkedIn';
import PlaneIcon from '../icons/PlaneIcon';




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

  icon: {
    height: 200,
    width: 200,
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

function Contact(){

  const classes = useStyles();

  return(


    <Container maxWidth="lg" style={{marginTop: 125, marginBottom: 400}}>

    <div style={{marginBottom: 25}}>
      <span style={{fontSize: 64, marginBottom: 45, fontWeight: 500, textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"}}>
        C
      </span>
      <span style={{fontSize: 52, fontWeight: 500, textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"}}>
        ONTACT
      </span>

      <div>
        <span style={{width: '70%', float: 'right', marginTop: -40, textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"}}>
          <hr style={{width: '100%', border: '2.5px solid #FF9E58', boxShadow: '1px 3px 3px gray'}}/>
        </span>

        <span style={{width: '80%', float: 'right', marginTop: -60}}>
          <hr style={{width: '60%', border: '2.5px solid #FF9E58', float: 'right', boxShadow: '1px 3px 3px gray'}}/>
        </span>
      </div>
    </div>


    <Helmet>
      <body style="
      background-image: url('../pbackground.png');
      background-repeat: no-repeat;
      background-size: cover;"
      />
    </Helmet>

    <div style={{textAlign: 'center'}}>
      
      <a href="mailto:samuelokirby@gmail.com" target="_blank">
        <SocialSquare title={"E-mail"}>
          <div style={{marginBottom: 20}}>
            <PlaneIcon className={classes.icon} width={100} height={100} fill={"#242331"}/>
          </div>
        </SocialSquare>
      </a>

      <a href="https://www.linkedin.com/in/samuelokirby" target="_blank">
        <SocialSquare title={"LinkedIn"}>
          <div style={{marginBottom: 20}}>
            <LinkedInIcon className={classes.icon} width={100} height={100} fill={"#242331"}/>
          </div>
        </SocialSquare>
      </a>

      {/* <a href="https://medium.com/@samuelokirby" target="_blank">
        <SocialSquare title={'Medium'}>
          <MediumIcon className={classes.icon} width={100} height={100} fill={"#242331"}/>
        </SocialSquare>
      </a> */}


      
    </div>

    </Container>

  )
}

export default Contact;