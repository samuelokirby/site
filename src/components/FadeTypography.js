import React, {Component} from 'react';
import { Typography } from '@material-ui/core';



const FadeTypography = (props) =>{

    return(
        <div>
            <Typography className={props.className}
            style={{display: props.toggled ? 'block' : 'none'}}>
                {props.children}
            </Typography>
        </div>
    )
}

export default FadeTypography