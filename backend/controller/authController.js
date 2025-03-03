import userModel from "../models/userModel.js";

//register controller
export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;

    if (!name || !email || !password || !phone || !address) {
      return res.send({
        success: false,
        message: "Please provide all fields",
      });
    }
    //check user
    const existingUser = await userModel.findOne({ email });
    //existing user
    if (existingUser) {
      return res.status(200).send({
        success: false,
        message: "User already existing",
      });
    }

    // //register user
    // const hashedPassword = await hashPassword(password);

    //save
    const user = await new userModel({
      name,
      email,
      phone,
      address,
      password,
    }).save();

    res.status(201).send({
      success: true,
      message: "User created successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Register unsuccessfull",
    });
  }
};

//login controller
export const loginController = async (req, res) => {
  try {
    //validation
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(500).send({
        success: false,
        message: "Please provide all fields",
      });
    }

    //check user
    const user = await userModel.findOne({ email: email, password: password });

    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).send({
      success: true,
      message: "Login successful",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Login unsuccessfull",
    });
  }
};
