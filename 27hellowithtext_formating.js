// create new file in src of react app as  HelloStyled.js
// HelloStyled.js
import React from 'react';
import './HelloStyled.css'; // Import the CSS stylesheet

const HelloStyled = () => {
    return <h1 className="hello-styled">Hello from React with Styles!</h1>;
};

export default HelloStyled;


/////then create css file with same name 
/* HelloStyled.css */
.hello-styled {
    font-family: 'Times New Roman', Times, serif;
    font-size: 20px;
    color: red;
}

////then replace app.js code with 
import React from 'react';
import HelloStyled from './HelloStyled';

function App() {
    return (
        <div className="App">
            <HelloStyled />
        </div>
    );
}

export default App;









