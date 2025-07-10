import { User } from "../models/user.model.js";

/*
 * @function   : getAllUsers
 * @author     : varun-balbudhe
 * @description: Returns the All the Users; (All Types)
 */
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json({
      status: "success",
      results: users.length,
      users: users,
    });
  } catch (error) {
    next(error);
  }
};

/*
 * @function    : getUserByEmail
 * @author      : varun-balbudhe
 * @parameters  : email
 * @description : Returns the Users By the Email Id;
 */
export const getUserByEmail = async (req, res) => {
  const { email } = req.params;
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        status: "fail",
        message: "User not found",
      });
    }

    res.status(200).json({
      status: "success",
      user,
    });
  } catch (error) {
    res.status(501).json({
      message: "Get Users By Email Failed",
      status: "false",
      error,
    });
  }
};
