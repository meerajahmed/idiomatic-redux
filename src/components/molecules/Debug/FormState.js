import React from 'react';
import { useFormContext } from 'react-hook-form';

const FormState = () => {
  const { formState } = useFormContext();
  return <pre>{JSON.stringify(formState, null, 2)}</pre>;
};

export default FormState;
