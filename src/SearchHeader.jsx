import { useState } from "react";


function SearchHeader({ search }) {
    const [value, setValue] = useState('')
    const handleFormSubmit = (e) => {
        e.preventDefault();
        search(value)

    }

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    return (
        <div className="searchbar">
            <form onSubmit={handleFormSubmit}>
                <label>Ne Arıyorsun ? </label>
                <input type="text" value={value} onChange={handleChange} />
            </form>
        </div>
    )
}

export default SearchHeader