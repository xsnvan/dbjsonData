import React from "react";
import {Link} from 'react-router-dom'



export default function Mynavbar() {
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link to='/myposts'><a className="navbar-brand" href="#">Posts</a></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to='/mycomments'><p className="nav-link active" aria-current="page" href="#">Comments</p></Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/myalbums'><a className="nav-link active" href="#">Albums</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/myphoto'><a className="nav-link active" href="#">Photos</a></Link>
                            </li>
                            <li className="nav-item">
                             <Link to='/mytodos'><a className="nav-link active" href="#">Todos</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/myusers'><a className="nav-link active" href="#">Users</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/'><a className="nav-link active" href="#">Main</a></Link>
                            </li>

                        </ul>
                        <form className="d-flex">
                            
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}