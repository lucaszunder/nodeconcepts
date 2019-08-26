import Router from "express";
import ProjectController from "./app/controllers/ProjectController";
import TaskController from "./app/controllers/TaskController";
import countMiddleware from "./app/middleware/countMiddleware";
import projectMiddleware from "./app/middleware/projectMiddleware";

const routes = new Router();
routes.use(countMiddleware);

routes.post("/projects", ProjectController.store);

routes.get("/projects", ProjectController.show);

routes.use(projectMiddleware);

routes.put("/projects/:id", ProjectController.update);

routes.delete("/projects/:id", ProjectController.delete);

routes.post("/projects/:id/tasks", TaskController.store);

export default routes;
