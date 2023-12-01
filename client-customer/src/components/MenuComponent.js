import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withRouter from '../utils/withRouter';
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
  }
  render() {
    const cates = this.state.categories.map((item) => {
      return (
        <li key={item._id} className="menu"><Link className='menu text-dark' to={'/product/category/' + item._id}>{item.name}</Link></li>
      );
    });
    return (
      <div className="border-bottom">
        <div className="trangchu">
          <ul className="menu">
          <li className="menu"><Link to = "/">Trang chủ</Link></li>
          <li className="menu"><Link to='/gmap'>Gmap</Link></li>
            {cates}
          </ul>
          <div style={{ display: "inline" }} class="form-switch">
        <input class="form-check-input" type="checkbox" onChange={(e) => this.ckbChangeMode(e)} />&nbsp; Light / Dark
      </div>
        </div>
        <div className="float-right">
        <form className="search">
        <input type="search" placeholder="Enter keyword" className="keyword" value={this.state.txtKeyword} onChange={(e) => { this.setState({ txtKeyword: e.target.value }) }} />
        <button type="submit" value="SEARCH" onClick={(e) => this.btnSearchClick(e)} > <i class="fa fa-search"></i> </button>
        {/* <input type="submit" value="SEARCH" onClick={(e) => this.btnSearchClick(e)} /> */}
      </form>
        </div>
        <div className="float-clear" />
      </div>
    );
  }
  componentDidMount() {
    this.apiGetCategories();
  }
  // apis
  apiGetCategories() {
    axios.get('/api/customer/categories').then((res) => {
      const result = res.data;
      this.setState({ categories: result });
    });
  }
  // event-handlers
  btnSearchClick(e) {
    e.preventDefault();
    this.props.navigate('/product/search/' + this.state.txtKeyword);
  }
  // event-handlers
  ckbChangeMode(e) {
    if (e.target.checked) {
      document.documentElement.setAttribute('data-bs-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-bs-theme', 'light');
    }
  }
}
export default withRouter(Menu);