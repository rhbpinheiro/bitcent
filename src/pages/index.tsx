import Financas from '@/components/financas.tsx';
import Landing from '@/components/landing';
import Carregando from '@/components/template/Carregando';
import AutenticacaoContext from '@/data/contexts/autenticacaoContext';
import { useContext } from 'react';

export default function Home() {
    const { usuario, carregando } = useContext(AutenticacaoContext);


    if (carregando) return <Carregando />;

    return usuario ? <Financas /> : <Landing />;
}
