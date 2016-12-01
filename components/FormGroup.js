import React, { PropTypes } from 'react';
import classnames from 'classnames';
import '@console/bluemix-components/consumables/scss/base-elements/forms/forms.scss';

const propTypes = {
  children: PropTypes.node,
  legendText: PropTypes.string,
  className: PropTypes.string,
  datainvalid: PropTypes.bool,
  message: PropTypes.bool,
  messageText: PropTypes.string,
};
const defaultProps = {
  datainvalid: undefined,
  message: false,
  messageText: undefined,
};

const FormGroup = ({ legendText, datainvalid, children, className, message, messageText, ...other }) => {
  const classNamesLegend = classnames('bx--form__legend', className);
  const classNamesFieldset = classnames('bx--form__fieldset', className);

  return (
    <fieldset data-invalid={datainvalid} className={classNamesFieldset} {...other}>
      <legend className={classNamesLegend}>
        {legendText}
      </legend>
      {children}
      {message ? (
        <div className="bx--form__requirements">
          {messageText}
        </div>
        ) :
        null}
    </fieldset>
  );
};


FormGroup.propTypes = propTypes;
FormGroup.defaultProps = defaultProps;

export default FormGroup;
