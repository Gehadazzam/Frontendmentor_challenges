# Mortgage Repayment Calculator

This is a solution to the Mortgage Repayment Calculator project. This project aims to provide users with a tool to calculate their monthly and total mortgage repayments based on input parameters.

## Table of Contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [Project Setup](#project-setup)
- [Built With](#built-with)
- [Features](#features)
  - [Form Validation](#form-validation)
  - [Calculation Logic](#calculation-logic)
  - [Styling](#styling)
  - [Responsive Design](#responsive-design)
- [Useful Resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The Challenge

Users should be able to:

- Input mortgage information and see monthly repayment and total repayment amounts after submitting the form.
- See form validation messages if any field is incomplete.
- Complete the form only using their keyboard.
- View the optimal layout for the interface depending on their device's screen size.
- See hover and focus states for all interactive elements on the page.

### Screenshot

![Screenshot](screenshot.png)

### Links

- Solution URL: [Add solution URL here](https://www.example.com)
- Live Site URL: [Add live site URL here](https://www.example.com)

## Project Setup

To set up this project locally, follow these steps:

1. Clone the repository.
2. Open the `index.html` file in your browser.

## Built With

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JavaScript for form validation and calculations

## Features

- Mortgage amount, term, and interest rate input fields.
- Radio buttons to select mortgage type (repayment or interest-only).
- Calculate button to compute the monthly and total repayments.
- Clear button to reset the form.

### Form Validation

Form validation ensures that:

- All input fields are filled.
- Mortgage amount, term, and interest rate are valid numbers.
- A mortgage type is selected.

### Calculation Logic

The calculation logic differentiates between repayment and interest-only mortgages:

- Repayment Mortgage: Uses the formula for an amortizing loan to calculate monthly payments.
- Interest-Only Mortgage: Calculates monthly payments based on the interest rate and principal only.

### Styling

The project uses custom CSS properties for consistent theming and styling. Interactive elements include hover and focus states for better user experience.

### Responsive Design

The layout adjusts based on the screen size, ensuring usability on both desktop and mobile devices. Media queries and flexible CSS properties are used to achieve this.

## Useful Resources

- [MDN Web Docs](https://developer.mozilla.org/) - For HTML, CSS, and JavaScript documentation.
- [W3Schools](https://www.w3schools.com/) - For additional tutorials and references.

## Author

- Name - Gehad Gamal
- Frontend Mentor - @Gehadazzam(https://www.frontendmentor.io/profile/Gehadazzam)
- Twitter - [@Gehad1984](https://www.twitter.comGehad1984)

## Acknowledgments

Special thanks to everyone who provided feedback and suggestions for improving this project.
