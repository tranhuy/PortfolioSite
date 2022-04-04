const Alert = ({ message }) => {
    const alert = {
        width: '100%',
        background: message?.isError ? '#ffb3b3' : '#f2e7c3',
        fontSize: '1rem',
        borderRadius: '5px',
        padding: '5px',
        marginBottom: '5px',
        textAlign: 'center',
    }

    if (!message) {
        return null;
    }

    return (
        <div style={alert}>
            {message.content}
        </div>
    )
}

export default Alert