import { useState, useEffect } from 'react';
import { Col, Row, Card, Avatar, Divider } from 'antd';

const style = {
    background: '#0092ff',
    padding: '8px 0',
};

const BoxPage = () => {
    const projects = [
        { id: 1, name: 'ERP HR', image: 'https://placeimg.com/200/200/people', routerPath: '/u/erp_hr' },
        { id: 2, name: 'ERP WAREHOUSE', image: 'https://placeimg.com/200/200/people', routerPath: '/u/erp_warehouse' },
        { id: 3, name: 'MES PDA', image: 'https://placeimg.com/200/200/people', routerPath: '/u/mes_pda' },
    ];

    return (
        <div className="bg-slate-50 p-3 h-screen overflow-auto md:h-full md:overflow-hidden">
            <div className="profile-block text-center mb-8 mt-10">
                <h2 className="text-3xl font-bold mb-4">Welcome, Tuấn Hoàng</h2>
                <Avatar
                    size={64}
                    src="https://placeimg.com/100/100/people"
                    alt="John Doe"
                    className="mx-auto mb-2"
                />
                <p className="text-lg">Manage your profiles below</p>
            </div>

            <Row
                gutter={{
                    xs: 8,
                    sm: 16,
                    md: 24,
                    lg: 32,
                }}
            >
                {projects.map((item) => (
                    <Col key={item.id} className="gutter-row" span={8}>
                        <Card
                            hoverable
                            bordered
                            className="h-[200px]"

                        >
                            <div className="text-center">
                                <h3>{item.name}</h3>
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default BoxPage;
