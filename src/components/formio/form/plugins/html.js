import _ from 'lodash';
import FormioExportUtils from '../../../../utils';

export default (element, component) => {
  if (component && component.components) {
    let componentElement = FormioExportUtils.createElement('div', {
      class: `formio-component ${component.type}-component`,
      id: Math.random().toString(36).substring(7)
    });

    const title = FormioExportUtils.createElement('div', {class: 'form-title' });

    _.forOwn(component.title, (value, key) => {
      title.appendChild(
        FormioExportUtils
          .createElement('div', { style: 'padding-left: 8px; padding-right: 8px;' }, `${key}: ${value}`)
      );
    });
    componentElement.appendChild(title);

    if (component._options.submission) {
      if (component._options.submission.hasOwnProperty('owner')) {
        componentElement.appendChild(FormioExportUtils.createElement('div', { class: 'row' },
          FormioExportUtils.createElement('div', { class: 'col text-right text-bold' }, 'submission owner:'),
          FormioExportUtils.createElement('div', { class: 'col text-left' }, component._options.submission.owner))
        );
      }

      if (component._options.submission.hasOwnProperty('id')) {
        componentElement.appendChild(FormioExportUtils.createElement('div', { class: 'row' },
          FormioExportUtils.createElement('div', { class: 'col text-right text-bold' }, 'submission id:'),
          FormioExportUtils.createElement('div', { class: 'col text-left' }, component._options.submission.id))
        );
      }

      if (component._options.submission.hasOwnProperty('modified')) {
        let date = component._options.submission.modified.replace('T', ' ').split('.')[0] + ' UTC';

        componentElement.appendChild(FormioExportUtils.createElement('div', { class: 'row' },
          FormioExportUtils.createElement('div', { class: 'col text-right text-bold' }, 'modified:'),
          FormioExportUtils.createElement('div', { class: 'col text-left' }, date)
        ));
      }
    }

    componentElement.appendChild(FormioExportUtils.createElement('br'));

    _.forEach(component.components, (c) => {
      if (c) {
        c.toHtml(componentElement);
      }
    });

    if (_.isElement(element)) {
      element.appendChild(componentElement);
    }

    return componentElement;
  }
  return null;
};
