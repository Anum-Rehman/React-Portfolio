import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { zoomIn, flipInX } from 'react-animations'
export default class Resume extends Component {
    render() {
        const ZoomIn = styled.div`animation:1s ${keyframes`${zoomIn}`} 1`;
        return (
            <ZoomIn>
                <div className="resume">
                    <div className="row" style={{ marginLeft: 10 }}>
                        <div className="col-12 col-sm-12">
                            <h1 className="resume-heading" style={{ textAlign: 'center', color: "white" }}>Anum Rehman
                    <h5 >MERN Stack Developer</h5>
                            </h1>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-6">
                            <h4 className="resume-heading">Account Details</h4>
                            <div className="row resume-data">
                                <label className="resume-content">Github Account: </label>
                                <a href="https://github.com/Anum-Rehman" style={{ marginLeft: 10 }} className="resume-content"> https://github.com/Anum-Rehman</a>
                            </div>

                            <div className="row resume-data">
                                <label className="resume-content">LinkdIn Account: </label>
                                <a href="https://www.linkedin.com/in/anumrehman-2635a5129/ " className="resume-content" style={{ marginLeft: 10 }}> https://www.linkedin.com/in/anumrehman-2635a5129/ </a>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6">
                            <h4 className="resume-heading">Development Tools</h4>
                            <div className="row resume-data">
                                <label className="resume-content">Postman for API Testing</label>
                            </div>

                            <div className="row resume-data">
                                <label className="resume-content">Justinmind for Prototype Design</label>
                            </div>
                        </div>
                    </div>
                    {/* <div className="row">
                                <h4 className="resume-heading">Development Tools</h4>
                                <div className="row resume-data">
                                    <label className="resume-content">Postman for API Testing</label>
                                </div>

                                <div className="row resume-data">
                                    <label className="resume-content">Justinmind for Prototype Design</label>
                                </div>
                            </div> */}
                    {/* </div> */}
                    <div className="row">
                        {/* <div className="col-sm-1 col-1"></div> */}
                        <div className="col-sm-6 col-12">
                            {/* <div className="row"> */}

                            <h4 className="resume-heading">Education & Certification</h4>
                            <div className="row resume-data">
                                <ul>
                                    <li><h6><strong>University of Karachi</strong></h6>
                                        <p className="resume-content">BSSE with 3.2 CGPA</p></li>

                                    <li><h6><strong>Usman Institute of Technology</strong></h6>
                                        <p className="resume-content">Full Stack Web & Mobile App Development Certification <strong>(MERN)</strong></p></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 col-12">
                            <h4 className="resume-heading">Achievement & Certifications</h4>
                            <div className="row resume-data">
                                <ul>
                                    <li><h6><strong>Coursera Certifications</strong></h6>
                                        <ul>
                                            <li className="resume-content">
                                                Front-End Web UI Frameworks and Tools: Bootstrap 4 <strong>(Certified) </strong>
                                            </li>
                                            <li className="resume-content">
                                                Full-Stack Web Development with React <strong>(Certified) </strong>
                                            </li>
                                            <li className="resume-content">
                                                Server-side Development with NodeJS, Express and MongoDB <strong>(Certified) </strong>
                                            </li>
                                            <li className="resume-content">
                                                Building Conversational Experiences with Dialogflow <strong> (Certified)  </strong>
                                            </li>
                                            <li className="resume-content">
                                                Multiplatform Mobile App Development with React Native <strong> (In Progress)  </strong>
                                            </li>
                                        </ul>
                                    </li>

                                    <li><h6><strong>Huawei ICT Competition Certifications</strong></h6>
                                        <ul>
                                            <li className="resume-content">
                                                Huawei Certified Network Associate <strong>(HCNA Certified)  </strong>
                                            </li>
                                            <li className="resume-content">
                                                Huawei Certified Network Associate <strong>(HCNA Qualified) </strong>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* </div> */}
                    <hr />
                    <div className="row">
                        <div className="col-12 col-sm-6">
                            <h4 className="resume-heading">Project History</h4>
                            <div className="row resume-data">
                                <ul>
                                    <li><h6><strong>FYP (React and React Native Application) </strong></h6>
                                        <p className="resume-content">The project is based on React Native mobile Applications and web based Admin Panel and web Portal using ReactJS with nodeJS and ExpressJS as backend and MongoDB for database </p> (July 2019-Dec 2019)</li>

                                    <li><h6><strong>Food Zone (PHP Web Project)</strong></h6>
                                        <p className="resume-content">Project is based on Core PHP with MySQL Database </p>
                                    </li>

                                    <li><h6><strong>Blood Donation Web App (Firebase Web Project) </strong></h6>
                                        <p className="resume-content">Intern Web Designer/ Developer</p> (May 2018-June 2018)</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6">
                            <h4 className="resume-heading">Work Experience</h4>
                            <div className="row resume-data">
                                <ul>
                                    <li><h6><strong>Finosys Pvt. Ltd</strong></h6>
                                        <p className="resume-content">MERN Stack Developer</p> (January 2020-Continue)</li>

                                    <li><h6><strong>Digital Landscape Pvt. Ltd</strong></h6>
                                        <p className="resume-content">Web Designer/ Developer</p> (March 2019-December 2019)</li>

                                    <li><h6><strong>Pak Ever Zone</strong></h6>
                                        <p className="resume-content">Intern Web Designer/ Developer</p> (May 2018-June 2018)</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </ZoomIn>
        )
    }
}