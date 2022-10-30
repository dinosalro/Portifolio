import { useEffect, useState } from "react";
import { ContainerPaiProjeto, TituloProjeto, Link, Projetos, FlexProjetos } from "./styled";


export default function Projeto(){
    const [repositorios, setRepositorios] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/dinosalro/repos')
        .then(response => response.json())
        .then(data => setRepositorios(data))
    }, [])

    const novorepo = repositorios.filter((repositorio) => {
        return (repositorio.stargazers_count > 0)
    })
    

    return(
        <ContainerPaiProjeto>
            <TituloProjeto>
            <h2>Meus Projetos</h2> <Link href="#Natal">Veja todos</Link>
            </TituloProjeto>
        
    <FlexProjetos>
   {novorepo.map(repository =>{
    return(
        <Projetos>
        <li>
            <h3>{repository.name}</h3>
            <p>{repository.description}</p>              
        </li>
        </Projetos>
    )
    })}
    </FlexProjetos>
            
        </ContainerPaiProjeto>
    )
}