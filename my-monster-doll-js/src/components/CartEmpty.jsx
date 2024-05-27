import React from 'react'
import { Link } from 'react-router-dom';

import cartEmptyImg from '../assets/img/empty-cart.png';

const CartEmpty = () => {
  return (
    <div className="cart cart--empty">
    <h2>
      The cart is empty<span>😕</span>
    </h2>
    <p>
      Possible, you have not ordered  our dolls yet.
      <br />
      Back to main page to order a new Monster Doll.
    </p>
    <img src={cartEmptyImg} alt="Empty cart" />
    <Link to="/" className="button button--black">
      <span>Back</span>
    </Link>
  </div>
  )
}

export default CartEmpty
