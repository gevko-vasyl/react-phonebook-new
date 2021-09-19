const Filter = ({ onFilterChange }) => {
  return (
    <>
      <h3>Find contacts by name</h3>
      <input type="text" name="filter" onChange={onFilterChange} />
    </>
  );
};

export default Filter;
