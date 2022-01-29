import {HashRouter as Router, Routes, Route, Link} from 'react-router-dom'
import HomePage from './component/HomePage';
import React, {useState} from 'react'
import AddPage from './component/AddPage';
import AddPageButton from './component/AddPageButton';
import { Provider } from './ContextApi';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {roomList} from './component/AddPage'
import Room from './component/Room';

function App() {
  const titleAddPage = "Smart House"
  const titleHomePage = "SMART HOUSE"
  const [roomList, setroomList] = useState([])
  const [roomType1, setroomType1] = useState('')
  const [roomName1, setroomName1] = useState('')
  const [roomIndex, setroomIndex] = useState(0) //reference to how maany rooms were created
  const [roomIndexClicked, setroomIndexClicked] = useState(0) //once clicking on the link in home page we pass the room index
  const [roomIndexAndItems, setroomIndexAndItems] = useState([])

  const roomType = (type) => setroomType1(type)
  const roomName = (type) => setroomName1(type)
  const setIndex1 = (index) => setroomIndex(index)
  const setIndexFromHome = (index) => {
    setroomIndexClicked(index)
  }

  //[[0,1,1,0],[1,1,1,1,1],[0,0,0,1,0]] in room 0 item0 off item1 on item2 on item3 off.
  const setroomIndexAndItems1 = (howManyCreated) => {
    if(howManyCreated>0){
      for (let i=1; i<=howManyCreated; i++){
        setroomIndexAndItems(roomIndexAndItems.push([]))
      }
      console.log(roomIndexAndItems)

    }

  }

  console.log(roomIndexAndItems)


  const roomListFunc = (list) => {
    return setroomList(([...roomList,...list]))
  }
  
  const updateList = (list) => {
    return setroomList(list)
  }
  
  const toHomePage = {
    rooms: roomList,
    title: titleHomePage
  }

  const toRoomPage = {
    rooms: roomList,
    title: titleHomePage    
  }
  const toAddPage = {
    title: titleAddPage
  }
  //console.log(roomList)


  return (
    <div className="App">
    
    <Router>
      <Routes>
        <Route path="/" element={
          <Provider value={toHomePage}>
            <HomePage theType={roomType} theName={roomName} index={setIndexFromHome}/>
          </Provider>}/>     
        <Route path="/addpage" element={
          <Provider value={toAddPage}>
            <AddPage roomList1 = {roomListFunc} index={roomIndex} setIndex={setIndex1} setCreated={setroomIndexAndItems1}/>
          </Provider>}/>
        <Route path="/room" element={
          <Provider value={toRoomPage}>
            <Room  rooms={roomList} type={roomType1} name={roomName1} roomIndex={roomIndexClicked} setItems={updateList} itemStatus={roomIndexAndItems}/>
          </Provider>}/>
        
      </Routes>
    </Router>
    
    </div>
  );
}

export default App;
