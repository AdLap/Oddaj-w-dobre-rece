import styles from './Pagination.module.scss';
import CSSModules from 'react-css-modules';
import { useState } from 'react/cjs/react.development';

const Pagination = ({ nr, paginate }) => {
    const [page, setPage] = useState(1)
    const pageNr = [];
    for (let i = 1; i <= nr; i++) {
        pageNr.push(i);
    }

    const clickHandler = (number) => {      
        if (typeof paginate === "function") {
            paginate(number);
        }
        setPage(number);
    }
 
    return (
        <div styleName={nr > 1 ? 'pagination' : 'hide'}>
            {pageNr.map((number, idx) => <div
                styleName={idx === page - 1 ? 'nr-active' : 'nr'}
                key={number}
                onClick={() => clickHandler(number)}
            >
                {number}
            </div>)}
        </div>
    );
}

export default CSSModules(Pagination, styles);
