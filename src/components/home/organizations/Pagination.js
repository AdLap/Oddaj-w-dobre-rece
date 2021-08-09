import React, { useState } from 'react';
import styles from './Pagination.module.scss';
import CSSModules from 'react-css-modules';
import { map } from 'bluebird';

const Pagination = () => {
    const [site, setSite] = useState([0, 1, 2]);

    return (
        <div styleName='pagination'>
            {site.map((el, idx) => <div styleName='nr' key={idx}>{idx + 1}</div>)}
        </div>
    );
}

export default CSSModules(Pagination, styles);
