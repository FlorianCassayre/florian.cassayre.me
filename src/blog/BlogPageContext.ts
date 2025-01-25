import { PostKeyword } from './PostKeyword';
import { PageContext } from '../renderer/types';

export type BlogPageContext = PageContext & {
  keyword?: PostKeyword;
};
