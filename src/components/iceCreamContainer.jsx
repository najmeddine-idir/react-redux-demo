import React from "react";
import { connect } from "react-redux";
import { buyIceCream } from "../redux/iceCream/actions";

function iceCreamContainer(props) {
  return (
    <div>
      <h2>Numbre of ice cream {props.numberOfIceCream}</h2>
      <button onClick={props.buyIceCream}>Buy ice cream</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  numberOfIceCream: state.iceCream.numberOfIceCream,
});

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(iceCreamContainer);
