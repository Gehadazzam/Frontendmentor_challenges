# Frontend Mentor - Age Calculator App Solution

This is a solution to the Age Calculator App challenge on Frontend Mentor. Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of Contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My Process](#my-process)
  - [Built With](#built-with)
  - [What I Learned](#what-i-learned)
  - [Continued Development](#continued-development)
  - [Useful Resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The Challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form.
- Receive validation errors if:
  - Any field is empty when the form is submitted.
  - The day number is not between 1-31.
  - The month number is not between 1-12.
  - The year is in the future.
  - The date is invalid (e.g., 31/04/1991, there are 30 days in April).
- View the optimal layout for the interface depending on their device's screen size.
- See hover and focus states for all interactive elements on the page.
- Bonus: See the age numbers animate to their final number when the form is submitted.

### Screenshot

![Screenshot of the Age Calculator App](./Screenshot%20from%202024-07-16%2021-06-06.png)

### Links

- Solution URL: [Add solution URL here](https://www.frontendmentor.io/solutions/age-calculator-app-main-C70xc3LhSX)
- Live Site URL: [Add live site URL here](https://age-calculator-app-main-chi-two.vercel.app/)

## My Process

### Built With

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript - Programming language

### What I Learned

During this project, I reinforced my understanding of JavaScript date manipulation and form validation. Here are some code snippets that I am proud of:

```html
<label for="birth-day">
  <p class="error">Day</p>
  <input type="text" placeholder="DD" id="birth-day" required />
  <p class="handleError" id="wrongDay" hidden></p>
</label>
```

```css
.handleError {
  color: hsl(0, 100%, 67%);
  font-weight: 400;
  font-size: 0.6rem;
}
```

```javascript
if (isNaN(birthDay) || isNaN(birthMonth) || isNaN(birthYear)) {
  birthDayInput.style.borderColor = "hsl(0, 100%, 67%)";
  birthMonthInput.style.borderColor = "hsl(0, 100%, 67%)";
  birthYearInput.style.borderColor = "hsl(0, 100%, 67%)";
  ageYearOutput.textContent = "--";
  ageMonthOutput.textContent = "--";
  ageDaysOutput.textContent = "--";
  return;
}
```

### Continued Development

In future projects, I plan to focus on improving:

- Accessibility features to ensure the app is usable by everyone.

- More advanced form validation techniques to handle edge cases more effectively.

- Animations and transitions to enhance the user experience.

### Useful Resources

- MDN Web Docs - A comprehensive resource for web development documentation and tutorials.

- CSS-Tricks - Helpful articles and guides on CSS techniques.

### Author

- Name - Gehad Gamal

- Frontend Mentor - @Gehadazzam

- Twitter - @Gehad1984

### Acknowledgments

Special thanks to the Frontend Mentor community for their support and feedback throughout this project.
