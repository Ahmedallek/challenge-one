let randomizer = math.round(math.random() * 3);
let fate;
switch (randomizer) {
  case 0:
    fate = "A certain victory";
    break;
  case 1:
    fate = "Not so certain victory";
    fate = "An uneasy victory";
    break;
  case 2:
    fate = "Not so certain victory";
  default:
    fate = "Your fate is unclear, ô chosen undead";
}

console.log(fate);

