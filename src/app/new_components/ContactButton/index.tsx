import Button from "@components/Button";
import "./ContactButton.css";
import { ContactButtonProps } from "./types";

export default function ContactButton({className}: ContactButtonProps) {
    return <Button title="Contactez-moi" link="/contact" className={`purple-button ${className ?? ''}`} />
}