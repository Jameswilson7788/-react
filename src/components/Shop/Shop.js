import React from 'react'
import { Link } from 'react-router-dom'
import './Shop.css'

import ShopItem from '../ShopItem/ShopItem'
import Cart from '../Cart/Cart'
import Data from '../../Data'

import  {addToDatabaseCart, getDatabaseCart,  } from '../../utils/DatabaseManager'

class Shop extends React.Component {
    constructor () {
        super()
        this.state = {
            items:[],
            cart:[],
            cartCount:{}
        }
        this.addToCart = this.addToCart.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
    }
    componentDidMount () {
        let topTen = Data.slice(0, 10)
        this.setState({
            items:topTen
        })

        let cart = getDatabaseCart()
        let keys = Object.keys(cart)
        let items = keys.map((item) => {
            let item = Data.find(item => item.key === key)
            item.quantity = cart[key]
            return item
        })

        this.setState({
            cart: items
        })
    }

    addToCart(key) {
        var item = this.state.items.find(itm => itm.key === key);
        var newCart = [...this.state.cart];
        newCart.push(item);
        

        var newCartCount = Object.assign({}, this.state.cartCount);
        var newCount = (newCartCount[key] || 0) + 1;
        newCartCount[key] = newCount;
        
        this.setState({
            cart: newCart,
            cartCount: newCartCount
        });

        addToDatabaseCart(key, newCount);
    }

    handleSearch(event) {
        var searchText = event.target.value.toLowerCase();
        var matched = Data.filter(item => item.category.toLowerCase().includes(searchText) || item.name.toLowerCase().includes(searchText));
        var first10 = matched.slice(0, 10);
        this.setState({
            items:first10
        });
    }

    render() {
        return (
            <div>
                <div className="search-container">
                    <input type="text" className="search-input" onKeyUp={this.handleSearch} placeholder="type here to search" />
                    <Link to="/review">
                        <span className="cart-count">{this.state.cart.length}</span>
                    </Link>
                </div>
                <div className="shop-container">
                    <div className="items-container">
                        {this.state.items.map(item => <ShopItem key={item.key} item={item} addToCart={this.addToCart}></ShopItem> )}
                    </div>
                    <div className="cart-container">
                        <Cart cart={this.state.cart}>
                            <Link to="/review">
                                <button>
                                    <span>Review your order</span>
                                </button>
                            </Link>
                        </Cart>
                    </div>
                </div>
            </div>
        );
    }
}

export default Shop;