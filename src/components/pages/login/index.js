import React from 'react';

class Login extends React.Component {
    render() {
        return (
            <body class="bg-gradient-primary">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-9 col-lg-12 col-xl-10">
                            <div class="card shadow-lg o-hidden border-0 my-5">
                                <div class="card-body p-0">
                                    <div class="row">
                                        <div class="col-lg-6 d-none d-lg-flex">
                                            <div class="flex-grow-1 bg-login-image"></div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="p-5">
                                                <div class="text-center">
                                                    <h4 class="text-dark mb-4">Bienvenido</h4>
                                                </div>
                                                <form class="user">
                                                    <div>
                                                        <a class={"btn btn-primary btn-block text-white btn-google btn-user"} role="button">
                                                            <i class="fab fa-google"></i>&nbsp; Login with Google</a>
                                                    </div>
                                                </form>
                                                <div class="text-center"></div>
                                                <div class="text-center"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        );
    }
}

export default Login;