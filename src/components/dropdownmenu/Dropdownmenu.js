import React from 'react';

export const Dropdownmenu = () => {
    return (
        <div>
            <select>
                <option value="10">10 rundor</option>
                <option value="25">25 rundor</option>
                <option selected value="50">50 rundor</option>
                <option value="100">100 rundor</option>
            </select>
            <br/>
            <br/>
            <button>Jobba</button>
        </div>
    )
}
