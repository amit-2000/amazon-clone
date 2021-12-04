// import { getIdToken } from "@firebase/auth";
import React from "react";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { useDeleteProdMutation } from "../api/apiSlice";
// import { addToFilterPosts } from "../Reducer";
const Temp = () => {
  // const { products } = useSelector((state) => state.counter);
  // const dispatch = useDispatch();
  // console.log("products from temp ", products);

  // const handleBtn = () => {
  //   dispatch(addToFilterPosts(products));
  // };
  // const [deletepPost] = useDeleteProdMutation();
  // console.log("DeletePost function", deletepPost);
  // console.log("response from deltepost", res);
  const getIdToken=()=>{
    console.log(localStorage.getItem('token'))
  }

  return (
    <div>
      <h1>Filter products</h1>
      {/* <button onClick={handleBtn}> Filter Products</button> */}
      {/* <button onClick={() => deletepPost(3)}> Delete prod</button> */}
      <button onClick={getIdToken}> Delete prod</button>
    </div>
  );
};

export default Temp;
