function Input (props) {
    const {label, type, placeHolder, name, change} = props

    return (
        <>
            <div>
                <label>{label}</label>
                <input type={type} placeholder={placeHolder} name={name} onChange={change} ></input>
            </div>
        </>
    )
}

export default Input