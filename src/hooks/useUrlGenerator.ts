import { localizeUrl } from '../i18n/utils';
import { usePageContext } from 'vike-react/usePageContext';

export const useUrlGenerator = () => {
  const { locale } = usePageContext();
  return (urlPathname: string): string => localizeUrl(urlPathname, locale);
};
