const express = require("express");

const server = express();

const projects = [];

server.use(express.json());

function checkIdExist(req, res, next) {
  if (!projects[req.params.id]) {
    return res.status(400).json({ error: "ID not found" });
  }
  return next();
}
var count = 0;
server.use((req, res, next) => {
  count++;
  console.log(count);
  return next();
});

server.post("/projects", (req, res) => {
  const { id, title } = req.body;
  projects.push({ id, title, tasks: [] });
  return res.json(projects);
});

server.get("/projects", (req, res) => {
  return res.json(projects);
});

server.put("/projects/:id", checkIdExist, (req, res) => {
  const { title } = req.body;
  const { id } = req.params;
  projects[id].title = title;
  return res.json(projects);
});

server.delete("/projects/:id", checkIdExist, (req, res) => {
  const { id } = req.params;
  projects.splice(id, 1);
  return res.json(projects);
});

server.post("/projects/:id/tasks", checkIdExist, (req, res) => {
  const { id } = req.params;
  const task = req.body.title;
  projects[id].tasks.push(task);
  return res.json(projects);
});

server.listen(3333);
