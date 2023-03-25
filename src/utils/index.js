function generateNumberInRange(min = 0, max = 1) {
  //Validation
  return min + Math.random() * (max - min);
}

function generateNewOrder() {
  return {
    id: Date.now().toString(),
    price: generateNumberInRange(37000, 38000),
    size: generateNumberInRange(0, 2)
  };
}

export { generateNewOrder };
