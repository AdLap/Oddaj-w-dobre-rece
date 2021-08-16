import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

const CollectForm1 = () => {
    return (
        <>
        <h2>Zaznacz co chcesz odddać</h2>
        <Formik 
        initialValues={{
            
        }}
        onSubmit={values => console.log(values)}
        >
            {
                ({handleSubmit}) => (
                    <form onSubmit={handleSubmit}>
                        
                    </form>
                )
            }
        </Formik>
        </>
    );
}

export default CollectForm1;
