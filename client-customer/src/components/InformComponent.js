import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MyContext from '../contexts/MyContext';

class Inform extends Component {
  static contextType = MyContext; // using this.context to access global state
  render() {
    return (
      <div className="border-bottom">
        <div className="float-left">
          {this.context.token === '' ?
            <div className='flex'>
              <Link className='menu text-dark' to='/login'>Đăng nhập</Link> 
              <Link className='menu text-dark' to='/signup'>Đăng ký</Link>
              <Link className='menu text-dark' to='/active'>Active</Link>
            </div>
            :
            <div>
              Hello
              <b>{this.context.customer.name}</b>
              <Link to='/home' onClick={() => this.lnkLogoutClick()}>Logout</Link>
              <Link to='/myprofile'>My profile</Link>
              <Link to='/myorders'>My orders</Link>
            </div>
          }
        </div>
        <div className="giohang">
        <Link className='menu text-dark' to='/mycart'><i class="fa fa-shopping-cart"></i></Link> bạn có <b>{this.context.mycart.length}</b> sản phẩm
        </div>
        <div className="float-clear" />
      </div>
    );
  }
  // event-handlers
  lnkLogoutClick() {
    this.context.setToken('');
    this.context.setCustomer(null);
    this.context.setMycart([]);
  }
}
export default Inform;