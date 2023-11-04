import { usePageContext } from '../../renderer/usePageContext';
import { localizeUrl } from '../../renderer/i18n';

export const useUrlGenerator = () => {
  const { locale } = usePageContext();
  return (urlPathname: string): string => localizeUrl(urlPathname, locale);
};
