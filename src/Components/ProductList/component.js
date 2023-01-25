import ProductItem from '../ProductItem';
import './style.scss';

export default function ProductList({
  title, items, 
  handleDelete, 
  handleStocked}) {

  return (
    <ul className='product-list__items'>
      <li className='product-list__title'>{title}</li>
      {items.map(item => (
        <ProductItem key={item.id} 
          id={item.id} 
          item={item} 
          handleDelete={handleDelete} 
          handleStocked={handleStocked} />
      ))}
    </ul>
  );
}