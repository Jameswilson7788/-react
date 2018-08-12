import React from 'react'

class Cart extends React.Component {
    constructor() {
        super()
        this.price = 0
        this.shipping = 0
        this.beforeTax = 0
        this.tax = 0
        this.total = 0
    }

    calculateCost () {
        let anotherCost = 0
        let shippingPrice = 0
        let itemPrice = this.props.cart.reduce((prev, item)=> item.price * item.quantity || 1 + prev, anotherCost)
        shippingPrice = itemPrice * 0.1

        this.price = this.roundTwoDecimal(itemPrice)
        this.shipping = this.roundTwoDecimal(shippingPrice)
        this.tax = this.roundTwoDecimal((this.price + this.shippingPrice) * 0.1)
        this.beforeTax = this.roundTwoDecimal(this.price + this.shippingPrice)
        this.total = this.roundTwoDecimal(this.price + this.shipping + this.tax)
    }

    roundTwoDecimal (number) {
        return Math.round(number * 100) / 100
    }

    render () {
        const cart = this.props.cart

        this.calculateCost()
        return (
            <div className='cart'>
                <h3>訂單摘要</h3>
                <table>
                    <tbody>
                        <tr>
                            <td>物品：</td>
                            <td>${ this.price }</td>
                        </tr>
                        <tr>
                            <td>運費：</td>
                            <td>${ this.shippingPrice }</td>
                        </tr>
                        <tr>
                            <td>總計(稅前)：</td>
                            <td>${ this.beforTax }</td>
                        </tr>
                        <tr>
                            <td>稅總計：</td>
                            <td>${ this.Tax }</td>
                        </tr>
                        <tr>
                            <td>總計：</td>
                            <td>${ this.total }</td>
                        </tr>
                    </tbody>
                </table>
                {this.props.children}
            </div>
        )
    }
}

export default Cart