import {
  IAttentionSeekerOptions
} from '../types';

import put from './put';

export default function prepend(element: HTMLElement, options?: IAttentionSeekerOptions): () => void {
  return put(element, options, true);
}
