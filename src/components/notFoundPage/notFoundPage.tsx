import React from 'react'


type PropsType = {
    message: JSX.Element
}

const NotFoundPage: React.FC<PropsType> = ({message}) => {
    return (
        <>
            {message}
        </>
    )
}

export default NotFoundPage