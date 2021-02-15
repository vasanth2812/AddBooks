import SearchField from 'react-search-field';
import PropTypes from 'prop-types';
import './Search.scss';

const Search = ({ search }) => {
  const handleChange = (value) => {
    search(value);
  };
  return (
    <>
      <SearchField placeholder="Search..." onChange={handleChange} />
    </>
  );
};

Search.propTypes = {
  search: PropTypes.func.isRequired,
};

export default Search;
