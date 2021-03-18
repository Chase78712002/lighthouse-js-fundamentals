let stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 10, 'community centre']
]

const chooseStations = function (stations) {
  let goodStations = [];
  for (let station of stations) {
    const capacity = station[1];
    if (capacity >= 20) {
      const place = station[2];
      if (place === "school" || place === "community centre") {
        goodStations.push(station[0]);
      }
    }
  }
  return goodStations;
}
console.log(chooseStations(stations));

