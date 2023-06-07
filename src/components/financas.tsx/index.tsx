import { useState } from 'react';
import Cabecalho from '../template/Cabecalho';
import Conteudo from '../template/Conteudo';
import Pagina from '../template/Pagina';
import Transacao, { transacaoNova } from '@/logica/core/financas/Transacao';
import Lista from './Lista';
import transacoesFalsas from '@/data/constants/transacoesFalsas';
import Formulario from './Formulario';
import NaoEncontrado from '../template/NaoEncontrado';
import Id from '@/logica/core/comum/Id';
import { IconPlus } from '@tabler/icons-react';
import { Button } from '@mantine/core';

export default function Financas() {
    const [transacoes, setTransacoes] = useState<Transacao[]>(transacoesFalsas);
    const [transacao, setTransacao] = useState<Transacao | null>(null);

    function salvar(transacao: Transacao) {
        const outrasTransacoes = transacoes.filter(
            (t) => t.id !== transacao?.id
        );
        setTransacoes([
            ...outrasTransacoes,
            {
                ...transacao,
                id: transacao.id ?? Id.novo(),
            },
        ]);
        setTransacao(null);
    }
    function excluir() {
        const outrasTransacoes = transacoes.filter(
            (t) => t.id !== transacao?.id
        );
        setTransacoes(outrasTransacoes);
        setTransacao(null);
    }
    return (
        <Pagina>
            <Cabecalho />
            <Conteudo className="flex gap-3">
                <div className='flex'>
                    <div className="flex flex-1"></div>

                    <Button
                        className="bg-blue-500"
                        leftIcon={<IconPlus />}
                        onClick={() => setTransacao(transacaoNova)}
                    >
                        Nova transação
                    </Button>
                </div>
                {transacao ? (
                    <Formulario
                        transacaoProps={transacao}
                        salvar={salvar}
                        excluir={excluir}
                        cancelar={() => setTransacao(null)}
                    />
                ) : transacoes.length ? (
                    <Lista
                        transacoes={transacoes}
                        selecionarTransacao={setTransacao}
                    />
                ) : (
                    <NaoEncontrado>
                        "Nenhuma transação encontrada"
                    </NaoEncontrado>
                )}
            </Conteudo>
        </Pagina>
    );
}
