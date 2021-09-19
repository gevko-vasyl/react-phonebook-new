const ContactItem = ({ name, number }) => {
  return (
    <li>
      <p>{name}</p>
      <p>{number}</p>
    </li>
  );
};

export default ContactItem;
