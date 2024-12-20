const Project = require('../models/projectModel');

exports.getProjects = async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 6;
  
    try {
      const totalProjects = await Project.countDocuments();
      const projects = await Project.find()
        .skip((page - 1) * limit)
        .limit(limit);
      
      res.json({ projects, totalProjects });
    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
  };
  

exports.getProjectById = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        if (!project) return res.status(404).json({ message: "Project not found" });
        res.status(200).json(project);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
