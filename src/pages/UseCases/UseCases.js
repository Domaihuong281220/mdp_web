/** @format */

import React from "react";
import "./style.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Img1 from "../../assets/mdpcanva1.jpg";
import Img2 from "../../assets/mdpcanva2.jpg";
import Img3 from "../../assets/mdpcanva3.jpg";

import { Navigation, Pagination } from 'swiper/modules';

const UseCases = () => {



    return (
        <>

            <div className=" h-[15rem] pvmax:max-lg:h-[10rem] w-[100%] bg-gradient-to-r from-[#00C7B0] to-[#7926F0] flex items-center solution gradient-bar">
                <div className="  w-[67.37%] mx-auto pvmax:max-lg:w-[90%] ">
                    <p className="text-white text-8xl  font-bold text-start  w-[60%] md:max-lg:text-5xl pvmax:max-lg:w-[100%] pvmax:max-md:text-5xl">
                        Use cases
                    </p>
                </div>
            </div>
            {/* 1 */}
            {/* <div className="w-full h-fit pvmax:max-md:h-fit mt-[7.5rem] pvmax:max-md:mt-8 h110 flex flex-col content-center justify-center items-center">
                <div className="w-[67.37%] h-fit flex pvmax:max-md:flex-col  pvmax:max-md:px-0 pb-16">
                    <div className="w-[50%] pvmax:max-md:w-full h-fit pvmax:max-md:h-fit text-start pvmax:max-md:text-center flex flex-col items-start">
                        <p className="text-[1rem] w-full font-mono text-slate-300 py-2">Use Cases</p>
                        <p className=" w-[70%] text-start pvmax:max-md:w-full pvmax:max-md:text-center pvmax:max-md:pb-10 font-semibold text-5xl text-[#4fb645]" >Digital Banking</p>
                    </div>
                    <div className="w-[50%] pl-[2rem] pvmax:max-md:pl-0 pvmax:max-md:pl-0 pvmax:max-md:w-full h-fit text-justify text-[1.1rem]">
                        MDP's Digital Banking solution revolutionizes traditional banking by offering customers a seamless and intuitive digital banking experience. Key features include:
                        Account Management: Customers can view account balances, transaction history, and manage account preferences online or through mobile apps.
                        Payments and Transfers: Secure and convenient fund transfers, bill payments, and peer-to-peer payments are facilitated, enhancing convenience for customers.
                        Customer Support: Access to customer support services such as chatbots, FAQs, and in-app messaging ensures timely assistance for customer inquiries and issues.
                        Personal Finance Management: Tools for budgeting, expense tracking, and financial goal setting empower customers to take control of their finances.

                    </div>
                </div>
                <div className="w-full h-[40%] pvmax:max-md:h-fit flex items-center content-center justify-center pvmax:max-md:flex-col">
                    <div className="w-[67.37%]  h-fit flex flex-row pvmax:max-md:flex-col">
                        <div className="w-[50%] pvmax:max-md:w-full h-fit pvmax:max-md:h-fit pr-8 pvmax:max-md:pr-0 pvmax:max-md:pr-0 pvmax:max-md:pb-6 usecases-img">
                            <img className="w-full h-full  rounded-[1rem]" src={Img2}></img>
                        </div>
                        <div className="w-[50%] pvmax:max-md:w-full h-fit pvmax:max-md:h-fit pvmax:max-md:pl-0 pl-8 usecases-img">
                            <img className="w-full h-full rounded-[1rem]" src={Img3}></img>
                        </div>
                    </div>

                </div>
            </div> */}




            {/* 1 */}
            <div className="w-full solution-intro-container h-fit pvmax:max-md:h-fit flex items-center content-center justify-center pvmax:max-md:mt-8 flex-row pvmax:max-md:flex-col py-20 mt-10 mb-10 pvmax:max-md:py-0 pvmax:max-md:my-0 pvmax:max-md:px-8 ">
                <div className="w-[67.37%] items-center pvmax:max-md:w-[80%]  h-fit flex flex-row pvmax:max-md:flex-col">
                    
                    <div className="w-[50%] pvmax:max-md:w-full max-h-full   pvmax:max-md:pt-8 pr-8  pvmax:max-md:pr-0 flex justify-center content-center items-center">
                        <img className="w-full h-fit rounded-[1rem] pvmax:max-lg:h-[18rem]" src={Img1}></img>
                    </div>
                    <div className="w-[50%] pvmax:max-md:w-full h-full flex flex-col justify-center align-middle">
                        <p className="text-[1rem] font-mono text-slate-300 py-2 text-start pvmax:max-md:text-center">Use Cases</p>
                        <p className="w-[70%] pvmax:max-md:w-full text-start pvmax:max-md:text-center text-5xl text-[#4fb645] pb-8 font-semibold">Digital Banking</p>
                        <p className="text-justify pr-[2rem] pvmax:max-md:pr-0 text-[1.1rem]">
                        MDP's Digital Banking solution revolutionizes traditional banking by offering customers a seamless and intuitive digital banking experience. Key features include:
                        Account Management: Customers can view account balances, transaction history, and manage account preferences online or through mobile apps.
                        Payments and Transfers: Secure and convenient fund transfers, bill payments, and peer-to-peer payments are facilitated, enhancing convenience for customers.
                        Customer Support: Access to customer support services such as chatbots, FAQs, and in-app messaging ensures timely assistance for customer inquiries and issues.
                        Personal Finance Management: Tools for budgeting, expense tracking, and financial goal setting empower customers to take control of their finances.
                        </p>
                    </div>
                </div>


            </div>




            {/* 2 */}
            <div className="w-full h-fit pvmax:max-md:h-fit flex items-center content-center justify-center pvmax:max-md:mt-8 flex-row pvmax:max-md:flex-col py-20 mt-10 mb-10 pvmax:max-md:py-0 pvmax:max-md:my-0 pvmax:max-md:px-8 ">
                <div className="w-[67.37%] items-center pvmax:max-md:w-[80%]  h-fit flex flex-row pvmax:max-md:flex-col">
                    <div className="w-[50%] pvmax:max-md:w-full h-full flex flex-col justify-center align-middle">
                        <p className="text-[1rem] font-mono text-slate-300 py-2 text-start pvmax:max-md:text-center">Use Cases</p>
                        <p className="w-[70%] pvmax:max-md:w-full text-start pvmax:max-md:text-center text-5xl text-[#4fb645] pb-8 font-semibold">Digital Payment</p>
                        <p className="text-justify pr-[2rem] pvmax:max-md:pr-0 text-[1.1rem]">
                            MDP's Digital Payment solution offers secure, convenient, and versatile payment options for businesses and consumers alike. Features include:
                            Card Payments: Acceptance of debit/credit card payments through POS terminals, e-commerce websites, and mobile apps, ensuring a seamless checkout experience.
                            Mobile Wallet Integration: Integration with popular mobile wallet platforms allows customers to make payments using their preferred digital wallet.
                            Contactless Payments: Support for NFC-based contactless payments enhances speed and convenience for in-store transactions.
                            Online Payment Gateway: Robust payment gateway solutions facilitate secure online transactions for e-commerce merchants, ensuring smooth checkout experiences for customers.
                        </p>
                    </div>
                    <div className="w-[50%] pvmax:max-md:w-full max-h-full  pl-8  pvmax:max-md:pl-0 flex justify-center content-center items-center">
                        <img className="w-full h-fit rounded-[1rem] pvmax:max-lg:h-[18rem]" src={Img1}></img>
                    </div>
                </div>


            </div>


            {/* 3 */}
            <div className="w-full h-fit pvmax:max-md:h-fit flex items-center content-center justify-center pvmax:max-md:mt-8 flex-row pvmax:max-md:flex-col py-20 mt-10 mb-10 pvmax:max-md:py-0 pvmax:max-md:my-0 pvmax:max-md:px-8 ">
                <div className="w-[67.37%] items-center pvmax:max-md:w-[80%]  h-fit flex flex-row pvmax:max-md:flex-col">
                    
                    <div className="w-[50%] pvmax:max-md:w-full max-h-full  pr-8  pvmax:max-md:pr-0 flex justify-center content-center items-center">
                        <img className="w-full h-fit rounded-[1rem] pvmax:max-lg:h-[18rem]" src={Img1}></img>
                    </div>
                    <div className="w-[50%] pvmax:max-md:w-full h-full flex flex-col justify-center align-middle">
                        <p className="text-[1rem] font-mono text-slate-300 py-2 text-start pvmax:max-md:text-center">Use Cases</p>
                        <p className="w-[70%] pvmax:max-md:w-full text-start pvmax:max-md:text-center text-5xl text-[#4fb645] pb-8 font-semibold">Consumer Lending</p>
                        <p className="text-justify pr-[2rem] pvmax:max-md:pr-0 text-[1.1rem]">
                        MDP's Consumer Lending solution empowers banks and financial institutions to offer a wide range of consumer loan products to individuals. Features include:
                        Personal Loans: Quick and easy access to personal loans for various purposes such as home renovation, education, or medical expenses.
                        Auto Loans: Financing options for purchasing new or used vehicles, with flexible terms and competitive interest rates.
                        Consumer Financing: Installment plans and financing options for consumer goods and services, such as electronics, furniture, or vacations.
                        Online Loan Applications: Streamlined digital application processes with instant approvals and disbursements, enhancing customer convenience and satisfaction.
                        </p>
                    </div>
                </div>


            </div>



            {/* 3 */}
            {/* <div className="w-full h-fit pvmax:max-md:h-fit  h110 flex flex-col content-center justify-center items-center pvmax:max-md:mt-8">
                <div className="w-[67.37%] h-fit flex pvmax:max-md:flex-col  pvmax:max-md:px-0 pb-16">
                    <div className="w-[50%] pvmax:max-md:w-full h-fit pvmax:max-md:h-fit text-start flex flex-col items-start">
                        <p className="text-[1rem] w-full font-mono text-slate-300 py-2 pvmax:max-md:text-center">Use Cases</p>
                        <p className=" w-[70%] pvmax:max-md:w-full pvmax:max-md:text-center pvmax:max-md:pb-10 font-semibold text-5xl text-[#4fb645]" >Consumer Lending</p>
                    </div>
                    <div className="w-[50%] pl-[2rem] pvmax:max-md:pl-0 pvmax:max-md:w-full h-fit text-justify text-[1.1rem]">
                        MDP's Consumer Lending solution empowers banks and financial institutions to offer a wide range of consumer loan products to individuals. Features include:
                        Personal Loans: Quick and easy access to personal loans for various purposes such as home renovation, education, or medical expenses.
                        Auto Loans: Financing options for purchasing new or used vehicles, with flexible terms and competitive interest rates.
                        Consumer Financing: Installment plans and financing options for consumer goods and services, such as electronics, furniture, or vacations.
                        Online Loan Applications: Streamlined digital application processes with instant approvals and disbursements, enhancing customer convenience and satisfaction.


                    </div>
                </div>
                <div className="w-full h-[40%] pvmax:max-md:h-fit flex items-center content-center justify-center pvmax:max-md:flex-col ">
                    <div className="w-[67.37%] h-fit flex flex-row pvmax:max-md:flex-col">
                        <div className="w-[50%] pvmax:max-md:w-full h-fit pvmax:max-md:h-fit pr-8 pvmax:max-md:pr-0 pvmax:max-md:pb-6 usecases-img">
                            <img className="w-full h-full  rounded-[1rem]" src={Img3}></img>
                        </div>
                        <div className="w-[50%] pvmax:max-md:w-full h-fit pvmax:max-md:h-fit pvmax:max-md:pl-0 pl-8 usecases-img">
                            <img className="w-full h-full rounded-[1rem]" src={Img2}></img>
                        </div>
                    </div>

                </div>
            </div> */}


            {/* 4 */}
            <div className="w-full h-fit pvmax:max-md:h-fit flex items-center content-center justify-center pvmax:max-md:mt-8 flex-row pvmax:max-md:flex-col py-20 mt-10 mb-10 pvmax:max-md:py-0 pvmax:max-md:my-0 pvmax:max-md:px-8 ">
                <div className="w-[67.37%] items-center pvmax:max-md:w-[80%]  h-fit flex flex-row pvmax:max-md:flex-col">
                    <div className="w-[50%] pvmax:max-md:w-full h-full flex flex-col justify-center align-middle">
                        <p className="text-[1rem] font-mono text-slate-300 py-2 text-start pvmax:max-md:text-center">Use Cases</p>
                        <p className="w-[70%] pvmax:max-md:w-full text-start pvmax:max-md:text-center text-5xl text-[#4fb645] pb-8 font-semibold">SME Lending</p>
                        <p className="text-justify pr-[2rem] pvmax:max-md:pr-0 text-[1.1rem]">
                        MDP's SME Lending solution enables banks and financial institutions to cater to the financing needs of small and medium-sized enterprises (SMEs). Features include:
                            Working Capital Loans: Flexible financing options to support SMEs' day-to-day operations, inventory management, and cash flow needs.
                            Equipment Financing: Financing solutions for purchasing or leasing equipment and machinery, enabling SMEs to invest in business growth and productivity.
                            Trade Finance: Letters of credit, invoice financing, and other trade finance solutions to facilitate international trade and supply chain financing for SMEs.
                            Digital Loan Origination: Digital loan application and approval processes tailored to the needs of SMEs, with quick turnaround times and minimal paperwork requirements.
                        </p>
                    </div>
                    <div className="w-[50%] pvmax:max-md:w-full max-h-full  pl-8  pvmax:max-md:pl-0 flex justify-center content-center items-center">
                        <img className="w-full h-fit rounded-[1rem] pvmax:max-lg:h-[18rem]" src={Img1}></img>
                    </div>
                </div>


            </div>





            {/* 4 */}
            {/* <div className="w-full h-fit pvmax:max-md:h-fit flex items-center content-center justify-center  flex-row pvmax:max-md:flex-col py-20 my-10 pvmax:max-md:py-0 pvmax:max-md:my-0 pvmax:max-md:px-8 ">
                <div className="w-[67.37%] pvmax:max-md:w-[80%] h-fit flex flex-row pvmax:max-md:flex-col">
                    <div className="w-[50%] pvmax:max-md:w-full max-h-full pt-32 pr-8 pvmax:max-md:hidden  pvmax:max-md:pr-0 flex justify-center content-center items-center">
                        <img className="w-full h-fit rounded-[1rem]" src={Img1}></img>
                    </div>
                    <div className="w-[50%] pl-[2rem] pvmax:max-md:pl-0 pvmax:max-md:w-full h-[100%] flex flex-col justify-center pvmax:max-md:mt-8 align-middle">
                        <p className="text-[1rem] pvmax:max-md:w-full font-mono text-slate-300 py-2 text-start pvmax:max-md:text-center">Use Cases</p>
                        <p className="w-[70%]  pvmax:max-md:w-full text-start pvmax:max-md:text-center text-5xl text-[#4fb645] pb-8 font-semibold">SME Lending</p>
                        <p className="text-justify text-[1.1rem] pvmax:max-md:w-full">
                            MDP's SME Lending solution enables banks and financial institutions to cater to the financing needs of small and medium-sized enterprises (SMEs). Features include:
                            Working Capital Loans: Flexible financing options to support SMEs' day-to-day operations, inventory management, and cash flow needs.
                            Equipment Financing: Financing solutions for purchasing or leasing equipment and machinery, enabling SMEs to invest in business growth and productivity.
                            Trade Finance: Letters of credit, invoice financing, and other trade finance solutions to facilitate international trade and supply chain financing for SMEs.
                            Digital Loan Origination: Digital loan application and approval processes tailored to the needs of SMEs, with quick turnaround times and minimal paperwork requirements.
                        </p>
                    </div>
                    <div className="w-[50%] pvmax:max-md:w-full max-h-full pt-20 pr-20 pvmax:max-md:flex  pvmax:max-md:pr-0 hidden justify-center content-center items-center">
                        <img className="w-full h-fit rounded-[1rem]" src="https://img.freepik.com/free-vector/online-banking-isometric-web-page_1284-29561.jpg?t=st=1709004607~exp=1709008207~hmac=a0ca102ecfc944cb0c7b9ac3db1f7986d752b0894dc8691d55562d4876597736&w=740"></img>
                    </div>
                </div>
            </div> */}
            {/* 5 */}
            {/* <div className="w-full h-fit pvmax:max-md:h-fit  h110 flex flex-col content-center pvmax:max-md:mt-8 justify-center items-center">
                <div className="w-[67.37%] h-[60%] flex pvmax:max-md:flex-col  pvmax:max-md:px-0 pb-16">

                    <div className=" pvmax:max-md:w-full h-[60vh] pvmax:max-md:h-fit hidden  pvmax:max-md:flex  pvmax:max-md:flex-col items-center">
                        <p className="text-[1rem] font-mono text-slate-300 py-2 text-end">Use Cases</p>
                        <p className="w-full text-end  pvmax:max-md:w-full pvmax:max-md:text-center pvmax:max-md:pb-10 font-semibold text-5xl text-[#4fb645]" >Merchant Lending</p>
                    </div>
                    <div className="w-[50%] pr-[2rem] pvmax:max-md:pr-0 pvmax:max-md:w-full h-fit text-justify text-[1.1rem] flex flex-col items-center">
                        MDP's Merchant Lending solution offers tailored financing solutions for merchants and businesses, enabling them to access capital for growth and expansion. Features include:
                        Merchant Cash Advances: Flexible financing options based on future credit card sales, providing merchants with immediate access to working capital.
                        POS Financing: Financing solutions integrated with point-of-sale systems, allowing merchants to offer installment plans and deferred payments to customers.
                        Inventory Financing: Financing options to help merchants purchase inventory and stock, enabling them to meet customer demand and grow their businesses.
                        Digital Application and Approval: Streamlined digital application processes with quick approvals and funding, ensuring merchants can access capital when they need it most.
                    </div>
                    <div className="w-[50%] pvmax:max-md:w-full h-fit pvmax:max-md:h-fit  pvmax:max-md:hidden text-end flex flex-col items-end">
                        <p className="text-[1rem] font-mono text-slate-300 py-2 text-end w-full">Use Cases</p>
                        <p className=" w-[70%] text-end pvmax:max-md:w-full pvmax:max-md:text-center pvmax:max-md:pb-10 font-semibold text-5xl text-[#4fb645]" >Merchant Lending</p>
                    </div>
                </div>
                <div className="w-full h-[40%] pvmax:max-md:h-fit flex items-center content-center justify-center pvmax:max-md:flex-col ">
                    <div className="w-[67.37%] h-fit flex flex-row pvmax:max-md:flex-col">
                        <div className="w-[50%] pvmax:max-md:w-full h-fit pvmax:max-md:h-fit pr-8 pvmax:max-md:pr-0 pvmax:max-md:pb-6 usecases-img">
                            <img className="w-full h-full  rounded-[1rem]" src={Img2}></img>
                        </div>
                        <div className="w-[50%] pvmax:max-md:w-full h-fit pvmax:max-md:h-fit pvmax:max-md:pl-0 pl-8 usecases-img">
                            <img className="w-full h-full rounded-[1rem]" src={Img3}></img>
                        </div>
                    </div>

                </div>
            </div> */}






            {/* 5 */}
            <div className="w-full h-fit pvmax:max-md:h-fit flex items-center content-center justify-center pvmax:max-md:mt-8 flex-row pvmax:max-md:flex-col py-20 mt-10 mb-10 pvmax:max-md:py-0 pvmax:max-md:my-0 pvmax:max-md:px-8 ">
                <div className="w-[67.37%] items-center pvmax:max-md:w-[80%]  h-fit flex flex-row pvmax:max-md:flex-col">
                    
                    <div className="w-[50%] pvmax:max-md:w-full max-h-full  pr-8  pvmax:max-md:pr-0 flex justify-center content-center items-center">
                        <img className="w-full h-fit rounded-[1rem] pvmax:max-lg:h-[18rem]" src={Img1}></img>
                    </div>
                    <div className="w-[50%] pvmax:max-md:w-full h-full flex flex-col justify-center align-middle">
                        <p className="text-[1rem] font-mono text-slate-300 py-2 text-start pvmax:max-md:text-center">Use Cases</p>
                        <p className="w-[70%] pvmax:max-md:w-full text-start pvmax:max-md:text-center text-5xl text-[#4fb645] pb-8 font-semibold">Merchant Lending</p>
                        <p className="text-justify pr-[2rem] pvmax:max-md:pr-0 text-[1.1rem]">
                        MDP's Merchant Lending solution offers tailored financing solutions for merchants and businesses, enabling them to access capital for growth and expansion. Features include:
                        Merchant Cash Advances: Flexible financing options based on future credit card sales, providing merchants with immediate access to working capital.
                        POS Financing: Financing solutions integrated with point-of-sale systems, allowing merchants to offer installment plans and deferred payments to customers.
                        Inventory Financing: Financing options to help merchants purchase inventory and stock, enabling them to meet customer demand and grow their businesses.
                        Digital Application and Approval: Streamlined digital application processes with quick approvals and funding, ensuring merchants can access capital when they need it most.
                        </p>
                    </div>
                </div>


            </div>
            {/* 6 */}
            <div className="w-full pvmax:max-md:mt-8 h-fit pvmax:max-md:h-fit flex items-center content-center justify-center flex-row pvmax:max-md:flex-col py-20 my-10 pvmax:max-md:py-0 pvmax:max-md:my-0 pvmax:max-md:px-8 ">
                <div className="w-[67.37%] items-center pvmax:max-md:w-[80%] h-fit flex flex-row pvmax:max-md:flex-col">
                    <div className="w-[50%] pr-[2rem] pvmax:max-md:pr-0 pvmax:max-md:w-full h-full flex flex-col justify-center align-middle">
                        <p className="text-[1rem] font-mono text-slate-300 py-2 text-start pvmax:max-md:text-center">Use Cases</p>
                        <p className="w-[70%] pvmax:max-md:w-full text-start pvmax:max-md:text-center text-5xl text-[#4fb645] pb-8 font-semibold">eKYC Platform</p>
                        <p className="text-justify text-[1.1rem]">
                            MDP's eKYC Platform offers advanced identity verification and authentication solutions to streamline customer onboarding processes and mitigate the risk of fraud. Features include:
                            Biometric Authentication: Facial recognition, fingerprint scanning, and voice recognition technologies for secure and convenient identity verification.
                            Document Verification: Automated document verification solutions for validating identity documents such as passports, driver's licenses, and national IDs.
                            AML Compliance: Integration with anti-money laundering (AML) databases and watchlists to ensure compliance with regulatory requirements and prevent financial crime.
                            Digital Onboarding: Seamless digital onboarding processes with real-time identity verification, enabling customers to open accounts and access banking services remotely.
                        </p>
                    </div>
                    <div className="w-[50%] pvmax:max-md:w-full max-h-full pt-20 pl-8  pvmax:max-md:pl-0 flex justify-center content-center items-center">
                        <img className="w-full h-fit rounded-[1rem] pvmax:max-lg:h-[18rem]" src={Img1}></img>
                    </div>
                </div>


            </div>

            {/* 7 */}
            {/* <div className="w-full pvmax:max-md:mt-8 h-fit pvmax:max-md:h-fit  h110 flex flex-col content-center justify-center items-center">
                <div className="w-[67.37%] h-fit flex pvmax:max-md:flex-col  pvmax:max-md:px-0 pb-16">
                    <div className="w-[50%] pvmax:max-md:w-full h-fit pvmax:max-md:h-fit text-start flex flex-col items-center">
                        <p className="text-[1rem] w-full font-mono pvmax:max-md:text-center text-slate-300 py-2 ">Use Cases</p>
                        <p className=" w-full pvmax:max-md:w-full pvmax:max-md:text-center pvmax:max-md:pb-10 font-semibold text-5xl text-[#4fb645]" >Open Banking</p>
                    </div>
                    <div className="w-[50%] pl-[2rem] pvmax:max-md:pl-0 pvmax:max-md:w-full h-fit text-justify text-[1.1rem]">
                        MDP's Open Banking solution empowers banks and financial institutions to embrace open banking principles and leverage APIs to enhance innovation, collaboration, and customer experience. Features include:
                        API Integration: Secure and standardized APIs for connecting with third-party developers, fintech partners, and service providers to access customer data and functionality.
                        Data Sharing: Controlled access to customer-permissioned data, enabling banks to share account information, transaction data, and financial insights with authorized third parties.
                        Partnership Opportunities: Collaboration with fintech startups, technology providers, and other industry players to co-create innovative products and services that meet customer needs and preferences.
                        Enhanced Customer Experience: Access to a wider range of financial products, services, and personalized experiences through third-party integrations and partnerships, enriching the overall customer experience.


                    </div>
                </div>
                <div className="w-full h-[40%] pvmax:max-md:h-fit flex items-center content-center justify-center pvmax:max-md:flex-col ">
                    <div className="w-[67.37%] h-fit flex flex-row pvmax:max-md:flex-col">
                        <div className="w-[50%] pvmax:max-md:w-full h-fit pvmax:max-md:h-fit pr-8 pvmax:max-md:pr-0 pvmax:max-md:pb-6 usecases-img">
                            <img className="w-full h-full  rounded-[1rem]" src={Img2}></img>
                        </div>
                        <div className="w-[50%] pvmax:max-md:w-full h-fit pvmax:max-md:h-fit pvmax:max-md:pl-0 pl-8 usecases-img">
                            <img className="w-full h-full rounded-[1rem]" src={Img3}></img>
                        </div>
                    </div>

                </div>
            </div> */}




            {/* 1 */}
            <div className="w-full h-fit pvmax:max-md:h-fit flex items-center content-center justify-center pvmax:max-md:mt-8 flex-row pvmax:max-md:flex-col py-20 mt-10 mb-10 pvmax:max-md:py-0 pvmax:max-md:my-0 pvmax:max-md:px-8 ">
                <div className="w-[67.37%] items-center pvmax:max-md:w-[80%]  h-fit flex flex-row pvmax:max-md:flex-col">
                    
                    <div className="w-[50%] pvmax:max-md:w-full max-h-full  pr-8  pvmax:max-md:pr-0 flex justify-center content-center items-center">
                        <img className="w-full h-fit rounded-[1rem] pvmax:max-lg:h-[18rem]" src={Img1}></img>
                    </div>
                    <div className="w-[50%] pvmax:max-md:w-full h-full flex flex-col justify-center align-middle">
                        <p className="text-[1rem] font-mono text-slate-300 py-2 text-start pvmax:max-md:text-center">Use Cases</p>
                        <p className="w-[70%] pvmax:max-md:w-full text-start pvmax:max-md:text-center text-5xl text-[#4fb645] pb-8 font-semibold">Open Banking</p>
                        <p className="text-justify pr-[2rem] pvmax:max-md:pr-0 text-[1.1rem]">
                        MDP's Open Banking solution empowers banks and financial institutions to embrace open banking principles and leverage APIs to enhance innovation, collaboration, and customer experience. Features include:
                        API Integration: Secure and standardized APIs for connecting with third-party developers, fintech partners, and service providers to access customer data and functionality.
                        Data Sharing: Controlled access to customer-permissioned data, enabling banks to share account information, transaction data, and financial insights with authorized third parties.
                        Partnership Opportunities: Collaboration with fintech startups, technology providers, and other industry players to co-create innovative products and services that meet customer needs and preferences.
                        Enhanced Customer Experience: Access to a wider range of financial products, services, and personalized experiences through third-party integrations and partnerships, enriching the overall customer experience.
                        </p>
                    </div>
                </div>


            </div>





            <div className="w-[100%] endpage mx-auto  pvmax:max-lg:pl-0 pvmax:max-md:px-[2rem] py-10 md:max-xl:w-[90%] pv:max-md:w-[90%] solution-intro flex items-center justify-center">
                <p className="text-[1.1rem] font-bold text-justify w-[67.37%] py-20 pvmax:max-lg:py-5 md:max-xl:w-[90%] pv:max-md:w-[100%] big-description-Services  ">
                    With MDP's comprehensive banking use cases, including Digital Banking, Digital Payment, Consumer Lending, SME Lending, Merchant Lending, eKYC Platform, and Open Banking, banks and financial institutions can unlock new opportunities, drive innovation, and deliver superior value to their customers in today's digital-first world.
                </p>
            </div>
        </>

    );
};

export default UseCases;
