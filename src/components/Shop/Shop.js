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
}