// Copyright (c) 2015 Mattermost, Inc. All Rights Reserved.
// See License.txt for license information.

import React from 'react';
import {FormattedMessage} from 'react-intl';
import {Link} from 'react-router/es6';

import logoImage from 'images/logo.png';

export default class MFAController extends React.Component {
    render() {
        return (
            <div>
                <div className='signup-header'>
                    <Link to='/'>
                        <span className='fa fa-chevron-left'/>
                        <FormattedMessage
                            id='web.header.back'
                        />
                    </Link>
                    <FormattedMessage
                        id='mfa.title'
                        defaultMessage='Multi-factor Authentication Setup'
                    />
                </div>
                <div className='col-sm-12'>
                    <div className='signup-team__container'>
                        <img
                            className='signup-team-logo'
                            src={logoImage}
                        />
                        <div id='mfa'>
                            {React.cloneElement(this.props.children, {})}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

MFAController.defaultProps = {
};
MFAController.propTypes = {
    location: React.PropTypes.object.isRequired,
    children: React.PropTypes.node
};
