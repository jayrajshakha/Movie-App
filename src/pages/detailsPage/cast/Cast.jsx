import React from "react";
import { useSelector } from "react-redux";

import "./style.scss";


import ContentWrapper from "../../../components/contentWrapper/ContetntWrapper";
import Img from "../../../components/lazyloading/Img";
import avatar from "../../../assets/avatar.png";

const Cast = ({ data, loading }) => {

  const { url } = useSelector((state) => state.home);

  const skeleton = () => {
    
    return (
      <div className="skItem">
        <div className="circle skeleton"></div>
        <div className="row skeleton"></div>
        <div className="row2 skeleton"></div>
      </div>
    );
  };
  return (
    <div className="castSection">
      <ContentWrapper>
         
      </ContentWrapper>
    </div>
  );
};

export default Cast;
