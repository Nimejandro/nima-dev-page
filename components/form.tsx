import './style.css'
import { CVForm, Education, Experience } from '@/types/types';
const Form = () => {
    const sampleCVFormData: CVForm = {
        name: '',
        email: '',
        telephone: '',
        address: '',
        education: [],
        experience: [],
      };
    type StringKeys<T> = {
        [K in keyof T]: T[K] extends string ? K : never;
    }[keyof T]
    type CVFormStringKeys = StringKeys<CVForm>
    const keysArray: CVFormStringKeys[] = Object.keys(sampleCVFormData) as CVFormStringKeys[]
    return (
        <div className="outerForm">
            <form>
                {keysArray.map((key: string) => (
                    <div key={key}>
                        <label htmlFor={key}>
                            {key}
                        </label>
                    </div>
                ))}
            </form>
        </div>
    )
}

export default Form;