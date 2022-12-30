import React , { useEffect, useState } from "react";
import axios from "axios";
import './css/product.css';
function Product(){
const [myData, setMyData] = useState([]);
const [iserror, setIsError] = useState("")
// For fetching API
useEffect(()  =>{
    axios
    .get("https://fakestoreapi.com/products")
    .then((res) =>
    // console.log(res.data)
    setMyData(res.data)
    .catch((error) => setIsError(error.message))
    );
  },[]);

  return(
        <>
            
            {iserror != "" && <h2>{iserror}</h2>}
            
                        <div className="card">
                            {myData.map((post)=>{
                                const {id, title,price,description,category,image,rating} =post;
                                return( <div className="card2" key={id}>
                                    
                                        <div className="imageDiv"><img className="productImage" src={image}></img></div>
                                        <div>
                                            <h4>{title.slice(0,15).toUpperCase()}</h4>
                                            <h5 className="price">RS {price}</h5>
                                            <p>{description.slice(0,100)}</p>
                                            <p>{rating.rate}</p>
                                            <p><button>Add to Cart</button></p>
                                        </div>
                                    
                                </div>
                                );
                                
                            })}
                       

               
            </div>
            
        </>
    );
}

export default Product;