// import React, { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";

// const Page = () => {
//   const { handleSubmit, register } = useForm();

//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     getPosts();
//   }, []);

//   async function getPosts() {
//     const response = await fetch("http://localhost:8000/posts");
//     const data = await response.json();
//     console.log(data);
//   }

//   const submit = async (event) => {
//     const response = await fetch("http://localhost:8000/posts", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(event),
//     });
//     getPosts();
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit(submit)}>
//         <input type="text" {...register("title")} />
//         <textarea {...register("body")} rows="10" cols="30"></textarea>
//         <button>create</button>
//       </form>
//     </div>
//   );
// };

// export default Page;
