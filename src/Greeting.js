import React from 'react';

//putting export in front creates a named export
export const Greeting = ({name, numberOfMessages}) => {
    console.log("Rendering Greeting");
    if (!name) return null;
    let isMorning = (new Date()).getHours() < 12;
    let greetingHeader = isMorning
        ? <h3>Good Morning {name} !</h3>
        : <h3>Good Evening {name} !</h3>;
    return  (
            <>
                {greetingHeader}
                {numberOfMessages === 0 
                    ? null
                    : <p>You have {numberOfMessages} new messages</p>}
            </>
        )
}

//Dont do export statment at the end of a file use the named export option
//that will go in front of the function statement
//then on the import file surround the fucntion with {}

//export default Greeting;

//To conditionaly display a component need to pass null in the return statement