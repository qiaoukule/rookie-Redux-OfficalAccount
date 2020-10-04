import React, { Component } from 'react';
import { Upload, Button, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Card,Col,Row } from 'antd';

const { Meta } = Card;

class Picture extends Component {
   
    render() { 
        return ( 
            <div>
                图片
                <Upload >
                    <Button icon={<UploadOutlined />}>上传图片</Button>
                </Upload>

                <div>
                <Row gutter={16}>   
                <Col span={5}>
                   <Card
                        hoverable
                        style={{ width: 240 , marginBottom: 10  }}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta title="Europe Street beat"  />
                    </Card>
                    </Col >,

                    <Col span={5}>
                    <Card
                        hoverable
                        style={{ width: 240  , marginBottom: 10 }}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta title="Europe Street beat"  />
                    </Card>
                    </Col >,

                    <Col span={5}>
                    <Card
                        hoverable
                        style={{ width: 240  , marginBottom: 10 }}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta title="Europe Street beat"  />
                    </Card>
                    </Col >,

                    <Col span={5}>
                    <Card
                        hoverable
                        style={{ width: 240  , marginBottom: 10  }}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta title="Europe Street beat"  />
                    </Card>
                    </Col >,

                    <Col span={5}>
                    <Card
                        hoverable
                        style={{ width: 240  , marginBottom: 10 }}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta title="Europe Street beat" />
                    </Card>
                    </Col >,

                    <Col span={5}>
                    <Card
                        hoverable
                        style={{ width: 240  , marginBottom: 10 }}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta title="Europe Street beat" />
                    </Card>
                    </Col >,

                    <Col span={5}>
                    <Card
                        hoverable
                        style={{ width: 240 , marginBottom: 10  }}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta title="Europe Street beat"  />
                    </Card>
                    </Col >
                    </Row>
                </div>
            </div>
         );
    }
}
 
export default Picture;