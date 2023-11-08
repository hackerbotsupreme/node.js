import React from 'react';
import Card from './Card';
import Sdata from './Sdata';


const App = () => (
    <React.Fragment>
        <h1 className='heading-style'>List of top 3 netflix series</h1>
        {Sdata.map(
            (val, index) => {
                console.log(index)
                return (<Card
                    key={val.id}
                    className="first"
                    imgsrc={val.imgsrc}
                    title={val.sname}
                    sname={val.title}
                    link={val.links}
                />
                );
            })}
    </React.Fragment>
);

export default App;