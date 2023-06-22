import React from 'react';
import { useState, useEffect } from 'react';
import ProjectData from "../data/ProjectData.json";
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
    { id: 1, name: 'user1', product: '상품 1', price: 1000, stock: 10, status: 'ORDER', date: '2023-06-22T23:22:14.193' },
    { id: 2, name: 'user2', product: '상품 2', price: 2000, stock: 20, status: 'ORDER', date: '2023-06-22T23:22:14.193' },
    { id: 3, name: 'user3', product: '상품 3', price: 3000, stock: 30, status: 'ORDER', date: '2023-06-22T23:22:14.193' },
];

const OrderList = ({parentClass, colSize, itemShow, columnGap}) => {

    const [getAllItems] = useState(AllData);
	const [visiableProject] = useState(itemShow ? itemShow : 6);
    const [activeFilter, setActiveFilter] = useState("");
	const [visibleItems, setVisibleItems] = useState([]);
	

	useEffect(() => {
        setActiveFilter(filters[0].label);
		setVisibleItems(getAllItems.filter((item) => item.id <= visiableProject));
    }, []);

	const handleChange = (e) => {
        e.preventDefault();
		let target = e.target.textContent;

        setActiveFilter(target);

        let tempData = [];
        if (target === filters[0].label) {
			tempData = getAllItems.filter((data) => data.id <= visiableProject);
        } else {
			for (let i = 0; i < getAllItems.length; i++) {
				const element = getAllItems[i];
				let categories = element['category'];
				
				if (categories.includes(target)) {
					tempData.push(element)
				} 
			}
        }
        setVisibleItems(tempData);
    };

    return (
        <main className="main-wrapper">
			<div className={`section section-padding-2 ${parentClass ? parentClass : ""}`}>
                <div className="container">
                    <SectionTitle 
                    subtitle="HOME"
                    title="주문 내역"
                    textAlignment="heading-left mb--40"
                    textColor=""
                    />

                    {/* 카테고리 */}
                    <div className="isotope-button isotope-project-btn">
						{filters.map((filter) => (
							<button onClick={handleChange} className={
								filter.label === activeFilter
								? "is-checked"
								: " "
							} 
							key={filter.id}>{filter.label}</button>
						))}
					</div>

                    <Container>
                        {/* Column 이름 */}
                        <Row style={{ marginBottom: '40px' }}>
                            <Col xs={1} className="d-flex align-items-center justify-content-center" style={{fontWeight: 'bold'}}>#</Col>
                            <Col xs={2} className="d-flex align-items-center justify-content-center" style={{fontWeight: 'bold'}}>회원명</Col>
                            <Col xs={2} className="d-flex align-items-center justify-content-center" style={{fontWeight: 'bold'}}>대표 상품 이름</Col>
                            <Col xs={2} className="d-flex align-items-center justify-content-center" style={{fontWeight: 'bold'}}>대표 상품 주문 수량</Col>
                            <Col xs={2} className="d-flex align-items-center justify-content-center" style={{fontWeight: 'bold'}}>상태</Col>
                            <Col xs={2} style={{fontWeight: 'bold'}}>일시</Col>
                            <Col xs={1} style={{fontWeight: 'bold'}}>.</Col>
                        </Row>

                        {/* 주문 내역 리스트 */}
                        {Orderdata.map((item) => (
                            <Row key={item.id} style={{ marginTop: '10px' }}>
                                <Col xs={1} className="d-flex align-items-center justify-content-center">{item.id}</Col>
                                <Col xs={2} className="d-flex align-items-center justify-content-center">{item.name}</Col>
                                <Col xs={2} className="d-flex align-items-center justify-content-center">{item.product}</Col>
                                <Col xs={2} className="d-flex align-items-center justify-content-center">{item.stock}</Col>
                                <Col xs={2} className="d-flex align-items-center justify-content-center">{item.status}</Col>
                                <Col xs={2} className="d-flex align-items-center justify-content-center">{item.date}</Col>
                                <Col xs={1}>
                                <div className="input-group"><button className="subscribe-btn" type="submit" style={{backgroundColor:'#F5746E'}}>주문 취소</button></div>
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

export default OrderList;