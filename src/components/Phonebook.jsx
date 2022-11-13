import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactForm from './ContactForm';
import ContactList from './ContactList ';
import Filter from './Filter';
import { ContactsTitle, Form, ContactFilterForm } from './Phonebook.styled';
import 'react-toastify/dist/ReactToastify.css';
import { fetchContacts } from 'redux/contacts/contacts-operations';
import { getLoading, getError } from 'redux/contacts/contacts-selectors';
import Loader from './Loader/Loader';

export default function Phonebook() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Form>
      <ContactForm />
      <ContactFilterForm>
        <ContactsTitle>Contacts</ContactsTitle>
        <Filter />
        {isLoading && !error && <Loader />}
        <ContactList />
      </ContactFilterForm>
    </Form>
  );
}
