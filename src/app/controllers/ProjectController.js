import projects from "../../config/database";

class ProjectController {
  async show(req, res) {
    return res.json(projects);
  }
  async store(req, res) {
    const { id, title } = req.body;
    projects.push({ id, title, tasks: [] });
    return res.json(projects);
  }
  async update(req, res) {
    const { title } = req.body;
    const { id } = req.params;
    projects[id].title = title;
    return res.json(projects);
  }
  async delete(req, res) {
    const { id } = req.params;
    projects.splice(id, 1);
    return res.json(projects);
  }
}
export default new ProjectController();
