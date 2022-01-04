import { TextField } from "@mui/material"

const Search = ({btn, handleOnSearch}) => {
    return (
        <div>
            <TextField
                id="standard-search"
                label="Search field"
                type="search"
                variant="standard"
                className={btn}
                onKeyDown={handleOnSearch}
            />
        </div>
    )
}

export default Search
