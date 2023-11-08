import { Checkbox } from '@/modules/application/components/DesignSystem';

import FormikField from './FormikField';

const FormikCheckboxField = (props) => {
  const { name, label: upstreamLabel, ...upstreamProps } = props;

  const label = typeof upstreamLabel !== 'string' ? '' : upstreamLabel;

  const renderInput = ({ field: { name: fieldName, value, onChange, onBlur }, meta: { touched, error } }) => (
    <Checkbox
      defaultChecked={value === true}
      name={fieldName}
      onChange={onChange}
      onBlur={onBlur}
      status={touched && error ? 'invalid' : ''}
      {...upstreamProps}
    >
      {label}
    </Checkbox>
  );

  return <FormikField name={name} input={renderInput} {...props} label={null} />;
};

export default FormikCheckboxField;
