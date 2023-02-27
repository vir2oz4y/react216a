import React, {useState} from 'react';

const Counter = () => {

    const [state, setState] = useState(0)

    const onPlus = (num:number) =>{
        setState(state+num);
    }

    const onMinus = (num:number) =>{
        setState(state-num);
    }

    return (
        <div>
            <div>
                <div>
                    {state}
                </div>
            </div>

            <div>
                <button
                    onClick={()=>onPlus(1)}
                >
                    Plus
                </button>

                <button
                    onClick={()=>onMinus(1)}
                >
                    Minus
                </button>

                <button
                    onClick={()=>onPlus(100)}
                >
                    Plus 100
                </button>

                <button
                    onClick={()=>onMinus(100)}
                >
                    Minus 100
                </button>



            </div>
        </div>
    );
};

export default Counter;