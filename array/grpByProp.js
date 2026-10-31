function grpBy(obj){
    return obj.reduce((acc,user) => {
        const key = user.department;
        if(!acc[key]){
            acc[key] = [];
        }

        acc[key].push(user);
        return acc;
    },{});
}

const users = [
  { id: 1, name: "John", department: "IT" },
  { id: 2, name: "Alice", department: "HR" },
  { id: 3, name: "Bob", department: "IT" },
  { id: 4, name: "Emma", department: "Finance" },
  { id: 5, name: "Mike", department: "HR" }
];
console.log("Group by property/value", grpBy(users));
