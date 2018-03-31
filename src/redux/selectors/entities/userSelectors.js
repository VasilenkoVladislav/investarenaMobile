import { createSelector } from 'reselect';
// selector
const getUserState = (state) => state.entities.user;
// reselect function

export const getCurrentUserInfoState = createSelector(
    [getUserState],
    (user) => user.info
);

export const getCurrentNameState = createSelector(
    [getCurrentUserInfoState],
    (info) => info.name
);

export const getCurrentUserIdState = createSelector(
    [ getCurrentUserInfoState ],
    (info) => info.id
);

export const getCurrentUserAvatarState = createSelector(
    [ getCurrentUserInfoState ],
    (info) => { return { small: info.image_small, medium: info.image_medium, large: info.image } }
);

export const getUserIsSignInState = createSelector(
    [ getUserState ],
    (user) => user.isSignIn
);

export const getUserErrorState = createSelector(
    [ getUserState ],
    (user) => user.error
);

export const getUserIsLoadingState = createSelector(
    [ getUserState ],
    (user) => user.isLoading
);
