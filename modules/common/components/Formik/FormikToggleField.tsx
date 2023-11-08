import Toggle from '@/modules/application/components/DesignSystem/Elements/Toggle';

import FormikField from './FormikField';

const FormikToggleField = (props) => {
  const { name, label: upstreamLabel, ...upstreamProps } = props;

  const label = typeof upstreamLabel !== 'string' ? '' : upstreamLabel;

  const renderInput = ({ field: { name: fieldName, value, onChange, onBlur }, meta: { touched, error } }) => (
    <Toggle
      defaultChecked={value === true}
      value={value}
      name={fieldName}
      onChange={onChange}
      onBlur={onBlur}
      status={touched && error ? 'invalid' : ''}
      {...upstreamProps}
    >
      {label}
    </Toggle>
  );

  return <FormikField name={name} input={renderInput} {...props} label={null} />;
};

export default FormikToggleField;
