import 'dayjs/locale/pt-br';
import Transacao from '@/logica/core/financas/Transacao';
import Dinheiro from '@/logica/utils/dinheiro';
import { Button, Group, Radio, TextInput } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import { TipoTransacao } from '@/logica/core/financas/TipoTransacao';
import useFormulario from '@/data/hooks/useFormulario';

interface FormularioProps {
    transacaoProps: Transacao;
    salvar?: (transacao: Transacao) => void;
    excluir?: (transacao: Transacao) => void;
    cancelar: () => void;
}

export default function Formulario({
    transacaoProps,
    cancelar,
    salvar,
    excluir,
}: FormularioProps) {
    const { dados, alterarAtributo } = useFormulario<Transacao>(transacaoProps);

    return (
        <div
            className="flex flex-col border border-zinc-500 
    rounded-xl overflow-hidden"
        >
            <div className="bg-black py-3 px-7 text-zinc-400">Formulário</div>
            <div className="flex flex-col gap-4 p-4 sm:p-7">
                <TextInput
                    label="Descrição"
                    value={dados.descricao}
                    onChange={alterarAtributo('descricao')}
                    
                />
                <TextInput
                    label="Valor"
                    value={Dinheiro.formatar(dados.valor)}
                    onChange={alterarAtributo('valor', Dinheiro.desformatar)
                    
                  }
                />
                <DatePickerInput
                    label="Data"
                    value={dados.data}
                    locale="pt-BR"
                    valueFormat="DD/MM/YYYY"
                    onChange={alterarAtributo('data')}
                />
                <Radio.Group 
                value={dados.tipo}
                onChange={alterarAtributo('tipo')}
                >
                    <Group>
                        <Radio value={TipoTransacao.RECEITA} label="Receita" />
                        <Radio value={TipoTransacao.DESPESA} label="Despesa" />
                    </Group>
                </Radio.Group>
            </div>
            <div className="flex px-4 sm:px-7 py-4 gap-3 bg-zinc-800">
                <Button
                    className="bg-green-500"
                    color="green"
                    onClick={() => salvar?.(dados)}
                >
                    Salvar
                </Button>
                <Button className="bg-zinc-500" color="gray" onClick={cancelar}>
                    Voltar
                </Button>
                <div className="flex flex-1"></div>
                {dados.id && (
                    <Button
                        className="bg-red-500"
                        color="red"
                        onClick={() => excluir?.(dados)}
                    >
                        Excluir
                    </Button>
                )}
            </div>
        </div>
    );
}
