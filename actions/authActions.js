export const SET_USER = 'SET_USER'
export const UNSET_USER = 'UNSET_USER'

export const unsetUser = () => ({ type: UNSET_USER })
export const setUser = ({ user, token }) => ({
  type: SET_USER,
  payload: { user, token }
})
