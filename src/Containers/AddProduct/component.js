import React from 'react';
import AddProductForm from '../../Components/AddProductForm';

export default class AddProduct extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			price: 0,
			stocked: false,
			category: {
				sportingGoods: false,
				electronics: false
			}
		}
	}

	handleClear = () => {
		this.setState({
			name: '',
			price: 0,
			stocked: false,
			category: {
				sportingGoods: false,
				electronics: false
			}
		});
	}

	handleAdd = () => {
		const product = {...this.state};
		
		product.category = product.category.sportingGoods
			? 'Sporting Goods'
			: product.category.electronics
					? 'Electronics'
					: false;

		const isValid = product.name !== ''
			&& product.price !== 0
			&& product.category;

		product.price = '$' + product.price; 

		if (isValid) {
			this.props.handleAdd(product);
		}
	}

	handleChangeName = (e) => {
		this.setState({name: e.target.value});
	}

	handleChangePrice = (e) => {
		const value = e.target.value === '' 
			? 0 
			: parseFloat(e.target.value)

		this.setState({price: value});
	}

	handleChangeStocked = (e) => {
		this.setState({stocked: e.target.checked});
	}

	handleChangeCategory = (e) => {
		this.setState({
			category: {
				sportingGoods: e.target.value === 'sportingGoods' ? true : false,
				electronics: e.target.value === 'electronics' ? true : false,
			}
		});
	}

	render() {
		return (
			<AddProductForm 
				product={{
					name: this.state.name,
					price: this.state.price,
					stocked: this.state.stocked,
					category: this.state.category
				}} 
				handleClear={this.handleClear}
				handleAdd={this.handleAdd}
				handleChangeName={this.handleChangeName}
				handleChangePrice={this.handleChangePrice}
				handleChangeStocked={this.handleChangeStocked}
				handleChangeCategory={this.handleChangeCategory} />
		);
	}
}