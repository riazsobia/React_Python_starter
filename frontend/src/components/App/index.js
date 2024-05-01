import { connect } from "react-redux";
import Container from "./container";
import { withRouter } from 'react-router-dom';
// import * as userActions from "store/modules/user";

const mapStateToProps = state => {
  const { user: { isLoggedIn } } = state;
  return {
    isLoggedIn,
  }
}

export default withRouter(connect(mapStateToProps, null)(Container));
