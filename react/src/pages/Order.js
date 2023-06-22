import React from 'react';
import SectionTitle from '../elements/section-title/SectionTitle';


const Order = () => {

    return (
        <>
        <main className="main-wrapper">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-xl-5 col-lg-6 offset-xl-1">
                            <div className="contact-form-box">
                                <SectionTitle 
                                subtitle="HOME"
                                title="Product Order"
                                description=""
                                textAlignment="heading-left"
                                textColor=""
                                />

                                <div className="form-group">
                                    <label>주문 회원</label>
                                    <input type="text" className="form-control" name="contact-name" placeholder="회원명명을 입력하세요." required />
                                </div>

                                <div className="form-group">
                                    <label>상품명</label>
                                    <input type="text" className="form-control" name="contact-name" placeholder="상품명을 입력하세요." required />
                                </div>

                                <div className="form-group mb--40">
                                    <label>주문 수량</label>
                                    <input type="tel" className="form-control" name="contact-phone" placeholder="주문 수량을 입력하세요." required />
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

export default Order;

