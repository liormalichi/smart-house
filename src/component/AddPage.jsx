import React from 'react'
import Title from './Title';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import HomePage from './HomePage';


export default function AddPage(props) {
    
    //rooms will be at the form of [[[room0name], [room0type], [room0color], 0, [item1, item2]], [[room1name], [room1type], [room1color],1 [item1, item2]]]

    const nav = useNavigate()
    const [pickedRoom, setpickedRoom] = useState(false);
    const [roomType, setroomType] = useState('choose');
    const [pickedName, setpickedName] = useState(false);
    const [roomName, setroomName] = useState('');
    const [colorPicked, setcolorPicked] = useState("black");
    const [roomList, setroomList] = useState([]);
    const [howManyRoomsCreated,sethowManyRoomsCreated] =useState(0);
    const didPickedRoom = (value) =>{
        if (value != "choose"){
            setpickedRoom(true)
            setroomType(value)
        }
        else{
            setpickedRoom(false)
        }
            
    }
    
    const didPickedName = (value) =>{
        if (value != "" & value.length <=5){
            setpickedName(true)
            setroomName(value)
        }
        else{
            setpickedName(false)
        }
    }    

    const colorPickedFunc = (value) =>{
        setcolorPicked(value)

    }

    const isValid = () =>{
        if (pickedRoom & pickedName){
            let roomIndex = props.index
            setroomList([[roomType,roomName,colorPicked,roomIndex,[]],...roomList])
            console.log(roomList)
            roomIndex= roomIndex+1
            props.setIndex(roomIndex)
            sethowManyRoomsCreated(howManyRoomsCreated+1)
            console.log(howManyRoomsCreated)

        }
        else{
            alert(`Name must contain 1 to 5 characters 
            Room type must be chosen`)
            {} // how to change page by click with options
            
        }
    }
    
    const addroom = () =>{
        props.roomList1(roomList)
        console.log(howManyRoomsCreated)
        props.setCreated(howManyRoomsCreated)
        nav('/')

       
    }
     

    return (
        <div className='AddPage'>
            <Title/>
            <section className='col-12'>
            
                <select onChange={e=> didPickedRoom(e.target.value)} className=''>
                    <option value="choose">Choose a room</option>
                    <option value="livingRoom">Living room</option>
                    <option value="bathroom">Bathroom</option>
                    <option value="kitchen">Kitchen </option>
                    <option value="bedroom">Bedroom</option>
                </select>                
                <div className=''>
                    <div class='name'>Enter Room Name</div>
                    <input onChange={e=>didPickedName(e.target.value)} type="text" className=''/>
                </div>
                <div className=''>
                    <div className=''>Pick Room Color</div>
                    <input onChange={e=>colorPickedFunc(e.target.value)} type="color"/>
                </div>

                <button className="btn1 btnSmaller" onClick={()=>isValid()}>
                    CREATE ROOM!
                </button>

                <div class="toHomeContainer">
                    <button className="btn1 btnSmaller" type="button" onClick={addroom}>
                        FINISH!
                    </button>
                </div>
            </section>
        </div>
    )
}