import React from "react";
import "../index.css";
const decora = {
  textDecoration: "none"
};
const spacing = {
  marginRight: "10px"
};
const sorting = {
  position: "absolute",
  left: "70%"
};

function Carts(props) {
  if (props.pages === "Repo") {
    return (
      <div className="card my-2">
        <div className="card-header border-0">
          {props.name}/
            <a
              rel="norefer"
              href={props.repourl}
              target="_blank"
              style={decora}
            >
              {props.reponame}
            </a>
            <small className="float-right">
            <span className="todaystars">
            <span className="mr-1">
              Todays &nbsp;
              <i className="fas fa-star" />
            </span>
            <span style={spacing}>{props.todaystats}</span>
          </span>
          </small> 
        </div>
        <div className="card-body">
        <div>
        <small className="class-title">
        
          <span style={spacing}>
            <b>Created By:</b>&nbsp;
            <a
              style={decora}
              className="createdby"
              target="_blank"
              href={props.user_url}
            >
              <u style={decora}>{props.name}</u>
            </a>
          </span>
         
          {/* <span className="todaystars">
            <span className="mr-1">
              Todays &nbsp;
              <i className="fas fa-star" />
            </span>
            <span style={spacing}>{props.todaystats}</span>
          </span> */}
          <span className="count">
            <a
              style={decora}
              target="_blank"
              rel="norefer"
              href={props.contributers_url}
            >
              <b title="contributers">contri:</b>&nbsp;{props.contributers}
            </a>
          </span>
      
        
        </small>
        </div>
          <div>
            <img
              
              className="imagewidth rounded-circle float-right mr-n3 mt-n5"
              src={props.avatar_url}
              alt="Profile"
            />
          </div>
          <div>
          <p className="card-text p-class">{props.description}</p>
          </div>
          <div className="card-footer footer-spacing">
            <small>
              <span style={{"backgroundColor":props.languagecolor}} >
              </span>
              <span className="mr-2"> {props.language}</span>
              <a
                target="_blank"
                rel="norefer"
                href={props.stars_url}
                style={decora}
              >
                <span className="mr-1">
                  <i className="fas fa-star" />
                </span>
                <span className="mr-2">{props.stars}</span>
              </a>
              <a
                style={decora}
                target="_blank"
                rel="norefer"
                href={props.fork_url}
              >
                <span className="mr-1">
                  <i className="fas fa-code-branch" />
                </span>
                <span>{props.forks}</span>
              </a>
              <span className="tranding" style={sorting}>
                Tranding in {props.sortingdata ? props.sortingdata : "Today"}
              </span>
            </small>
          </div>
        </div>
        </div>
        
    );
  } else if (props.pages === "Devlo") {
    return (
      <div className="card my-1">
        <div className="card-header text-capitalize">{props.username}  <small className="float-right">{props.count}</small></div>
       
        <div className="card-body">
       <h5 className="card-title"> <a className="text-decoration-none text-capitalize" href={props.reo_url}>{props.name}</a></h5>
          <div className="devloper">
            <img
              className="imagewidth img-fluid float-right mt-n5"
              src={props.avatar}
              alt="Profile"
            />
          </div>

          <a href={props.userprofile_url} className="btn btn-primary">
            View Profile
          </a>
        </div>
      </div>
    );
  }
}
export default Carts;
