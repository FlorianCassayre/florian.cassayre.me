import { usePageContext } from '../../renderer/usePageContext';
import { localizeUrl } from '../i18n/utils';

export const useUrlGenerator = () => {
  const { locale } = usePageContext();
  return (urlPathname: string): string => localizeUrl(urlPathname, locale);
};
