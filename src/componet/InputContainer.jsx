import React, { useState } from "react";

export default function InputContainer({addNewToDo}){
    const [inputValue, setInputValue] = useState("")
    return(
        <div className="inputButton">
            <input className="input"
            placeholder="Enter Your List "
            value={inputValue}
            onChange={(e) => setInputValue(e.currentTarget.value)}
             />
            <button 
            className="button2"
            onClick={()=>{
                addNewToDo(inputValue)
                setInputValue("")
            }}
            >
             Add
            </button>
        </div>
    );
}