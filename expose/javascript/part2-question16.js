let statistics = {
  redCars: 21,
  blueCars: 45,
  greenCars: 12,
  raceCars: 5,
  blackCars: 40,
  rareCars: 2
};

for (const [k, v] of Object.entries(statistics)) {
  if (k.startsWith('r') || v % 2 === 1) { 
    console.log(v);
  }
}