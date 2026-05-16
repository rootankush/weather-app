export const loadData = async () => {
  const spanError = document.getElementById("error");
  const search = document.getElementById("search");
  const container = document.getElementById("main-content");
  try {
    let place = search.value;
    let url = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${place}?key=H4YP5KPUFJDPX5KD8BV3LLQ3C`,
    );
    let weatherData = await url.json();
    let currentTempInF = Number(weatherData.currentConditions.temp).toFixed(1);
    let currentTempInC = Number((currentTempInF - 32) / 1.8).toFixed(1);
    let location = weatherData.address.toUpperCase();
    let description = weatherData.description;
    let humidity = weatherData.currentConditions.humidity;
    let feelsLike = weatherData.currentConditions.feelslike;
    let windSpeed = weatherData.currentConditions.windspeed;
    let windDir = weatherData.currentConditions.winddir;
    let rainChance = weatherData.currentConditions.precipprob;
    spanError.textContent = "";
    // return weatherData;
    return {
      fahrenheit: currentTempInF,
      celsius: currentTempInC,
      address: location,
      description: description,
      humidity: humidity,
      feelsLike: feelsLike,
      windSpeed: windSpeed,
      windDir: windDir,
      rainChance: rainChance,
      gotData: true,
    };
  } catch (error) {
    spanError.textContent = `Please Enter a Location`;
    container.textContent = "";
    throw error;
  }
};
