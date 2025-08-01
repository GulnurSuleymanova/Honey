import React from 'react';
import honey from '../../assets/honey2.webp';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col md:flex-row shadow-lg rounded-2xl overflow-hidden max-w-4xl w-full bg-yellow-50">
                <div className="w-full md:w-1/2 flex items-center justify-center p-8">
          <div className="w-full max-w-sm">
            <h2 className="text-3xl font-semibold text-center text-yellow-800 mb-6">Login</h2>
            <form className="space-y-5">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-yellow-400 focus:border-yellow-400"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-yellow-400 focus:border-yellow-400"
                  placeholder="••••••••"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-600 text-white py-2 rounded-lg hover:bg-yellow-700 transition font-medium tracking-wide"
              >
                Login
              </button>
            </form>
          </div>
        </div>
        <div className="md:w-1/2 hidden md:block">
          <img src={honey} alt="Login Visual" className="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Login;
