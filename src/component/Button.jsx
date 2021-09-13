import React from "react"

function Button(props){
    return(
        <> 
        <button type="button" className="btn btn-secondary btn-sm" onClick={props.miOnClick[1]}> - </button>
        <button type="button" className="btn btn-secondary btn-sm" onClick={props.miOnClick[2]}> Agregar </button>
        <button type="button" className="btn btn-secondary btn-sm" onClick={props.miOnClick[0]}> + </button>
        </>
    )
}

export default Button