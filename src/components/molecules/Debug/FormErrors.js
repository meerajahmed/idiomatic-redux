import React from 'react';
import { useFormContext } from 'react-hook-form';
import omitDeep from '../../../utils/omitDeep';

const getFormErrors = (errors) => omitDeep(errors, 'ref');

const FormErrors = () => {
  const { errors } = useFormContext();
  return <pre>{JSON.stringify(getFormErrors(errors), null, 2)}</pre>;
};

export default FormErrors;
