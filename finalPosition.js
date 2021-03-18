const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

function finalPosition(moves) {
  let coord = [0,0];
  for (const move of moves) {
    if (move === 'north') {
      coord[1] += 1;
    }
    else if (move === 'south') {
      coord[1] -= 1;
    }
    else if (move === 'east') {
      coord[0] += 1;
    }
    else if (move === 'west') {
      coord[0] -= 1;
    }
  }
  return coord;
}

console.log(finalPosition(moves));
