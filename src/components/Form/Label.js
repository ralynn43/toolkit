/**
 * @copyright   2010-2016, The Titon Project
 * @license     http://opensource.org/licenses/BSD-3-Clause
 * @link        http://titon.io
 */

import React, { PropTypes } from 'react';
import Component from '../../Component';
import MODULE from './module';

export default class Label extends Component {
    static module = MODULE;

    static propTypes = {
        children: PropTypes.node,
        inputID: PropTypes.string.isRequired
    };

    /**
     * Render the form field label.
     *
     * @returns {ReactElement}
     */
    render() {
        let { children, inputID, ...props } = this.props;

        return (
            <label
                id={inputID + '-label'}
                htmlFor={inputID}
                className={this.formatChildClass('label')}
                {...this.inheritNativeProps(props)}
            >
                {children}
            </label>
        );
    }
}
