import { useState } from "react";

const SearchParams = () => {
    const [locaction, setLocation] = useState("");
    return (
        <div className ="search-params">
            <form>
                <label htmlFor="location">
                    Location
                    <input 
                    onChange = {(e) => setLocation (e.target.value)}
                    id="location" 
                    value={locaction} 
                    placeholder="Location" />
                </label>
                <button>Submit</button>
            </form>
        </div>
        )
        }

export default SearchParams;