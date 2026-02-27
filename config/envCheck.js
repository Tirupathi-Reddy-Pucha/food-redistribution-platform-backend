const requiredEnv = ["MONGO_URI", "JWT_SECRET", "PORT"];

requiredEnv.forEach((key) => {
  if (!process.env[key]) {
    throw new Error(`Missing environment variable: ${key}`);
  }
});

export default true;