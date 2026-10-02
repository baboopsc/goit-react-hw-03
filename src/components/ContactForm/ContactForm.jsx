//kisi eklemek icin form componenti olusturuyorum
//id olusturmak icin nanoid kutuphanesini kullanacagim
//formu formik kutuphanesi ile yapacagim
//alanlarin doldurulmasi zorunlu olacak min ve max karakter sayisi olacak.

import { Formik,Form,Field,ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const ContactSchema = Yup.object().shape({
  name: Yup.string().min(3,'Min 3').max(50,'Max 50').required('Required'),
  number: Yup.string().min(3,'Min 3').max(50,'Max 50').required('Required'),
});

export default function ContactForm({ onAddContact }) {
  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };

    onAddContact(newContact);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label className={css.label} htmlFor="name">
          Name
          <Field className={css.input} type="text" id="name" name="name" />
          <ErrorMessage className={css.error} name="name" component="span" />
        </label>

        <label className={css.label} htmlFor="number">
          Number
          <Field className={css.input} type="text" id="number" name="number" />
          <ErrorMessage className={css.error} name="number" component="span" />
        </label>

        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
