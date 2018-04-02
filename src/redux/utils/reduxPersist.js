import { getPersistor } from '../configureStore';

export const clearPersistStore = () => getPersistor().purge();