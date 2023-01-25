import './style.scss';

export default function ProductItem({
  item, id, 
  handleDelete, 
  handleStocked}) {

  const { name, price, stocked } = item;
  const clazz = stocked ? '' : 'stocked';
  const stockedClazz = stocked 
    ? 'product-list__btn-stocked' 
    : 'product-list__btn-stocked active'

  return <li>
    <span className={clazz}>{name}</span>
    <span className={clazz}>{price}</span>
    <span className='product-list__btn-wrapper'>
      <button className={stockedClazz} 
        onClick={() => handleStocked(id)} ></button>
      <button className='product-list__btn-delite' 
        onClick={() => handleDelete(id)}></button>
    </span>
  </li>;
}
