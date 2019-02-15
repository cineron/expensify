import React from "react";
import { shallow } from "enzyme";
// import ReactShallowRenderer from "react-test-renderer/shallow";
// import toJSON from "enzyme-to-json"; //added to jest.config.json
import Header from "../../components/Header";

test("Should render Header correctly", () => {
    const wrapper = shallow(<Header />);
    // expect(toJSON(wrapper)).toMatchSnapshot();
    expect(wrapper).toMatchSnapshot();//toJSON not need because it's run automatically now

    // expect(wrapper.find("h1").text()).toBe("Expensify");

    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();

    // console.log(renderer.getRenderOutput());
    
});