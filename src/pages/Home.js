import React, { useState, useEffect } from 'react';
import { Typography, Button, Container, makeStyles, Input } from '@material-ui/core';
import { Helmet } from 'react-helmet';
import $ from 'jquery';
import ChatBody from '../components/ChatBody';
import { useSpring, animated } from 'react-spring';


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

  leftMessage: {
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 5,
    boxShadow: '2px 2px 5px lightgray',
    display: 'inline-block',
    clear: 'both',
    float: 'left',
    backgroundColor: '#03fc77',
    maxWidth: 350,
    wordBreak: 'break-word',
  },

  rightMessage: {
    padding: 2,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 5,
    boxShadow: '2px 2px 5px lightgray',
    clear: 'both',
    float: 'right',
    backgroundColor: '#00c8ff',
    maxWidth: 350,
    wordBreak: 'break-word',

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

function Home(){


  var baseUrl = "https://api.api.ai/v1/";
  var accessToken = "d40a2e1786324a019851c794082aaaa1";

  const [history, updateHistory] = useState(['Sam-Bot: Welcome to my page! I am Sam-Bot, a chat bot designed by Sam to answer questions.']);
  const [input, setInput] = useState("");
  const [load, setLoad] = useState(false);


  useEffect(() => {
    setLoad(true);
    console.log(load);
  });


  const introAnimation = useSpring({
    config: { friction: 20, tension: 500, mass: 1 },
    fontSize: 48,
    opacity: load ? 1 : 0,
    fontWeight: load ? 300 : 500,
  });
  


  const send = (query) => {
    setInput("");
    var text = query;
    $.ajax({
      type: "POST",
      url: baseUrl + "query?v=2180101",
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      headers: {
        "Authorization": "Bearer " + accessToken
      },
      data: JSON.stringify({ query: text, lang: "en", sessionId: "sam" }),
      success: function(data) {
        var timeout = 0;
        if($.inArray(text, history)){
            timeout = 1000 * ((Math.random() * 2) + 0.5);
        }
        updateHistory(oldArray => [...oldArray, text]);
        setTimeout(setResponse, timeout, data.result.fulfillment.speech);
      }
    });
  }

  const setResponse = (val) => {
    var botString = "Sam-Bot: ";
    var newString = botString + val;
    newString = newString.replace(/\s+/g,' ').trim();
    updateHistory(oldArray => [...oldArray, newString]);

    // $(".chatBox").append("\n" + newString + "\n");
  }



  const classes = useStyles();
  return(


    <Container maxWidth="lg" style={{marginTop: 125, marginBottom: 400}}>


    <Helmet>
      <body style="
      background-image: url('../pbackground.png');
      background-repeat: no-repeat;
      background-size: cover;"
      />
    </Helmet>

    <div style={{textAlign: 'center'}}>

        <animated.span variant="h3" style={introAnimation}>
          Sam Bot
        </animated.span>

        

        <ChatBody>
          {history.map(function(item){
            console.log(item.substring(0, 9));
            if(item.substring(0, 9) === 'Sam-Bot: '){
              // if Sam-Bot is sending the message
              return(
                <div className={classes.leftMessage}>
                  {item.substring(9, item.length)}
                </div>
              )
            }
            else{
              return(
                <div className={classes.rightMessage}>
                  {item}
                </div>
              )
            }
          })}
        </ChatBody>
      
    </div>

    <div style={{display: 'flex', justifyContent: 'center'}}>
      <Input
      style={{width: 400}}
      onKeyDown={event=>{
        if(event.key === 'Enter'){
          send(input);
        }
      }}
      onChange={event=>{
        setInput(event.target.value);
      }}
      value={input}
      
      />
      <Button>
        Send
      </Button>


    </div>




    </Container>

  )
}

export default Home;