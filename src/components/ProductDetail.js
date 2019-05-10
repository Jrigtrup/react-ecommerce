import React from 'react'
import store from '../store'
import ProductCard from './ProductCard'

class ProductDetail extends React.Component {

    renderProduct() {
        console.log(this.props)
        return store.getState().products.filter(p => p.id === Number(this.props.match.params.productId)).map( p => {
            return <ProductCard key={p.id} product={p} linkToDetails={this.linkToDetails}/>
        })
    }

    render() {
        
        return (
            <div>{this.renderProduct()}</div>
        )
    }
}

export default ProductDetail;