import React from "react";
// import Footer from '../../commons/footer';
import Navigation from "../../commons/navigation";
import { connect } from "react-redux";
import Card from "../../commons/card";
import * as actions from "../../../constants/actions";
import _ from "lodash";

class LandingPage extends React.Component {
  componentDidMount() {
    const { user, getGrades } = this.props;
    console.log(user);
    if (_.isEmpty(user)) {
      this.props.history.push("/login");
    } else {
      getGrades({
        email: user.email,
        idToken: user.xa,
        campusId: 5
      });
      this.props.history.push("/landing");
    }
  }
  render() {
    return (
      <div id="page-top">
        <div className="wrapper row">
          <div className="column">
            <Navigation />
          </div>
          <div className="d-flex flex-column" id="content-wrapper"></div>
          <div id="wrapper">
            <div id="content">
              <div className="container-fluid">
                <div className="d-sm-flex justify-content-between align-items-center mb-4">
                  <h3 className="text-dark mb-0">Control de puntos</h3>
                </div>
                <div className="row">
                  <div className="col-md-6 col-xl-3 mb-4">
                    <Card name={"GANANCIAS"} value={"100"} />
                  </div>
                  <div className="col-md-6 col-xl-3 mb-4">
                    <Card name={"avance"} value={"50%"} />
                  </div>
                  <div className="col-md-6 col-xl-3 mb-4">
                    <Card name={"solicitudes pendientes"} value={"18"} />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title">Materias</h4>
                        <div
                          className="row space-rows"
                          style={{ margin: "0px" }}
                        >
                          <div className="col">
                            <div
                              className="card cards-shadown cards-hover"
                              data-aos="flip-left"
                              data-aos-duration="950"
                            >
                              <div className="card-header card-header-materia">
                                <span className="space"></span>
                                <div className="cardheader-text">
                                  <h4
                                    id="heading-card"
                                    style={{ fontSize: "20px" }}
                                  >
                                    MATEMATICAS BASICAS
                                  </h4>
                                </div>
                              </div>
                              <div className="card-body">
                                <p className="card-text sub-text-color">
                                  Last activity:
                                </p>
                                <p className="card-text cardbody-sub-text">
                                  2 minutes ago
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div
                              className="card cards-shadown cards-hover"
                              data-aos="slide-right"
                              data-aos-duration="950"
                            >
                              <div className="card-header card-header-materia">
                                <div className="cardheader-text">
                                  <h4 id="heading-card">CALCULO 2</h4>
                                </div>
                              </div>
                              <div className="card-body">
                                <p className="card-text sub-text-color">
                                  Last activity:
                                </p>
                                <p className="card-text cardbody-sub-text">
                                  2 minutes ago
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div
                              className="card cards-shadown cards-hover"
                              data-aos="flip-up"
                              data-aos-duration="950"
                            >
                              <div className="card-header cards-header-hover card-header-materia">
                                <span className="space"></span>
                                <div className="cardheader-text">
                                  <h4 id="heading-card">FISICA 3</h4>
                                </div>
                              </div>
                              <div className="card-body">
                                <p className="card-text sub-text-color">
                                  Last activity:
                                </p>
                                <p className="card-text cardbody-sub-text">
                                  2 minutes ago
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
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
const mapStateToProps = state => ({
  user: state.userState.user
});

const mapDispatchToProps = dispatch => ({
  getGrades: payload => dispatch({ type: actions.GET_GRADES, payload })
});

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
