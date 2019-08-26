import projects from "../../config/database";

class TaskController {
  async store(req, res) {
    const { id } = req.params;
    const task = req.body.title;
    projects[id].tasks.push(task);
    return res.json(projects);
  }
}

export default new TaskController();
