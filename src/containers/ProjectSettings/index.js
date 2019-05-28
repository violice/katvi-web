import { loadable } from 'utils';

export { default as General } from './General';

export default loadable(() => import('./ProjectSettings'));
