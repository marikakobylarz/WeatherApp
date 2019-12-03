import React from 'react';

const Form = (props) => {
    return (
        <form className="form" onSubmit={props.submit}>
            <input tyle="text"
                className="form__input"
                value={props.value}
                placeholder="Wpisz miasto"
                onChange={props.change}></input>
            <button className="form__button" onSubmit={props.submit}>Szukaj</button>
        </form>
    );
}
export default Form;