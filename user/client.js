const express = require("express");

const app = express();

app.use(express.json());

const grpc = require("grpc");

const PROTO_PATH = "../proto/notes.proto";
const NoteService = grpc.load(PROTO_PATH).NoteService;
const client = new NoteService(
  "localhost:50051",
  grpc.credentials.createInsecure()
);
const PORT = 8002;

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));

module.exports = client;
