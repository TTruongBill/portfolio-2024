import Button from "@components/Button";
import "./ContactButton.css";
import { ContactButtonProps } from "./types";
import { useLocale } from "next-intl";

export default function ContactButton({ className }: ContactButtonProps) {
    const localActive = useLocale();

    return (
        <Button link="mailto: tientientruong1@gmail.com" className={`contact-button ${className ?? ''}`}>
            {localActive == "en" ? "Contact me" : "Contactez-moi"}
        </Button>
    )
}