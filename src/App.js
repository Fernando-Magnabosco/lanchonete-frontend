import React from "react";
import { connect } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import "./App.css";

import { Template } from "./components/mainComponents";
<<<<<<< HEAD
import Header from './components/Header';
=======

import Header from "./components/Header";
>>>>>>> 8b6f1748c3ad909c51fcc6f03fba13279b52c9c5
// import Footer from './components/partiais/Footer';

import Routes from "./Routes";

const Page = (props) => {
    return (
        <BrowserRouter>
            <Template>
<<<<<<< HEAD
                <Header/>
=======
                <Header />
>>>>>>> 8b6f1748c3ad909c51fcc6f03fba13279b52c9c5
                <Routes />
                {/* <Footer/> */}
            </Template>
        </BrowserRouter>
    );
};

const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
