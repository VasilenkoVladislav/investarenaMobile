import { UPDATE_QUOTES } from '../../constansActions';

export function updateQuotes (quotes) {
    return { type: UPDATE_QUOTES, payload: quotes };
}
