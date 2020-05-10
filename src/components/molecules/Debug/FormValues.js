import React from 'react';
import { useFormContext } from 'react-hook-form';

const FormValues = () => {
  const { getValues } = useFormContext();
  return <pre>{JSON.stringify(getValues({ nest: true }), null, 2)}</pre>;
};

export default FormValues;
