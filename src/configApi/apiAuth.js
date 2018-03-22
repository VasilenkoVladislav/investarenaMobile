import apiFactory from '../api';
import config from './config';

export default apiFactory({ apiPrefix: config.apiPrefix });
