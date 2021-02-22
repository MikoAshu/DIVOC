import React, {useEffect} from "react";
import {Link, useHistory} from "react-router-dom";
import CertificateSmallImg from '../../assets/img/certificate-small.svg'
import CenterSmallImg from '../../assets/img/center-small.svg'
import CertificateImg from '../../assets/img/download-certificate-home.svg'
import VerifyCertificateImg from '../../assets/img/verify-certificate-home.svg'
import SideEffectsBannerImg from '../../assets/img/side-effects-banner-img.png'
import DashboardBannerImg from '../../assets/img/dashboard-banner.png'
import LearnMoreBannerImg from '../../assets/img/leanr_more.png'
import Covid19PgmImg from '../../assets/img/covid19program.svg'
import {ButtonBack, ButtonNext, CarouselProvider, Slide, Slider} from "pure-react-carousel";
import {LatestUpdateCard} from "../LatestUpdateCard";
import "./index.css";
import 'pure-react-carousel/dist/react-carousel.es.css';
import {Col, Row} from "react-bootstrap";
import {CustomButton} from "../CustomButton";
import {useKeycloak} from "@react-keycloak/web";

const HomeCard = ({img, title, subtitle, buttonText, buttonOnClick, buttonClassName, backgroundColor}) => (
    <Col lg={3}>
        <div className="d-flex flex-column justify-content-center align-items-center pb-3 pl-4 pr-4 pt-0 mt-3"
             style={{width: "100%", height: "50vh", backgroundColor: backgroundColor, borderRadius: "20px"}}>
            <div className="d-inline-flex justify-content-center" style={{height: "30%"}}>
                {
                    img
                }
            </div>
            <div style={{height: "50%"}}>
                <h4 className="text-center mt-3">{title}</h4>
                <p className="text-center mt-3">{subtitle}</p>
            </div>
            <div style={{height: "20%"}}>
                <CustomButton className={`${buttonClassName}`} onClick={buttonOnClick}>{buttonText}</CustomButton>
            </div>
        </div>

    </Col>
)

