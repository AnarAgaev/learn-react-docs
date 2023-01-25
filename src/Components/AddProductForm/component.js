export default function AddProductForm(props) {

	const {
		product: {name, price, stocked, category},
		handleClear,
		handleAdd,
		handleChangeName,
		handleChangePrice,
		handleChangeStocked,
		handleChangeCategory
	} = props;

	return (
		<form action='' className='product-list__form product-list__form_add'>
			<h2>Add new product</h2>
			
			<label>
				<span>Name</span>
				<input type='text' 
					className='product-list__input' 
					value={name} 
					onChange={handleChangeName} />
			</label>
			
			<label>
				<span>Price</span>
				<input type='number'
					min='0'
					className='product-list__input product-list__input_number'
					value={price === 0 ? '' : price}
					onChange={handleChangePrice} />
			</label>
			
			<label className='product-list__controller'>
				<input type='checkbox'
					checked={stocked}
					onChange={handleChangeStocked} />
				<span></span>
				<span>Stocked</span>
			</label>
			
			<h3>Category</h3>
			
			<label className="product-list__controller">
				<input type='radio' 
					value="sportingGoods" 
					name='category'
					checked={category.sportingGoods}
					onChange={handleChangeCategory} />
				<span></span>
				<span>Sporting Goods</span>
			</label>
			
			<label className="product-list__controller">
				<input type='radio' 
					value="electronics" 
					name='category'
					checked={category.electronics}
					onChange={handleChangeCategory} />
				<span></span>
				<span>Electronics</span>
			</label>
			
			<div className='product-list__buttons'>
				<button type='button' onClick={handleAdd}>Add</button>
				<button type='button' onClick={handleClear}>Reset</button>
			</div>
		</form> 
	);
}