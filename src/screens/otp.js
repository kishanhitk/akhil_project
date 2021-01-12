import React from "react";
import ReactDOM from "react-dom";
import { loginWithOtp, getRestaurants } from "../components/api";
class App extends React.Component {
  state = { otp: "", path: "/otp", restaurants: [] };

  myChangeHandler = (event) => {
    this.setState({ otp: event.target.value });
    if (this.state.otp === "12345") {
      this.setState({ path: "/" });
    } else {
      this.setState({ path: "/otp" });
    }
  };
  handleSubmit = (e) => {
    e.preventDefault();
    loginWithOtp(this.props.location.state.phoneNumber, this.state.otp);
  };
  getRestaurantsList = async (e) => {
    e.preventDefault();
    getRestaurants().then((rests) => {
      console.log(rests);
      this.setState({ restaurants: rests });
    });
  };
  render() {
    const container = {
      margin: 50,
    };
    const btn = {
      backgroundColor: "gray",
      padding: 5,
      textDecoration: "none",
      color: "black",
      borderStyle: "solid",
      borderWidth: 2,
    };
    console.log(this.state.otp, this.state.path);

    return (
      <div>
        <form style={container} onSubmit={this.handleSubmit}>
          <h3>Enter your Otp number:</h3>
          <input
            style={{ marginRight: 20, height: 30 }}
            type="text"
            onChange={this.myChangeHandler}
          />
          {/* <a style={btn} href={this.state.path}>
          submit
        </a> */}
          <input type="submit" />
        </form>
        <button onClick={this.getRestaurantsList}>Get Restaurants</button>
        {this.state.restaurants.map((r) => (
          <p>{r["restaurant_name"]}</p>
        ))}
      </div>
    );
  }
}

export default App;
