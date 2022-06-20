import Form from 'react-bootstrap/Form'
function Input (props) {
    const {label, type, placeHolder, name, change} = props

    return (
        <>
            <Form.Group className="mb-3">
                <Form.Label>{label}</Form.Label>
                <Form.Control type={type} placeholder={placeHolder} onChange={change} name={name} />
            </Form.Group>
        </>
    )
}

export default Input