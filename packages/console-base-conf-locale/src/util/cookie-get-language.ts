import {
  getCookie
} from '@alicloud/cookie';

import {
  ELanguage,
  COOKIE_KEY
} from '../const';

export default function cookieGetLanguage(): ELanguage | undefined {
  return getCookie<ELanguage>(COOKIE_KEY);
}
