import React from 'react';
import { Card, Typography, Button, IconButton, Container, makeStyles } from '@material-ui/core';
import { Helmet } from 'react-helmet';
import LivePerson from '../media/LivePersonLogo.png';
import SocialSquare from '../components/SocialSquare';
import TwitterIcon from '../icons/TwitterIcon';
import MediumIcon from '../icons/MediumIcon';
import LinkedInIcon from '../icons/LinkedIn';
import PlaneIcon from '../icons/PlaneIcon';
import ProjectSquare from '../components/ProjectSquare';
import LinkIcon from '../icons/link.svg';
import { Link } from 'react-router-dom';
import Project from '../components/Project';





const useStyles = makeStyles((theme) => ({

  linkButton: {
    marginTop: 10,
    marginLeft: 0,
    marginRight: 5,
    backgroundColor: '#005ECF',
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'none',
    textDecoration: 'none',
    width: '25%',
    boxShadow: '0px 2px 2px lightgray',
  },

  icon: {
    marginLeft: 10,
    marginRight: 10,
    height: 200,
    width: 200,
  },

  button: {
    marginRight: 15,
    marginTop: 10,
    '&:hover': {
        backgroundColor: theme.palette.primary.main,
        boxShadow: '0px 0px 0px gray',
    },
    backgroundColor: theme.palette.primary.main,
    textTransform: 'none',
    pointerEvents: 'none',
  },
  paragraph: {
    display: 'inline-block',
    textAlign: 'left',
    fontSize: 20,
    fontFamily: 'Montserrat',
    fontWeight: 550,
    paddingLeft: 50,
    paddingRight: 50,
    marginBottom: 10,
  },

}));

function Projects(){


  const classes = useStyles();

  return(
    <Container maxWidth="lg" style={{marginTop: 125, marginBottom: 400}}>

    <div style={{marginBottom: 25}}>
      <span style={{fontSize: 64, marginBottom: 45, fontWeight: 500, textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"}}>
        P
      </span>
      <span style={{fontSize: 52, fontWeight: 500, textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"}}>
        ROJECTS
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

    <Project title={"Game of Thrones"} height={375}>
        <div className={classes.paragraph}>
        In 2019 I created a recurrent neural network using
        Google's TensorFlow and Keras. I designed it to generate new text based 
        off of a large corpus of existing text. I had the most success (and fun)
        when I fed it the entirety of <i>A Song of Ice and Fire.</i> It generated a new and
        crude "chapter" of Game of Thrones. It's pretty funny if you want to read it.
        </div>

        <div style={{textAlign: 'left', marginLeft: 50}}>
          <Button className={classes.button}>AI</Button>
          <Button className={classes.button}>NLP</Button>
          <Button className={classes.button}>TensorFlow</Button>
          <Button className={classes.button}>Keras</Button>
          <Button className={classes.button}>Java</Button>

        </div>
        
        
        <div style={{textAlign: 'left', marginLeft: 50}}>
          <Button className={classes.linkButton}>
            <Link to="/got">
              Read Chapter
            </Link>
            <img style={{fill: '#fff', filter: 'invert(1)'}} src={LinkIcon}/>
          </Button>
        </div>
    </Project>
      
    <Project title={"Lil' Lexie"}>
        <div className={classes.paragraph}>
        In 2019 my friends and I participated and won Dartmouth's annual
        hackathon, HackDartmouth. We made an Amazon Alexa skill
        called "Lil' Lexie", a bot that would use Alexa's voice to
        have rap battles with users. We accomplished this by first
        taking what the user said and finding if one of those words rhymed 
        with a word that was contextually similar.
        Then we funneled them into a context-free grammar to generate sentence
        structure and used Markov Chains to quickly make the sentence coherent.
        </div>

        <div style={{textAlign: 'left', marginLeft: 50}}>
          <Button className={classes.button}>Discrete Mathematics</Button>
          <Button className={classes.button}>NLP</Button>
          <Button className={classes.button}>Alexa</Button>
          <Button className={classes.button}>Full Stack</Button>
          <Button className={classes.button}>Python</Button>
        </div>
        
        
        <div style={{textAlign: 'left', marginLeft: 50}}>
          <Button className={classes.linkButton}>
            <a href="https://devpost.com/software/lil_lexie">
            DevPost Link
            </a>
            <img style={{fill: '#fff', filter: 'invert(1)'}} src={LinkIcon}/>
          </Button>
        </div>

    </Project>

    <Project title={"footnote"}>
        <div className={classes.paragraph}>
        I participated in BrickHack VI at RIT where my project was a Google Chrome extension
        that allowed users to comment on any page. If you had the extension installed, you
        could view other comments left by users.
        </div>

        <div style={{textAlign: 'left', marginLeft: 50}}>
          <Button className={classes.button}>Authentication</Button>
          <Button className={classes.button}>Authorization</Button>
          <Button className={classes.button}>Java</Button>
          <Button className={classes.button}>Back End</Button>
          <Button className={classes.button}>Python</Button>
        </div>
        
        
        <div style={{textAlign: 'left', marginLeft: 50}}>
          <Button className={classes.linkButton}>
            <a href="https://devpost.com/software/footnote">
              DevPost Link
            </a>
            <img style={{fill: '#fff', filter: 'invert(1)'}} src={LinkIcon}/>
          </Button>
        </div>

    </Project>



      {/* <a href="https://medium.com/@samuelokirby" target="_blank">
        <SocialSquare title={'Medium'}>
          <MediumIcon className={classes.icon} width={100} height={100} fill={"#242331"}/>
        </SocialSquare>
      </a> */}
    </div>

    </Container>

  )
}

export default Projects;