# 🏀 Basketball Scoreboard

A solo project from the [Scrimba Frontend Developer Career Path](https://scrimba.com/frontend-path-c0j).  
This project is a **basketball-style scoreboard** that tracks the score of two teams (**Home** and **Guest**) in real-time. Users can increment each team’s score by 1, 2, or 3 points and reset the game to start over.

## 🛠️ Technologies
- HTML5  
- CSS3  
- JavaScript (ES6)

## 🚀 Features
- Dynamic score tracking updates the scores instantly in the DOM as users click the scoring buttons.
- One reusable function `increaseScore` handles all score increments. 
- New game or reset functionality sets both teams’ scores to zero with a single button click.
- All button clicks are handled using a single document listener for efficiency. 
- Score elements are cached for faster updates and cleaner code.

## 🧠 What I Learned / Process
- Practiced **DOM manipulation** by updating scores dynamically.
- Implemented **event delegation** to handle multiple buttons efficiently without multiple event listeners.
- Learned **state management** by keeping track of scores in a JavaScript object.
- Learned to use **dataset attributes (`data-*`)** to link buttons to functionality.  
- Improved understanding of **flexbox layout** and **custom font integration** in CSS.
- Reinforced **function reusability** using a generic function to update scores.

## 💡 Future Improvements
- Highlight the **leading team** dynamically.
- Save scores in **localStorage** so progress persists on page reload.
- Add **additional counters** such as:
  - Game period  
  - Team fouls  
  - Countdown timer to simulate real game quarters.
- Implement **dark/light mode** for better visual experience.  

## 🖼️ Preview

![Basketball Scoreboard Preview Screenshot](images/screenshot-basketballScoreboard.png)

## 📚 Sources & References
- Scrimba course: [Scrimba Frontend Developer Career Path](https://scrimba.com/frontend-path-c0j)  
- Figma Design reference by Scrimba: [View Figma Design](https://www.figma.com/design/YC48MCx4frBFtYoz6rNJE6/Basketball-Scoreboard?node-id=0-1&p=f&t=EtxyyQtB3vZFm3YL-0)
