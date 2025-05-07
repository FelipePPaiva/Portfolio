import { Title } from '../components/title';
import { Footer } from './Footer';
import { Header } from './Header';
import styles from './politica.module.css';

export function Politica(){
    return(
        <div className={styles.politica}>
            <Header />
            <div className={styles.container}>
                <div className={styles.containerBox}>
                    <div className={styles.content}>
                        <Title title="Política de Privacidade" />
                        <p>
                            Esta Política de Privacidade descreve como as informações pessoais fornecidas por você são coletadas, utilizadas e protegidas no site <strong>JP de Andrade</strong>
                        </p>
                    </div>
                    <div className={styles.indice}>
                        <h3>Índice</h3>
                        <ol>
                            <li>
                                <a href="#one">Informações Coletadas</a>
                            </li>
                            <li>
                                <a href="#two">Uso das Informações</a>
                            </li>
                            <li>
                                <a href="#three">Compartilhamento de Dados</a>
                            </li>
                            <li>
                                <a href="#four">Segurança das Informações</a>
                            </li>
                            <li>
                                <a href="#five">Armazenamento das informações</a>
                            </li>
                            <li>
                                <a href="#six">Direitos do Usuário</a>
                            </li>
                            <li>
                                <a href="#seven">Alterações nesta Política</a>
                            </li>
                        </ol>
                    </div>
                    <div className={styles.listContent}>
                        <ol>
                            <li>
                                <h3  id="one">Introdução</h3>
                                <div className={styles.topic}>
                                    <p>
                                        Ao preencher o formulário de contato neste site, coletamos os seguintes dados:
                                    </p>
                                    <ul>
                                            <li>Nome</li>
                                            <li>Telefone</li>
                                            <li>E-mail</li>
                                            <li>Tipo de curso selecionado</li>
                                            <li>Dúvidas ou mensagens inseridas no campo de texto</li>
                                        </ul>
                                </div>
                            </li>
                            <li>
                                <h3 id="two">Uso das Informações</h3>
                                <div className={styles.topic}>
                                    <p>
                                        As informações coletadas serão exclusivamente para:
                                    </p>
                                    <ul>
                                            <li>Entrar em contato com você e responder às suas dúvidas.</li>
                                            <li>Oferecer detalhes sobre os cursos disponíveis.</li>
                                            <li>Melhorar o atendimento e os serviços prestados.</li>
                                    </ul>
                                    <p>
                                        Não utilizamos seus dados para envio de spam ou publicidade não solicitada
                                    </p>
                                </div>
                            </li>
                            <li>
                                <h3 id="three">Compartilhamento de Dados</h3>
                                <div className={styles.topic}>
                                    <p>
                                        Seus dados não serão vendidos, alugados ou compartilhados com terceiros, exceto quando exigido por lei ou por ordem judicial.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <h3 id="four">Segurança das Informações</h3>
                                <div className={styles.topic}>
                                    <p>
                                        Adotamos medidas de segurança adequadas para proteger seus dados pessoais contra acesso não autorizado, alteração, divulgação ou destruição.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <h3 id="five">Armazenamento das Informações</h3>
                                <div className={styles.topic}>
                                    <p>
                                        As informações enviadas por meio do formulário poderão ser armazenadas por tempo indeterminado, exclusivamente para fins de histórico de contato e acompanhamento de atendimento. Caso deseje que seus dados sejam removidos, você pode solicitar pelo canal de contato.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <h3 id="six">Direitos do Usuário</h3>
                                <div className={styles.topic}>
                                    <p>
                                        Você tem o direito de:
                                    </p>
                                    <ul>
                                        <li>Solicitar acesso aos seus dados pessoais</li>
                                        <li>Corrigir informações incorretas</li>
                                        <li>Solicitar a exclusão de seus dados</li>
                                    </ul>
                                    <p>
                                        Para isso, entre em contato através do e-mail <strong>Jpandrade783@gmail.com</strong>
                                    </p>
                                </div>
                            </li>
                            <li>
                                <h3 id="seven">Alterações nesta Política</h3>
                                <div className={styles.topic}>
                                    <p>
                                        Esta política poderá ser atualizada a qualquer momento, sem aviso prévio. Recomendamos que você revise esta página periodicamente.
                                    </p>
                                </div>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}