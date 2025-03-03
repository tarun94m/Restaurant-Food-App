import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `Connected to database ${mongoose.connection.host}`.bgBlue.white
    );
  } catch (error) {
    console.log("error", error.bgRed.white);
  }
};

export default connectDB;
