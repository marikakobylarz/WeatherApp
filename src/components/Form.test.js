import React from "react";
import Form from "./Form.js";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";

describe('<Form/>', () => {
    it("renders correctly", () => {
        const wrapper = shallow(
            <Form onSubmit={() => { }} value="london" onChange={() => { }} />
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it("Has an input field", () => {
        const wrapper = shallow(<Form />);
        expect(wrapper.find(".form__input").length).toEqual(1);
    });
    it("Has an search button", () => {
        const wrapper = shallow(<Form />);
        expect(wrapper.find(".form__button").length).toEqual(1);
    });
});


