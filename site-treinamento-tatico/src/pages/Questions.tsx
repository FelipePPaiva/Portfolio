import styles from './question.module.css'
import {useState} from 'react';
import { QuestionItem } from '../components/question';
import { Title } from '../components/title';

export function Question(){
    const[activeIndex, setActiveIndex] = useState<number | null>(null);

    const question = [
        {
            title: "Preciso ter experiência prévia com armas para participar dos cursos?",
            content: "Não, nosso curso básico é projetado para iniciantes sem nenhuma experiência prévia. Começamos do zero, abordando todos os fundamentos de segurança e manuseio antes de avançar para técnicas de tiro."
        },
        {
            title: "Preciso ter minha própria arma para participar dos cursos?",
            content: "Não é necessário. Disponibilizamos armas e munições para uso durante o treinamento. No entanto, caso já possua sua arma e queira treinar com ela, você poderá trazê-la desde que esteja legalmente documentada."
        },
        {
            title: "Os cursos oferecem certificados?",
            content: "Sim, todos os alunos que completarem o curso receberão um certificado oficial. Para o curso básico, este certificado pode ser utilizado em processos de obtenção do Certificado de Registro de Armas de Fogo (CRAF), conforme a legislação vigente."
        },
        {
            title: "Qual a duração média dos cursos?",
            content: "A duração varia de acordo com o nível do curso. O básico tem 16 horas, geralmente divididas em dois dias. O intermediário tem 24 horas, normalmente distribuídas em fins de semana ou módulos, de acordo com a disponibilidade da turma."
        },
        {
            title: "Onde são realizados os treinamentos?",
            content: "Nossos treinamentos são realizados em estandes de tiro credenciados pelo Exército Brasileiro, localizado na Rua Duarte da Silveira, Petrópolis -RJ. No momento da inscrição, você será informado sobre o local do seu curso."
        },
    ]
    return(
        <div id="question" className={styles.question}>
            <div className={styles.container}>
                <Title title="perguntas frequentes" />
                <div className={styles.wrapper}>
                    {question.map((q, index) => (
                        <QuestionItem 
                        key={index}
                        title={q.title}
                        content={q.content}
                        isOpen={activeIndex === index}
                        onToggle={() => setActiveIndex(activeIndex === index ? null : index)}/>
                    ))}

                </div>
            </div>
        </div>
    )
}