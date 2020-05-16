import React from 'react';
import { Formik, Form } from 'formik';
import { TextField, Button } from '@material-ui/core';

interface FormValues {
  email: string;
  password: string;
}

interface Props {
  onSubmit: (values: FormValues) => void;
  onCancel: () => void;
}

const Basic: React.FC<Props> = ({ onSubmit, onCancel }) => (
  <div>
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={(values: FormValues) => {
        const errors: FormValues = { email: '', password: '' };
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={onSubmit}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <Form>
          <TextField
            fullWidth
            style={{ margin: 8 }}
            variant="outlined"
            label="email"
            placeholder="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            name="email"
          />
          {errors.email && touched.email && errors.email}
          <TextField
            fullWidth
            style={{ margin: 8 }}
            variant="outlined"
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password && errors.password}
          <Button type="submit">Submit</Button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Basic;
