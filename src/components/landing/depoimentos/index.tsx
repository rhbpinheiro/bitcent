import Area from '../comum/Area';
import Depoimento from './Depoimento';

export default function Depoimentos() {
    return (
        <Area
            id="depoimentos"
            className={`bg-gradient-to-r from-black via-zinc-900 to-black py-10 sm:py-20 `}
        >
            <div className={`flex flex-col justify-center items-center`}>
                <h2 className={`font-thin text-zinc-600 text-2xl sm:text-4xl mb-20`}>
                  O que as pessoas estão dizendo...
                </h2>
                <div className={`flex flex-col md:flex-row gap-5 justify-center xl:justify-between items-center`}>
                    <Depoimento 
                    avatar={'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80'} 
                    nome={'João Carlos'} 
                    titulo={'Desenvoldedor de web'} 
                    texto={'Essa plataforma era tudo que estava precisando, me ajuda muito a organizar minhas finanças'} />
                    <Depoimento 
                    avatar={'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'} 
                    nome={'LucianaRodrigues'} 
                    titulo={'Servidor Público'} 
                    destaque
                    texto={'O BitCent mudou minha vida, antes vivia com as contas no vermelho e a conta consigo me organizar financeiramente.'} />
                    <Depoimento 
                    avatar={'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'} 
                    nome={'Felipe Araujo'} 
                    titulo={'Engenheiro civil'} 
                    texto={'Com o auxílio do BitCent estou fazendo minhas economias renderem ainda mais e assim me plajejando para term um futuro seguro.'} />
                </div>
            </div>
        </Area>
    );
}
