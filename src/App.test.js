import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Data from "./data.json";
import { shuffle } from "./functions";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('shuffles the questions', () => {
  const oldData = Data;
  const shuffledData = shuffle(oldData);
  expect(oldData).not.toEqual(shuffledData);
});
