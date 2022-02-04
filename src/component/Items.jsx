import React from 'react'
import { Consumer } from '../ContextApi'
import {useState, useEffect} from 'react'

export default function Items(props) {
    const [whichAreOn, setWhichAreOn] = useState(props.items[props.index][4]);
  
    const switchIt = (index) => {
        let isOn = props.items[props.index][4][index][2]
        isOn = !isOn
        props.items[props.index][4][index][2] = isOn
        let color = props.items[props.index][4][index][3]
        let button1 = document.getElementById(index)

        if (color == "#FF0000"){
            color = "#00FF00"
            button1.style.backgroundColor= color        
        }
        else{
            color = "#FF0000"        
            button1.style.backgroundColor= color       
        }
        props.items[props.index][4][index][3] = color
        setWhichAreOn(props.items[props.index][4])

    }
    
    
    return (    
        
        <div id="items" style={{display:"grid", gridTemplateColumns:'repeat(auto-fill, minmax(100px, 1fr))'}}>
            {(props.items[props.index][4]).map((item, index)=> 
                <button id={index} onClick={()=>switchIt(index)} style={{color: "black", backgroundColor:item[3],margin:"1em",height:"5em", width:"10em",
            boxShadow:"2px 3px 4px"}}>{item[0]}</button>
            )}
        </div>
       
    )
}

