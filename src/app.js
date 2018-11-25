import validator from 'validator';
import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css'; // this will reset all browsers default styling
import './styles/styles.scss';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));