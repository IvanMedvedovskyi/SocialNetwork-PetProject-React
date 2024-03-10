import { Field, ErrorMessage } from "formik";

type FormSectionPropsType = {
    type: string
    name: string
    text: string
    placeholder: string
}

const FormSection: React.FC<FormSectionPropsType> = ({type, name, text, placeholder }) => {
    return (
        <div style={{ marginBottom: '10px' }} className='string'>
            <label style={{ fontWeight: '600', fontSize: '20px' }} htmlFor={name}>{text}:</label>
            <Field type={type} name={name} placeholder={placeholder} />
            <ErrorMessage name={name} component="div" />
        </div>
    );
}

export default FormSection;
