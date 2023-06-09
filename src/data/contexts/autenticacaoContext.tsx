import Usuario from '@/logica/core/usuario/Usuario';
import Autenticacao from '../../logica/firebase/auth/autenticacao';
import { createContext, useEffect, useState } from 'react';
interface AutenticacaoProps {
    carregando: boolean;
    usuario: Usuario | null;
    loginGoogle: () => Promise<Usuario | null>;
    logout: () => Promise<void>;
}

const AutenticacaoContext = createContext<AutenticacaoProps>({
    carregando: true,
    usuario: null,
    loginGoogle: async () => null,
    logout: async () => {},
});

export function AutenticacaoProvider(props: any) {
    const [carregando, setCarregando] = useState<boolean>(true);
    const [usuario, setUsuario] = useState<Usuario | null>(null);

    useEffect(() => {
        const cancelar = autenticacao.monitorar(() => {
            setUsuario(usuario);
            setCarregando(false);
        });
        return () => cancelar();
    }, []);

    const autenticacao = new Autenticacao();

    async function loginGoogle() {
        const usuario = await autenticacao.loginGoogle();
        setUsuario(usuario);
        return usuario;
    }

    async function logout() {
        autenticacao.logout();
        setUsuario(null);
    }
    return (
        <AutenticacaoContext.Provider
            value={{
                carregando,
                usuario,
                loginGoogle,
                logout,
            }}
        >
            {props.children}
        </AutenticacaoContext.Provider>
    );
}

export default AutenticacaoContext;
