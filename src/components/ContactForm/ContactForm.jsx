
import { Formik } from 'formik';
import { StyledFormik,FormField,Error,AddButton } from './ContactForm.styled';

import * as Yup from 'yup';

const contactSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').required('Required'),
  number: Yup.string().min(7, 'Must be 10 or more').required('Required'),
});
export const ContactForm = ({ addContact }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={contactSchema}
      onSubmit={(values, actions) => {
        addContact(values);
        actions.resetForm();
      }}
    >
      <StyledFormik>
        <label>
          Name
          <FormField name="name" placeholder="Jane" />
          <Error name="name" component="span" />
        </label>

        <label>
          Number
          <FormField name="number" type="number" />
          <Error name="number" component="span" />
        </label>
        <AddButton type="submit">add contact</AddButton>
      </StyledFormik>
    </Formik>
  );
};
