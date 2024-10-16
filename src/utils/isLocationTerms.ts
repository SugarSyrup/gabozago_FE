import { get } from './api';

async function isLocationTermsAgreed() {
  let isActive = false;

  await get<{ TERMS01: boolean }>('/settings/terms?q=TERMS01').then((res) => {
    isActive = res.data.TERMS01;
  });

  return Promise.resolve(isActive);
}

export default isLocationTermsAgreed;
