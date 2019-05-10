import React from 'react'
import './ProductCardStyle.css'
import store from '../store';


class ProductCard extends React.Component {
    addToCart(product){
        store.dispatch({
            type: 'ADD_TO_CART',
            product
        })
    }
    render() {
        const { title, description, price, img, id} = this.props.product
        return (
            <div>

                <div className="ui card">
                <div className="image">
                <img className="item_image" width={200} alt={description} src={img} />
                </div>
                <div className="content">
                    <a className="header">
                    <div className="item_segment" onClick={() => this.props.linkToDetails(id)}>
                    <div className="item__title">{title}</div>
                    </div>
                    </a>
                    <div className="meta">
                    <span className="date">
                    <div className="item__price">{price}</div>
                    </span>
                    </div>
                    <div className="description">
                    <div className="item__description">{description}</div>
                    </div>
                </div>
                <div className="extra content">
                    <a>
                    <button className="ui button">Add to Cart</button>
                    </a>
                </div>
                </div>

            {/* <div className="item_segment" onClick={() => this.props.linkToDetails(id)}> */}
                  {/* <img className="item_image" width={200} alt={description} src={img} /> */}
            {/* <div className="item__title">{title}</div> */}
            {/* <div className="item__description">{description}</div> */}
            {/* <div className="item__price">{price}</div> */}
            {/* </div> */}
        </div>
        )
    }
}



export default ProductCard;
