import BadRequest from "../erorr/bad-request.js";
import UnAuthorized from "../erorr/unAuthorized.js";
import User from "../model/User.js";
import { StatusCodes } from "http-status-codes";
import nodemailer from "nodemailer";

const register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      throw new BadRequest("Vui lòng nhập đầy đủ thông tin");
    }
    const user = await User.create({ name, email, password });
    user.save();
    console.log(user.name);
    const token = user.createJWT();
    res.status(StatusCodes.OK).json({ user, token });
  } catch (err) {
    next(err);
  }
};
const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email });

    if (!user) {
      throw new UnAuthorized(`User does not exist`);
    }
    const isCorrect = await user.comparePassword(password);

    if (!isCorrect) {
      throw new UnAuthorized(`Password is incorrect`);
    }
    const token = await user.createJWT();
    res.status(200).json({
      user,
      token,
    });
  } catch (error) {
    next(error);
  }
};
const sendEmail = async (req, res, next) => {
  const { email, subject, text } = req.body;

  // Tạo transporter với thông tin tài khoản Gmail
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "lenhuquynh18432@gmail.com",
      pass: "LNQ120303",
    },
  });

  // Tạo thông tin email
  let mailOptions = {
    from: "lenhuquynh18432@gmail.com",
    to: email,
    subject: subject,
    text: text,
  };

  // Gửi email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ error: error.toString() });
    }
    res.status(200).json({ message: "Email sent: " + info.response });
  });
};

export { register, login, sendEmail };
