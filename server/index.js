const express = require("express");
const app = express();
app.use(express.json());
const grpc = require("grpc");
const jwt = require("jsonwebtoken");
const notesProto = grpc.load("../proto/notes.proto");
const notes = [
  { id: "1", title: "Note 1", content: "Content 1" },
  { id: "2", title: "Note 2", content: "Content 2" }
];

const user = [
  {
    id: "1",
    name: "ankit"
  }
];
const server = new grpc.Server();
server.addService(notesProto.NoteService.service, {
  list: (_, callback) => {
    callback(null, notes);
  },
  insert: (call, callback) => {
    let users = call.request;
    user.push(users);
    callback(null, user);
  },
  token: (call, callback) => {
    let users = call.request;
    const token = jwt.sign(users, "Secret");
    console.log(users);
    callback(null, token);
  }
});
server.bind("127.0.0.1:50051", grpc.ServerCredentials.createInsecure());
console.log("Server running at http://127.0.0.1:50051");
server.start();
const PORT = 8000;

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
