import React from 'react';
import { makeStyles, fade } from '@material-ui/core';
import { animated, useSpring, useTransition } from 'react-spring';


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
    verticalAlign: 'text-top', 
    textAlign: 'center', 
    position: 'relative', 
    top: '44%', 
    fontFamily: 'Montserrat',
    fontWeight: 800,
    fontSize: 36,
    color: '#242331 !important',
    opacity: '1',
  },

}));
const sideMargins = 20;


function ProjectSquare(props){

  var initialColor = '#EEE4BF';
  var hoverColor = '#ede7ce';


  const [isHovered, setHover] = React.useState(false);

  let onHover = () => {
    setHover(!isHovered)
    console.log("hovering: " + isHovered);
  }

  const classes = useStyles();


  const grow = useSpring({
    config: { friction: 30, mass: 1 },
    height: isHovered ? props.height : 350,
    width: isHovered ? 950 : 950,
    transform: isHovered ? "rotate(0.2deg)" : "rotate(0deg)",
    backgroundColor: isHovered ? hoverColor : initialColor,
  });

  let opacity = 0;

  const fadeIn = useSpring({
    config: {mass: 2, friction: 25, tension: 150},
    opacity: isHovered ? opacity : opacity=1,
    right: isHovered ? 500 : 0,
    from: { opacity: opacity },
  })

  const fadeOut = useSpring({
    config: {mass: 2, friction: 25, tension: 150},
    opacity: isHovered? 1 : 0,
    from: { opacity: 0 },
  })


  const underline = useSpring({
    config: {friction: 20, tension: 100},
    textDecoration: isHovered ? "underline" : "none",
    color: isHovered ? "#313036" : "#EEE4BF",
  });

  return(
      <div style={{marginLeft: sideMargins, marginRight: sideMargins, display: 'inline-block'}}>
        <animated.div className={classes.card} onMouseEnter={ onHover } onMouseLeave={ onHover }
        style={grow}>
          <animated.div className={classes.title} style={fadeIn}>
            {props.title}
            {/* <animated.span className={classes.paragraph} style={fadeOut}>
              {props.children}
            </animated.span> */}

          </animated.div>
          <animated.span className={classes.paragraph} style={fadeOut}>
              {props.children}
          </animated.span>
        </animated.div>
        {/* <animated.span className={classes.title} style={underline}>
          {props.title}
        </animated.span> */}
      </div>
  )
}

export default ProjectSquare;

