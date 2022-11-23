/** 카카오톡 반환을 위한 리다이렉트URI */
const KAKAO_REDIRECT_URI = 'http://localhost:3000/logIn/Kakao';

/** REST API키 */
const KAKAO_CLIENT_ID = '3e9c669c67ad90137b5fa81e117199f5';

/** 로그인을 위한 카카오 주소 */
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;

/** 카카오 script */
export const KAKAO_SCRIPT =
  'https://t1.kakaocdn.net/kakao_js_sdk/2.0.0/kakao.min.js';

/** 자마스크립트 API키 */
export const KAKAO_JS_API = '50ad32cbd67e304637f14d4a7155a9b3';

export const GOOGLE_SCRIPT = 'https://accounts.google.com/gsi/client';
export const GOOGLE_CLIENT_ID =
  '815490852595-tor320oi16paha7tmhs4belkjrcj9k5n.apps.googleusercontent.com';