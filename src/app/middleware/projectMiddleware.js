import projects from "../../config/database";

export default async (req, res, next) => {
  console.log(req.params.id);
  if (!projects[req.params.id]) {
    return res.status(400).json({ error: "ID not found" });
  }
  return next();
};
var count = 0;
