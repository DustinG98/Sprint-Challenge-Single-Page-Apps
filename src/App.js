import React from "react";
import Header from "./components/Header.js";
import { Route, Switch } from 'react-router-dom'
import WelcomePage from './components/WelcomePage'
import CharacterList from "./components/CharacterList.js";
import { TransitionGroup, CSSTransition } from 'react-transition-group'

export default function App() {
  return (
    <main>
      <Header />
      <TransitionGroup >
        <CSSTransition 
          classNames="fade"
          timeout={300}>
          <Switch>
            <Route exact path="/" render={props => <WelcomePage {...props}/>} />
            <Route path="/characters" render={props => <CharacterList {...props}/>}/>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </main>
  );
}

const styles = {}

styles.fill = {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
}

styles.content = {
  ...styles.fill,
  top: '40px',
  textAlign: 'center'
}