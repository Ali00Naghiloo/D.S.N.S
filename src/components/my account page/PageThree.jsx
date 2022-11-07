import { useEffect, useState } from "react";
import "../../styles/style.scss";
import { setSelectedPage } from "../slices/selectedPageMyac";
import { useDispatch, useSelector } from "react-redux";
import MyAccountNavbar from "./MyAccountNavbar";
import { useParams } from "react-router-dom";
import CompanyInformation from "./comany information/CompanyInformation";

const PageThree = () => {
  const selectedPage = useSelector((state) => state.selectedPage.selectedPage);
  const { page } = useParams();

  return (
    <div className="myac-continer">
      <MyAccountNavbar />

      <section className="myac-detail">
        {(page) => {
          if (page === "coinfo") {
            return <CompanyInformation />;
          }
        }}
      </section>
    </div>
  );
};
export default PageThree;
