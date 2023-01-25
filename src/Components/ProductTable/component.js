import './style.scss';

export function ProductTable({collection}) {
  return (
    <div className='product-list__results'>
      <h1 className='product-list__caption'>
        <span>Name</span>
        <span>Price</span>
      </h1>
      {collection}
    </div>
  );  
}