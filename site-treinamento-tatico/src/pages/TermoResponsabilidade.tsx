import { Title } from '../components/title'
import { Footer } from './Footer'
import { Header } from './Header'
import styles from './termo.module.css'

export function Termo(){
    return(
        <div>
            <div className={styles.termo}>
            <Header />
            <div className={styles.container}>
                <div className={styles.containerBox}>
                    <div className={styles.content}>
                        <Title title="Termo de Responsabilidade" />
                        <p>
                        Este site tem como objetivo divulgar informações sobre os serviços oferecidos por <strong>JP de Andrade</strong> na área de treinamento e capacitação para o manuseio de armamentos.
                        </p>
                        <p>
                            Ao acessar e utilizar este site, o usuário declara estar ciente e de acordo com os seguintes termos:
                        </p>
                    </div>
                    <div className={styles.indice}>
                        <h3>Índice</h3>
                        <ol>
                            <li>
                                <a href="#one">Uso das Informações</a>
                            </li>
                            <li>
                                <a href="#two">Responsabilidade sobre o Conteúdo</a>
                            </li>
                            <li>
                                <a href="#three">Agendamentos e Contato</a>
                            </li>
                            <li>
                                <a href="#four">Direitos Autorais</a>
                            </li>
                            <li>
                                <a href="#five">Links Externos</a>
                            </li>
                            <li>
                                <a href="#six">Isenção de Responsabilidade</a>
                            </li>
                            <li>
                                <a href="#seven">Alterações nesta Política</a>
                            </li>
                        </ol>
                    </div>
                    <div className={styles.listContent}>
                        <ol>
                            <li>
                                <h3  id="one">Uso das Informações</h3>
                                <div className={styles.topic}>
                                    <p>
                                        As informações disponibilizadas neste site são de caráter informativo e destinam-se exclusivamente à divulgação dos serviços prestados pelo instrutor. O usuário compromete-se a utilizar o conteúdo de forma ética, legal e responsável.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <h3 id="two">Responsabilidade sobre o Conteúdo</h3>
                                <div className={styles.topic}>
                                    <p>
                                        Embora nos esforcemos para manter as informações atualizadas e precisas, não nos responsabilizamos por eventuais erros, omissões ou interpretações incorretas do conteúdo apresentado.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <h3 id="three">Agendamentos e Contato</h3>
                                <div className={styles.topic}>
                                    <p>
                                        O agendamento de treinamentos ou qualquer tipo de serviço deverá ser feito exclusivamente pelos canais oficiais de contato disponibilizados no site. O envio de informações por meio de formulários implica no consentimento para que possamos retornar o contato.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <h3 id="four">Direitos Autorais</h3>
                                <div className={styles.topic}>
                                    <p>
                                        Todo o conteúdo deste site (textos, imagens, vídeos, logotipo, etc.) é protegido por direitos autorais e não pode ser copiado, reproduzido ou distribuído sem autorização prévia.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <h3 id="five">Links Externos</h3>
                                <div className={styles.topic}>
                                    <p>
                                        Este site pode conter links para sites de terceiros. Não nos responsabilizamos pelo conteúdo, políticas ou práticas de privacidade desses sites.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <h3 id="six">Isenção de Responsabilidade</h3>
                                <div className={styles.topic}>
                                    <p>
                                        Este site não substitui orientações legais, operacionais ou treinamentos práticos. O uso indevido de informações aqui contidas é de total responsabilidade do usuário.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <h3 id="seven">Alterações</h3>
                                <div className={styles.topic}>
                                    <p>
                                        Reservamo-nos o direito de alterar estes termos a qualquer momento, sem aviso prévio. Recomendamos a revisão periódica desta página.
                                    </p>
                                </div>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
        </div>
    )
}