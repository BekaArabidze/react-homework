import React from 'react'

const Input = ({ title, value, handleInput,name }) => {
    return (
        <>
            <h3>{title}</h3>
            <br />
            <br />
            <form className="search-form" onSubmit={(e) => e.preventDefault()}>
                <input name={name}  placeholder={title} type="text" value={value} onChange={handleInput} />
            </form>
        </>
    )
}

export default Input