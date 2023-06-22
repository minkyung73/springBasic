import React from 'react';
import { useState, useEffect } from 'react';
import ProjectData from "../data/project/ProjectData.json";
import SectionTitle from '../elements/section-title/SectionTitle';
import { Container, Row, Col } from 'react-bootstrap';

const filters = [
	{
		id: 1,
		label: "All Works",
    },
    {
		id: 2,
		label: "Branding",
    },
    {
		id: 3,
		label: "Mobile",
    }
];

const AllData = ProjectData;

const Orderdata = [
    { id: 1, name: '상품 1', price: 1000, stock: 10 },
    { id: 2, name: '상품 2', price: 2000, stock: 5 },
    { id: 3, name: '상품 3', price: 3000, stock: 3 },
];

const ProductList = ({parentClass, colSize, itemShow, columnGap}) => {

    const [getAllItems] = useState(AllData);
	const [visiableProject] = useState(itemShow ? itemShow : 6);
    const [activeFilter, setActiveFilter] = useState("");
	const [visibleItems, setVisibleItems] = useState([]);
	

	useEffect(() => {
        setActiveFilter(filters[0].label);
		setVisibleItems(getAllItems.filter((item) => item.id <= visiableProject));
    }, []);

    return (
        <main className="main-wrapper">
			<div className={`section section-padding-2 ${parentClass ? parentClass : ""}`}>
                <div className="container">
                    <SectionTitle 
                    subtitle="HOME"
                    title="상품 목록"
                    textAlignment="heading-left mb--40"
                    textColor=""
                    />

                    <Container>
                        {/* Column 이름 */}
                        <Row style={{ marginBottom: '40px' }}>
                            <Col xs={2} className="d-flex align-items-center justify-content-center" style={{fontWeight: 'bold'}}>#</Col>
                            <Col xs={3} className="d-flex align-items-center justify-content-center" style={{fontWeight: 'bold'}}>상품명</Col>
                            <Col xs={2} className="d-flex align-items-center justify-content-center" style={{fontWeight: 'bold'}}>가격</Col>
                            <Col xs={2} className="d-flex align-items-center justify-content-center" style={{fontWeight: 'bold'}}>재고 수량</Col>
                            <Col xs={2} style={{fontWeight: 'bold'}}>.</Col>
                        </Row>

                        {/* 주문 내역 리스트 */}
                        {Orderdata.map((item) => (
                            <Row key={item.id} style={{ marginTop: '10px' }}>
                            <Col xs={2} className="d-flex align-items-center justify-content-center">{item.id}</Col> {/* id */}
                            <Col xs={3} className="d-flex align-items-center justify-content-center">{item.name}</Col> {/* 상품명 */}
                            <Col xs={2} className="d-flex align-items-center justify-content-center">{item.price}</Col> {/* 가격 */}
                            <Col xs={2} className="d-flex align-items-center justify-content-center">{item.stock}</Col> {/* 재고수량 */}
                            <Col xs={2}>    {/* 수정 버튼 */} 
                                <div className="input-group"><button className="subscribe-btn" type="submit" style={{backgroundColor:'#8ECCF5'}}>수정</button></div>
                            </Col>
                            </Row>
                        ))}
                    </Container>
                </div>

                {/* 애니메이션 */}
                <ul className="shape-group-7 list-unstyled">
                    <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/circle-2.png"} alt="circle" /></li>
                    <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/bubble-2.png"} alt="Line" /></li>
                    <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/bubble-1.png"} alt="Line" /></li>
                </ul>
            </div>
        </main>
    )
}

export default ProductList;