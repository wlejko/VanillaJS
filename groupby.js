const mainArray = [
  //initialize main array of elements
  {
    name: "Adam",
    age: 1,
    lastName: "Anderson"
  },
  {
    name: "Drake",
    age: 2,
    lastName: "Bongard"
  },
  {
    name: "Adam",
    age: 3,
    lastName: "Bateman"
  },
  {
    name: "Carl",
    age: 4,
    lastName: "Ashwoon"
  },
  {
    name: "Carl",
    age: 5,
    lastName: "Bongard"
  },
  {
    name: "Drake",
    age: 2,
    lastName: "Bowers"
  },
  {
    name: "Carel",
    age: 3,
    lastName: "Cast"
  }
];

//giving information to know by which property should be grouped
function groupBy(keyToGroupItems) {
  const groupedArray = mainArray.reduce((firstObject, secondObject) => {
    firstObject[secondObject[keyToGroupItems]] = [
      ...(firstObject[secondObject[keyToGroupItems]] || []),
      secondObject
    ];
    return firstObject;
  });
  return groupedArray;
}

const result = groupBy("age");
console.log(result);
