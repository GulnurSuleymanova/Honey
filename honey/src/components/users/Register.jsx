import React, { useState } from 'react';
import honey from '../../assets/honey2.webp';
import { useRegisterMutation } from '../../store/shopApi';
import { toast } from 'react-toastify';
import { Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [register, { isLoading }] = useRegisterMutation();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error('Şifrələr uyğun gəlmir');
      return;
    }

    try {
      const user = await register({ name, email, password }).unwrap();

      localStorage.setItem('user', JSON.stringify(user.user));
      localStorage.setItem('token', user?.token);

      toast.success('Uğurla qeydiyyatdan keçdiniz');
      navigate('/login'); // qeydiyyatdan sonra login-ə yönləndiririk
    } catch (error) {
      console.log('Register error:', error);

      const errMessage = Array.isArray(error?.data?.message)
        ? error.data.message.join(', ')
        : error?.data?.message || "Qeydiyyat zamanı xəta baş verdi";

      toast.error(errMessage);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col md:flex-row shadow-lg rounded-2xl overflow-hidden max-w-4xl w-full bg-yellow-50">
        {/* Form */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-8">
          <div className="w-full max-w-sm">
            <h2 className="text-3xl font-semibold text-center text-yellow-800 mb-6">Register</h2>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-yellow-400 focus:border-yellow-400"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-yellow-400 focus:border-yellow-400"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-yellow-400 focus:border-yellow-400"
                  placeholder="••••••••"
                  required
                />
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-yellow-400 focus:border-yellow-400"
                  placeholder="••••••••"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-yellow-600 text-white py-2 rounded-lg hover:bg-yellow-700 transition font-medium tracking-wide flex justify-center items-center"
              >
                {isLoading ? <Loader2 className="animate-spin w-5 h-5" /> : 'Register'}
              </button>
            </form>
          </div>
        </div>

        {/* Image */}
        <div className="md:w-1/2 hidden md:block">
          <img src={honey} alt="Register Visual" className="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Register;
