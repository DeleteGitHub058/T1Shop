import React, { Component } from 'react'

export default class FooterComponents extends Component {
    render() {
        return (
            <div>
                <section>
                    {/* Footer Start */}
                    <footer className="footer body1">
                        <h1 />
                        <div className="container1">
                            <div className="row1">
                                <div className="kl1 footer-col">
                                    <h4>Company</h4>
                                    <ul>
                                        <li><a href="#">about us</a></li>
                                        <li><a href="#">our services</a></li>
                                        <li><a href="#">booking</a></li>
                                        <li><a href="#">private</a></li>
                                    </ul>
                                </div>
                                <div className="kl1 footer-col">
                                    <h4>Get help</h4>
                                    <ul>
                                        <li><a href="#">FAQ</a></li>
                                        <li><a href="#">payment options</a></li>
                                        <li><a href="#">order online</a></li>
                                    </ul>
                                </div>
                                <div className="kl1 footer-col">
                                    <h4>Online booking</h4>
                                    <ul>
                                        <li><a href="#">building</a></li>
                                        <li><a href="#">villa</a></li>
                                        <li><a href="#">homestay</a></li>
                                    </ul>
                                </div>
                                <div className="kl1 footer-col">
                                    <h4>Follow us</h4>
                                    <div className=" social-links">
                                        <a href="#"><i className="fab fa-facebook" /></a>
                                        <a href="#"><i className="fab fa-instagram" /></a>
                                        <a href="#"><i className="fab fa-youtube" /></a>
                                        <a href="#"><i className="fab fa-twitter" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                    {/* Footer End */}

                </section>
            </div>
        )
    }
}
