import React, { Fragment } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import LoginForm from '../components/LoginForm'
import './style.css'
class LoginPage extends React.Component {
    render() {
        return (
            <Fragment>
                <Header />
                <LoginForm />
                <Footer />
            </Fragment>
        )
    }
}

export default LoginPage