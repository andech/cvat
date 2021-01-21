// Copyright (C) 2020 Intel Corporation
//
// SPDX-License-Identifier: MIT

import './styles.scss';
import React from 'react';
import ClowderTopPanel from './clowder-top-panel';

interface Props {
    selectedFilesCount: number;
    onDelete: () => void;
}

function ClowderTopPanelUpload(props: Props): JSX.Element {
    const { selectedFilesCount, onDelete } = props;

    return (
        <ClowderTopPanel
            title='CVAT Upload:'
            selectedFilesCount={selectedFilesCount}
            btnIconName='delete'
            btnTitle='Delete'
            handleClick={onDelete}
        />
    );
}

export default React.memo(ClowderTopPanelUpload);
