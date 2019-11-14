const client = require("./client");
let getToken;
let newUser = {
  id: "3",
  name: "New user 3"
};
client.insert(newUser, (error, user) => {
  if (!error) {
    console.log("New user created successfully", user);
  } else {
    console.error(error);
  }
});
client.token(newUser, (error, user) => {
  if (!error) {
    getToken = user;
    console.log("New Note created successfully", user);
  } else {
    console.error(error, "eerror");
  }
});
