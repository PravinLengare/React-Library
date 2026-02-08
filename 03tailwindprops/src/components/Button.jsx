import React from 'react'
function Button({text,color}){
    return (
        <>
            <button className={`px-4 py-2 rounded ${color}`}>
                {text}
            </button>
        </>
    )
}
export default Button