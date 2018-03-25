import { UPDATE_QUOTES_SETTINGS } from '../../constansActions';

export function updateQuotesSettings (quotesSettings) {
    return { type: UPDATE_QUOTES_SETTINGS, payload: quotesSettings };
}
