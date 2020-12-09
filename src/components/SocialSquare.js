import React from 'react';
import { makeStyles } from '@material-ui/core';
import { animated, useSpring } from 'react-spring';


var cardWidth = 250;
var cardHeight = 250;


const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: '#EEE4BF',
    boxShadow: '0px 2px 6px #533E2D',
    padding: 10,
    width: cardWidth,
    height: cardHeight,
    marginRight: 50,
    marginLeft: 50,
    marginTop: 50,
    borderRadius: 25,
  },
  icon: {
    marginTop: 15,
    height: 200,
    width: 200,
  },
  title: {
    display: 'inline-block',
    width: 250,
    fontSize: 24,
    textAlign: 'center',
    marginTop: 5,
    fontFamily: 'Montserrat',
    fontWeight: 800,
    color: '#242331 !important',
  }
}));
const sideMargins = 20;


function SocialSquare(props){

  var initialColor = '#EEE4BF';
  var hoverColor = '#ede7ce';


  const [isHovered, setHover] = React.useState(false);

  const [time, setTime] = React.useState(Date.now() % 2);

  let onHover = () => {
    setHover(!isHovered)
    console.log("Time: " + time);
    setTime(Date.now() % 2);
  }

  const classes = useStyles();

  useStyles(() => {
    console.log('update');
  });


  const grow = useSpring({
    config: { friction: 20, tension: 500, mass: 1 },
    height: isHovered ? 250 : 250,
    width: isHovered ? 250 : 250,
    // transform: isHovered ? "rotate(3deg)" : "rotate(0deg)",
    transform: isHovered ? time === 1 ? "rotate(3deg)" : "rotate(-3deg)" : "rotate(0deg)",
    backgroundColor: isHovered ? hoverColor : initialColor,
  });

  const underline = useSpring({
    config: {friction: 20, tension: 100},
    textDecoration: isHovered ? "underline" : "none",
    color: isHovered ? "#313036" : "#EEE4BF",
  });

  return(
      <div style={{marginLeft: sideMargins, marginRight: sideMargins, display: 'inline-block'}}>
        <animated.div className={classes.card} onMouseEnter={ onHover } onMouseLeave={ onHover }
        style={grow}>
          <div style={{verticalAlign: 'text-top', textAlign: 'center', position: 'relative', top: '50%', transform: 'translateY(-50%)'}}>
            {props.children}
          </div>
        </animated.div>
        <animated.span className={classes.title} style={underline}>
          {props.title}
        </animated.span>
      </div>
  )
}

export default SocialSquare;

