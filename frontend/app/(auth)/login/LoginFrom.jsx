"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  TextField,
  Checkbox,
  FormControlLabel,
  InputAdornment,
  IconButton,
} from "@mui/material";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
} from "lucide-react";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const textFieldStyles = {
    "& .MuiOutlinedInput-root": {
      borderRadius: "6px",

      "&.Mui-focused fieldset": {
        borderColor: "#1B3B5D",
      },

      "&:hover fieldset": {
        borderColor: "#1B3B5D",
      },
    },

    "& .MuiInputLabel-root.Mui-focused": {
      color: "#1B3B5D",
    },
  };

  return (
    <div className="card border border-color p-8 md:p-10 max-w-md w-full mx-auto">

      {/* Header */}
      <div className="mb-8">
        <p className="secondary-text text-sm font-semibold uppercase tracking-[0.2em]">
          Welcome Back
        </p>

        <h1 className="primary-text text-3xl font-bold mt-2">
          Sign In to HotelOS
        </h1>

        <p className="body-text mt-2">
          Manage reservations, guests, rooms and hotel operations from one place.
        </p>
      </div>

      {/* Form */}
      <form className="space-y-5 flex gap-3 flex-col">

        {/* Email */}
        <TextField
          fullWidth
          label="Email Address"
          type="email"
          variant="outlined"
          sx={textFieldStyles}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Mail size={18} />
              </InputAdornment>
            ),
          }}
        />

        {/* Password */}
        <TextField
          fullWidth
          label="Password"
          type={showPassword ? "text" : "password"}
          variant="outlined"
          sx={textFieldStyles}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Lock size={18} />
              </InputAdornment>
            ),

            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  edge="end"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        {/* Remember Me */}
        <div className="flex items-center justify-between">

          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  color: "#C5A059",

                  "&.Mui-checked": {
                    color: "#C5A059",
                  },
                }}
              />
            }
            label="Remember me"
          />

          <Link
            href="/forgot-password"
            className="secondary-text text-sm font-medium hover:underline"
          >
            Forgot Password?
          </Link>

        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full h-12 rounded-xl primary-button font-semibold transition-all duration-300 hover:scale-[1.01]"
        >
          Sign In
        </button>

        {/* Divider */}
        <div className="flex items-center gap-4">

          <div className="flex-1 h-px bg-gray-200" />

          <span className="muted-text text-sm">
            OR
          </span>

          <div className="flex-1 h-px bg-gray-200" />

        </div>

        {/* Google Login */}
        {/* <button
          type="button"
          className="w-full h-12 rounded-xl border border-gray-200 bg-white flex items-center justify-center gap-3 font-medium hover:bg-gray-50 transition-all"
        >
          <FcGoogle size={20} />
          Continue with Google
        </button> */}

        {/* Register */}
        <div className="text-center pt-2">

          <span className="body-text">
            Don't have an account?{" "}
          </span>

          <Link
            href="/register"
            className="secondary-text font-semibold hover:underline"
          >
            Create Account
          </Link>

        </div>

      </form>
    </div>
  );
};

export default LoginForm;