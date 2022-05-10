import React from "react"
import { Link } from "react-router-dom"


const LoginPage = () => {
return (
    <div className='flex justify-center p-20'>
      <div className="flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
        <div className="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
          Login To CSV Manager
        </div>

        <div className="flex items-center justify-center mt-6">
          <a href="#" target="_blank" className="inline-flex items-center text-xs font-thin text-center text-gray-500 hover:text-gray-700 dark:text-gray-100 dark:hover:text-white">
            <span className="ml-2">
              You don&#x27;t have an account? <Link to="/register">Register</Link>
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default LoginPage