import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import styled, { keyframes } from 'styled-components';
import { zoomIn } from 'react-animations'

export default function About() {
  const ZoomIn = styled.div`animation:2s ${keyframes`${zoomIn}`} 1`;
  return (

    <div className="main-content">
      <br />
      <h1>ABOUT ME</h1>
      <hr />
      <ZoomIn>
        <Card >
          <CardActionArea>
            <CardContent>
              <img src={require("../images/about.jpg")} style={{ width: '100%' }} />
              <Typography gutterBottom variant="h5" component="h2" style={{ fontFamily: 'Coiny', fontSize: 32 }}>
                Anum Rehman
          </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Full-Stack Web & Mobile Application Developer having experience in all Project phases of Agile Development Methodology with strong knowledge of MERN Stack Development also have working knowledge of core PHP along with Object Oriented Programming & have basic knowledge of Wordpress & Laravel with solid Programming Concepts. I have develop many projects including web applications using React, PHP and NodeJS with mongoDB, MySQL & SQL Server as Database and also develop Chatbots along with external API using Dialogflow I have also experience in building cross platform mobile applications using React Native
          </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </ZoomIn>
    </div>
  )
}