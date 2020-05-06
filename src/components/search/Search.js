import React,{useState} from "react"
import {TextField, Button, Container} from "@material-ui/core"
import SearchIcon from '@material-ui/icons/Search'
import ResultsList from "./ResultsList"

import styles from"./Search.module.css"


const Search = () => {
    const [showResults, setShowResults] = useState(false);
    
    return <React.Fragment>
    <Container className={styles.container}>
        <TextField 
            placeholder = "Type the name of the movie ... " 
            label="Search" 
            variant="outlined" 
            className={styles.search}
         />  
        <Button
            onClick={()=>setShowResults(!showResults)}
            className="button"
            variant="outlined"
            color="normal"
            startIcon={<SearchIcon/>}
        >
            Search
        </Button>
        
    </Container>
    {showResults && (
    <Container classname={styles.results}>
        <ResultsList />
    </Container>
    )}
    </React.Fragment>
}

export default Search