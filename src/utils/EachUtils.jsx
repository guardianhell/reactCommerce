import React from "react";
import { Children } from "react";

const EachUtils = ({ of, render }) => {

    return <>{Children.toArray(of.map((item, inde) => render(item, index)))}</>
}

export default EachUtils