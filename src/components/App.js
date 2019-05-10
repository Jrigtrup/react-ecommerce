import React from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import ProductsPage from './ProductsPage'
import ProductDetail from './ProductDetail'
import Cart from './Cart'
import store from '../store'
import "../index.css"

class App extends React.Component {

    componentDidMount() {
        store.subscribe(() => this.forceUpdate())
        fetch('https://my-json-server.typicode.com/tdmichaelis/typicode/products')
            .then((res) => res.json())
            .then((items) => {
                store.dispatch({
                    type: 'SET_PRODUCTS', 
                    products: items
                })
                console.log(items)
            })
    }

    render() {
        return (
            <div>
                <Router>
                <div>
                    <div>

                        <div className="ui secondary pointing menu">
                            <Link className="active item" to='/'>
                            Products
                            </Link>
                            <Link className="item" to='/cart'>
                                Cart
                            </Link>
                        <div className="right menu">
                            <a className="ui item">
                        <form>
                        <label>
                        <div className="ui input">
                            <input placeholder="Search..." type="text" name="name" />
                        </div>
                        </label>
                        </form>
                            </a>
                        </div>
                        </div>
                        <p></p>
                    </div>
                    <div>
                        {/* <Link to='/'>
                            Products
                        </Link> */}
                        {/* <Link to='/cart'>
                            _Cart
                        </Link> */}
                    </div>
                </div>
                    <Switch>
                        <Route exact path='/' component={ProductsPage}/>
                        <Route exact path='/product/:productId' component={ProductDetail}/>
                        <Route exact path='/cart' component={Cart}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App;
