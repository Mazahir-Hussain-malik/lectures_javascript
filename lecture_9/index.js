// today we compelete the Expanse

// string methods in javascript
// 1 - string.lenght
// 2 -string.upperCase()
// 3 -string.lowerCase()
// 4 - string.charAt(index)
// 5 - string.indexOf('value')
// 6 - string.subString(start , end)
// 7 - string.trim();
// 8 - string.replace(searchItem , replaceItem);
// 9 - string.includes("value");
// 10 - string.spilit(" ")

let Expnase = [];
console.log(Expnase);
const addExpanse = ({ id, name, rate }) => {
  return Expnase.push({ id, name, rate });
};

addExpanse({ id: 1, name: "apple", rate: 20 });
addExpanse({ id: 2, name: "banana", rate: 30 });
addExpanse({ id: 3, name: "pine apple", rate: 40 });
addExpanse({ id: 4, name: "grapes", rate: 50 });
console.log(Expnase);
const deleteExpanse = (id) => {
  Expnase = Expnase.filter((items) => {
    return items.id !== id;
  });

  return Expnase;
};

deleteExpanse(1);
console.log(Expnase);

const editExpanse = (id, updatedItems) => {
  Expnase.forEach((items) => {
    if (items.id == id) {
      items.name = updatedItems.name;
      items.rate = updatedItems.rate;
    }
  });
};

editExpanse(2, {
  name: "orange",
  rate: 60,
});

console.log(Expnase);

const data = () => {
  Expnase.map((items) => {
    console.log(items.name);
    console.log(items.rate);
  });
};
data();
