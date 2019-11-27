const mainArray = [[]]; //initialize main array to store items
const itemList = [
  //representation of item list
  {
    key: "key", //key - use to hash
    name: "item1" //name - item name which will be stored in array
  },
  {
    key: "key",
    name: "duplicate"
  },
  {
    key: "kye",
    name: "item2"
  },
  {
    key: "something",
    name: "item3"
  },
  {
    key: "somtehing",
    name: "item4"
  },
  {
    key: "crazy",
    name: "item5"
  },
  {
    key: "aligator",
    name: "item6"
  }
];

console.log(mainArray);

function hashFunction(itemToHash) {
  //hash functin
  let hash = 0;
  let char = 0;
  for (i = 0; i < itemToHash.length; i++) {
    char = itemToHash.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash % 10;
  }
  return hash;
}

for (i = 0; i < 10; i++) {
  // loop to push empty arrays into array
  mainArray.push([]);
}

function addItemToArray(keyToHash, itemToPut) {
  //function to add items to array
  const indexAt = hashFunction(keyToHash); //assigning item index using hash function
  mainArray[indexAt].push({ key: keyToHash, name: itemToPut }); //pushing object into array at assigned line above index
}

function findItemInArray(keyToFindItem, nameToFindItem) {
  //function to find item in array
  const indexAt = hashFunction(keyToFindItem); //assigning item index using hash function
  let iFoundHim = ""; //variable to store item
  mainArray[indexAt].find(item => {
    //loop to find item which have wanted key and name
    if (item.key === keyToFindItem && item.name === nameToFindItem) {
      iFoundHim = item.name;
    }
  });
  if (iFoundHim.length > 0) {
    return iFoundHim;
  } else {
    return "There is no item like this";
  }
}

function deleteItemFromArray(keyItemToDelete, itemNameToDelete) {
  //function to delete item in array
  const indexAt = hashFunction(keyItemToDelete); //assigning item index using hash function
  const indexOfElement = mainArray[indexAt].findIndex(
    //find index of element which have wanted key and name
    item => item.key === keyItemToDelete && item.name === itemNameToDelete
  );
  if (indexOfElement !== -1) {
    mainArray[indexAt].splice(indexOfElement, 1); //deleting item from array
  } else {
    console.log("There is no item like this");
  }
}

itemList.map(item => addItemToArray(item.key, item.name)); //adding items into array

console.log(findItemInArray("kye", "item2")); //finding item in array

console.log("");

console.log(findItemInArray("key", "item2")); //some incorrect example

console.log("");

deleteItemFromArray("key", "duplicate"); //deleting item from array
deleteItemFromArray("kezy", "duplicate"); //incorrect deleting item from array
