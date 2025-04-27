import bcrypt from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import User from "../models/user.model.js";

export const test = (req, res) => {
  res.json({ message: "API is working" });
};

export const updateUser = async (req, res, next) => {
  if (req.user.id !== req.params.userId) {
    return next(errorHandler(403, "You are not allowed to update this user!"));
  }

  if (req.body.password) {
    if (req.body.password.length < 6) {
      return next(
        errorHandler(400, "Password should be at least 6 characters long!")
      );
    }
    req.body.password = await bcrypt.hash(req.body.password, 10);
  }

  if (req.body.username) {
    if (req.body.username.length < 3 || req.body.username.length > 20) {
      return next(
        errorHandler(400, "Username must be between 3 and 20 characters!")
      );
    }
    if (req.body.username.includes(" ")) {
      return next(errorHandler(400, "Username should not contain spaces!"));
    }
    if (req.body.username !== req.body.username.toLowerCase()) {
      return next(errorHandler(400, "Username should be in lowercase!"));
    }
    if (!/^[a-zA-Z0-9]+$/.test(req.body.username)) {
      return next(
        errorHandler(400, "Username should not contain special characters!")
      );
    }
  }

  try {
    const updateUser = await User.findByIdAndUpdate(
      req.params.userId,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          profilePicture: req.body.profilePicture,
        },
      },
      { new: true }
    );

    const { password, ...rest } = updateUser._doc;
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  if (req.user.id !== req.params.userId) {
    return next(errorHandler(403, "You are not allowed to delete this user!"));
  }

  try {
    await User.findByIdAndDelete(req.params.userId);
    res.status(200).json("User has been deleted!");
  } catch (error) {
    next(error);
  }
};

export const signout = (req, res, next) => {
  try {
    res
      .clearCookie("acess_token")
      .status(200)
      .json("User has been signed out!");
  } catch (error) {
    next(error);
  }
};
