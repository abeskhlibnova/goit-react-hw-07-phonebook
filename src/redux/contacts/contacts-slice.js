import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from './contacts-operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const isPending = store => {
  store.isLoading = true;
};

const isRejected = (store, { payload }) => {
  store.isLoading = false;
  store.error = payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  extraReducers: {
    [fetchContacts.pending]: isPending,
    [fetchContacts.fulfilled](store, { payload }) {
      store.isLoading = false;
      store.error = null;
      store.items = payload;
    },
    [fetchContacts.rejected]: isRejected,
    [addContact.pending]: isPending,
    [addContact.fulfilled](store, { payload }) {
      store.isLoading = false;
      store.error = null;
      store.items.push(payload);
    },
    [addContact.rejected]: isRejected,
    [deleteContact.pending]: isPending,
    [deleteContact.fulfilled](store, { payload }) {
      store.isLoading = false;
      store.error = null;
      const index = store.contacts.findIndex(
        contact => contact.id === payload.id
      );
      store.contacts.splice(index, 1);
    },
    [deleteContact.rejected]: isRejected,
  },
});

export default contactsSlice.reducer;
