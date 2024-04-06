import { useState } from "react"

function Feedback() {
    const [rating,setRating]= useState(7)
    const [text,setext]= useState("THis Example of FeedbackItem")
    return (
  <div className="card">
    <div className="num-display">{rating}</div>
       <div className="text-display">
       {text} </div>
       </div>
  )
}

export default Feedback