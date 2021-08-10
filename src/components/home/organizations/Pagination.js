import styles from './Pagination.module.scss';
import CSSModules from 'react-css-modules';

const Pagination = ({ nr, paginate }) => {
    const pageNr = [];
    for (let i = 1; i <= nr; i++) {
        pageNr.push(i);
    }

    return (
        <div styleName={nr > 1 ? 'pagination' : 'hide'}>
            {pageNr.map((number) => <div
                styleName='nr'
                key={number}
                onClick={() => paginate(number)}
            >
                {number}
            </div>)}
        </div>
    );
}

export default CSSModules(Pagination, styles);
