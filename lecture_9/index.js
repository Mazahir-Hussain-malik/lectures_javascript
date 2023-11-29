// today we compelete the Expanse

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

const serarchItem = (Search) => {
  let search = Expnase.filter((items) => {
    return items.name === Search || items.rate === Search;
  });
  return search;
};

console.log(serarchItem("orange"));
console.log(serarchItem(50));

const totalExpanse = () => {
  let sum = 0;
  Expnase.forEach((items) => {
    sum += items.rate; // 0 + 60 = 60 + 40 = 100 + 50 = 150
  });

  return sum;
};

console.log(`the sum of total expanse is  : `, totalExpanse());

//print array values
const data = () => {
  Expnase.map((items) => {
    console.log(items.name);
    console.log(items.rate);
  });
};
data();
