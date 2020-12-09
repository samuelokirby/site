import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { useMeasure } from "react-use";
import style from "../style/accordion.module.css";
import {Card, Typography, Grid} from "@material-ui/core";
import DoubleChevron from '../icons/DoubleChevrons.svg'

const Accordion = (props) => {
  const defaultHeight = "150px";

  const defaultImageHeight = "100px";
  // new height is 125px;

  // Manages the open or cloased state of the accordion
  const [open, toggle] = useState(false);

  const onButtonClick = () => {
    toggle(!open);
  }

  // The height of the content inside of the accordion
  const [contentHeight, setContentHeight] = useState(defaultHeight);

  // Gets the height of the element (ref)
  const [ref, { height }] = useMeasure();

  // Animations
  const expand = useSpring({
    config: { friction: 15 },
    height: open ? `${contentHeight}px` : defaultHeight
  });
  const spin = useSpring({
    config: { friction: 10, tension: 300 }, 
    transform: open ? "rotate(180deg)" : "rotate(0deg)"
  });
  const grow = useSpring({
    config: { friction: 15 },
    height: open ? "125px" : "100px"
  })

  useEffect(() => {
    //Sets initial height
    setContentHeight(height);

    //Adds resize event listener
    window.addEventListener("resize", setContentHeight(height));

    // Clean-up
    return window.removeEventListener("resize", setContentHeight(height));
  }, [height]);

  return (
    <div className={style.wrapper}>

      <animated.div className={style.accordion} style={expand}>
      <Grid 
      container
      direction={'row'}
      justify="flex-start"
      alignItems="flex-start">


      <Grid item sm={6}>

      <Card ref={ref} className={style.content} elevation={0}>
        {/* <img src={props.image} style={{height: 100, float: 'right', paddingRight: 100, filter: 'saturation(300%)'}}/> */}

        <Typography variant="h5" style={{fontWeight: 500, width: 400}}>
          {props.title}
        </Typography> 
        
        <Typography style={{fontSize: 18, width: 400}}>
          {props.setting}
        </Typography>
        
        <Typography style={{fontSize: 18, width: 400}}>
          {props.date}
        </Typography>

        <Typography style={{overflow: 'hidden', paddingBottom: 50, paddingTop: 50, fontSize: 20}}>
          {props.description}
        </Typography>
        

      </Card>

      </Grid>
      <Grid item xs={2} sm={6}>
        <div style={{textAlign: 'center', position: 'relative', top: '50%', transform: 'translateY(25%)'}}>
          <div>
            <animated.img src={props.image} style={grow}/>
          </div>
        </div>
        <div style={{textAlign: 'center', marginTop: 50}}>
          {props.children}
        </div>  
      </Grid>

      </Grid>    


      </animated.div>

      <div style={{width: '52.1%'}}>
        <animated.button
          className={style.expand}
          onClick={onButtonClick}
          style={spin}>
          <img src={DoubleChevron}/>
        </animated.button>
      </div>
      
    </div>
  );
};

export default Accordion;



