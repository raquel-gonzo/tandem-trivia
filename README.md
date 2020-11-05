
<!-- [![demo of tandem trivia app.](http://img.youtube.com/vi/_iOVaw-nIzA/0.jpg)](http://www.youtube.com/watch?v=_iOVaw-nIzA "Tandem Trivia Demo") -->

![thumbnail of trivia game.](https://res.cloudinary.com/raquel-gonzo/image/upload/v1604256093/tandem_demo_thumbnail_midoxy.png)

[![Netlify Status](https://api.netlify.com/api/v1/badges/4d65a510-6168-43ab-b1a7-a52ac08129dd/deploy-status)](https://app.netlify.com/sites/tandem-for-400/deploys)

# Tandem for 400!
This app was created by Rachel Gonzalez for Tandem's apprentice software engineer coding challenge (October 2020). Made with React, React Hooks, Bootstrap, and Cloudinary.

## Requirements, Criteria, and Assumptions

| Requirement | How it's implemented in my code |
| ----------- | ------------------------------- |
| View the question, answer choices and score | Once the player has clicked the 'start playing' button on the first screen, the question, multiple-choice answers, and score will render. |
| View correct answer upon submission | When the player has submitted their question, the correct answer will have a blue background color added to highlight the correct answer. Under the score, text will render 'Correct!' or 'Incorrect' based on the player's answer. |
|  All questions are multiple-choice | The corresponding answers for each question have four radio inputs for selecting an answer. | 
| Results can update on form submit, button click, or any interaction you choose | When an answer is submitted, the score will update, the correct answer will be revealed, and whether the question was answered correctly will be under the score. | 
| A user can see the score they received at the end of the round. | Once the player has answered the last question, a message containing their final score will render. |
| Questions should not repeat in a round. | From the JSON data provided, the game will shuffle the questions and store them in an empty array. Then that shuffled array is iterated as the player continues the game. |
| A user can select only 1 answer out of the 4 possible answers. | The 'submit answer' button is initially disabled until the player has chosen an answer. Once a radio is clicked, the submit button will become active. When the submit button is clicked, it will be disabled and the player can move on to the next question. |
| Questions with their multiple choice options must be displayed one at a time. | Only one question will render at a time. The player may not move on to the next question if they have not answered the current question being displayed. Once a radio has been selected and the answer submitted, a 'Next Question' button will render, allowing the player to proceed. |
| A round of trivia has 10 questions. | Once the game is started, the player can see what question they are on. |


## Instructions: how to run this code
1. Open a terminal window and clone this repository by running the following command: `git clone https://github.com/raquel-gonzo/tandem-trivia.git` and press enter. 
2. Navigate to the `tandem-trivia` directory in the terminal.
3. Run `npm install` to install app dependencies. 
4. Run `npm start` in the terminal to launch the app. 

## System Dependencies
The only system dependency needed is [Node.js](https://nodejs.org/en/).

## Additional Features
- Order of questions are shuffled every time a game is played. 
- Order of answers for the corresponding question are shuffled when the question appears.
- 'Play Again' button appears when game is completed. 
- Mobile first design.
- Deployed on netlify. [Play here!](https://tandem-for-400.netlify.app/)

## Testing 
The passing tests for this program are contained in the App.test.js file. It contains two tests: one for rendering the application and one for testing the shuffle function. The shuffle function is passed to two different components and is used to shuffle the order of questions and their corresponding answers. 
