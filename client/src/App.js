import React from "react";

// React Router
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

// Material-UI
import { Container } from "@material-ui/core";

// Components
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import PostDetails from "./components/PostDetails/PostDetails";

export default function App() {
  const user = JSON.parse(localStorage.getItem("profile"));

  // Return
  return (
    <BrowserRouter>
      <Navbar />

      <div
        style={{
          backgroundImage: `url("https://cdn.pixabay.com/photo/2017/01/06/23/04/homberg-1959229__340.jpg")`,
          height: "94vh",
          // width: "100vw",
          margin: 0,
          padding: 0,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          fontSize: "50px",
          color: "black",
          display: "grid",
          placeItems: "center",
          fontFamily: "cursive",
          marginBottom: "40px",
        }}
      >
        <div className="text-heading">
          The Journey You Ever Dreamed of.
          <div className="text-para">
            We made a tool so you can easily keep & share your travel memories.
            But there is a lot more
          </div>
        </div>
      </div>

      <Switch>
        <Route path="/" exact component={() => <Redirect to="/posts/" />} />
        <Route path="/posts" exact component={Home} />
        <Route path="/posts/search" exact component={Home} />
        <Route path="/posts/:id" component={PostDetails} />
        <Route
          path="/auth"
          exact
          component={() => (!user ? <Auth /> : <Redirect to="/posts" />)}
        />
      </Switch>
    </BrowserRouter>
  );
}
