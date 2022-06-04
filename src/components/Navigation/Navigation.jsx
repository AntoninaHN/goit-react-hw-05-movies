import React from "react";
import { NavLink } from "react-router-dom";
import styles from '../Navigation/Navigation.module.css';

export default function Navigation (){
    return(
        <nav className={styles.nav}>
            <NavLink to="/" className={({ isActive }) => {
          return isActive
            ? [styles.navItem, styles.active].join(' ')
            : styles.navItem;
        }}
        >
            Home </NavLink>
            <NavLink to="/movies" className={({ isActive }) => {
          return isActive
            ? [styles.navItem, styles.active].join(' ')
            : styles.navItem;
        }}
        >
            Movies</NavLink>
        
        </nav>
    )
    
}
