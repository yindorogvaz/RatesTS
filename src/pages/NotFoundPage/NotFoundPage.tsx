import React from 'react'

type PropsType = {
    message: JSX.Element
}

export const NotFoundPage: React.FC<PropsType> = ({message}) => {
    return (
        <>
            {message}
        </>
    )
}