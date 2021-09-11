import React from "react"

function Button(props){
    return(
        <> 
        <button onClick={props.miOnClick[1]}>-</button>
        <button onClick={props.miOnClick[2]}>Agregar</button>
        <button onClick={props.miOnClick[0]}>+</button>
        </>
    )
}

export default Button