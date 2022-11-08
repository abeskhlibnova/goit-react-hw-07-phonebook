import styled from 'styled-components';

export const PhonebookBox = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: #fafafa;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.div`
  width: 100%;
  max-width: 820px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
export const PhonebookContainer = styled.div`
  background-color: #1abc9c;
  padding: 30px;
`;

export const ContactFilterForm = styled.div`
  color: #1abc9c;
  padding: 30px;
`;
export const PhonebookTitle = styled.h1`
  font-size: 40px;
  margin-bottom: 20px;
  text-align: center;
  color: #fff;
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;
export const Input = styled.input`
  width: 70%;
  outline: none;
  border: 2px solid #fafafa;
  background: none;
  padding: 10px 20px;
  color: #fff;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 0.5px;
  border-radius: 25px;

  &:hover {
    background-color: #187f6b;
  }
`;
export const Label = styled.label`
  padding: 8px 8px;
  color: #fafafa;
  font-size: 16px;
  font-weight: 400;
  pointer-events: none;
  z-index: 1000;
`;

export const AddContactButton = styled.button`
  margin-bottom: 20px;
  padding: 10px;
  border: 2px solid #fff;
  border-radius: 10px;
  font-size: 20px;
  background-color: inherit;
  cursor: pointer;
  color: #fff;

  &:hover {
    background-color: #187f6b;
  }
`;

export const ContactsTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 700;
  margin-right: 40px;
  text-align: center;
`;
export const ContactsList = styled.ul`
  margin-left: 20px;
  list-style-type: circle;
  justify-content: space-between;
`;
export const ContactsItem = styled.li`
  display: flex;
  justify-content: space-between;
  position: relative;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 12px;
  list-style-type: circle;
`;
export const RemoveContactButton = styled.button`
  background-color: inherit;
  border: none;
  cursor: pointer;
  margin-left: 10px;
`;

export const FilterTitle = styled.p`
  font-size: 20px;
  margin-bottom: 10px;
`;

export const FilterInput = styled.input`
  width: 70%;
  outline: none;
  border: 2px solid #1abc9c;
  background: none;
  padding: 10px 20px;
  color: #1abc9c;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 0.5px;
  border-radius: 25px;
  transition: 0.3s;
  margin-bottom: 20px;
`;
