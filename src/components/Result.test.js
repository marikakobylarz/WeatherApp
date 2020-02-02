import React from 'react';
import { shallow } from 'enzyme';
import Result from './Result';


describe('<Result/>', () => {
    it("renders correctly", () => {
        const wrapper = shallow(<Result date={02322} day={1} city={'london'} sunrise={0} sunset={0} temp={5} minTemp={5} maxTemp={5} pressure={1018} wind={5} err={false} country={'GB'} icon={"abc"} />
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
