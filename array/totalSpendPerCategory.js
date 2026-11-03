function totalSpendCategory(arr){
    return arr.reduce((acc,item) => {
        const key = item.category;

        if(!acc[key]){
            acc[key] = 0;
        }
        acc[key] += item.amount;

        return acc;
    },{})
}

const transactions = [
  { id: 1, category: "Food", amount: 250 },
  { id: 2, category: "Travel", amount: 1200 },
  { id: 3, category: "Shopping", amount: 1500 },
  { id: 4, category: "Food", amount: 450 },
  { id: 5, category: "Travel", amount: 800 },
  { id: 6, category: "Entertainment", amount: 600 },
  { id: 7, category: "Shopping", amount: 700 },
  { id: 8, category: "Food", amount: 300 },
  { id: 9, category: "Entertainment", amount: 400 },
  { id: 10, category: "Travel", amount: 500 },
];

console.log("=== calculate total spend per category from an array of transactions", totalSpendCategory(transactions));