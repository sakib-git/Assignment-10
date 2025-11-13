import React, { useContext, useRef, useState } from 'react';
import { ArrowRight, Eye, EyeOff, UserPlus } from 'lucide-react';
import { Link, Navigate, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { GoogleAuthProvider, sendPasswordResetEmail, signInWithPopup } from 'firebase/auth';
import { auth } from '../FireBase/Firebase.config';

const Login = () => {
  const Googleprovider = new GoogleAuthProvider();
  const { signIn, setUser } = useContext(AuthContext);
  const [showpassword, setShowpassword] = useState(false);
  const navigate = useNavigate();
  const emailRef = useRef(null);

  const handlelogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signIn(email, password).then((result) => {
      setUser(result.user);
      navigate('/');
    });
  };
  const handleGoogleLogin = () => {
    signInWithPopup(auth, Googleprovider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate('/');
      })
      .catch((error) => {
        console.error('Error:', error.message);
      });
  };
  const handleRestPassword = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;

    if (!email) {
      alert('Please enter your email first!');
      return;
    }
    sendPasswordResetEmail(auth, email).then(() => {
      alert('Check your email to reset password!');
      setTimeout(() => {
        window.open('https://mail.google.com', '_blank');
      }, 1500);
    });
  };

  return (
    <div className="max-w-[1440px] mx-auto mt-20">
      <title>login</title>
      <div className="flex max-w-[800px] mx-auto max-md:flex-col max-md:px-5">
        <div className="flex-1 shadow-2xl p-10 text-center rounded-bl-md rounded-tl-md max-md:rounded-none  w-full">
          <form onSubmit={handlelogin} className="flex flex-col gap-6 mx-auto max-w-md ">
            <h2 className="text-5xl font-extrabold bg-gradient-to-r from-orange-400 to-rose-500 text-transparent bg-clip-text">LOG IN</h2>
            <input type="email" ref={emailRef} placeholder="Email" name="email"   className="input w-full "  />

            <div>
              <div className="relative ">
                <input type={showpassword ? 'text' : 'password'} name="password" className="input w-full  " placeholder="Password" />
                <span onClick={() => setShowpassword(!showpassword)} className="absolute right-7 top-2">
                  {showpassword ? <Eye width={18} /> : <EyeOff width={18} />}
                </span>
              </div>
              
              <div onClick={handleRestPassword}>
                <p className="text-start cursor-pointer  hover:underline ">Forgot password?</p>
              </div>
            </div>
            <div className="flex gap-2 flex-col">
              <button className="bg-[#de513d] p-2 text-white font-bold w-full  rounded-md">LOG IN</button>
              <div className="flex items-center gap-4 w-full max-w-sm mx-auto">
                <p className="flex-1 border-t border-gray-300"></p>
                <p className="text-gray-500 font-medium">or</p>
                <p className="flex-1 border-t border-gray-300"></p>
              </div>

              <button type="submit" onClick={handleGoogleLogin} className="btn bg-white text-black border-[#e5e5e5] w-full">
                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
                    <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
                    <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
                    <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
                  </g>
                </svg>
                Login with Google
              </button>
            </div>
          </form>
        </div>
        <div className="flex-1  bg-gradient-to-r to-[#e2851d] from-[#de513d] text-center p-10 text-white flex flex-col justify-center gap-5 rounded-br-md rounded-tr-md max-md:rounded-none">
          <div className="mx-auto">
            {' '}
            <UserPlus size={60} />{' '}
          </div>
          <h1 className="text-4xl font-semibold">Welcome Back!</h1>
          <p className="text-[18px]">Enter your personal details and start journey with us</p>

          <Link className="border flex gap-3 w-fit mx-auto px-8 py-2 rounded-full items-center" to="/register">
            <p className="font-bold">Register</p>
            <ArrowRight size={20} className="border rounded-full" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
