import Alert from 'react-bootstrap/Alert'

function AlertCustom (props) {
    const {variant, text} = props
    return(
        <Alert variant={variant}>
            {text}
        </Alert>
    )
}

export default AlertCustom