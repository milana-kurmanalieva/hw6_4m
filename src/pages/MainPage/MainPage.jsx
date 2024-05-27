// import {useState} from 'react';

// function MainPage() {

//     const [post, setPost] = useState({
//         username: "",
//         email: "",
//         body: ""
//     })

//     function changeInput(e) {
//         const name = e.target.name;
//         const value = e.target.value;

//         setPost({
//             ...post,
//             [name]: value
//         })
//     }

//     function createPost(e) {
//         e.preventDefault()

//         if(post.username.trim() === "" || post.email.trim() === "") {
//             alert("Заполните все поля");
//         }

//         console.log(post.username.trim())
//     }

//     function reset () {
//         setPost({
//             username: "",
//             body: "",
//             email: ""
//         })
//     }

//     function createDefaultValues () {
//         setPost({
//             username: "Василий",
//             email: "vasilii@gmail.com",
//             body: "some text here"
//         })
//     }

//     return (
//         <div>
//             <h2>Create Post</h2>

//             <form onSubmit={createPost} onReset={reset} onChange={changeInput}>
//                 <input type="text" placeholder="username"  name="username" value={post.username}/>
//                 <input type="text" placeholder="email" name="email" value={post.email}/>
//                 <input type="text" placeholder="body" name="body" value={post.body}/>
//                 <button>create</button>
//                 <button type="reset">reset</button>
//                 <button type="button" onClick={createDefaultValues}>create default values</button>
//             </form>
//         </div>
//     );
// }

// export default MainPage;