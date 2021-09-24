const ContactItem = ({ name, number, onDelete }) => {
  return (
    <li>
      <p>{name}</p>
      <p>{number}</p>
      <button onClick={() => onDelete(number)}>Delete</button>
    </li>
  );
};

export default ContactItem;
