import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import { useParams } from "react-router-dom";

function Detail({ toDo, onBtnClick }) {
  //console.log(props);
  // const id = useParams();
  // console.log(id);
  return (
    <>
      <h1>{toDo?.text}</h1>
      <h5>Created at: {toDo?.id}</h5>
      <button onClick={onBtnClick}>delete</button>
    </>
  );
  return;
}

function mapStateToProps(state, ownProps) {
  const {
    match: {
      params: { id },
    },
  } = ownProps;
  console.log(id, state);
  //console.log(id);
  return { toDo: state.find((toDo) => toDo.id === parseInt(id)) };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onBtnClick: () => {
      const {
        match: {
          params: { id },
        },
      } = ownProps;
      dispatch(actionCreators.deleteToDo(id));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
