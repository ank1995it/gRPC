const client = require("./client");
// const client11 = require("./new-user");
client.list({}, (error, notes) => {
  if (!error) {
    console.log("successfully fetch List notes");
    // console.log("we got the token", client11);
    console.log(notes);
  } else {
    console.error(error);
  }
});
