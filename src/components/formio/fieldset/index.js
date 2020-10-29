import PanelComponent from '../panel';
import { toHtml } from './plugins';

class FieldSetComponent extends PanelComponent {
  constructor (component, data, options) {
    super(component, data, options);
  }

  toHtml (element) {
    if (!this.visible) return null;
    return toHtml(element, this);
  }

  getLabel () {
    return this.legend || this.label || this.title || this.key;
  }
}

export default FieldSetComponent;
