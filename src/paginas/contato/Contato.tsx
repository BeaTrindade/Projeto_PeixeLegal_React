import { CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import './contato.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Footer from '../../components/estaticos/footer/Footer';
import Navbar from '../../components/estaticos/navbar/Navbar';

function Contato() {

    return (
        <>
        <Navbar/>
            <main id='contato'>
            <article>
                    <img src="https://media.discordapp.net/attachments/1001946461010923520/1021411402277208115/profile-pic_2.png?width=406&height=406" alt="Ana Lu" />
                    <div>
                        <a href="https://www.linkedin.com/in/ana-civita/" target='bash'>
                            <LinkedInIcon className='icone' />
                        </a>
                        <a href="https://github.com/Lu-Civita" target='bash2'>
                            <GitHubIcon className='icone' />
                        </a>
                    </div>
                    <h3>Ana louise Civita</h3>
                    <h4>Developer FullStack;</h4>
                    <h4>Preferência por FRONT-END.</h4>
                </article>
                <article>
                    <img src="https://media.discordapp.net/attachments/1001812118422695987/1018623347078213753/bea.png" alt="Beatriz" />
                    <div>
                        <a href="https://www.linkedin.com/in/beatrizgt/" target='bash'>
                            <LinkedInIcon className='icone' />
                        </a>
                        <a href="https://github.com/BeaTrindade" target='bash2'>
                            <GitHubIcon className='icone' />
                        </a>
                    </div>
                    <h3>Beatriz Gomes Trindade</h3>
                    <h4>Developer FullStack;</h4>
                    <h4>Preferência por FRONT-END.</h4>
                </article>
                <article>
                    <img src="https://media.discordapp.net/attachments/1001812118422695987/1017878914854559874/unknown.png" alt="Bruno" />
                    <div>
                        <a href="https://www.linkedin.com/in/bpeixoto96/" target='bash'>
                            <LinkedInIcon className='icone' />
                        </a>
                        <a href="https://github.com/bpeixoto96" target='bash2'>
                            <GitHubIcon className='icone' />
                        </a>
                    </div>
                    <h3>Bruno Peixoto</h3>
                    <h4>Developer FullStack;</h4>
                    <h4>Preferência por FRONT-END.</h4>
                </article>
                <article>
                    <img src="https://media.discordapp.net/attachments/1001812118422695987/1017895297051017247/profile-pic.png" alt="Henrique" />
                    <div>
                        <a href="https://www.linkedin.com/in/Henrique-de-Andrade-Rodrigues/" target='bash'>
                            <LinkedInIcon className='icone' />
                        </a>
                        <a href="https://github.com/EukirneRas" target='bash2'>
                            <GitHubIcon className='icone' />
                        </a>
                    </div>
                    <h3>Henrique de Andrade Rodrigues</h3>
                    <h4>Developer FullStack;</h4>
                    <h4>Preferência de Back-End.</h4>
                </article>
                <article>
                    <img src="https://media.discordapp.net/attachments/1001812118422695987/1019306319234220113/profile-pic.png" alt="João" />
                    <div>
                        <a href="https://www.linkedin.com/in/joaoolucas/" target='bash'>
                            <LinkedInIcon className='icone' />
                        </a>
                        <a href="https://github.com/Joaolucas404" target='bash2'>
                            <GitHubIcon className='icone' />
                        </a>
                    </div>
                    <h3>João Lucas Soares Almeida</h3>
                    <h4>Developer FullStack;</h4>
                    <h4>Preferência de Back-End.</h4>
                </article>
                <article>
                    <img src="https://media.discordapp.net/attachments/1001812118422695987/1017887987503218778/profile-pic_1.png" alt="Juliana" />
                    <div>
                        <a href="https://www.linkedin.com/in/juliana-gondim-/" target='bash'>
                            <LinkedInIcon className='icone' />
                        </a>
                        <a href="https://github.com/JuGondim" target='bash2'>
                            <GitHubIcon className='icone' />
                        </a>
                    </div>
                    <h3>Juliana Gondim </h3>
                    <h4>Developer FullStack;</h4>
                    <h4>Preferência de Back-End.</h4>
                </article>
                <article>
                    <img src="https://media.discordapp.net/attachments/1001812118422695987/1017876515519733811/Matheus.png" alt="Matheus" />
                    <div>
                        <a href="https://www.linkedin.com/in/matheus-carnizella-nepomuceno/" target='bash'>
                            <LinkedInIcon className='icone' />
                        </a>
                        <a href="https://github.com/MatheusCarnizella" target='bash2'>
                            <GitHubIcon className='icone' />
                        </a>
                    </div>
                    <h3>Matheus Carnizella</h3>
                    <h4>Developer FullStack;</h4>
                    <h4>Preferência de Back-End.</h4>
                </article>    
                <article>
                    <img src="https://media.discordapp.net/attachments/1001812118422695987/1018949670816464996/profile-pic.png" alt="Maurucio" />
                    <div>
                        <a href="https://www.linkedin.com/in/mauricio-cucilho-junior/" target='bash'>
                            <LinkedInIcon className='icone' />
                        </a>
                        <a href="https://github.com/MauriciocucilhoJr" target='bash2'>
                            <GitHubIcon className='icone' />
                        </a>
                    </div>
                    <h3>Mauricio Cucilho Junior</h3>
                    <h4>Developer FullStack;</h4>
                    <h4>Preferência de Back-End.</h4>
                </article>             
            </main>
            <Footer/>
        </>
    );
}

export default Contato;