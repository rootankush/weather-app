import "./style.css";
import "./styles/dom.css";
import { loadData } from "./modules/logic";
import { loadPage } from "./modules/dom";

const submitBtn = document.getElementById("submitBtn");
const input = document.getElementById("search");
const container = document.getElementById("main-content");

submitBtn.addEventListener("click", async (e) => {
  const spanError = document.getElementById("error");

  if (input.value.trim() === "") {
    container.textContent = "";
    spanError.textContent = "Please Enter a Location";
    return;
  }
  try {
    let weather = await loadData();
    loadPage(weather);
  } catch (error) {}
});
