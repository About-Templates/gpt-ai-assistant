import config from '../config/index.js';
import en from './en.js';
import ja from './th.js';
import zh from './zh.js';

const locales = {
  en,
  th,
  zh,
  zh_TW: zh,
  zh_CN: zh,
};

const t = (key) => locales[config.APP_LANG][key];

export {
  t,
};

export default null;
