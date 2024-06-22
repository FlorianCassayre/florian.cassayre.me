import { getTitle } from '../../content/meta/getTitle';
import { PageContext } from '../../renderer/types';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const title = (pageContext: PageContext): string => getTitle('404');
