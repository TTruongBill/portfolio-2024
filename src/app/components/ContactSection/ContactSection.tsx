import Button from "../Button/Button";
import H1 from "../H1/H1";
import LabelText from "../LabelText/LabelText";

export default function ContactSection() {
    return(
        <div className="flex flex-col items-start justify-between md:flex-row md:items-center bg-blue-1 p-4">
            <H1>Contactez-moi par courriel ou par téléphone afin de discuter des possibilités de collaboration. :)</H1>
            <Button title="button" link="#" />
            <div className="">
                <LabelText label="Numéro" text="514-830-5213"/>
                <LabelText label="Adresse courriel" text="tientientruong1@gmail.com"/>
            </div>
            <div>
                <LabelText label="Numéro" text="514-830-5213"/>
                <LabelText label="Adresse courriel" text="tientientruong1@gmail.com"/>
            </div>
            
        </div>
    )
}