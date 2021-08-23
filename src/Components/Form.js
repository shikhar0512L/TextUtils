//rfc
import React,{useState} from 'react'



export default function Form(props) {


const handleUpClick = ()=>{
    console.log("Upper case was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Done Upper text","sucess");
};
const handleLoClick = ()=>{
    console.log("Lower case was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Done LowerCase","sucess");
};

const ClearText = ()=>{
    console.log("Upper case was clicked" + text);
    let newText = ""
    setText(newText);
    props.showAlert("Cleared text","sucess");
};
const handleOnChange = (e)=>{
    console.log("On change");
    setText(e.target.value);
};

const handleCoppy=()=>{
    console.log("I am coppy");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Coppied to clipboard","sucess");
};


const handleExtraSpaces=()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra spaces has been removed","sucess");
};



    const [text,setText] = useState("");
    return (
        <>
        <div style={{color : props.mode === "dark"?'white':'#042743'}}>
            <h1>{props.heading}</h1>
<div className="mb-3 container">
  <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode === "dark"?'grey':'white',color:  props.mode === "dark"?'white':'#042743'}} rows="8" placeholder="Enter the text"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to upperCase</button>
<button className="btn btn-primary mx-2" onClick={handleLoClick} >Convert to lowerCase</button>
<button className="btn btn-primary mx-2" onClick={handleCoppy} >coppy text</button>
<button className="btn btn-primary mx-2" onClick={handleExtraSpaces} >Remove extra spaces</button>
<button className="btn btn-primary mx-2" onClick={ClearText} >Clear text</button>
</div>

<hr />

<div className="container my-2" style={{color : props.mode === "dark"?'white':'#042743'}}>
<h1>Your text summary</h1>
<p>{text.split(" ").length} words and {text.length} characters</p>
<p>{0.008*text.split(" ").length} minutes read</p>
<hr />
<h2>Preview</h2>
<p>{text.length>0?text:"Enter something in the text box above to preview it here"}</p>


</div>



</>
    )
};
