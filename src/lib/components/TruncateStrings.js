// This file is part of React-Invenio-Deposit
// Copyright (C) 2020 Graz University of Technology.
//
// React-Invenio-Deposit is free software; you can redistribute it and/or modify it
// under the terms of the MIT License; see LICENSE file for more details.

import PropTypes from 'prop-types';
import truncate from 'lodash/truncate'
import React, { Component } from 'react';

export class TruncateStrings extends Component {

    render() {
        const { texts, link } = this.props;
        const truncted = truncate(texts, { length: 300 });
        return (
            <span>{truncted}<a href={link} target="_blank">Read more</a></span>
        );
    }
}


TruncateStrings.propTypes = {
    texts: PropTypes.string,
    link: PropTypes.string,
};

TruncateStrings.defaultProps = {
    texts: '',
    link: '',
};
