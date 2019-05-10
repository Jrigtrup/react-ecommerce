import React from 'react'
import ProductCard from './ProductCard'
import store from '../store';

class ProductsPage extends React.Component {

    linkToDetails = (id) => {
        this.props.history.push(`/product/${id}`)
    }

    renderProducts() {
        console.log(this.props)
        return store.getState().products.map( p => {
            return <ProductCard key={p.id} product={p} linkToDetails={this.linkToDetails}/>
        })
    }

    render() {
        return (
            <div className='ui card'>
            <div>{this.renderProducts()}</div>
            </div>
        )
    }
}

export default ProductsPage;