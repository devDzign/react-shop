import React, { useEffect, useState } from 'react';


const UseEffectPage = () => {

    const [value, setValue] = useState(0);

    const handleClick = () => {

        setValue((oldValue)=> oldValue + 1);
    }

    useEffect(() => {
       console.log('call useEffect !!')
    }, [value]);

    console.log('render Components !!')
    return (
        <div className={"container m-5"}>
            <div className={"row"}>
                <div className={"col-6"}>
                    <h1 className={"text-center"}>UseEffects Basics</h1>

                    <h2>{value}</h2>

                    <button type="button" className="btn btn-outline-primary" onClick={handleClick}>
                        (+ 1)
                    </button>
                </div>
            </div>
            
        </div>
    );
};

export default UseEffectPage;
