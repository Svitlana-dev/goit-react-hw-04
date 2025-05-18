import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useId } from 'react';
import css from './ContactForm.module.css';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, 'Must be a valid number!')
    .required('Required'),
});

export default function ContactForm({ onAdd }) {
  const nameId = useId();
  const phoneId = useId();

  const initialValues = {
    name: '',
    number: '',
  };

  const handleSubmit = (values, actions) => {
    onAdd({ id: Date.now(), ...values });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label htmlFor={nameId} className={css.label}>
          Name
        </label>
        <Field type="text" name="name" id={nameId} className={css.field} />
        <ErrorMessage className={css.error} name="name" component="span" />

        <label htmlFor={phoneId} className={css.label}>
          Number
        </label>
        <Field type="text" name="number" id={phoneId} className={css.field} />
        <ErrorMessage className={css.error} name="number" component="span" />

        <button type="submit" className={css.btn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
