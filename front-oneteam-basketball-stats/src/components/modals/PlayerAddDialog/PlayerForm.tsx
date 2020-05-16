import React from 'react';
import { Grid, Button } from '@material-ui/core';
import { Field, Formik, Form } from 'formik';

import { TextInput, NumberInput } from './FormField';
import { Player } from '../../../types';

export type PlayerFormValues = Omit<Player, 'id'>;

interface Props {
  onSubmit: (values: PlayerFormValues) => void;
  onCancel: () => void;
}

const PlayerForm: React.FC<Props> = ({ onSubmit, onCancel }) => {
  return (
    <Formik
      initialValues={{
        playerName: '',
        playerNumber: 0,
      }}
      onSubmit={onSubmit}
      validate={(values) => {
        const requiredError = 'Field is required';
        const errors: { [field: string]: string } = {};
        if (!values.playerName) {
          errors.playerName = requiredError;
        }
        if (!values.playerNumber) {
          errors.playerNumber = requiredError;
        }
        return errors;
      }}
    >
      {({ isValid, dirty }) => {
        return (
          <Form className="form ui">
            <Field
              label="Name"
              placeholder="Name"
              name="playerName"
              component={TextInput}
            />

            <Field
              label="Number"
              placeholder="##"
              name="playerNumber"
              component={NumberInput}
            />

            <Grid>
              <Grid>
                <Button type="button" onClick={onCancel}>
                  Cancel
                </Button>
              </Grid>
              <Grid>
                <Button type="submit" disabled={!dirty || !isValid}>
                  Add
                </Button>
              </Grid>
            </Grid>
          </Form>
        );
      }}
    </Formik>
  );
};

export default PlayerForm;
