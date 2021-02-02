import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  light: state,
});
const LightComponent = ({ light }) => <div>{light}</div>;

export default connect(mapStateToProps)(LightComponent);
