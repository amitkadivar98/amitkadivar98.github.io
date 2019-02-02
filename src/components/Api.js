import React from "react";
// import { resolve } from 'q';
import Select from "react-select";
import "../index.css";
import Navbar from './navbar'
import languages from "./languages.json";
import Carts from "./carts.jsx";
// var token ="client_id=345dbe84c970609c3fbb&client_secret=9dbe159bb17ee862bc965450751e76541f8dabf7";

const options = [...languages];

// const dropdown = [...languages];
const date = [
  {
    label: "Today ",
    value: "daily"
  },
  {
    label: "This Weekly ",
    value: "weekly"
  },

  {
    label: "This Month",
    value: "monthly"
  }
];
class Api extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      loading: true,
      trendingday: "daily",
      language: "ALL Languages",
      avatar: "https://www.unesale.com/ProductImages/Large/notfound.png"
    };
  }
  getApi(lan, day) {
    // this.setState({ loading: true });
    if (this.state.language) {
      var gitapi = "https://github-trending-api.now.sh/repositories";
      fetch(
        `${gitapi}?language=${this.state.language}&since=${
          this.state.trendingday
        }`
      )
        .then(response => response.json())
        .then(data => {
          this.setState({ data: data, loading: false });
        });
    } else {
      gitapi = "https://github-trending-api.now.sh/repositories";
      fetch(
        `${gitapi}?language=${this.state.language}&since=${
          this.state.trendingday
        }`
      )
        .then(response => response.json())
        .then(data => {
          this.setState({ data: data, loading: false });
        });
    }
  }
  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 1500);
    this.getApi();
  }
  
  updateData = async selectedOption => {
    await this.setState({ language: selectedOption.value });
    this.getApi();
  };
  changeData = async selectedOption => {
    await this.setState({ trendingday: selectedOption.value });
    this.getApi();
  };
  render() {
    const { loading } = this.state;
    var avatar;
    var map_objs = Object.keys(this.state.data).map(
      item => this.state.data[item]
    );
    var map_obj = map_objs.map((i, key) => {
      return i;
    });
    if (loading) {
      return null;
    } else {
      const { selectedOption } = this.state;

      return (
        <div className="container">
               <Navbar/> 
          <div className="row">
      
          <div className="col-sm-6">  
                   
           <Select
              class="btn btn-secondary"
              value={selectedOption}
              onChange={this.updateData}
              options={options}
              placeholder="All Languges"/>       
              </div>
            <div className="col-sm-6">
           <Select
              class="btn btn-secondary" 
              
              data-toggle="dropdown"
              // aria-expanded="false"
              value={selectedOption}
                placeholder="Trending in "
                onChange={this.changeData}
                options={date}
            />  </div>
            </div>
            {/* </div> */}
          <div className="row">
            {map_obj.map((i, key) => {
              if (i.builtBy.length === 0) {
                avatar = i.builtBy.avatar;
              } else {
                avatar = i.builtBy[0].avatar;
              }
              return (
                <div className="col-md-6 mb-3">
                  <div class="card-group">
                    <Carts
                      pages="Repo"
                      key={key}
                      name={i.author}
                      user_url={"https://github.com/" + i.author}
                      languagecolor={i.languageColor}
                      reponame={i.name}
                      repourl={i.url}
                      avatar_url={avatar}
                      description={i.description}
                      stars={i.stars}
                      language={i.language ? i.language : "No Language"}
                      forks={i.forks}
                      network="netwrok"
                      fork_url={i.url + "/network"}
                      stars_url={i.url + "/stargazers"}
                      todaystats={i.currentPeriodStars}
                      sortingdata={this.state.trendingday}
                      contributers={i.builtBy.length}
                      contributers_url={i.url + "/graphs/contributors"}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    }
  }
}
export default Api;
