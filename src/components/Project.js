import React from 'react';
import { makeStyles } from '@material-ui/core';
import { animated, useSpring } from 'react-spring';


var cardWidth = 250;
var cardHeight = 250;


const useStyles = makeStyles((theme) => ({
  card: {
    paddingTop: 30,
    borderRadius: 25,
    boxShadow: '0px 2px 6px #533E2D',
    paddingBottom: 30,
    marginLeft: sideMargins, 
    marginRight: sideMargins, 
    display: 'inline-block',
    backgroundColor: '#D1ECF9',
  },
  icon: {
    marginTop: 15,
    height: 200,
    width: 200,
  },
  title: {
    display: 'inline-block',
    fontSize: 36,
    textAlign: 'center',
    marginTop: 5,
    fontFamily: 'Montserrat',
    fontWeight: 800,
    color: '#242331 !important',
  }
  
}));
const sideMargins = 20;


function Project(props){

  var initialColor = '#EEE4BF';
  var hoverColor = '#ede7ce';


  const [isHovered, setHover] = React.useState(false);

  let onHover = () => {
    setHover(!isHovered)
    console.log("hovering: " + isHovered);
  }

  const classes = useStyles();


  const grow = useSpring({
    config: { friction: 20, tension: 500, mass: 1 },
    height: isHovered ? 250 : 245,
    width: isHovered ? 250 : 245,
    transform: isHovered ? "rotate(3deg)" : "rotate(0deg)",
    backgroundColor: isHovered ? hoverColor : initialColor,
  });

  const underline = useSpring({
    config: {friction: 20, tension: 100},
    textDecoration: isHovered ? "underline" : "none",
    color: isHovered ? "#313036" : "#EEE4BF",
  });

  return(
    <div style={{marginBottom: 30, marginTop: 30}}>
      <span className={classes.title}>{props.title}</span>
      <div className={classes.card}>
        {props.children}
      </div>
    </div>

  )
}

export default Project;

