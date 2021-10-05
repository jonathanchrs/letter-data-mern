import axios from "axios";
import { useState, useEffect } from "react";

const SKMenu = () => {

    const gridStyle = {
        borderRadius: "10px",
        margin: "1em 1em 1em 1em",
        textAlign: "center",
        padding: "3em",
        fontFamily: "'Montserrat', sans-serif"
    }
    
    const [letterCount, setLetterCount] = useState(0);

    useEffect(() => {
        getTotalSk();
    })

    const getTotalSk = async () => {
        const response = await axios.get('http://localhost:3000/suratkeluar/total')
        setLetterCount(response.data.total)
    }

    return (
        <div className="column box has-background-info-light" style={gridStyle}>
            <div>
                <i className="fas fa-mail-bulk fa-5x"></i>
            </div>
            <div className="mt-3">
                <h1 className="has-text-weight-bold is-size-4">Surat Keluar</h1>
                <h2>{letterCount} letters added !</h2>
            </div>
        </div>
    )
}

export default SKMenu
