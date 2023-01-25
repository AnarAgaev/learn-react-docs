import './style.scss';

export default function SearchBar ({ 
  filterText, 
  filterChecker, 
  handleFilter, 
  handleCheck }) {

  return (
    <form action="" className='product-list__form product-list__form_filter'>
      <input type='text'
        value={filterText}
        className='product-list__input' 
        placeholder='Sign search query here' 
        onChange={handleFilter} />

      <label className='product-list__controller'>
        <input type='checkbox' 
          checked={filterChecker}
          placeholder='Sign search query' 
          onChange={handleCheck} />
        <span></span>
        Only show products in stock
      </label>
    </form>
  );  
}