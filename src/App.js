import React from "react";
import { connect } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import "./App.css";

<<<<<<< HEAD
import { Template } from "./components/mainComponents";
// import Header from './components/partiais/Header';
=======
import {Template} from "./components/MainComponents";
import Header from './components/Header/index'
>>>>>>> 6d1f63fc1e54a5a231fe1e286f4165136ef2a172
// import Footer from './components/partiais/Footer';

import Routes from "./Routes";

const Page = (props) => {
<<<<<<< HEAD
    return (
        <BrowserRouter>
            <Template>
                {/* <Header/> */}
                <Routes />
                {/* <Footer/> */}
            </Template>
        </BrowserRouter>
    );
};
=======
  return (
    <BrowserRouter>
       <Template>
        <Header/>
        <Routes/>
       {/* <Footer/> */}
        </Template> 
    </BrowserRouter>
  );
}
>>>>>>> 6d1f63fc1e54a5a231fe1e286f4165136ef2a172

const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
