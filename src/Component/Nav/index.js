import React from 'react';
import { NavLink } from 'react-router-dom';

export const Nav =()=>{
    return(
        <ul>
          <li>
            <NavLink exact to="/">Home Page</NavLink>
          </li>
          <li>
            <NavLink to="/about">About Page</NavLink>
          </li>
          <li>
            <NavLink to="/public">Public Page</NavLink>
          </li>
          <li>
            <NavLink to="/protected">Protected Page</NavLink>
          </li>
        </ul>
    )
}
