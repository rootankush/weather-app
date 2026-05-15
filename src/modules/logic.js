export const loadData = async () => {
  try {
    const search = document.getElementById("search");

    let place = search.value;
    let url = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${place}?key=H4YP5KPUFJDPX5KD8BV3LLQ3C`,
    );
    let weatherData = await url.json();
    console.log(weatherData);
    let currentTempInF = Number(weatherData.currentConditions.temp).toFixed(1);
    let currentTempInC = Number((currentTempInF - 32) / 1.8).toFixed(1);
    let location = weatherData.address;
    let description = weatherData.description;
    let humidity = weatherData.currentConditions.humidity;

    return {
      fahrenheit: currentTempInF,
      celsius: currentTempInC,
      address: location,
      description: description,
      humidity: humidity,
    };
  } catch (error) {
    console.error(error);
  }
};
