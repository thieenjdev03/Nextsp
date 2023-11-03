import React from "react";
import { Breadcrumb, Header } from "../../components";
import "../../assets/css/collection.css";
import "../../assets/css/main.css";
import Paginnation from "../../components/collection/Paginnation";
import ProductListAll from "../../components/collection/ProductListAll";
import ProductList from "../../components/collection/ProductList";
import RiseLoader from "react-spinners/RiseLoader";
import { useState, useEffect, override } from "react";
import { useParams } from "react-router-dom"; 
function Collection(props) {

  const [isLoading, setIsLoading] = useState(true);
  const params = useParams()
  useEffect(() => {
    // Simulate a data loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);
  return (
    <div className="flex text-center justify-center items-center contents-center w-full h-100vh">
      {isLoading ? (
        <div className="loading">
        <RiseLoader color="#212529" />
        </div>
      ) : (
        <div className="color-bg bg-slate-200 w-full">
          <div className="w-5/6 mr-auto ml-auto flex flex-col ">
            <Header></Header>
            <Breadcrumb></Breadcrumb>
            <div className="container_content ">
            {
              params.nameCategory !== undefined ? <ProductList></ProductList> :
              <ProductListAll amountProduct = "999" ></ProductListAll>
            }
            </div>
            <Paginnation></Paginnation>
          </div>
        </div>
      )}
    </div>
  );
}

export default Collection;
