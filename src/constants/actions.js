/*
 * action types
 */

export const USER_SET = 'USER_SET'


/*
 * action creators
 */

export function setUser(user) {
  return { type: USER_SET, user }
}
