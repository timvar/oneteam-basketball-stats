import React from 'react';
import { ErrorMessage, Field, FieldProps } from 'formik';
import { TextField } from '@material-ui/core';

interface TextProps extends FieldProps {
  label: string;
  placeholder: string;
}

export const TextInput: React.FC<TextProps> = ({
  field,
  label,
  placeholder,
}) => (
  <TextField
    fullWidth
    style={{ margin: 8 }}
    variant="outlined"
    label={label}
    placeholder={placeholder}
  >
    <Field {...field} />
    <div style={{ color: 'red' }}>
      <ErrorMessage name={field.name} />
    </div>
  </TextField>
);

interface NumberProps extends FieldProps {
  label: string;
  errorMessage?: string;
  min: number;
  max: number;
}

export const NumberInput: React.FC<NumberProps> = ({
  field,
  label,
  min,
  max,
}) => (
  <TextField fullWidth style={{ margin: 8 }} variant="outlined" label={label}>
    <Field {...field} type="number" min={min} max={max} />
    <div style={{ color: 'red' }}>
      <ErrorMessage name={field.name} />
    </div>
  </TextField>
);
