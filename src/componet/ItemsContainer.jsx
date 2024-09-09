import React from "react";

export default function ItemsContainer({todos, deleteToDo}){
   console.log(deleteToDo)
    return(
        <div>
            <ul className="items"
            style={{marginRight:" 2rem"}}>
                {todos.map((item,index)=> {
                    return (
                        <li className = " value"key={index}>
                            {item}
                            <button className="button"
                            onClick={() => deleteToDo(item)}>
                                Done
                            </button>
                        </li>
                    );
                })}
            </ul>

        </div>
    );
}