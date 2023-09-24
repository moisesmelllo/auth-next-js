'use client'
import Link from "next/link"
import { useRouter } from "next/navigation";
import { Axios } from "axios";
import { useState } from "react";



export default function SignupPage() {
  const [user, setUser] = useState({
    email: '',
    password: '',
    username: '',
  })

  const onSignup = async () => {

  }

  return (
    <div className="h-screen flex flex-col items-center">
      <h1 className="text-center p-2 text-2xl text-black font-bold mb-2 ">SIGN UP</h1>
        <div className="h-screen w-80 flex flex-col justify-center">
          <label className="text-center" htmlFor="username">username </label>
          <input
            className="p-2 mb-2 border border-gray-300 rounded-lg focus:outline-none
            focus:border-gray-600 text-center "
            type="text"
            id="username"
            value={user.username}
            onChange={(e) => setUser({...user, username: e.target.value})}
            placeholder="username"
          />
          <label className="text-center" htmlFor="username">email </label>
          <input
            className="p-2 mb-2 border border-gray-300 rounded-lg focus:outline-none
             focus:border-gray-600 text-center"
            type="text"
            id="email"
            value={user.email}
            onChange={(e) => setUser({...user, email: e.target.value})}
            placeholder="email"
          />
          <label className="text-center" htmlFor="username">password </label>
          <input
            className="p-2 mb-2 border border-gray-300 rounded-lg focus:outline-none
             focus:border-gray-600 text-center"
            type="text"
            id="password"
            value={user.password}
            onChange={(e) => setUser({...user, password: e.target.value})}
            placeholder="pasword"
          />
            
                <button onClick={onSignup} className="w-full p-2  bg-blue-400 text-white rounded-lg mt-4 mb-4 text-center">
          Signup
                </button>
              
              <Link
              className="bg-black w-full rounded-lg
              p-2 text-center text-white"
                href='/login'
              >Visit login page</Link>
        </div>
  </div>
  )
}