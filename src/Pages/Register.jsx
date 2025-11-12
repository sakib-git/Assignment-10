import { ArrowLeft,  ArrowRightToLine,  } from 'lucide-react';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { GoogleAuthProvider, signInWithPopup, updateProfile } from 'firebase/auth';
import { auth } from '../FireBase/Firebase.config';
import { toast } from 'react-toastify';



const Register = () => {
const Googleprovider = new GoogleAuthProvider();
  const {createUser, setUser, } = useContext(AuthContext)

  
  const navigate = useNavigate();
   const handleRegister = (e) => {
    e.preventDefault();
    const displayName = e.target.name.value;
    const photoURL = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

       const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordPattern.test(password)) {
      toast.error('Password must be at least 6 characters long and include both uppercase and lowercase letters.');
      
      return;
    }
     createUser(email, password)
      .then((result) => {
        setUser(result.user);
        updateProfile(result.user, { displayName, photoURL })
          .then(() => {
            navigate('/');
            
          })
          .catch((error) => {
            console.log(error)
          });
      })
  }
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
    }
  return (
    <div className="max-w-[1440px] mx-auto mt-20">
      <div className="flex max-w-[800px] mx-auto max-md:flex-col max-md:px-5">
        <div className="flex-1  bg-gradient-to-r to-[#e2851d] from-[#de513d] text-center p-10 text-white flex flex-col justify-center gap-5  rounded-bl-md rounded-tl-md max-md:rounded-none">
          <div className="mx-auto">
            <ArrowRightToLine size={60} />
          </div>
          <h1 className="text-4xl font-semibold max-sm:text-2xl">Welcome Back!</h1>
          <p className="text-[16px]">To keep connected with us, please log in with your personal information.</p>

          <Link className="border flex gap-3 w-fit mx-auto px-8 py-2 rounded-full items-center" to="/login">
            <ArrowLeft size={20} className="border rounded-full" />
            <p className="font-bold">LOG IN</p>
          </Link>
        </div>
        <div className="flex-1  shadow-2xl p-10 text-center rounded-br-md rounded-tr-md max-md:rounded-none  w-full">
          <form onSubmit={handleRegister} className="flex flex-col gap-6 mx-auto max-w-md ">
            <h2 className="text-5xl font-extrabold bg-gradient-to-r from-orange-400 to-rose-500 text-transparent bg-clip-text">REGISTER</h2>

            <input type="text" placeholder="Name" name='name' className="input   w-full  " />
            <input type="text" placeholder="Photo URL" name='photo' className="input w-full" />
            <input type="email" placeholder="Email" name='email' className="input w-full" />
            <input type="text" placeholder="Password" name='password' className="input w-full" />

            <div className="flex gap-2 flex-col">
              <button className="bg-[#de513d] p-2 text-white font-bold w-full  rounded-md">REGISTER</button>
              <div className="flex items-center gap-4 w-full max-w-sm mx-auto">
                <p className="flex-1 border-t border-gray-300"></p>
                <p className="text-gray-500 font-medium">or</p>
                <p className="flex-1 border-t border-gray-300"></p>
              </div>
        

              <button type='button'  onClick={handleGoogleLogin} className="btn bg-white text-black border-[#e5e5e5] w-full">
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
      </div>
    </div>
  );
};

export default Register;
