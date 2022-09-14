import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import './SobreNos.css';

function SobreNos() {
    return (
        <>
            <Grid>
                <Box marginTop={5} marginLeft={5} marginRight={5}>
                    <Typography variant="h4" gutterBottom color="textPrimary" component="h4" align="right" className='titulo'>Quem somos?</Typography>
                    <img src="https://media.discordapp.net/attachments/1001946461010923520/1017514768921264159/unknown.png?width=406&height=406" alt="quem somos" style={{ width: "10%", height: "10%" }} className='img' />
                    <Typography variant="h6" gutterBottom color="textPrimary" component="h6" align="left" className='texto'> Um site no modelo e-commerce, que possui como intuito principal, proporcionar uma interação eficaz entre pescadores artesanais de pequena escala, com acesso a recursos marinhos de qualidade, e consumidores com interesse em adquirir produtos oriundos do mar de excelente qualidade e procedência. </Typography>
                </Box>
            </Grid>
            <Grid>
                <Box marginTop={8} marginLeft={5} marginRight={5}>
                    <Typography variant="h4" gutterBottom color="textPrimary" component="h4" align="left" className='titulo2'>Por que comprar?</Typography>
                    <img src="https://media.discordapp.net/attachments/1001946461010923520/1017514722800709682/unknown.png?width=406&height=406" alt="por que comprar" style={{ width: "10%", height: "10%" }} className='img2' />
                    <Typography variant="h6" gutterBottom color="textPrimary" component="h6" align="left" className='texto2'> Somos uma empresa comprometida com a diminuição da desigualdade social, com a valorização de pescadores artesanais e seus produtos. Estamos engajados com a preservação do meio ambiente e sustentabilidade, possuímos valores sociais bastante definidos, prezamos por um atendimento ágil e eficaz, e possuímos uma grande variedade de produtos de ótima qualidade. </Typography>
                </Box>
            </Grid>
            <Grid>
                <Box marginTop={5} marginLeft={5} marginRight={5}>
                    <Typography variant="h4" gutterBottom color="textPrimary" component="h4" align="right" className='titulo'>Como surgiu a idéia?</Typography>
                    <img src="https://media.discordapp.net/attachments/1001946461010923520/1017514742664925235/unknown.png?width=406&height=406" alt="como surgiu" style={{ width: "10%", height: "10%" }} className='img' />
                    <Typography variant="h6" gutterBottom color="textPrimary" component="h6" align="left" className='texto'> A ideia surgiu após tomarmos conhecimento dos objetivos de desenvolvimento sustentável propostos pela ONU ao Brasil e ao mundo. A completa realização destes objetivos tem o intuito de acabar com a pobreza global, proteger o meio ambiente e o clima, e garantir que as pessoas, em todos os lugares, possam desfrutar de paz e de prosperidade.
                        A ODS que motivou a criação do e-commerce Peixe Legal, é a ODS 14.b - Vida na Água - Proporcionar o acesso dos pescadores artesanais de pequena escala aos recursos marinhos e mercados. </Typography>
                </Box>
            </Grid>
            <Grid>
                <Box marginTop={8} marginLeft={5} marginRight={5}>
                    <Typography variant="h4" gutterBottom color="textPrimary" component="h4" align="left" className='titulo2'>Sobre pescadores artesanais:</Typography>
                    <img src="https://media.discordapp.net/attachments/1001946461010923520/1017514695814549514/unknown.png?width=406&height=406" alt="sobre pescadores" style={{ width: "10%", height: "10%" }} className='img2' />
                    <Typography variant="h6" gutterBottom color="textPrimary" component="h6" align="left" className='texto2'> A pesca artesanal é a atividade efetuada por indivíduos que vivem em determinadas comunidades e realizam atividades de pesca em pequena escala, sem visão comercial e/ou de exportação de grandes proporções.
                        Essas comunidades possuem uma rica cultura, são de suma importância para a história e são um modelo de interação saudável entre o homem e a natureza.
                        Os pescadores artesanais dentre as populações tradicionais, são os mais presentes em território costeiro, possuem uma uma relação intrínseca e direta com a natureza, e dependem dela para extrair recursos e sobreviver.  </Typography>
                    <Typography variant="h6" gutterBottom color="textPrimary" component="h6" align="left" className='texto3'> Logo, necessitam de um bom funcionamento dos ecossistemas para que alcancem a produtividade ideal em suas atividades.
                        No entanto, enfrentam uma série de barreiras para que consigam realizar sua atividade principal com dignidade e excelência, como: ameaças territoriais, falta de autonomia para a comercialização de seus produtos, falta de infraestrutura correta para o cumprimento da cadeia produtiva da pesca, dentre outros. </Typography>
                </Box>
            </Grid>
            <Grid>
                <Box display="center" justifyContent="center" marginTop={10} >
                    <Box>
                        <img src="https://media.discordapp.net/attachments/1001812118422695987/1017498157493534851/Rastreabilidade.png?width=1025&height=298" alt="" width="100%" height="80%" />
                    </Box>
                </Box>
            </Grid>
        </>
    );
}

export default SobreNos;