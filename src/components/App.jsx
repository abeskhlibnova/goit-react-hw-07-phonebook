import { ToastContainer } from 'react-toastify';
import Phonebook from './Phonebook';
import { PhonebookBox } from './Phonebook.styled';

export const App = () => {
  return (
    <>
      <PhonebookBox>
        <Phonebook />
      </PhonebookBox>
      <ToastContainer autoClose={2000} theme="light" />
    </>
  );
};
