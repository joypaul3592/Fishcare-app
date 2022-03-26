import React from 'react';
import './Ans.css'

const Ans = () => {
    return (
        <div className="ans-container">
            <div className='ans-card'>
                <h3>How does React work?</h3>
                <p>React works in declarative code.
    The react is a javascript library is (not a frame-work). imagine the coming here-after code expressed as an app.that makes come into existence user 5 interfaces uis in a certain to take place. react lets you to effectively re-construct your DOM in javascript and push only those changes to the DOM which have actually took place.</p>
            </div>
            <div className="ans-card">
                <h3>Different Between State and Props</h3>
                <p>State : 1.Props are read-only.2.Props are immutable.3.Stateless component can have Props.4.Props are used to communicate between components.</p>
                <p>Props: 1.State changes can be asynchronous.2.State is mutable.3. Stateless components cannot have State.4.States can be used for rendering dynamic changes with the component.</p>
            </div>
        </div>
     
    );
};

export default Ans;