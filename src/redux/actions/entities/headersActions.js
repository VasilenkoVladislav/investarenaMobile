import { UPDATE_HEADERS } from '../../constansActions';

export function updateHeaders (headers) {
    return { type: UPDATE_HEADERS, payload: headers };
}
