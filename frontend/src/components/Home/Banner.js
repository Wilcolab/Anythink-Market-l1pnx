import React from "react";
import logo from "../../imgs/logo.png";
import agent from "../../agent";

const Banner = (props) => {
  const onSearchChange = (event) => {
    props.onSearchFilter(
      event.target.value,
      (page) => agent.Items.byTitle(event.target.value),
      agent.Items.byTitle(event.target.value)
    );
  };
  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span id="get-part">A place to get</span>
          <input
            type="text"
            id="search-box"
            placeholder="What is it that you truly desire?"
            onChange={onSearchChange}
          ></input>
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
