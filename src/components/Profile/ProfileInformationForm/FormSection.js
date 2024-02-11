import { Field, ErrorMessage } from "formik";

const FormSection = ({type, name, text, placeholder }) => {
    return (
        <div style={{ marginBottom: '10px' }} className='string'>
            <label style={{ fontWeight: '600', fontSize: '20px' }} htmlFor={name}>{text}:</label>
            <Field type={type} name={name} placeholder={placeholder} /> {/* Здесь не нужно устанавливать значение */}
            <ErrorMessage name={name} component="div" /> {/* Используйте правильное имя поля для сообщений об ошибке */}
        </div>
    );
}

export default FormSection;
