import { Form, Formik } from 'formik'
import React from 'react'
import { Button } from 'semantic-ui-react';
import * as Yup from "yup";
import KodlamaIoTextInput from '../utilities/customFormControls/KodlamaIoTextInput';

export default function ProductAdd() {
    const initialValues = { productName: "", unitPrice: 10 }
    const schema = Yup.object({
        productName: Yup.string().required("Ürün adı zorunlu"),
        unitPrice: Yup.number().required("Ürün fiyatı zorunlu")
    })

    return (
        <Formik initialValues={initialValues} validationSchema={schema} onSubmit={(values) => { }}>
            <Form className='ui form'>
                <KodlamaIoTextInput name="productName" placeholder="Ürün adı"></KodlamaIoTextInput>
                <KodlamaIoTextInput name="unitPrice" placeholder="Ürün fiyatı"></KodlamaIoTextInput>
                <Button color='green' type="submit">Ekle</Button>
            </Form>
        </Formik >
    )
}
