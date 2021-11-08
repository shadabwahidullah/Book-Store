import React from "react";

const InputBook = () => {
    return (
        <form>
            <input placeholder="name of the book"></input>
            <input placeholder="author of the book"></input>
            <button type="submit">Add book</button>
        </form>
    )
}

export default InputBook;