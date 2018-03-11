import { REGISTRATION_REQUEST,
    REGISTRATION_SUCCESS,
    REGISTRATION_ERROR } from '../../constansActions';

export function registrationRequest (data) {
    return { type: REGISTRATION_REQUEST, payload: data };
}
export function registrationSuccess () {
    return { type: REGISTRATION_SUCCESS };
}
export function registrationError () {
    return { type: REGISTRATION_ERROR };
}
