import React from 'react';
import SectionTitle from '../elements/section-title/SectionTitle';


const SignUP = () => {

    return (
        <>
        <main className="main-wrapper">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-xl-5 col-lg-6 offset-xl-1">
                            <div className="contact-form-box">
                                <SectionTitle 
                                subtitle="HOME"
                                title="Sign Up"
                                description=""
                                textAlignment="heading-left"
                                textColor=""
                                />

                                <div className="form-group">
                                    <label>이름</label>
                                    <input type="text" className="form-control" name="contact-name" placeholder="이름을 입력하세요." required />
                                </div>

                                <div className="form-group">
                                    <label>도시</label>
                                    <input type="email" className="form-control" name="contact-email" placeholder="도시를 입력하세요." required />
                                </div>

                                <div className="form-group">
                                    <label>거리</label>
                                    <input type="email" className="form-control" name="contact-email" placeholder="거리를 입력하세요." required />
                                </div>

                                <div className="form-group mb--40">
                                    <label>우편번호</label>
                                    <input type="tel" className="form-control" name="contact-phone" placeholder="우편번호를 입력하세요." required />
                                </div>

                                <div className="form-group">
                                    <button type="submit" className="axil-btn btn-fill-primary btn-fluid btn-primary" name="submit-btn">Submit</button>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
        </main>
        </>
    )
}

export default SignUP;

