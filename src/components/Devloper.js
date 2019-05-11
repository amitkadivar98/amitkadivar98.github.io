import React from "react";
import languages from "./languages.json";
import Select from "react-select";
import Carts from "./carts.jsx";
import Navbar from "./navbar";
import axios from "axios";
const options = [...languages];
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
class Devloper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      username:{},
      loading: true,
      trendingday: "daily",
      avatar: ""
    };
  }
  getApi(lan, day) {
    this.setState({ loading: true });
    if (this.state.language) {
      var gitapi =
        "https://github-trending-api.now.sh/developers?language=&since=daily";
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
      gitapi =
        "https://github-trending-api.now.sh/developers?language=&since=daily";
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
  capitalFirstWord(string) {
    return string.charAt(0).toUpperCase;
  }
  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 100000);
    this.getApi();
  }
  updateuser = async selectedOption => {
    await this.setState({ language: selectedOption.value });
    this.getApi();
  };
  render() {
    var map_objs = Object.keys(this.state.data).map(
      item => this.state.data[item]);
    if (this.state.loading) {
      return null;
    } else {
      const { selectedOption } = this.state;

      return (
        <div className="container">
          <Navbar />
          <div>
              <form class=" border-focus form-inline">
                <input
                  class=" border-focus  form-control no-border"
                  type="search"
                  placeholder="Enter user name"
                  aria-label="Search"
                />
              </form>
            {/* </nav> */}
          </div>
          <div className="row">
            <div className="col-sm-6" />
            
            {map_objs.map((i, key) => {
           
              return (
                <div key={key} className="col-8 offset-2">

                  <Carts
                    count={key + 1}
                    pages="Devlo"
                    username={i.username}
                    name={i.name}
                    avatar={i.avatar}
                    repository={i.repo.name}
                    reo_url={
                      "https://github.com/" + i.username + "/" + i.repo.name
                    }
                    userprofile_link={"https://github.com/" + i.username}
                  />
                </div>
                
              );
              
            })}
            
          </div>
        </div>
      );
    }
  }
}

export default Devloper;
