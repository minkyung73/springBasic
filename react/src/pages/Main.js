import React from 'react';
import SectionTitle from '../elements/section-title/SectionTitle';
import { Link } from 'react-router-dom';

const Main = () => {

    return (
        <>
        <main className="main-wrapper">
            
            <div className="section section-padding pb--80 pb_lg--40 pb_md--20 pb_sm--0">
                <div className="container">

                    <SectionTitle 
                    subtitle="HOME"
                    title="JPA shop"
                    description=""
                    textAlignment="heading-left"
                    textColor=""
                    />

                    <div className='row'>
                        <div className='col'>
                            <p>회원 기능</p>
                            <div className="more-project-btn col-md-6"><Link to={process.env.PUBLIC_URL + "/sign-up"} className="axil-btn btn-fill-white" style={{backgroundColor:'#C4C6F2'}}>회원 가입</Link></div>
                            <div className="more-project-btn col-md-6"><Link to={process.env.PUBLIC_URL + "/member-list"} className="axil-btn btn-fill-white" style={{backgroundColor:'#C4C6F2'}}>회원 목록</Link></div>
                        </div>

                        <div className='col'>
                            <p>상품 기능</p>
                            <div className="more-project-btn col-md-6"><Link to={process.env.PUBLIC_URL + "/product-registration"} className="axil-btn btn-fill-white" style={{backgroundColor:'#DFF5D6'}}>상품 등록</Link></div>
                            <div className="more-project-btn col-md-6"><Link to={process.env.PUBLIC_URL + "/product-list"} className="axil-btn btn-fill-white" style={{backgroundColor:'#DFF5D6'}}>상품 목록</Link></div>
                        </div>

                        <div className='col'>
                            <p>주문 기능</p>
                            <div className="more-project-btn col-md-6"><Link to={process.env.PUBLIC_URL + "/product-order"} className="axil-btn btn-fill-white" style={{backgroundColor:'#F5CEBC'}}>상품 주문</Link></div>
                            <div className="more-project-btn col-md-6"><Link to={process.env.PUBLIC_URL + "/order-list"} className="axil-btn btn-fill-white" style={{backgroundColor:'#F5CEBC'}}>주문 내역</Link></div>
                        </div>
                    </div>

                </div>
            </div>
        </main>
        </>
    )
}

export default Main;

