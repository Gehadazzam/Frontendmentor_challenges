# Frontend Mentor - Advice generator app

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

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

(./image.png)

### Links

# Solution URL: Add solution URL here

# Live Site URL: Add live site URL here

### My process

Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Vanilla JavaScript

### What I learned

In this project, I learned how to dynamically adjust content based on screen size and how to interact with an external API. Below are some code snippets I'm proud of:

JavaScript

```javascipt


const data = await fetchApi(apiUrl);
const adviceId = document.createElement("p");
adviceId.classList.add("adviceId");
adviceId.textContent = `Advice # ${data.slip.id}`;
adviceContainer.appendChild(adviceId);

    const advice = document.createElement("p");
    advice.textContent = `“${data.slip.advice}”`;
    advice.classList.add("advice");
    adviceContainer.appendChild(advice);

    const divider = document.createElement("img");
    divider.classList.add("divider");
    divider.alt = "Divider";
    updateDividerImage(divider);
    adviceContainer.appendChild(divider);

    const buttonAdvice = document.createElement("div");
    buttonAdvice.classList.add("buttonAdvice");
    const newAdvice = document.createElement("img");
    newAdvice.src = "./images/icon-dice.svg";
    newAdvice.alt = "New Advice";
    newAdvice.classList.add("newAdvice");
    newAdvice.addEventListener("click", async () => {
      const newData = await fetchApi(apiUrl);
      adviceId.textContent = `Advice # ${newData.slip.id}`;
      advice.textContent = `“${newData.slip.advice}”`;
      adjustContainerSize(adviceContainer, advice);
    });
    buttonAdvice.appendChild(newAdvice);
    adviceContainer.appendChild(buttonAdvice);

    document.body.appendChild(adviceContainer);

    window.addEventListener("resize", () => {
      adjustContainerSize(adviceContainer, advice);
      updateDividerImage(divider);
    });

```

CSS

```css
body {
  font-family: "Manrope";
  font-weight: 800;
  font-size: 28px;
  background-color: var(--DarkBlue);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.adviceContainer {
  background-color: var(--DarkGrayishBlue);
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  position: relative;
  max-width: 90%;
  margin: auto;
  padding-bottom: 3rem;
}
.buttonAdvice {
  background-color: var(--NeonGreen);
  border-radius: 50%;
  width: 3.5rem;
  height: 3.5rem;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  margin-left: 37%;
}

.buttonAdvice:hover {
  box-shadow: 0 0 15px var(--NeonGreen), 0 0 20px var(--NeonGreen),
    0 0 30px var(--NeonGreen);
}
```

### Continued development

In the future, I plan to focus on:

- Enhancing responsiveness with more breakpoints
- Adding animations for the advice changes
- Improving accessibility features

### Useful resources

- MDN Web Docs - Comprehensive resource for web development knowledge.
- CSS-Tricks - Great articles and tutorials on CSS.
- Digital-ocean

### Author

Frontend Mentor - @Gehadazzam
Twitter - @Gehad1984

### Acknowledgments

I would like to thank the Frontend Mentor community for their valuable feedback and support during this challenge.
