import useFormulario from '@/data/hooks/useFormulario';
import MiniFormulario from '../template/MiniFormulario';
import usuario from '@/data/constants/usuarioFalso';
import Usuario from '@/logica/core/usuario/Usuario';
import { TextInput } from '@mantine/core';
import Texto from '@/logica/utils/verifTexto';
import Cpf from '@/logica/utils/cpf';
import Telefone from '@/logica/utils/telefone';

export default function Formularios() {
    const { dados, alterarAtributo } = useFormulario<Usuario>(usuario);
    return (
        <div>
            <MiniFormulario
                titulo={'Seu nome'}
                descricao={'Como você gostaria de ser chamado'}
                msgRodape="O nome deve possuir entre 3 a 80 caracteres."
                podeSalvar={Texto.entre(dados.nome, 3, 80)}
                salvar={() => {}}
            >
                <TextInput
                    value={dados.nome}
                    onChange={alterarAtributo('nome')}
                />
            </MiniFormulario>
            <MiniFormulario
                titulo={'CPF'}
                descricao={'Seu CPF é usado internamente pelo sistema.'}
                msgRodape="Pode relaxar, suas informções estão seguras."
                podeSalvar={true}
                salvar={() => {}}
            >
                <TextInput
                    value={Cpf.formatar(dados.cpf ?? '')}
                    onChange={alterarAtributo('cpf', Cpf.desformatar)}
                />
            </MiniFormulario>
            <MiniFormulario
                titulo={'Telefone'}
                descricao={
                    'Usamos para notificações importantes sobre sua conta'
                }
                msgRodape="Não ligamos solicitando nenhum códido de seguraça."
                podeSalvar={true}
                salvar={() => {}}
            >
                <TextInput
                    value={Telefone.formatar(dados.telefone ?? '')}
                    onChange={alterarAtributo('telefone', Telefone.desformatar)}
                />
            </MiniFormulario>
        </div>
    );
}
