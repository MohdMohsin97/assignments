/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  const arr = [];
  const obj = {};
  transactions.forEach((trans) => {
    if (!obj[trans.category]) obj[trans.category] = trans.price;
    else obj[trans.category] += trans.price;
  });

  Object.entries(obj).forEach( ([k,v]) => {
    arr.push({category: k, totalSpent: v});
  })



  return arr;
}

module.exports = calculateTotalSpentByCategory;
