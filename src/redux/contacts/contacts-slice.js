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

const isRejected = (store, action) => {
  store.isLoading = false;
  store.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  extraReducers: {
    [fetchContacts.pending]: isPending,
    [fetchContacts.fulfilled](store, action) {
      store.isLoading = false;
      store.error = null;
      store.items = action.payload;
    },
    [fetchContacts.rejected]: isRejected,
    [addContact.pending]: isPending,
    [addContact.fulfilled](store, action) {
      store.isLoading = false;
      store.error = null;
      store.items.push(action.payload);
    },
    [addContact.rejected]: isRejected,
    [deleteContact.pending]: isPending,
    [deleteContact.fulfilled](store, action) {
      store.isLoading = false;
      store.error = null;

      const index = store.items.findIndex(
        contact => contact.id === action.payload.id
      );
      store.items.splice(index, 1);
    },
    [deleteContact.rejected]: isRejected,
  },
});

export default contactsSlice.reducer;
