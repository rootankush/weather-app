import "../styles/dom.css";
import { loadData } from "./logic";

export const loadPage = async () => {
  const container = document.getElementById("main-content");
  const mainCard = document.createElement("div");
  const locationText = document.createElement("p");
  const tempText = document.createElement("p");
  const descriptionText = document.createElement("p");
  const secondaryCard = document.createElement("div");
  const sc1 = document.createElement("div");
  const sc2 = document.createElement("div");
  const sc3 = document.createElement("div");
  const sc4 = document.createElement("div");
  const submitBtn = document.getElementById("submitBtn");
  const weather = await loadData();

  mainCard.classList.add("mainCard");
  locationText.classList.add("locationText");
  tempText.classList.add("tempText");
  descriptionText.classList.add("descriptionText");
  secondaryCard.classList.add("secondaryCard");
  sc1.classList.add("card");
  sc2.classList.add("card");
  sc3.classList.add("card");
  sc4.classList.add("card");

  sc1.textContent = `${weather.humidity}`;
  locationText.textContent = `${weather.address}`;
  tempText.textContent = `${weather.fahrenheit}°F`;
  descriptionText.textContent = `${weather.description}`;

  mainCard.appendChild(locationText);
  mainCard.appendChild(tempText);
  mainCard.appendChild(descriptionText);

  secondaryCard.appendChild(sc1);
  secondaryCard.appendChild(sc2);
  secondaryCard.appendChild(sc3);
  secondaryCard.appendChild(sc4);

  container.appendChild(mainCard);
  container.appendChild(secondaryCard);

  submitBtn.addEventListener("click", loadData);
};
