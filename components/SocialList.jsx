import styles from "../styles/SocialCard.module.css";

export default function SocialCard({ url, link, name }) {
    return (
        <li>
            <img src={url} alt=""/>

            <a target="_blank" href={link}>{name}</a>
        </li>
    );
}