/*
 * action types
 */

export const USER_SET = 'USER_SET';
export const GET_GRADES = 'GET_GRADES';
export const GRADES_FETCH_SUCCEEDED = 'GRADES_FETCH_SUCCEEDED';
export const GRADES_FETCH_FAILED = 'GRADES_FETCH_FAILED';


/*
 * action creators
 */

export function setUser(user) {
  return { type: USER_SET, user }
}

export function getGrades(userId) {
  return { type: GET_GRADES, userId }
}