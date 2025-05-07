import styles from './gallery.module.css'
import {useState} from 'react';
import galeria1 from '../assets/images/imagem1.jpg'
import galeria2 from '../assets/images/imagem2.jpg'
import galeria3 from '../assets/images/imagem3.jpg'
import galeria4 from '../assets/images/imagem4.jpg'
import certificado from '../assets/images/certificado.jpeg'
import { Title } from '../components/title';

export function Gallery(){
    const [modalImg, setModalImg] = useState<string | null>(null);
    const openImage = (imgSrc: string) => {
        setModalImg(imgSrc);
    };

    const closeModal = () => {
        setModalImg(null);
    }
    return(
        <div id="galeria" className={styles.gallery}>
            <div className={styles.container}>
                <Title title='Galeria' />
                <div className={styles.wrapper}>
                    <div className={styles.gallerItem} onClick={() => openImage(galeria1)}>
                        <img src={galeria1} alt="Treinamento de Tiro" />
                    </div>
                    <div className={styles.gallerItem} onClick={() => openImage(galeria2)}>
                        <img src={galeria2} alt="Estande de tiro" />
                    </div>
                    <div className={styles.gallerItem} onClick={() => openImage(certificado)}>
                        <img src={certificado} alt="Certificado" />
                    </div>
                    <div className={styles.gallerItem} onClick={() => openImage(galeria3)}>
                        <img src={galeria3} alt="" />
                    </div>
                    <div className={styles.gallerItem} onClick={() => openImage(galeria4)}>
                        <img src={galeria4} alt="" />
                    </div>
                </div>
                {
                    modalImg && (
                        <div className={styles.modal} onClick={closeModal}>
                            <img src={modalImg} alt="Imagem ampliada" />
                        </div>
                    )
                }
            </div>
        </div>
    )
}