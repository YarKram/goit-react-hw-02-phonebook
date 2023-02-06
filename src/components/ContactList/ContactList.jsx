import { Item, DeleteButton } from './ContactList.styled';
import { nanoid } from 'nanoid';

const ContactList = ({ contacts, deleteContact }) => {
  // const buttonId = nanoid();
  // console.log(buttonId);
  return contacts.map(({ name, id, number }) => {
    return (
      <Item className="decorate" key={id}>
        {name}: {number}
        <DeleteButton
          key={nanoid()}
          onClick={() => {
            deleteContact(id);
          }}
        >
          Delete
        </DeleteButton>
      </Item>
    );
  });
};

export default ContactList;
