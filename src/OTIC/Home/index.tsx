import React from "react";
import "./index.css";
import Button from "../Components/Button";
import SeeMore from "../Components/SeeMore";

function Home() {
    return (
        <div>    
            <div className="row">
                <div className="col-12 col-md-8">
                    <div className="img-container">
                    <img className="img-fluid" src="/images/colosseum-centered.png" alt="colosseum" />
                    <div className="overlay">
                        <div style={{gap: "24px"}}>
                            <h1>OPEN6G OTIC</h1>
                            <h6>NORTH AMERICAN OTIC IN THE BOSTON AREA</h6>
                            <p>The Open6G Open Testing and Integration Center (OTIC) is a hub for developing and testing next-generation wireless networks based on Open RAN. The OTIC was approved by the O-RAN Alliance as North American OTIC in the Boston Area (Northeastern University) in May 2023.</p>
                            <p>The Open6G OTIC provides testing services for Open RAN products, including compliance, interoperability, performance, and functional testing against multiple state-of-the-art environments – from real 5G RANs to emulated networks in Colosseum and RAN/RIC emulators.</p>
                        </div>
                    </div>
                    </div>
                
                </div>

                <div className="col-12 col-md-4" style={{padding: "48px"}}>
                    <Button buttonType="button-primary" textStyle="subtitle">See More</Button>
                    <h2>SERVICES</h2>
                    <ul>
                        <li>Testing as a Service</li>
                        <li>Lab as a Service</li>
                        <li>O-RAN Certification and Badging</li>
                        <li>O-RAN PlugFest</li>
                        <li>AI/ML Collaborations</li>
                        <li>System Integration</li>
                    </ul>
                    <br/>
                    <h2>TESTING EQUIPMENT</h2>
                    <Button buttonType="button-primary" textStyle="subtitle">See More</Button>
                </div>
            </div>
            <div style={{paddingLeft: "96px", paddingRight: "96px"}}>
                <div className="container section">
                    <h2 style={{textAlign: "center", paddingBottom: "48px"}}>CERTIFICATIONS & ACCREDITATIONS</h2>
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-4" style={{paddingRight: "48px"}}>
                            <h6>NORTH AMERICAN OTIC CERTIFICATION</h6>
                            <p>ISO standards ensure that the OTIC follows internationally recognized quality management practices in its operations and services.</p>
                        </div>
                        <div className="col-12 col-sm-12 col-md-4" style={{paddingRight: "48px"}}>
                            <h6>FCC CERTIFICATION</h6>
                            <p>Ensures compliance with Federal Communications Commission regulations, particularly for equipment testing and electromagnetic compatibility (EMC) testing.</p>
                        </div>
                        <div className="col-12 col-sm-12 col-md-4" style={{paddingRight: "48px"}}>
                            <h6>IS27001 CERTIFICATION</h6>
                            <p>Essential for Open6G OTIC, highlighting our commitment to maintaining robust security standards and ensuring the integrity of Open RAN deployments.</p>
                        </div>
                    </div>
                </div>
                <div className="container section">
                    <h2 style={{textAlign: "center", paddingBottom: "48px"}}>OTIC KEY COMPONENTS</h2>
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-4" style={{paddingRight: "48px"}}>
                            <img src="/images/colosseum-person.png" className="img-fluid" alt="person in colosseum"/>
                            <h6>COLOSSEUM</h6>
                            <p>Colosseum, the world’s largest wireless network emulator with hardware-in-the-loop, with 256 software-defined radios, more than 20 racks of compute, with programmable GPUs, FPGAs, and components to orchestrate and manage a multi-tenant experimental environment. It is already being used by more than 77 teams from different research institutions, and has already been successfully used to demonstrate closed-loop control for O-RAN.</p>
                            <SeeMore/>
                        </div>
                        <div className="col-12 col-sm-12 col-md-4" style={{paddingRight: "48px"}}>
                            <img src="/images/hand-wires.png" className="img-fluid" alt="hand with wires"/>
                            <h6>OPEN RAN GYM</h6>
                            <p>The OpenRAN Gym framework, a large-scale data collection for the training of AI/ML, hosts multiple 5G protocol stacks for RAN and core and tests a mix of commercial radios and emulated devices.</p>
                            <SeeMore/>
                        </div>
                        <div className="col-12 col-sm-12 col-md-4">
                            <img src="/images/isec-offices.png" className="img-fluid" alt="isec offices"/>
                            <h6>DIVERSE 5G RAN DEPLOYMENTS</h6>
                            <p>Multiple 5G RAN deployments and equipment, including softwarized and commercial RAN products, 5G UEs, core networks, a programmable 5G and O-RAN testbed with 10+ gNodeBs on the indoor Arena testbed, and testing equipment.</p>
                            <SeeMore/>
                        </div>
                    </div>
                    <div className="row" style={{paddingTop: "48px"}}>
                        <div className="col-12 col-sm-12 col-md-4 d-flex flex-column align-items-center" style={{paddingRight: "48px"}}>
                            <img src="/images/person-wires.png" className="img-fluid" alt="person with wires"/>
                            <h6>FCC INNOVATION ZONE FRAMEWORK</h6>
                            <p>One of the four FCC Innovation Zone frameworks in the nation, which allows the lab to quickly obtain experimental licenses for over-the-air testing in the Northeastern University Innovation Campus in Burlington, MA, and in the main Boston, MA campus.</p>
                            <SeeMore/>
                        </div>
                        <div className="col-12 col-sm-12 col-md-4">
                            <img src="/images/blue-center.png" className="img-fluid" alt="center with blue floor"/>
                            <h6>UAV TESTING FACILITY</h6>
                            <p>An outdoor UAV testing facility to profile use cases related to drone mobility and a large anechoic chamber to test radio devices in an interference-free environment.</p>
                            <SeeMore/>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <h2 style={{textAlign: "center", paddingBottom: "48px"}}>CLIENT TESTIMONIALS & CASE STUDIES</h2>
                    <p style={{paddingBottom: "48px"}}>Explore our client testimonials and case studies to see how Open6G OTIC collaborates with industry leaders on cutting-edge Open RAN projects. Each testimonial offers insights into our work, from optimizing network performance with AI to ensuring seamless interoperability. Click to learn more about the specific challenges we've tackled and the impactful results achieved.</p>
                    <div className="container">
                        <div className="row" style={{paddingBottom: "48px"}}>
                            <div className="col-12 col-sm-12 col-md-8" style={{textAlign: "left"}}>
                                <h3>KEYSIGHT TECHNOLOGIES</h3>
                                <p>“Working closely with Open6G OTIC has revolutionized our testing and integration processes. Their advanced capabilities in compliance, functional testing, and real-world scenario simulations have enabled us to validate our products with precision and efficiency. Their collaborative approach and dedication to innovation have positioned Open6G OTIC as an invaluable partner in our mission to deliver high-performance solutions that meet the evolving needs of our global customers."</p>
                                <SeeMore/>
                            </div>
                            <div className="col-12 col-sm-12 col-md-4">
                                <img src="/images/keysight.png" className="img-fluid" alt="keysight"/>
                            </div>
                        </div>
                        <div className="row" style={{paddingBottom: "48px"}}>
                            <div className="col-12 col-sm-12 col-md-4">
                                <img src="/images/amplitech.png" className="img-fluid" alt="amplitech"/>
                            </div>
                            <div className="col-12 col-sm-12 col-md-8" style={{textAlign: "left"}}>
                                <h3>AMPLITECH</h3>
                                <p>"Open6G OTIC has been instrumental in validating the performance and reliability of our RF and microwave components tailored for Open RAN networks. Their specialized testing services and access to cutting-edge environments like Colosseum have enabled us to demonstrate the robustness of our solutions under real-world conditions. Their deep expertise and commitment to excellence make Open6G OTIC a trusted collaborator in advancing next-generation wireless technologies."</p>
                                <SeeMore/>
                            </div>
                        </div>
                        <div className="row" style={{paddingBottom: "48px"}}>
                            <div className="col-12 col-sm-12 col-md-8" style={{textAlign: "left"}}>
                                <h3>ACCORD</h3>
                                <p>"At ACCoRD, we rely on strategic partners like Open6G OTIC to drive innovation and ensure the reliability of our network solutions. Their end-to-end full stack OTIC capabilities, combined with rigorous testing protocols, have been integral to the successful deployment of our nationwide 5G initiatives. Their commitment to energy-efficient networks aligns perfectly with our sustainability goals, making Open6G OTIC a valued collaborator in shaping the future of telecommunications infrastructure."</p>
                                <SeeMore/>
                            </div>
                            <div className="col-12 col-sm-12 col-md-4">
                                <img src="/images/accord.png" className="img-fluid" alt="accord"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <h2 style={{textAlign: "center", paddingBottom: "48px"}}>TESTING EQUIPMENT</h2>
                </div>
                <div className="section">
                    <h2 style={{textAlign: "center", paddingBottom: "48px"}}>LOCATIONS</h2>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-6">
                                <img src="/images/boston.jpg" className="img-fluid" alt="boston location" style={{paddingBottom: "24px"}}/>
                                <h3>BOSTON</h3>
                            </div>
                            <div className="col-12 col-sm-6">
                                <img src="/images/burlington.jpg" className="img-fluid" alt="burlington location" style={{paddingBottom: "24px"}}/>
                                <h3>BURLINGTON</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <h2 style={{textAlign: "center", paddingBottom: "48px"}}>LATEST NEWS & UPDATES</h2>
                </div>
                <div className="section">
                    <h2 style={{textAlign: "center", paddingBottom: "48px"}}>REQUEST A BOOKING</h2>
                </div>
            </div>
        </div>
    );
}

export default Home;
