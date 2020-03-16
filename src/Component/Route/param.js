import React from 'react';
import { useParams } from 'react-router-dom'

export const Param=()=>{
    let {Param} = useParams()
    return(
        <div className="text-center">
            <h1>Parame Component</h1>
            <h2> Param : {Param} </h2>
        </div>
    )
}