import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test('learn test cases',()=>{
    const {getByText}=render(<App/>);
    const linkElement=getByText(/Begin Quiz/i);
    expect(linkElement).toBeInTheDocument()
});