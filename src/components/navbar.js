import React, { Component } from 'react'
class navbar extends Component {
  render() {
    return (
     
          <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand text-primary" href="/Api">
              GitGet
            </a>
            <ul class="navbar-nav mr-auto">
            <li class="nav-itemactive">
          <h3>Traing Devloper List</h3>
      </li>
      </ul>
            <div className="collapse navbar-collapse" id="navbarSupportedContent" />

            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/Devloper">Tranding Devloper</a>
              </li>
              <li className="breadcrumb-item">
                <a href="/Api">Tranding Repo</a>
              </li>
              {/* <li className="breadcrumb-item">
                <a href="#">Library</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Data
              </li> */}
            </ol>
          </nav>  
    )
  }
}

export default navbar
