import { getRequestConfig } from 'next-intl/server';
import { defaultLocale } from './config';

export default getRequestConfig(async () => {
  // Since we're not using routing, we'll use a default locale
  // The actual locale will be managed by client-side state
  return {
    locale: defaultLocale,
    messages: (await import(`./messages/${defaultLocale}.json`)).default
  };
});

