import React,{ useState } from "react";

export default function  H(){
//  const print1 = (e)=> {
//     newvalue = text(e.target.value);
//     console.log(settext(e.target.value));
//  }

const uppercase = ()=>{
   let uppervalue = text.toUpperCase();
   settext(uppervalue);
}
const lowercase = ()=>{
  let uppervalue = text.toLowerCase();
  settext(uppervalue);
}


 const onchange = (e)=>{
   settext(e.target.value);
  
 }

  const [text, settext] = useState("");
  return (
    <>
<div className="container my-3">
  <h2>Enter the Text to analyze Below :-)</h2>
<div class="mb-3">
  <textarea class="form-control" onChange = {onchange} id="exampleFormControlTextarea1" value = {text} rows="6"></textarea>
</div>
<button type="button" onClick = {(uppercase)} class="btn 
btn-primary">Convert into UpperCase</button>
<button type="button" onClick = {(lowercase)} class="btn 
btn-primary mx-3">Convert into lowerCase</button>

</div>
<div className="container">
   <h1>Your Text summary</h1>
   <p>{text.split(" ").length-1} of word and Number of {text.length}</p>
   <p>{0.008 * text.split(" ").length} Minutes in read</p>
   <h2>Preview</h2>
   <p>{text}</p>
</div>
</>
  );
}