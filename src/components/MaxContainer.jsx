import React from 'react'

const MaxContainer = ({ children }) => {
    return (
        <div className='max-w-[1900px] w-full flex justify-center'>
            {children}
        </div>
    )
}

export default MaxContainer
