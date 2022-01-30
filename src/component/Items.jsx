import React from 'react'
import { Consumer } from '../ContextApi'
import {useState} from 'react'

export default function Items(props) {
    
    const bgcolor = (isOn) => {
        if (isOn){
            return "#00FF00"
        }
        else{
            return "#FF0000"

        }
    }

    const switchIt = (item) => {
  
        item[2] = !item[2]

    }
    
    
    return (    
        
        <div id="items" style={{display:"flex",justifyContent:"center", alignItems:"center"}}>
            {(props.items[props.index][4]).map(item=>
                <button onClick={()=>switchIt(item)} style={{backgroundColor:bgcolor(item[2]), margin:"1em", width:"10em"}}>{item[0]}</button>
            )}
        </div>
       
    )
}





// import React from 'react'
// import { Link, useLocation } from 'react-router-dom'
// import { Consumer } from '../ContextApi'
// import Title from './Title'
// import { useEffect } from 'react'
// import {useState} from 'react'
// import Items from './Items'



// export default function Room(props) {

    
//     let [clickCounter,setclickCounter] = useState(0)
//     const [itemType, setitemType] = useState('choose')
//     const currList = props.rooms
//     const currIndex = props.roomIndex
//     console.log(currList)
//     console.log(currIndex)

//     const ItemList = currList[currIndex][4]
//     console.log(ItemList)
//     let currItemIndex = ItemList.length
//     const [currItemIndex1, setcurrItemIndex] = useState(currItemIndex)

//     console.log(currItemIndex)

//     //let currItemIndex = ItemList.length
//     //const currItem = ItemList[ItemList.length-1]
//     const whichItem = (item) => {
//         setitemType(item)
//     }

//     const haveStereo = (itemList) => {
//         for(let i=0; i<ItemList.length; i++){
//             // going over all items type
//             if(itemList[i][0] == "stereoSystem")
//                 return true
//         }
//         return false
//     }

//     const addAndToggle = () => {        
//         //only up to 5 items are allowed
//         if (currItemIndex1<5){ 
//             let currList = props.rooms
//             const currIndex = props.roomIndex             
//             let alreadyHaveStereohave = haveStereo(currList[currIndex][4]) //only one sterio is allowed
//             if(itemType =="stereoSystem" && alreadyHaveStereohave){
//                 alert("cant have more than 1 stereo system")
//             }
//             else{
//                 if (itemType != "choose"){
//                     if(clickCounter==1){
//                         const item={
//                             itemType: itemType,
//                             itemIndex: currItemIndex,
//                             itemOn: false
//                         }                         
//                         currList[currIndex][4] = [...(currList[currIndex][4]), [itemType,currItemIndex1,false]]
//                         setcurrItemIndex(currItemIndex1+1)
//                         props.setItems(currList)           
//                         currList = props.rooms               
            
//                         const x = document.getElementById("myDiv");
//                         x.style.display = "none"
//                         setclickCounter(0)
        
//                     }
//                     else{
//                         setclickCounter(1)
//                     }
                    
//                 }
//                 else{
//                     alert("must pick an item")
//                 }
//             }            
//         }
//         else{
//             alert("you can add up to 5 items")
//         } 
        
        
        
//     }

//     const destroyItems = () => {
//         document.getElementById("items").remove()

//     }
    
//     const toggle = () => {
//         var x = document.getElementById("myDiv");
//         if (x.style.display === "none") {
//           x.style.display = "block";
//           var y = document.getElementById("bathroom");
//           var z = document.getElementById("notBathroom");
//             if (props.type=="bathroom") {
//                 y.style.display = "block";
//                 z.style.display = "none";
//             }
//             else{
//                 z.style.display = "block";
//                 y.style.display = "none";
//             }

//             } 
//         else {
//             x.style.display = "none";
//             }
//     }



    





//     const [clickCounter,setClickCounter] = useState(0)
//     const bgcolor = (isOn) => {
//         if (isOn){
//             return "#00FF00"
//         }
//         else{
//             return "#FF0000"

//         }
//     }

//     const switchIt = (item) => {
//         console.log(clickCounter)
//         setClickCounter(clickCounter+1)
//         if(clickCounter==2)
//             item[2] = !item[2]
//             setClickCounter(0)

//     }
    

//     return (
//         <div className='roomPage'>
            
//             <Title/>
//             <div>
//                 room name:{props.name}
//             </div>
//             <div>
//                 room type:{props.type}
//             </div>
//             <button onClick={()=>toggle()}> 
//                 Add Item
//             </button>
            
//             <div id="myDiv" style={{display:"none"}}>
              
//                 <div id="bathroom">
//                     <select onChange={e=> whichItem(e.target.value)}>
//                         <option value="choose"> choose item</option>
//                         <option value="stereoSystem"> stereo system</option>
//                         <option value="airConditioner"> air conditioner</option>
//                         <option value="light"> light</option>
//                         <option value="boiler"> boiler</option>                        
//                     </select>
//                     <button onClick={()=>addAndToggle()}>
//                         CLICK TWICE :)
//                     </button> 
//                 </div>

//                 <div id="notBathroom">
//                     <select onChange={e=> whichItem(e.target.value)}>
//                         <option value="choose"> choose item</option>
//                         <option value="stereoSystem"> stereo system</option>
//                         <option value="airConditioner"> air conditioner</option>
//                         <option value="light"> light</option>
//                     </select>
//                     <button onClick={()=>addAndToggle()}>
//                         CLICK TWICE :)

//                     </button>                
//                 </div>
                           
//             </div>    
  
 
        
//         <div id="items" style={{display:"flex",justifyContent:"center", alignItems:"center"}}>
//             {(props.items[props.index][4]).map(item=>
//                 <button onClick={()=>switchIt(item)} style={{backgroundColor:bgcolor(item[2]), margin:"1em", width:"10em"}}>{item[0]}</button>
//             )}
//         </div>
//             <Items items={currList} index={currIndex} itemIndex={currItemIndex1}/>                   

//             <Link onClick={destroyItems} to='/'>
//                 home
//             </Link>

//         </div>

//     )
// }
