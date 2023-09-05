import React, {useState, createContext} from "react";
import {AppBar} from "../AppBar/AppBar";
import {Slider} from "../Slider/Slider";
import {InputBox} from "../Input/Input";
import {Button} from "../Button/Button";
import slide1 from "../../images/loginslider/slider.avif";
import slide2 from "../../images/loginslider/slider2.avif";
import slide3 from "../../images/loginslider/slider3.avif";

import "./loginstyle.css";

export const ThemeContext = createContext(null);

export const LoginScreen = () => {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  const sliderData = [
    {
      id: "1",
      title: "one",
      path: slide1,
    },
    {
      id: "2",
      title: "two",
      path: slide2,
    },
    {
      id: "3",
      title: "three",
      path: slide3,
    },
  ];

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <section className="login-screen-section tv-login-screen" alt="img" id={theme}>
        <AppBar appBarType={`appbarV2`} backgroundColor={"transparent"} AppOptions={false} MenuIcon={false}/>
        <div className="login-screen-content">
          <div className="login-screen-section-banner">
            <Slider dataSource={sliderData} />
          </div>
          <div className="login-screen-section-form">
            <h3>Login</h3>
            <InputBox
              type="text"
              label="EMAIL"
              placeholder="Enter email"
              labelColor="#FFFFFF"
              color="#FFFFFF"
              borderColor="#9C9EA3"
              backgroundColor="transparent"
            />
            <InputBox
              type="password"
              label="PASSWORD"
              placeholder="Enter password"
              labelColor="#FFFFFF"
              color="#FFFFFF"
              url=""
              subLabel="Forgot password?"
              borderColor="#9C9EA3"
              backgroundColor="transparent"
            />
            <Button
              label="LOGIN"
              type={"blunt"}
              backgroundColor={"#ff1493"}
              borderColor={"#ff1493"}
              color={"#ffffff"}
              fullWidth
            />
            <div className="or-division">Or</div>
            <Button
              label="Sign in with Google"
              type={"blunt"}
              backgroundColor={"#ffffff"}
              borderColor={"#ffffff"}
              color={"#00000"}
              fullWidth
            />
            <div className="login-screen-signup">
              New user? <span className="signup">Sign up here</span>
            </div>
          </div>
        </div>
      </section>
    </ThemeContext.Provider>
  );
};

// TemplateOne.propTypes = {};

// TemplateOne.defaultProps = {};
