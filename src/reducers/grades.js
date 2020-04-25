import * as actions from '../constants/actions';

const INITIAL_STATE = {
  grades: {},
};

const applyGetGrades = (state, action) => ({
  ...state,
  grades: action.grades
});

function gradesReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case actions.GRADES_FETCH_SUCCEEDED : {
      return applyGetGrades(state, action);
    }
    case actions.GRADES_FETCH_FAILED : {
      console.error(action.message);
      return applyGetGrades(state, action);
    }
    default : return state;
  }
}

export default gradesReducer;