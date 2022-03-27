const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.getAllPost = async (req, res, next) => {
  try {
    const response = await prisma.post.findMany({});
    res.send(response);
  } catch (error) {
    next(error);
  }
};

exports.createPost = async (req, res, next) => {
  try {
    const response = await prisma.post.create({
      data: req.body,
      include: {
        user: true,
      },
    });

    if (!response) throw error("something is wrong");
    res.send(response);
  } catch (error) {
    next(error);
  }
};

exports.updatePost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await prisma.post.update({
      where: {
        id: Number(id),
      },
      data: req.body,
    });
    if (!response) throw error(response);
    res.send(response);
  } catch (error) {
    next(error);
  }
};

exports.deletePost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await prisma.post.delete({
      where: {
        id: Number(id),
      },
    });
    if (!response) throw error(response);
    res.send("Post Delete Successfull");
  } catch (error) {
    next(error);
  }
};

exports.getSinglePost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await prisma.post.findUnique({
      where: {
        id: Number(id),
      },
    });
    res.send(response);
  } catch (error) {
    next(error);
  }
};
