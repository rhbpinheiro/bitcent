import Area from '../comum/Area';
import Slogan from './Slogan';
import principal from '../../../../public/financas.jpg';
import ImagemResponsiva from '../comum/imagemResponsiva';

export default function Destaque() {
    return (
        <Area id="inicio" className="pt-20">
            <div className="h-[500px] flex items-center justify-around">
                <Slogan />
                <ImagemResponsiva 
                image={principal} className="rotate-3 hidden md:inline" />
            </div>
        </Area>
    );
}
