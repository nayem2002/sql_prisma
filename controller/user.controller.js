const { PrismaClient, Prisma } = require("@prisma/client");

const prisma = new PrismaClient();

exports.getAllUser = async (req, res, next) => {
  try {
    const user = await prisma.user.findMany({});
    res.send(user);
  } catch (error) {
    next(error);
  }
};

exports.createUser = async (req, res, next) => {
  try {
    const user = await prisma.user.create({
      data: req.body,
    });
    res.send(user);
  } catch (error) {
    next(error);
  }
};

exports.getSingleUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await prisma.user.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!user) throw new Error("user canno't find");
    res.send(user);
  } catch (error) {
    next(error);
  }
};

exports.updateSingleUser = async (req, res, next) => {
  try {
    const { email, name } = req.body;
    if (!email || !name) return next();
    const { id } = req.params;
    const user = await prisma.user.update({
      where: {
        id: Number(id),
      },
      data: {
        name,
        email,
      },
    });

    if (!user) throw error("Something is wrong");
    res.send(user);
  } catch (error) {
    next(error);
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await prisma.user.delete({
      where: {
        id: Number(id),
      },
    });
    if (!user) throw error("user can't find");
    res.send({ message: "User Delete Successfully" });
  } catch (error) {
    next(error);
  }
};
