let users = [
  {
    id: 1,
    userName: "Aryan",
    password: "LonelyAryan",
  },
  {
    id: 2,
    userName: "Nobita",
    password: "Sizuka",
  },
  {
    id: 3,
    userName: "Sizuka",
    password: "Dekisuki",
  },
];

let inputUser = {
  userName: "Sizuka",
  password: "Abx@123",
};

let result = users.some((user) => user.userName === inputUser.userName);

if (!result) {
  console.log("User not found. I am sorry dear!!!");
} 
else {
  let user = users.find((user) => user.userName === inputUser.userName);

  if (user.password === inputUser.password) {
    console.log("Welcome to the home page Dear!!!");
  } 
  else {
    console.log("Incorrect Password, fix this!!!");
  }
}
