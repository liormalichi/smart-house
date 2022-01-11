import React from 'react'
import {Consumer} from '../ContextApi'

export default function Title(props) {
    return (
        <div>
            <Consumer>
                {(value)=>{
                    return <h1> {value.title}</h1>
                }}
            </Consumer>           
        </div>
    )
}
