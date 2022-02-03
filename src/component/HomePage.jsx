import React from 'react'
import AddPageButton from './AddPageButton'
import Title from './Title'
import '../App.css'
import {useState} from 'react'
import { Consumer } from '../ContextApi'
import { Link} from 'react-router-dom'


export default function HomePage(props) {

    const updateProps = (room) => {
        props.theType(room[0])
        props.theName(room[1])
        props.index(room[3])
    }
    return (
        <div className="homePage">
            <div className="title"> SMART HOUSE</div>
            <div>
                <Consumer>
                    {(value) =>{
                        console.log(value.rooms)

                        return(
                            value.rooms.map(room =>
                                    <div onClick={()=>updateProps(room)}>
                                        <Link to={{pathname:"/room"}}>                                          
                                            <div  style={{color:"white", backgroundColor:room[2], margin:"5px"}} className="room"> 
                                                
                                                <div>
                                                    {room[1]}
                                                    
                                                </div>
                                                <div>
                                                    {room[0]}
                                                </div>
                                            </div>                        
                                        </Link>  
                                    </div>
                                       
                            )
                        )                
                    }}
                </Consumer>  
            </div >
            <AddPageButton/>
        </div>
    )
}