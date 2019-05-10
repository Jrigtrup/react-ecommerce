import React from 'react'
import ProductCard from './ProductCard'
import store from '../store';

class ProductsPage extends React.Component {

    linkToDetails = (id) => {
        this.props.history.push(`/product/${id}`)
    }

    renderProducts() {
        return store.getState().products.map( p => {
            return <ProductCard key={p.id} product={p} linkToDetails={this.linkToDetails}/>
        })
    }

    render() {
        return (
            <div className='ui cards'>
            {this.renderProducts()}
            </div>
        )
    }
}

export default ProductsPage;