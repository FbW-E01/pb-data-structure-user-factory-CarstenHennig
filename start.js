// # User Factory!

// Look inside start.js - you will find a large array of data. This data describes users. Your job, should you choose to accept it, is to create
//a function (or functions) that covert this kind of data to user objects!

// Each user should contain the following properties; `id`, `fullName`, `initials`, `birthYear` and `departments`.
// The `deparments` property should contain an array of strings.
// If some of the information is not available, its corresponding property should have the value "Unknown".

// We need each user object to be stored in an array of users objects.
// Once you have ran your function (or functions), log the resulting array into your workstation terminal
// where a highly trained monkey will examine it for further processing.
// Perhaps even the very same monkey writing out these instructions.

// *bonus* We also need another, more different, function that gives us a list of all the departments found in the data dump, in alphabetical order.

// - 🐒

const userDataDump = [
  "1,Joel Peltonen,1921,Users|Admin|Sudo",
  "2,Joeltest Peltonentest,1921,Users",
  "3,Joeltest Peltonentest,,Users",
  "4,Leoj Nenotlep,,Users|Admin",
  "5,root,,Sudo|System",
  "6,Ryukahr,1901,Users|Admin",
  "7,Adamantium Claws,1332,Users",
  "8,The benevolent malevolence,,Users",
  "9,Jim Carrey,1961,Users|Admin",
  "A,Bela Lugosi,1666,Users",
  "B,Robert Smith,,Users|Admin|Sudo",
  "C,Fsh,,Users",
  "D,Racher Carson,,Users",
  "D,Cheesedude51,1951,Users",
  "E,cron,,System",
];

function objectsOutOfDataDump(data) {
  let loopData = data.split(",");
  console.log(loopData);

  for (var i = 0; i < loopData.length; i++) {
    if (!loopData[i]) {
      loopData[i] = "unknown";
    }
    if (i === loopData.length - 1) {
      const individualData = loopData[loopData.length - 1].split(" | ");
      loopData[loopData.length - 1] = individualData;
    }
  }

  return {
    id: loopData[0],
    fullName: loopData[1],
    birthYear: loopData[2],
    departments: loopData[3],
  };
}
function userFactory(x) {
  const emptyArray = [];
  for (var i = 0; i < x.length; i++) {
    emptyArray.push(objectsOutOfDataDump(x[i]));
  }
  return emptyArray;
}

console.log(userFactory(userDataDump));

// edabit Volume of a box
function volumeOfBox(width, length, height) {
  return width * length * height;
}

console.log(volumeOfBox(2, 5, 1));
console.log(volumeOfBox(4, 2, 2));
console.log(volumeOfBox(2, 3, 5));

// Edabit Extract city facts
function cityFacts(name, population, continent) {
  return `${name} has a population of ${population} and is situated in ${continent}.`;
}

console.log(cityFacts("Paris", 2140526, "Europe"));
console.log(cityFacts("Tokyo", 13929286, "Asia"));

// Edabit has key

hasKeyOne = {
  a: 44,
  b: 45,
  c: 46,
};

function hasKey1(object, key) {
  const value = object[key];
  if (value) {
    console.log("d found");
    return true;
  } else {
    console.log("d not found");
    return false;
  }
}
hasKey1(hasKeyOne, "d");

// console.log(Object.keys(hasKeyOne));

if ("d" in hasKeyOne) {
  console.log("d found");
} else {
  console.log("No 'd'");
}

hasKeyTwo = {
  craves: true,
  midnight: true,
  snack: true,
};

console.log(Object.keys(hasKeyTwo));
if ("morning" in hasKeyTwo) {
  console.log("true");
} else {
  console.log("No 'morning'");
}

hasKeyThree = {
  pot: 1,
  tot: 2,
  not: 3,
};

console.log(Object.keys(hasKeyThree));
if ("not" in hasKeyThree) {
  console.log("true");
} else {
  console.log("false");
}

// Edabit Calculate profit

profitOne = {
  costPrice: 2.77,
  sellPrice: 7.95,
  inventory: 8500,
};

function isProfitOne() {
  const totalCost = profitOne.costPrice * profitOne.inventory;
  const totalSales = profitOne.sellPrice * profitOne.inventory;
  const profit1 = totalSales - totalCost;
  console.log(profit1);
}
isProfitOne(profitOne);

// Edabit Planetary Weight Converter

const planetsOfSolarSystem = [
  // { planetName: "Mercury", planetGravitational: 3.7 },
  // { planetName: "Venus", planetGravitational: 8.87 },
  // { planetName: "Earth", planetGravitational: 9.81 },
  // { planetName: "Mars", planetGravitational: 3.711 },
  // { planetName: "Jupiter", planetGravitational: 24.79 },
  // { planetName: "Saturn", planetGravitational: 10.44 },
  // { planetName: "Uranus", planetGravitational: 8.69 },
  // { planetName: "Neptune", planetGravitational: 11.15 },
  3.7,
  8.87,
  9.81,
  3.711,
  24.79,
  10.44,
  8.69,
  11.15,
];

// for (var i = 0; i < planetsOfSolarSystem; i++) {
//   function planetWeightConverter(kg) {
//     const myPlanet = "Earth";
//     const myPlanetGravitational = 9.807;
//     const gravConverted =
//       Math.ceil(
//         (kg / myPlanetGravitational) *
//           planetsOfSolarSystem.planetGravitational *
//           100
//       ) / 100;
//     console.log(gravConverted);
//   }
//   planetWeightConverter(1);
// }

// console.log(Math.ceil((1 / 9.807) * 3.711 * 100) / 100);

function spaceWeights(PlanetA, kg, PlanetB, mS) {
  const gravitationalForce = Math.ceil((kg / 9.807) * mS * 100) / 100;
  console.log(
    `Weight of ${kg} kg on ${PlanetA} is ${gravitationalForce} kg on ${PlanetB}.`
  );
}

spaceWeights("Earth", 1, "Mars", 3.711);

// Edabit International greetings

const guestList = [
  { name: "Randy", country: "Germany" },
  { name: "Karla", country: "France" },
  { name: "Wendy", country: "Japan" },
  { name: "Norman", country: "England" },
  { name: "Sam", country: "Argentina" },
];

for (var i = 0; i < guestList.length; i++) {
  console.log(
    `Hi! I\`m ${guestList[i].name}, and I\'m from ${guestList[i].country}.`
  );
}
