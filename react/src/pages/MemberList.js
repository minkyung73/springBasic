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

const Memberdata = [
    { id: 1, name: 'user 1', city: 'city1', address: 'addr1', post: 1111 },
    { id: 2, name: 'user 2', city: 'city2', address: 'addr2', post: 2222 },
    { id: 3, name: 'user 3', city: 'city3', address: 'addr3', post: 3333 },
];

const MemberList = ({parentClass, colSize, itemShow, columnGap}) => {

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
                    title="회원 목록"
                    textAlignment="heading-left mb--40"
                    textColor=""
                    />

                    <Container>
                        {/* Column 이름 */}
                        <Row style={{ marginBottom: '40px' }}>
                            <Col xs={1} className="d-flex align-items-center justify-content-center" style={{fontWeight: 'bold'}}>#</Col>
                            <Col xs={2} className="d-flex align-items-center justify-content-center" style={{fontWeight: 'bold'}}>이름</Col>
                            <Col xs={2} className="d-flex align-items-center justify-content-center" style={{fontWeight: 'bold'}}>도시</Col>
                            <Col xs={3} className="d-flex align-items-center justify-content-center" style={{fontWeight: 'bold'}}>주소</Col>
                            <Col xs={2} className="d-flex align-items-center justify-content-center" style={{fontWeight: 'bold'}}>우편 번호</Col>
                        </Row>

                        {/* 주문 내역 리스트 */}
                        {Memberdata.map((item) => (
                            <Row key={item.id} style={{ marginTop: '10px' }}>
                                <Col xs={1} className="d-flex align-items-center justify-content-center">{item.id}</Col>
                                <Col xs={2} className="d-flex align-items-center justify-content-center">{item.name}</Col>
                                <Col xs={2} className="d-flex align-items-center justify-content-center">{item.city}</Col>
                                <Col xs={3} className="d-flex align-items-center justify-content-center">{item.address}</Col>
                                <Col xs={2} className="d-flex align-items-center justify-content-center">{item.post}</Col>
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

export default MemberList;