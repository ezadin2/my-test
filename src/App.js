import Header from "./components/Header"
import Feedback from "./components/Feedback"
function App(){
    return(
        <>
        <Header />
        <div className="container">
      <Feedback />
        </div>
        </>
    )
}
export default App






// React.createElement(
//     'div',{className:"container"},
//     React.createElement('h1',{},'MY APP')
// )






// const title ="Blog Post";
//     const body = "This Is My Blog Post";
//     const comments = [
//         {id:1,text:"Comment ONE"},
//         {id:2,text:"Comment TWO"},
//         {id:3,text:"Comment THREE"},
//     ];
//     const show = false;
//     return (
//         <div className="container">
//         <h1>{title.toUpperCase()}</h1>
//         <p>{body}</p>
//        {show && (<di>
//          <div className="comments">
//   <h2>comments({comments.length})
//   </h2>
//       </div>  <ul>
//        {comments.map((Comment,index)=>(
// <li key={index}>Comment.text</li>
//        ))}
       
//       </ul></di>)}
     
      
   
//         </div>
    
//          )