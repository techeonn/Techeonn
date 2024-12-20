const Blog = require('../models/blogModel');

// Get all blogs
exports.getBlogs = async (req, res) => {
    const { page = 1, limit = 6 } = req.query; // Default page is 1 and limit is 6
    const skip = (page - 1) * limit; // Calculate how many blogs to skip
  
    try {
      const blogs = await Blog.find()
        .skip(skip)
        .limit(limit)
        .sort({ createdAt: -1 }); // Sort by newest blogs first
  
      const totalBlogs = await Blog.countDocuments(); // Get total number of blogs
  
      res.json({
        blogs,
        currentPage: Number(page),
        totalPages: Math.ceil(totalBlogs / limit), // Calculate total pages
      });
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch blogs', error });
    }
  };

// Get a single blog by ID
exports.getBlogById = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);

        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }

        res.status(200).json(blog);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new blog
exports.createBlog = async (req, res) => {
    try {
        const { title, content, tags } = req.body;

        if (!title || !content) {
            return res.status(400).json({ message: "Title and content are required" });
        }

        const blog = new Blog({
            title,
            content,
            tags,
        });

        await blog.save();
        res.status(201).json(blog);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update an existing blog
exports.updateBlog = async (req, res) => {
    try {
        const { title, content, tags } = req.body;

        const blog = await Blog.findById(req.params.id);

        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }

        blog.title = title || blog.title;
        blog.content = content || blog.content;
        blog.tags = tags || blog.tags;

        await blog.save();
        res.status(200).json(blog);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a blog
exports.deleteBlog = async (req, res) => {
    try {
        const blog = await Blog.findByIdAndDelete(req.params.id);

        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }

        res.status(200).json({ message: "Blog deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
