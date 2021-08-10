import React, { useEffect, useState } from 'react';
import styles from './Pagination.module.scss';
import CSSModules from 'react-css-modules';

const Pagination = ({ nr }) => {
    const [site, setSite] = useState([]);

    useEffect(() => {
        pages(nr);
        
        return () => pages();
    }, [nr])

    const pages = nr => {
        let arr = [];
        for (let i = 0; i < nr; i++) {
            arr.push(i);
        }
        setSite(arr);
    }

    return (
        <div styleName={nr > 1 ? 'pagination' : 'hide'}>
            {site.map((el, idx) => <div styleName='nr' key={el}>{el + 1}</div>)}
        </div>
    );
}

export default CSSModules(Pagination, styles);
