export const successResponse = (res, data, message = "Success") => {
  res.json({
    success: true,
    message,
    data,
  });
};

export const errorResponse = (res, message = "Error", code = 500) => {
  res.status(code).json({
    success: false,
    message,
  });
};
