import React from 'react';
import "./Resume.css";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Resume() {
  return (
    <div>
        <div>
      <h4 className='text-center'>Resume</h4>
      <p className='text-center'> Download
      <a className='button ResumeDownload' href='https://docs.google.com/document/d/1BIwEQmJ5b4Sk5JctPF_VuxOr08975jvafZlhGlX19f0/edit?usp=sharing'> My Resume</a></p>
      <div className='container'>
      <p className='frontend md-1'>      
        <h1 className='frontend'>Front-end Proficiencies</h1>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>Jquery</li>
          <li>Bootstrap</li>
          <li>React</li>
        </ul>
        </p>
        <p class='backend md-'>
          <h1>Back-end Proficiencies</h1>
          <ul class='bend'>
            <li>Node</li>
            <li>Express</li>
            <li>APIs</li>
            <li>MySQL</li>
            <li>Sequelize</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
            <li>GraphQL</li>
          </ul>
        </p>
        </div>
      </div>
  </div>

  )}