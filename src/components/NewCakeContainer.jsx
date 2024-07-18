import React from "react";
import { connect } from "react-redux";
import { buyCake, cakesToBuy } from "../redux/cake/actions";

export const NewCakeContainer = ({
  numberOfCakes,
  number,
  buyCake,
  cakesToBuy,
}) => {
  return (
    <div>
      <h2>New number of cakes {numberOfCakes}</h2>
      <input
        type="text"
        value={number}
        onChange={(e) => cakesToBuy(e.target.value)}
      />
      <button onClick={() => buyCake()}>Buy {number} cake(s)</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  numberOfCakes: state.cake.numberOfCakes,
  number: state.cake.number,
});

const mapDispatchToProps = (dispatch) => ({
  buyCake: () => dispatch(buyCake()),
  cakesToBuy: (number) => dispatch(cakesToBuy(number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
