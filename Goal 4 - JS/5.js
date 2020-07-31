
var houses = [
  {name: "Targaryen", motto: "Fire and Blood"},
  {name: "Stark",     motto: "Winter is Coming"},
  {name: "Bolton",    motto: "Our Blades Are Sharp"},
  {name: "Greyjoy",   motto: "We Do Not Sow"},
  {name: "Tully",     motto: "Family, Duty, Honor"},
  {name: "Arryn",     motto: "As High as Honor"},
  {name: "Lannister", motto: "Hear Me Roar!"},
  {name: "Tyrell",    motto: "Growing Strong"},
  {name: "Baratheon", motto: "Ours is the Fury"},
  {name: "Martell",   motto: "Unbowed, Unbent, Unbroken"}
]
/* 
//Without ES6 

function motto(name) {
  for (var i = 0; i < houses.length; i++) {
<<<<<<< HEAD
    let h = houses[i];
=======
    var h = houses[i];
>>>>>>> goal-3
    if (h.name === name) {
      return h.motto;
    }
  }
<<<<<<< HEAD
  return '';
}

console.log(motto('Stark'));
=======
  return "";
}

console.log(motto("Stark"));
>>>>>>> goal-3
*/

//ES6

function motto(name) {
  let house = houses.find(item => name === item.name);
  return house ? house.motto : '';
}

<<<<<<< HEAD
console.log(motto('Martell'));
=======
console.log(motto("Martell"));
>>>>>>> goal-3
