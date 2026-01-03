import User from "../models/User.model.js";
import { generateToken } from "../utils/jwt.js";

export const oauthLogin = async (req, res) => {
  try {
    const { name, email, avatar, provider, providerId } = req.body;

    if (!email || !provider || !providerId) {
      return res.status(400).json({
        success: false,
        message: "Missing required OAuth data",
      });
    }

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({
        name,
        email,
        avatar,
        provider,
        providerId,
      });
    }

    const token = generateToken(user._id);

    res.cookie("accessToken", token, {
      httpOnly: true,
      secure: false, // true in prod
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
      success: true,
      message: "Login successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        avatar: user.avatar,
        role: user.role,
      },
    });
  } catch (err) {
    console.error("Auth error:", err);
    res.status(500).json({
      success: false,
      message: "Authentication failed",
    });
  }
};
