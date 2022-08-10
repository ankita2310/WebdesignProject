import React from 'react'
import Footer from '../Components/footer'
/*import Icon from '../Components/icons'*/

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
            <Footer.Row>
                <Footer.Column>
                <Footer.Title>About Us</Footer.Title>
                    <Footer.Link href="#">Story</Footer.Link>
                    <Footer.Link href="#">Clients</Footer.Link>
                    <Footer.Link href="#">Testimonials</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Academics</Footer.Title>
                    <Footer.Link href="#">Postdoc Programs</Footer.Link>
                    <Footer.Link href="#">Masters Programs</Footer.Link>
                    <Footer.Link href="#">Certificate Programs</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Contact Us</Footer.Title>
                    <Footer.Link href="#">United States</Footer.Link>
                    <Footer.Link href="#">United Kingdom</Footer.Link>
                    <Footer.Link href="#">Australia</Footer.Link>
                    <Footer.Link href="#">Support</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Social</Footer.Title>
                    <Footer.Link href="#">Facebook</Footer.Link>
                    <Footer.Link href="#">Instagram</Footer.Link>
                    <Footer.Link href="#">Youtube</Footer.Link>
                    <Footer.Link href="#">Twitter</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}