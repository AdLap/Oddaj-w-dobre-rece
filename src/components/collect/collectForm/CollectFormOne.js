import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import CollectBtn from './CollectBtn';

const CollectFormOne = ({ next, data }) => {
    const options = [
        'ubrania, które nadają się do ponownego użycia',
        'ubrania, do wyrzucenia',
        'zabawki',
        'książki',
        'inne'
    ];

    const handleSubmit = values => {
        next(values)
    }

    return (
        <>
            <h2 className='collect__form__title'>Zaznacz co chcesz odddać:</h2>
            <Formik
                initialValues={data}
                onSubmit={handleSubmit}
            >
                {({ values }) => (
                    <Form className='collect__form__one'>
                        {options.map((option, idx) => (
                            <label key={idx} className='collect__form__one__label'>
                                <span className='collect__form__one__label__span'>{null}</span>
                                <Field type='radio' name='things' value={option} className='collect__form__one__label__radio' />
                                {option}
                            </label>
                        ))}
                        <div className='collect__form__btns'>
                            <CollectBtn type='submit' onClick={() => next(values)} text='Dalej' />
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    );
}

export default CollectFormOne;
