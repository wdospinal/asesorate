import React from 'react';
import { connect } from 'react-redux';

const Navigation = ({ authUser }) =>
  <div>
  </div>

const mapStateToProps = (state) => ({
  authUser: {},
});

export default connect(mapStateToProps)(Navigation);