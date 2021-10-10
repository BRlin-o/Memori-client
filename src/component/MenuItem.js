import React from 'react';

const menuItemStyle = {
    marginBottom: "7px",
    paddingLeft: "26px",
    listStyle: "none"
};

function MenuItem(props) {
    return <li style={menuItemStyle}>{props.text}</li>
}

export default MenuItem;