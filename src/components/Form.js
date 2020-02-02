import React from 'react';
import glass from '../images/glass.png'


const Form = (props) => {
    return (
        <form className="form" onSubmit={props.submit}>
            <input type="text"
                className="form__input"
                value={props.value}
                placeholder="Wpisz miasto"
                maxLength="58"
                onChange={props.change}></input>
            <button className="form__button" onSubmit={props.submit} style={{ backgroundImage: `url(${glass})` }}></button>
        </form>
    );
}
export default Form;