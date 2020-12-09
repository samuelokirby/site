import React from 'react';
import { Card, Typography, Button, IconButton } from '@material-ui/core';
import Accordion from '../components/Accordion';


function Test(){

  let livePersonDesc = "I currently am employed at LivePerson \
  as a Conversational AI Engineer on the Expert Engineering Team.\
  I work with natural language processing, natural language understanding,\
  front-end development in React.js, and a bit of data analytics."

  return(
    <Accordion
    description={livePersonDesc}
    title={"Conversational AI Engineer"}
    setting={"LivePerson"}
    date={"June 2020 - present"}/>
  )
}

export default Test;