import React from "react";
import profileImg from './profile_img.jpeg'

const Profile = () => {
  const name= localStorage.getItem("firstName")+" "+localStorage.getItem("lastName")
  return (
    <>
    
<div class="w-full  md:m-2 max-w-sm bg-indigo-200 border border-indigo-400 rounded-lg shadow ">

<div class="flex flex-col items-center py-10">
    <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src={profileImg} alt="Bonnie image"/>
    <h5 class="mb-1 text-xl font-medium text-sky-900 dark:text-white">{`${name}`}</h5>
    <span class="text-sm text-indigo-700">Software Developer</span>
    <div class="flex mt-4 space-x-3 md:mt-6">
        <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 hover:text-gray-200 rounded-lg focus:ring-4 focus:outline-none  ">Edit Profile</a>
        <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 ">Badge</a>
    </div>
</div>
</div>

    </>
  )
};

export default Profile;