import React from "react";


function PostQuery() {
  return <div>
  <form class="w-full my-5 ">
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-2/6 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        To 
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="userId@gmail.com"/>
      <p class="text-red-500 text-xs italic">Please fill out this field.</p>
    </div>
    <div class="w-full md:w-3/6 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Query/Message
      </label>
      <textarea  name="problemStatement" id="problemStatement"  rows="2"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-black" required/>
    </div>
    <div class="w-full md:w-1/6 px-3 align-middle">
    <button class="py-1 px-3 m-10 font-semibold rounded-md text-white bg-green-600">Post</button>
    </div>
  </div>
  
</form>
</div>;
}

export default PostQuery;
