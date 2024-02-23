import React from "react";
import "./style.css";
import {WhatWeDo, Company, Insights} from "../Header/HeaderData";
import { Col, Row } from "antd";
import logo from "../Header/logo.png";

const Footer = () => {
    return (
        <div className="container">
            <Row justify="start" align="middle">
            <img className="logo" src={logo} alt="logo" />
            </Row>
            <Row justify="start" align="middle">
            <p className="font-bold text-[1.1rem]">Location: </p>
            </Row>
            
            <p className="text-start pl-20 leading-9"> * 100 Đ. Lê Lai, Phường Phạm Ngũ Lão, Quận 1, Thành phố Hồ Chí Minh, Việt Nam</p>
            <p className="text-start pl-20 leading-9"> * 39 Bạch Đằng, Phường 2, Tân Bình, Thành phố Hồ Chí Minh, Việt Nam</p>
            <p className="text-start pl-20 leading-9"> * 24 P. Tôn Đức Thắng, Cát Linh, Đống Đa, Hà Nội, Việt Nam</p>
            <Row justify="start" align="middle">
            <p className="font-bold text-[1.1rem] pt-5">Email contact: </p>
            </Row>
            <p className="text-start pl-20 leading-9 underline"><a  href="mailto: sales@mdpgroup.digital" className="underline">sales@mdpgroup.digital</a></p>
            
        </div>






// <div className="container">
//             <Row justify="center" align="middle" >
                

//                 <Col xs={24} sm={24} md={24} lg={6} xl={6} className="" >
//                     <img className=" w-[80%]" src={logo} alt="logo" />
//                 </Col>
//                 <Col xs={24} sm={24} md={24} lg={18} xl={18} className="pl-20 pvmax:max-lg:pl-0 pvmax:max-md:pl-0" >
//                     <Row justify="start" align="middle">
//                         <p className="font-bold text-[1.1rem]">Location: </p>
//                     </Row>

//                     <p className="text-start pl-20  leading-9"> * 100 Đ. Lê Lai, Phường Phạm Ngũ Lão, Quận 1, Thành phố Hồ Chí Minh, Việt Nam</p>
//                     <p className="text-start pl-20 leading-9"> * 39 Bạch Đằng, Phường 2, Tân Bình, Thành phố Hồ Chí Minh, Việt Nam</p>
//                     <p className="text-start pl-20 leading-9"> * 24 P. Tôn Đức Thắng, Cát Linh, Đống Đa, Hà Nội, Việt Nam</p>
//                     <Row justify="start" align="middle">
//                         <p className="font-bold text-[1.1rem] pt-5">Email contact: </p>
//                     </Row>
//                     <p className="text-start pl-20 leading-9 underline"><a href="mailto: sales@mdpgroup.digital" className="underline">sales@mdpgroup.digital</a></p>
//                 </Col>
//             </Row>


//         </div>
    );
    }
export default Footer;