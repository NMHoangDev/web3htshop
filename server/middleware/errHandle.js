import { StatusCodes } from "http-status-codes";
const errHandler = (err, req, res, next) => {
  const defaultError = {
    statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || "Something went wrong, try again later",
  };
  if (err.name === "ValidationError") {
    defaultError.msg = Object.values(err.errors)
      .map((item) => item.message)
      .join(", ");
    defaultError.statusCode = StatusCodes.BAD_REQUEST;
  }
  if (err.code && err.code == 11000) {
    defaultError.statusCode = StatusCodes.BAD_REQUEST;
    defaultError.msg = `${Object.values(err.keyValue)} đã được sử dụng`;
  }
  res.status(defaultError.statusCode).json({ msg: defaultError.msg });
};
export default errHandler;
