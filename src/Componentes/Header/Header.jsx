import { Perfil, Container1, Container2, Container3, Container4, Link, Icone, ContainerPai, Itens, ItensPai, TituloTec, TituloEdu, ItensEdu, ItensPaiEdu} from "./styled"
import design from "./assets/design.jpg"
import pin from "./assets/map-pin.svg"
import git from "./assets/github.svg"
import linkedin from "./assets/linkedin.svg"
import mail from "./assets/mail.svg"


export default function Header(){


    return(
        <ContainerPai>
         <Container1>
            <Perfil src={design} alt="Perfil"/>
            <h1>Ana Clara</h1>
            <h3>Front-end Developer</h3>
        </Container1>
        <Container2>
           <Link href="#Natal" target="_blank" rel="noopener noreferrer"> <Icone src={pin} alt="Localização"/> Brasil </Link>
           <Link href="#Natal" target="_blank" rel="noopener noreferrer"><Icone src={git} alt="GitHub"/> dinosalro</Link> 
           <Link href="#Natal" target="_blank" rel="noopener noreferrer"><Icone src={linkedin} alt="Linkedin"/> Ana Clara Dantas</Link>
           <Link href="#Natal" target="_blank" rel="noopener noreferrer"><Icone src={mail} alt="E-mail"/> acdclara@gmail.com</Link>

        </Container2>
        <Container3>
        <TituloTec>Tecnologias</TituloTec>
        <ItensPai>
            <Itens>HTML</Itens>
            <Itens>CSS</Itens>
            <Itens>JS</Itens>
            <Itens>React</Itens>
            <Itens>Node Js</Itens>
            <Itens>SQL</Itens>
        </ItensPai>
        </Container3>
        <Container4>
        <TituloEdu>Educação</TituloEdu>
            <ItensPaiEdu>
                <ItensEdu><strong>Labenu</strong><br/>2022 - 2023 <br/> <i>Full Stack </i></ItensEdu>
                <ItensEdu><strong>UFRN</strong><br/>2022 - 2025 <br/> <i>Ciências e Tecnologia</i></ItensEdu>
                <ItensEdu><strong>UFRN</strong><br/>2019 - 2020 <br/> <i> Monitora em projeto de extensão de inclusão digital para idosos </i></ItensEdu>
            </ItensPaiEdu>
        </Container4>
        
        </ContainerPai>
    )
}