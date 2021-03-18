function howManyHundreds(num_mapleSyrup) {
  let num_containers = num_mapleSyrup/100 - (num_mapleSyrup%100)/100; 
  return num_containers
}


console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);