export const Home = () => {
    const history = useHistory();
    const {keycloak} = useKeycloak();
    useEffect(() => {
        if(keycloak.authenticated) {
            keycloak.logout()
        }
    }, []);
    return (
        <div className="home-section">
            <div className="section ">
                <div className="d-flex flex-column" style={{height: "100%"}}>
                    <div className="p-4 p-lg-5 d-flex flex-column justify-content-center align-items-center">
                        <h3>Welcome to the</h3>
                        <span
                            className="title">Digital Infrastructure for Vaccination & Open Certification Portal</span>
                        <Row className="d-flex justify-content-center mb-3">
                            <HomeCard img={<img src={CertificateImg} alt={""} width={"80%"}/>}
                                      title={"Download your Vaccination Certificate"}
                                      subtitle={"You would need your unique id and Mobile number to verify OTP in order to access your digital certificate."}
                                      buttonText={"Download"}
                                      buttonOnClick={() => {
                                          history.push("/certificate/")
                                      }}
                                      buttonClassName={"blue-btn"}
                                      backgroundColor={"#F8FBFF"}
                            />
                            <HomeCard img={<img src={VerifyCertificateImg} alt={""} width={"80%"}/>}
                                      title={"Verify your Vaccination Certificate"}
                                      subtitle={"Ensure that your vaccination certificate is a authentic by digitally verifying it here."}
                                      buttonText={"Verify"}
                                      buttonOnClick={() => {
                                          history.push("/verify-certificate/")
                                      }}
                                      buttonClassName="green-btn"
                                      backgroundColor={"#F2FAF6"}
                            />

                            <HomeCard img={<img src={SideEffectsBannerImg} alt={""} width={"60%"}/>}
                                      title={"Report symptoms"}
                                      subtitle={"By reporting any side-effects of the vaccine, you will ensure the safety of others in the community and help the government contain the pandemic effectively."}
                                      buttonText={"Report Side-effects"}
                                      buttonOnClick={() => {
                                          history.push("/side-effects")
                                      }}
                                      buttonClassName={"yellow-btn"}
                                      backgroundColor={"#FFFBF0"}
                            />

                            <HomeCard img={<img src={LearnMoreBannerImg} alt={""} width={"60%"}/>}
                                      title={"Learn"}
                                      subtitle={"The C-19 vaccination drive launched in India in 2021 aims to control, reduce and eradicate the prevalence of Covid in India. These videos will help you understand the program and learn about side-effect post vaccination."}
                                      buttonText={"Learn"}
                                      buttonOnClick={() => {
                                          history.push("/learn")
                                      }}
                                      buttonClassName={"purple-btn"}
                                      backgroundColor={"#F8FAFF"}
                            />
                        </Row>
                    </div>
                </div>
            </div>
            <div className="half-section  d-lg-flex p-3 p-lg-0">
                <div className="divoc-video-wrapper d-flex justify-content-center align-items-center">
                    <iframe width="90%" height="100%" src="https://www.youtube.com/embed/vl_EP9fpzh0" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                </div>
                <div className="divoc-info-wrapper">
                    <img src={Covid19PgmImg} alt={""}/>
                    <h3 className="text-center mt-3 text-lg-left">Information about C- 19 Vaccination</h3>
                    <span className="text-center  text-lg-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</span>
                    <CustomButton className={"purple-btn"} onClick={() => {
                    }}>Know More</CustomButton>
                </div>
            </div>
            <div className="dashboard-section p-3 p-lg-0">
                <div className="h-100 pt-lg-5 d-flex flex-column align-items-center justify-content-center">
                    <h3>Public Dashboard</h3>
                    <span className="pt-3 dashboard-subtitle">Some introductory text about the dashboard - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</span>
                    <div className="h-100 pt-lg-5">
                        <div className="row h-100 row-cols-lg-3 row-cols-1">
                            <div
                                className="col d-flex flex-column justify-content-center align-items-center  p-3 pt-5 p-lg-3 order-lg-1">
                                <img alt={""} src={CertificateSmallImg} width={40}/>
                                <h4 className="pt-3">Certificates Issued</h4>
                                <h1 className="pt-3 pb-3" style={{fontSize: "50px"}}>7,72,055</h1>
                                <Link to={"/dashboard"} className="outline-button ">View Numbers ></Link>
                            </div>
                            <div className="col order-lg-2 order-3">
                                <img alt={""} src={DashboardBannerImg} width={"100%"} height={"100%"}/>
                            </div>
                            <div
                                className="col d-flex flex-column justify-content-center align-items-center p-3 pt-5 p-lg-3 order-lg-3 order-2">
                                <img alt={""} src={CenterSmallImg} width={40}/>
                                <h4 className="pt-3">Certificates Issued</h4>
                                <b className="pt-3 pb-3" style={{fontSize: "50px"}}>7,72,055</b>
                                <Link to={"/dashboard"} className="outline-button yellow-outline">View Centre details
                                    ></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="updates-section p-3 p-lg-0 d-none">
                <div className="d-flex justify-content-between align-items-center">
                    <span className="font-weight-bold">Latest Updates</span>
                    <span className="d-flex align-items-center" style={{cursor: "pointer"}}>View All Updates <span
                        className="latest-update-nav-btn ml-2 pl-1 pr-1">{">"}</span></span>
                </div>
                <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={40}
                    totalSlides={3}
                    visibleSlides={window.innerWidth < 1000 ? 1 : 2}
                >
                    <Slider>
                        <Slide index={0}>
                            <LatestUpdateCard/>
                        </Slide>
                        <Slide index={1}><LatestUpdateCard/></Slide>
                        <Slide index={2}><LatestUpdateCard/></Slide>
                    </Slider>
                    <ButtonNext className="latest-update-nav-btn float-right mt-3 ml-1">{">"}</ButtonNext>
                    <ButtonBack className="latest-update-nav-btn float-right mt-3 ml-1">{"<"}</ButtonBack>
                </CarouselProvider>
            </div>
        </div>
    );
}
