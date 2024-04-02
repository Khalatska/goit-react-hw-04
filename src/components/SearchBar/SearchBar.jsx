import toast, { Toaster } from "react-hot-toast";

const SearchBar = ({ handleSearch }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const query = evt.target.elements.query.value;
    if (query.trim() === "") {
      toast.error("Please enter search term!");
      return;
    }
    handleSearch(query);
    evt.target.reset();
  };

  return (
    <div>
      <header>
        <Toaster position="top-right" reverseOrder={true} />
        <form onSubmit={handleSubmit}>
          <input
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit">Search</button>
        </form>
      </header>
    </div>
  );
};

export default SearchBar;
