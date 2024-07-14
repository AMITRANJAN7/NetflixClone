import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Signup = () => {

const [remLogIn,setRemLogIn] = useState(true);
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const {user, signUp} = UserAuth();
const navigate = useNavigate();

const handleFormSubmit = async (e) =>{

  e.preventDefault();

  try{
    await signUp(email,password)
    navigate('/')
  }catch(err){
     console.log(err)
  }

  console.log(email);
  console.log(password);
};


  return (
    <>
      <div className='w-full h-screen'>
        <img 
        className='hidden sm:block absolute w-full h-full object-cover'
        src="https://assets.nflxext.com/ffe/siteui/vlv3/c7f07b68-7989-4ff7-a31e-11c17dcc2fea/fcf685b8-3f9f-42d8-9af3-4bb86fa5a3b8/IN-en-20240422-popsignuptwoweeks-perspective_alpha_website_large.jpg" 
        alt="///" />
        <div className='bg-black/30 fixed top-0 left-0 w-full h-screen'/>
        
        <div className='fixed w-full px-4 py-24 z-20'>
          <div className='max-w-[450px] h-[600px] mx-auto bg-red-300/70 rounded-lg '>
            <div className='max-w-[320] mx-16 py-16'>
              <h1 className='text-3xl font-bold'>Sign Up</h1>
              <form onSubmit={handleFormSubmit} className='w-full flex flex-col py-4' action="">
                 <input className='p-3 my-2 bg-red-200 rounded text-black'  type="text" placeholder='FULL NAME' />
                 <input className='p-3 my-2 bg-red-200 rounded  text-black'  type="text" placeholder='ADDRESS' />
                 <input className='p-3 my-2 bg-red-200 rounded  text-black'  type="number" placeholder='PHONE NO' />
                 <input className='p-3 my-2 bg-red-200 rounded  text-black' type="email" placeholder='abc@email.com' autoComplete='email' value={email} onChange={(e)=> setEmail(e.target.value)} />
                <input className='p-3 my-2 bg-red-200 rounded  text-black' type="password" placeholder='password' autoComplete='current-password' value={password} onChange={(e)=> setPassword(e.target.value)} />
                <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign Up</button>

                <div className='flex justify-between items-center text-black'>
                  <p>
                    <input type="checkbox" className='mr-2'checked={remLogIn} onChange={(e)=>setRemLogIn(!remLogIn)} />
                    Remember Me
                  </p>
                  <p className='hover:text-blue-800 cursor-pointer'>Need Help?</p>
              </div>
              <p className='my-4'>
                <span className=' mr-2'>
                     Already a member !
                </span>
                <Link className='text-blue-800' to="/login">Sign In</Link>
              </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
