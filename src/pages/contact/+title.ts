import { PageContext } from '../../renderer/types';
import { getTitle } from '../../content/meta/getTitle';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const title = (pageContext: PageContext): string => getTitle('Contact');
