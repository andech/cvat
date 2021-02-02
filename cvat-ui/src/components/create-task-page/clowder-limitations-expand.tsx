// Copyright (C) 2021 Intel Corporation
//
// SPDX-License-Identifier: MIT

import './styles.scss';
import React, { useState } from 'react';
import { Col, Icon, Row } from 'antd';

function ClowderLimitationsExpand(): JSX.Element {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <Row
            style={{
                padding: '8px 16px',
                margin: '4px 0 16px',
                borderRadius: '3px',
                border: '1px solid #91D5FF',
                background: '#E6F7FF',
                cursor: 'pointer',
            }}
            onClick={() => setIsExpanded(!isExpanded)}
        >
            <Row type='flex' align='middle'>
                <Col>
                    <Icon type='warning' theme='twoTone' style={{ fontSize: '16px', marginRight: '8px' }} />
                </Col>

                <Col>Limitations for uploading</Col>

                <Icon type={isExpanded ? 'up' : 'down'} style={{ marginLeft: 'auto' }} />
            </Row>

            {isExpanded && (
                <ul style={{ margin: '8px 0 0' }}>
                    <li>All uploaded files must have different names</li>

                    <li>
                        Either a single video/archive/pdf/zip, or a set of images and directories can be uploaded for
                        one task
                    </li>
                </ul>
            )}
        </Row>
    );
}

export default React.memo(ClowderLimitationsExpand);
