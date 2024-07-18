import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux/cake/actions";
import { buyIceCream } from "../redux/iceCream/actions";

export const itemContainer = ({ count, name, buyItem }) => {
  return (
    <div>
      <h2>
        Number of {name}: {count}
      </h2>
      <button onClick={buyItem}>Buy {name}</button>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  count: ownProps.cake
    ? state.cake.numberOfCakes
    : state.iceCream.numberOfIceCream,
  name: ownProps.cake ? "cakes" : "ice creams",
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  buyItem: ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream()),
});

export default connect(mapStateToProps, mapDispatchToProps)(itemContainer);
