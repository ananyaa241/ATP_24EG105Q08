import jwt from "jsonwebtoken"
import { UserModel } from "../models1/UserModel.js"
import { compare } from "bcryptjs"

const { sign } = jwt

//User Authentication(login)
//submit credentials and get token

export async function userLogin(req, res, next) {

  try {

    const { email, password } = req.body

    //check if user exists
    const user = await UserModel.findOne({ email: email })

    if (!user) {
      return res.status(404).json({ message: "User not found" })
    }

    //compare password
    const isMatch = await compare(password, user.password)

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password" })
    }

    //create JWT token
    const token = sign(
      { email: user.email },
      process.env.SECRET_KEY,
      { expiresIn: "1h" }
    )

    //send token in cookie
    res.cookie("token", token, {
      httpOnly: true
    })

    res.status(200).json({
      message: "Login successful",
      token: token
    })

  } catch (err) {
    next(err)
  }

}