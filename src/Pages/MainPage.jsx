import React from "react";
import Navbar from "../Components/Navbar";
import background from '../Assets/Background.svg';
import '../Styles/MainPage.css';
import Title from "../Components/Title";
import Carousel from "../Components/Carousel";
import Reasons from "../Components/Reasons";
import FeatureHighlights from "../Components/FeatureHighlights";
import PoweredBy from "../Components/PoweredBy";
import Footer from "../Components/Footer";
import { useAuth } from "../Authentification/AuthContext";

export default function MainPage(){

  //const { currUser } = useAuth();
  //console.log(currUser);

  return (
    <div className="main-page-container">
      <img className="back" src={background}></img>
      <Navbar />
      <Title />
      <Carousel />
      <Reasons />
      <FeatureHighlights />
      <PoweredBy />
      <Footer />
    </div>
  );
}