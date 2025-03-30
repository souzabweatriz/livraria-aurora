import React from "react";
import { icons } from "../data/iconList";

export default function IconList() {
    return (
        <ul className={styles.icons}>
            {icons.map((icon, index) => (
                <li key={index}>
                    <a href={icon.link}>
                        <img src={icon.image} alt="icon" />
                    </a>
                </li>
            ))}
        </ul>
    )
}