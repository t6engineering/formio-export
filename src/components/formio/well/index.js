import ContainerComponent from '../container';
import { toHtml } from './plugins';

class WellComponent extends ContainerComponent {
  constructor (component, data, options) {
    super(component, data, options);
  }

  toHtml (element) {
    if (!this.visible) return null;
    return toHtml(element, this);
  }
}

export default WellComponent;
