import React from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import '../App.css'

export default function AddPageButton() {
    const nav = useNavigate();
    const navTo = () => {
        nav('/addpage')
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6">
                    <div className="btn1" onClick={navTo}>ADD ROOM</div>
                </div>
                <div className="col-3"></div>
            </div>
        </div>
    )
}
