import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
      <div>
        <SayFullName name="Ivan" surname="Богачов" link="facebook.com"/>
        <SayFullName name="Vasy" surname="Drug" link="facebook.com"/>
        <SayFullName name="Pety" surname="Bobrik" link="facebook.com"/>
      </div>
    );
  }
}

function SayFullName(props){
  return (
    <div>
      <h1>Мое имя {props.name}, фамилия {props.surname}</h1>
      <a href={props.link}> Ссылка на мой профиль </a> 
    </div>  
  )
}

export default App;
