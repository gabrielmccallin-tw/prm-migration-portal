import React, { Fragment } from 'react';
import Header from '../header/Header';
import styles from './App.module.scss';
import { parse } from 'query-string';
import DeductionContainer from './DeductionContainer';
import { setFeatures } from '../features';

const App = () => {
  setFeatures(parse(window.location.search, { parseBooleans: true }))

  return (
    <Fragment>
      <Header />
      <div className={styles.content}>
        <DeductionContainer />
      </div>
    </Fragment>
  )
};

export default App;
