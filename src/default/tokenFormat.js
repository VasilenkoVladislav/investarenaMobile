export function authTokenFormat (header) {
    return {
        'access-token': header['access-token'],
        'client': header['client'],
        'uid': header['uid']
    };
}
