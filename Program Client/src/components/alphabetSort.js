import React, { useState } from "react";
import './alphabetSort.css'
import { postWord } from './service'


function AlphabetSortApp() {
    const [word, setWord] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        postWord(word)
            .then(res => {
                console.log(res)
                setWord(res.result)
            })
            .catch(err => {
                console.log(err)
            })
        alert('Your result will show on the input column after you click OK')
    }

    return (
        <div className="center">
            <div className="alphasort-card">
                <h2>Alphabet Sort</h2>
                <input
                    className="input-string"
                    placeholder="input your words here"
                    type="text"
                    value={word}
                    onChange={(e) => setWord(e.target.value)}

                />
                <button
                    className="sort-btn"
                    onClick={(e) => handleSubmit(e)}
                >
                    Sort
                </button>
            </div>

        </div>
    );
};

export default AlphabetSortApp;



