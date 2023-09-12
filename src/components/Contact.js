import React, { Component } from 'react';
import Emoji from 'reactjs-emojis';
class Contact extends Component {
    render() {
        return (
            <section class="site-section" id="section-contact">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 mb-5">
                            <div class="section-heading text-center">
                                <h2>Get <strong>In Touch</strong></h2>
                            </div>
                        </div>

                        <div class="col-md-12 pl-md-5">
                            <ul class="site-contact-details center c2">
                                <li>
                                    <p class=" c1">Email <Emoji name="email" size="30" /></p>
                                    manvirsahi123@gmail.com
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}

export default Contact;