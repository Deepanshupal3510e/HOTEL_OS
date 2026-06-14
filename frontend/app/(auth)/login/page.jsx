import React from 'react'
import LoginForm from './LoginFrom'

const Login = () => {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
  
  {/* Left Side */}
  <div className="hidden lg:flex flex-col justify-center px-20 bg-[#1B3B5D]">
    <h1 className="text-6xl font-bold text-white">
      HotelOS
    </h1>

    <p className="text-white/80 text-xl mt-6">
      Manage reservations, guests, rooms and revenue
      from a single platform.
    </p>
  </div>

  {/* Right Side */}
  <div className="flex items-center justify-center bg-[#FAFAFA]">
    <div className="w-full max-w-md">
      <LoginForm />
    </div>
  </div>

</div>
  )
}

export default Login