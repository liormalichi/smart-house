import React from 'react'
import {Link} from 'react-router-dom'

export default function AddPageButton() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6">
                    <Link style={{textDecloration: "none"}} to='/addpage'>+</Link>
                </div>
                <div className="col-3"></div>
            </div>
        </div>
    )
}
