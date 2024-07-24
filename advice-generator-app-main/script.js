document.addEventListener("DOMContentLoaded", async () => {
  const apiUrl = "https://api.adviceslip.com/advice";
  const containerPadding = 80;

  async function fetchApi(url) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  }

  const adviceContainer = document.createElement("div");
  adviceContainer.classList.add("adviceContainer");

  try {
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
      adviceId.textContent = `ADVICE # ${newData.slip.id}`;
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
  } catch (error) {
    console.error(error);
  }
});

function adjustContainerSize(container, textElement) {
  const tempSpan = document.createElement("span");
  tempSpan.style.visibility = "hidden";
  tempSpan.style.whiteSpace = "nowrap";
  tempSpan.textContent = textElement.textContent;
  document.body.appendChild(tempSpan);
  const textWidth = tempSpan.offsetWidth;
  document.body.removeChild(tempSpan);
  container.style.width = `${textWidth + containerPadding}px`;
}

function updateDividerImage(divider) {
  const isDesktop = window.innerWidth >= 1024;
  divider.src = isDesktop
    ? "./images/pattern-divider-desktop.svg"
    : "./images/pattern-divider-mobile.svg";
  divider.style.width = "100%";
  divider.style.height = "auto";
}
