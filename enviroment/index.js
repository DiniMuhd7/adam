import { env } from 'base';
import * as development from './development';
import * as production from './production';

const envConf = env === 'development' ? production : development;

export default envConf;
