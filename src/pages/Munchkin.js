import React, {useState} from 'react';
import { Button } from '@material-ui/core';

function Munchkin(){

  return(
    <div>
      <span>
        <b>WARNING: </b> Only the cutest of munchkins can click this button
        without perishing! Use at your own risk!
      </span>
      <div>
        <Button onClick={() => alert('munchkin loooove!')}>
          Click Me
        </Button>
      </div>
    </div>
  )
}

export default Munchkin;


