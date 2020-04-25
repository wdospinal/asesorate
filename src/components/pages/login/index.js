import * as React from 'react';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import withFirebaseAuth from 'react-with-firebase-auth';
import firebaseConfig from '../../../firebaseConfig';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import * as actions from '../../../constants/actions';
import _ from 'lodash';

const firebaseApp = firebase.initializeApp(firebaseConfig);

class Login extends React.Component {
    render() {
        const { user, signInWithGoogle , setUser } = this.props;
        if (!_.isEmpty(user)) {
            setUser(user);
            this.props.history.push('/landing');
        }
        return (
            <div className="bg-gradient-primary">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-9 col-lg-12 col-xl-10">
                            <div className="card shadow-lg o-hidden border-0 my-5">
                                <div className="card-body p-0">
                                    <div className="row">
                                        <div className="col-lg-6 d-none d-lg-flex">
                                            <div className="flex-grow-1 bg-login-image"></div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="p-5">
                                                <div className="text-center">
                                                    <h4 className="text-dark mb-4">Bienvenido</h4>
                                                </div>
                                                <form className="user">
                                                    <div onClick={signInWithGoogle}>
                                                        <div className={"btn btn-primary btn-block text-white btn-google btn-user"} role="button">
                                                            <i className="fab fa-google"></i>&nbsp; Login with Google
                                                        </div>
                                                    </div>
                                                </form>
                                                <div className="text-center"></div>
                                                <div className="text-center"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const firebaseAppAuth = firebaseApp.auth();

const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
};
const mapStateToProps = (state) => ({
    users: state.userState.user,
});

const mapDispatchToProps = (dispatch) => ({
    setUser: (user) => dispatch({ type: actions.USER_SET, user }),
});

export default compose(
    withFirebaseAuth({
        providers,
        firebaseAppAuth,
    }),
    connect(mapStateToProps, mapDispatchToProps)
)(Login);
