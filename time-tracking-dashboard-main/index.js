document.addEventListener("DOMContentLoaded", () => {
  const dailyBtn = document.getElementById("dailyBtn");
  const weeklyBtn = document.getElementById("weeklyBtn");
  const monthlyBtn = document.getElementById("monthlyBtn");
  const cardContainers = document.querySelectorAll(".cc");

  function fetchData() {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => {
        dailyBtn.addEventListener("click", () => displayData(data, "daily"));
        weeklyBtn.addEventListener("click", () => displayData(data, "weekly"));
        monthlyBtn.addEventListener("click", () =>
          displayData(data, "monthly")
        );
        displayData(data, "daily");
      })
      .catch((error) => console.error("Error fetching data:", error));
  }

  function displayData(data, timeframe) {
    data.forEach((item) => {
      const cardContainer = document.getElementById(
        item.title.toLowerCase().replace(" ", "")
      );
      const timeframeData = item.timeframes[timeframe];
      cardContainer.innerHTML = `
                <div class="card">
                    <p>${item.title}</p>
                    <p>Current: ${timeframeData.current} hours</p>
                    <p>Previous: ${timeframeData.previous} hours</p>
                </div>
            `;
    });
  }

  fetchData();
});
