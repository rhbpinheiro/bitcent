import Area from '../comum/Area';
import Logo from '../comum/Logo';
import RedesSociais from './RedesSociais';

export default function Rodape() {
    return (
        <Area className="bg-black py-20">
            <div className="flex flex-col items-center md:items-start">
                <Logo />
                <div className="my-3  text-zinc-400 text-center md:text-left">
                    <div>Plataforma financeira</div>
                    <div className="flex gap-1.5">
                        que
                        <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600">
                            simplifica
                        </span>
                        sua vida
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row md:justify-between items-center mt-14">
                <RedesSociais />
                <p className="text-zinc-100 mt-7 md:mt-0 text-center">
                    <span className="font-bold">
                        Rodolpho Pinheiro
                         <span> &#174; </span>
                        {new Date().getFullYear()} - Todos os direitos Reservados
                    </span>
                </p>
            </div>
        </Area>
    );
}
