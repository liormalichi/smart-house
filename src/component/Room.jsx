import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Consumer } from '../ContextApi'
import Title from './Title'
import { useLayoutEffect } from 'react'
import {useState} from 'react'
import Items from './Items'
import bathroom from "../images/bathroom.jpg"
import bedroom from "../images/bedroom.jpg"
import kitchen from "../images/kitchen.jpg"
import livingRoom from "../images/livingRoom.jpg"

 

export default function Room(props){
    
    let [clickCounter,setclickCounter] = useState(0)
    let [clickCounter1,setclickCounter1] = useState(0)
    const [itemType, setitemType] = useState('choose')
    const currList = props.rooms
    const currIndex = props.roomIndex
    const ItemList = currList[currIndex][4]
    let currItemIndex = ItemList.length
    const [currItemIndex1, setcurrItemIndex] = useState(currItemIndex)
    const [img, setImg] = useState("")

    // useEffect(() => {
    //     const type = props.type
    //         if(type == "bathroom")
    //             setImg(bathroom)
    //         if(type == "bedroom")
    //         setImg(bedroom)
    //         if(type == "kitchen")
    //             setImg(kitchen)
    //         if(type == "livingRoom")
    //             setImg(livingRoom)    
       
    // },);
    useLayoutEffect(() => {
        const type = props.type
        if(type == "bathroom")
            setImg(bathroom)
        if(type == "bedroom")
            setImg(bedroom)
        if(type == "kitchen")
            setImg(kitchen)
        if(type == "livingRoom")
            setImg(livingRoom)  
    }, []);
    
      
 
    //let currItemIndex = ItemList.length
    // const currItem = ItemList[ItemList.length-1]
    const whichItem = (item) => {
        setitemType(item)
    }

    const haveStereo = (itemList) => {
        for(let i=0; i<ItemList.length; i++){
            // going over all items type
            if(itemList[i][0] == "stereoSystem")
                return true
        }
        return false
    }
    
    const addAndToggle = () => {        
        //only up to 5 items are allowed
        if (currItemIndex1<5){ 
            let currList = props.rooms
            const currIndex = props.roomIndex             
            let alreadyHaveStereohave = haveStereo(currList[currIndex][4]) //only one sterio is allowed
            if(itemType =="stereoSystem" && alreadyHaveStereohave){
                alert("cant have more than 1 stereo system")
            }
            else{
                if (itemType != "choose"){
                    if(clickCounter==1){
                                            
                        currList[currIndex][4] = [...(currList[currIndex][4]), [itemType,currItemIndex1,false]]
                        setcurrItemIndex(currItemIndex1+1)
                        props.setItems(currList)           
                        currList = props.rooms               
            
                        const x = document.getElementById("myDiv");
                        x.style.display = "none"
                        setclickCounter(0)
        
                    }
                    else{
                        setclickCounter(1)
                    }
                    
                }
                else{
                    alert("must pick an item")
                }
            }            
        }
        else{
            alert("you can add up to 5 items")
        }        
    }

    const destroyItems = () => {
        document.getElementById("items").remove()

    }
    
    const toggle = () => {
        var x = document.getElementById("myDiv");
        if (x.style.display === "none") {
          x.style.display = "block";
          var y = document.getElementById("bathroom");
          var z = document.getElementById("notBathroom");
            if (props.type=="bathroom") {
                y.style.display = "block";
                z.style.display = "none";
            }
            else{
                z.style.display = "block";
                y.style.display = "none";
            }

            } 
        else {
            x.style.display = "none";
            }
    }

    return (
        <div className='roomPage'style={{backgroundImage:`url(${img})`}}>             
            <Title/>
            <div>
                room name:{props.name}
            </div>
            <div>
                room type:{props.type}
            </div>
            <button onClick={()=>toggle()}> 
                Add Item
            </button>
            
            <div id="myDiv" style={{display:"none"}}>
              
                <div id="bathroom">
                    <select onChange={e=> whichItem(e.target.value)}>
                        <option value="choose"> choose item</option>
                        <option value="stereoSystem"> stereo system</option>
                        <option value="airConditioner"> air conditioner</option>
                        <option value="light"> light</option>
                        <option value="boiler"> boiler</option>                        
                    </select>
                    <button onClick={()=>addAndToggle()}>
                        CLICK TWICE :)
                    </button> 
                </div>

                <div id="notBathroom">
                    <select onChange={e=> whichItem(e.target.value)}>
                        <option value="choose"> choose item</option>
                        <option value="stereoSystem"> stereo system</option>
                        <option value="airConditioner"> air conditioner</option>
                        <option value="light"> light</option>
                    </select>
                    <button onClick={()=>addAndToggle()}>
                        CLICK TWICE :)

                    </button>                
                </div>
                           
            </div>    
  
            <Items items={currList} index={currIndex} itemIndex={currItemIndex1}/>                   


            <Link onClick={destroyItems} to='/'>
                home
            </Link>


            <div>
                .השינוי בצבע של הכפתורים עובד פשוט צריך לרדנר שוב 
            </div>
            <div>
            כמו ללחוץ על הוסף מוצר וכשתנסה לבחור מוצר חדש תראה שהצבע משתנה וגם נשמר ביציאה מהעמוד 

            </div>
            <div>
                לא הצלחתי לגרום לשינוי בצבע להופיע ישר לצערי     
            </div>
        </div>

    )
}
