import React from "react";
import profileImg from './profile_img.jpeg'

const Profile = () => {
  const name= localStorage.getItem("adminFname")+" "+localStorage.getItem("adminLname")
  return (
    <>
    
<div class="w-full  md:m-2 max-w-sm bg-white border border-teal-200 rounded-lg shadow dark:bg-teal-800 dark:border-teal-700">

<div class="flex flex-col items-center pt-10 pb-10">
    <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src={profileImg} alt="Bonnie image"/>
    <h5 class="mb-1 text-xl font-medium text-sky-900 dark:text-white">{`${name}`}</h5>
    <span class="text-sm text-gray-500 dark:text-gray-400">Admin at the Sunrise Company Limited</span>
    <div class="flex mt-4 space-x-3 md:mt-6">
        <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edit Profile</a>
        <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Badge</a>
    </div>
</div>
</div>

    </>
  )
};

export default Profile;