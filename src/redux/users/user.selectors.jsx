import { createSelector } from "reselect";


const selectUser = state => state.authenticate;

export const selectCurrentUser = createSelector(
    [selectUser],
    (dateUser) => dateUser.user
)

export const selectIsLoggedIn = createSelector(
    [selectUser],
    (dateUser) => dateUser.isLoggedIn
)