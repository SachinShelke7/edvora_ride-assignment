function getDistance(stations, userStation) {
  let distance,
    minDistance = 100000;
  for (let i = 0; i < stations.length; i++) {
    if (stations[i] > userStation) {
      distance = stations[i] - userStation;
      if (distance < minDistance) minDistance = distance;
    } else if (stations[i] === userStation) {
      minDistance = 0;
      break;
    }
  }
  return minDistance;
}
export default getDistance;
