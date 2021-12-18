import { TextField } from "@mui/material"

const Search = ({btn}) => {
    return (
        <div>
            <TextField
                id="standard-search"
                label="Search field"
                type="search"
                variant="standard"
                className={btn}
            />
        </div>
    )
}

export default Search
