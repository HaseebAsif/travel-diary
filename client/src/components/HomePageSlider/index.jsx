import React, { Component } from "react";
import Slider from "react-slick";
import "./HomePageSlider.css";

export default class HomePageSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    };
    return (
      <div className="slider-img">
        <Slider {...settings}>
          <div>
            <div
              style={{
                backgroundImage: `url("https://images.unsplash.com/photo-1549321495-305eb13f8aa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fG1vdW50YWlufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60")`,
                height: "75vh",
                width: "100%",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                borderRadius: "33px",
                fontSize: "50px",
                color: "black",
                display: "grid",
                placeItems: "center",
                fontFamily: "cursive",
              }}
            >
              The Journey You Ever Dreamed of.
            </div>
          </div>
          <div>
            <div
              style={{
                backgroundImage: `url("https://images.unsplash.com/photo-1526991902737-3cd476541629?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2NlbmVyeSUyMHdoaXRlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60")`,
                height: "75vh",
                width: "100%",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                borderRadius: "33px",
                fontSize: "50px",
                color: "black",
                display: "grid",
                placeItems: "center",
                fontFamily: "cursive",
              }}
            >
             Start Writing Your Travel Diary
            </div>
          </div>
          <div>
            <div
              style={{
                backgroundImage: `url("https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fG1vdW50YWlufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60")`,
                height: "75vh",
                width: "100%",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                borderRadius: "33px",
                fontSize: "50px",
                color: "#e5e5e5",
                display: "grid",
                placeItems: "center",
                fontFamily: "cursive",
              }}
            >
              Always Remember Your Favourite Locations
            </div>
          </div>
          <div>
            <div
              style={{
                backgroundImage: `url("https://images.unsplash.com/photo-1472791108553-c9405341e398?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fG1vdW50YWlufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60")`,
                height: "75vh",
                width: "100%",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                borderRadius: "33px",
                fontSize: "50px",
                color: "black",
                display: "grid",
                placeItems: "center",
                fontFamily: "cursive",
              }}
            >
             So What Are You Waiting For? Get Started Today
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
