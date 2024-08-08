import React from "react";
import "./index.css";

function Services() {
    return (
        <div style={{paddingLeft: "96px", paddingRight: "96px"}}>
            <div className="container section">
                <h2 style={{textAlign: "center", paddingBottom: "48px"}}>TESTING SERVICES</h2>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-3" style={{paddingRight: "48px"}}>
                        <h6>CONFORMANCE</h6>
                        <ul>
                            <li>Verifying that products are compliant to O-RAN specifications using O-RAN conformance tests</li>
                            <li>Awarding O-RAN certificates to products for at least one O-RAN interface</li>
                        </ul>
                    <div className="col-12 col-sm-12 col-md-3" style={{paddingRight: "48px"}}>
                        <h6>END-TO-END (E2E)</h6>
                        <ul>
                            <li>Demonstrating and validating that E2E systems or subsystems meet minimum requirements on functionality and security using O-RAN E2E tests</li>
                            <li>Indicating performance or other E2E functionalities</li>
                            <li>Awarding O-RAN E2E badges to all products in the E2E system or subsystem</li>
                        </ul>
                    </div>
                    <div className="col-12 col-sm-12 col-md-3" style={{paddingRight: "48px"}}>
                        <h6>INTEROPERABILITY</h6>
                        <ul>
                            <li>Proving interoperability of a pair of products connected via an O-RAN interface of O-RAN profiled 3GPP interface using O-RAN interoperability tests</li>
                            <li>Awarding O-RAN IOT badges to both products in these pairs, which are applicable for concrete O-RAN interfaces</li>
                        </ul>
                    </div>
                    <div className="col-12 col-sm-12 col-md-3" style={{paddingRight: "48px"}}>
                        <h6>RIC</h6>
                        <ul>
                            <li>Providing emulated and simulated RAN environments that can be used to test and integrated RAN Intelligent Controllers (RICs)</li>
                        </ul>
                    </div>
                </div>
                </div>
                <div className="container section">
                    <h2 style={{textAlign: "center", paddingBottom: "48px"}}>SYSTEM INTEGRATION SERVICES</h2>
                </div>
            </div>
        </div>
    );
}

export default Services;