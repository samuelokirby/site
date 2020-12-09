import React from 'react';
import { Card, Typography, Button, IconButton, Container, makeStyles } from '@material-ui/core';
import Accordion from '../components/Accordion';
import { Helmet } from 'react-helmet';
import LivePerson from '../media/LivePersonLogo.png';
import CFC from '../media/center-for-cybersecurity.png';
import RIT from '../media/rit_slim.png';
import RITAI from '../media/rit_ai_club_horizontal_orange.png';
import LinkIcon from '../icons/link.svg';


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

  
  root: {
    flexGrow: 1,
  },
  menuButton: {
    fontSize: 16,
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  menuItem: {
    float: 'right',
    display: 'block',
  },
  link: {
    textTransform: 'none',
    textDecoration: 'none',
    color: 'white',
  },
}));

function Experience(){

  const classes = useStyles();


  let livePersonDesc = "I currently am employed at LivePerson \
  as a Conversational AI Engineer on the Expert Engineering Team.\
  I work with natural language processing, natural language understanding,\
  front-end development in React.js, and a bit of data analytics, on a new \
  project.";

  let researchDesc = "I was employed as a Research Assistant for the \
  Rochester Institute of Technology at the Center for Cybersecurity. \
  I worked on a digital fingerprinting project alongside the \
  Tor team to develop a network overhead obfuscation program to prevent \
  Tor users from being tracked. I worked under Professor \
  Matthew Wright, the Director of Research for the Global Cybersecurity Institute \
  at RIT. You can find a link to his publications here.";

  let ritDesc = "I am pursuing a Bachelor's of Computer Science at the Rochester Institute of Technology, after which\
  I will pursue a Master's in Computer Science.";

  let aiDesc = "I served as a board member on the RIT AI Club.\
   My main job was to create advertisements and foster outreach for new members and\
    presentations on Machine Learning and AI topics. \
    My most recent presentation was actually on natural language processing and its \
    application, where I used my various rap bots that I have developed as examples. \
    The AI Club is a great network where we bring like-minded students together to talk \
    about the future of artificial intelligence, and I am proud to say I served as a key member.";

  return(


    <Container maxWidth="lg" style={{marginTop: 125, marginBottom: 400}}>

    <div style={{marginBottom: 25}}>
      <span style={{fontSize: 64, marginBottom: 45, fontWeight: 500, textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"}}>
        E
      </span>
      <span style={{fontSize: 52, fontWeight: 500, textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"}}>
        XPERIENCE
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

      <Accordion
      description={livePersonDesc}
      title={"Conversational AI Engineer"}
      setting={"LivePerson"}
      date={"June 2020 - present"}
      image={LivePerson}
      imageMargin={110}>
        <Button disableRipple className={classes.button}>React.js</Button>
        <Button disableRipple className={classes.button}>ES6</Button>
        <Button disableRipple className={classes.button}>Product Ownership</Button>
        <Button disableRipple className={classes.button}>Full Stack</Button>
        <Button disableRipple className={classes.button}>Conversation Design</Button>
        <Button disableRipple className={classes.button}>Figma</Button>
        <Button disableRipple className={classes.button}>Python</Button>
        <Button disableRipple className={classes.button}>NLU & NLP</Button>


      </Accordion>

      <div style={{marginTop: 75}}>
        <Accordion
          description={researchDesc}
          title={"Research Assistant"}
          setting={"Rochester Institute of Technology"}
          date={"September 2020 - June 2020"}
          image={CFC}
          imageMargin={0}>
          <Button disableRipple className={classes.button}>TensorFlow</Button>
          <Button disableRipple className={classes.button}>C</Button>
          <Button disableRipple className={classes.button}>Networking</Button>      
          <Button disableRipple className={classes.button}>Python</Button>
          <div>
            <Button className={classes.linkButton}>
              <a className={classes.link} href="https://scholar.google.com/citations?hl=en&user=icDo19sAAAAJ&view_op=list_works">
                Professor Wright
              </a>
              <img style={{fill: '#fff', filter: 'invert(1)'}} src={LinkIcon}/>
            </Button>
          </div>
        </Accordion>
      </div>

      <div style={{marginTop: 75}}>
        <Accordion
          description={ritDesc}
          title={"Computer Science Bachelor's"}
          setting={"Rochester Institute of Technology"}
          date={"August 2017 - May 2022"}
          image={RIT}
          imageMargin={0}>
          <Button disableRipple className={classes.button}>Python</Button>
          <Button disableRipple className={classes.button}>Java</Button>
          <Button disableRipple className={classes.button}>Data Structures</Button>
          <Button disableRipple className={classes.button}>Algorithms</Button>      
          <Button disableRipple className={classes.button}>C</Button>
    
        </Accordion>
      </div>

      <div style={{marginTop: 75}}>
        <Accordion
          description={aiDesc}
          title={"Club Publicist"}
          setting={"RIT AI Club"}
          date={"December 2018 - August 2020"}
          image={RITAI}
          imageMargin={0}>
          <Button disableRipple className={classes.button}>Presentations</Button>
          <Button disableRipple className={classes.button}>ML/AI</Button>
          <Button disableRipple className={classes.button}>Leadership</Button>      
          <Button disableRipple className={classes.button}>Creative Suite</Button>
          <Button disableRipple className={classes.button}>Public Speaking</Button>

          <div>
            <Button className={classes.linkButton}>
              <a className={classes.link} href="https://campusgroups.rit.edu/RITAI/rsvp_boot?id=369626">
                RIT AI Club
              </a>
              <img style={{fill: '#fff', filter: 'invert(1)'}} src={LinkIcon}/>
            </Button>
          </div>
    
        </Accordion>
      </div>

    </Container>

  )
}

export default Experience;