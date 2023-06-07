import Area from '../comum/Area';
import Vantagem from './Vantagens';
import vantagem1 from '../../../../public/vantagem1.webp';
import vantagem2 from '../../../../public/vantagens2.jpeg';
import vantagem3 from '../../../../public/vantagens3.jpg';

export default function Vantagens() {
    return (
        <Area id="vantagens" className="bg-black py-16 sm:py-36">
            <div className="flex flex-col items-center gap-y-16 sm:gap-y-36">
                <Vantagem
                    imagem={vantagem1}
                    titulo="Gerenciador financeiro completo e simples de usar"
                    subtitulo="Aqui você consegue ter controle completo de suas finanças e uma vicualização fácil de entender. O caminho da economia começa aqui"
                />
                <Vantagem
                    imagem={vantagem2}
                    titulo="Organizado para vovê nunca mais esquecer uma conta"
                    subtitulo="Visualize e acompanhe suas finanças dia a dia. A organização mensal vai te ajudar a ter um controle claro das receitas e despesas!"
                    inverter
                />
                <Vantagem
                    imagem={vantagem3}
                    titulo="Ideal para o planejamento financeiro"
                    subtitulo="Nosso princípio número 1 é de ser uma plataforma que torne o comtrole financeiro simples, então o planejamento se torna algo natural."
                />
            </div>
        </Area>
    );
}
