import React from 'react'
import {Consumer} from '../ContextApi'
import '../App.css';

export default function Title(props) {
    return (
        <div className="title">
            <Consumer>
                {(value)=>{
                    return <h1> {value.title}</h1>
                }}
            </Consumer>           
        </div>
    )
}
