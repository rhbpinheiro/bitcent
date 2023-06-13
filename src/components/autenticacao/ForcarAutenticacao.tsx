import AutenticacaoContext from '@/data/contexts/autenticacaoContext';
import { useContext } from 'react';
import { useRouter } from 'next/navigation';


interface ForcarAutenticacaoProps {
    children: any;
}

export default function ForcarAutenticacao({
    children,
}: ForcarAutenticacaoProps) {
    const router = useRouter();
    const { usuario, carregando } = useContext(AutenticacaoContext);

    if (carregando) {
        return console.log('ok');
    } else if (usuario?.email) {
        return children;
    } else {
        router.push('/');
        return console.log('ok');
    }
}
