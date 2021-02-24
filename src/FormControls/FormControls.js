import React from 'react'

export const Textarea = ({input, meta, ...props}) => {
    return (
        <div>
            <textarea {...input} {...props}/>
            {meta.touched && meta.error && <span>{'error'}</span>}
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {
    return (
        <div>
            <input {...input} {...props}/>
            {meta.touched && meta.error && <span>{'error'}</span>}
        </div>
    )
}