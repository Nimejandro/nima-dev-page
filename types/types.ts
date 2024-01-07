export type CVForm = {
    name: string;
    email: string;
    telephone: string;
    address: string;
    education: Education[];
    experience: Experience[];
}

export type Education = {
    school: string;
    degree: string;
    from: string;
    to: string | null;
}

export type Experience = {
    company: string;
    position: string;
    from: string;
    to: string | null;
}