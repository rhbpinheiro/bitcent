import Id from "@/logica/core/comum/Id";
import { TipoTransacao } from "@/logica/core/financas/TipoTransacao";
import Transacao from "@/logica/core/financas/Transacao";

const transacoesFalsas: Transacao[] =[
  {
    id: Id.novo(),
    descricao: 'Salário',
    data: new Date(2023, 4, 1),
    valor: 7123.34,
    tipo: TipoTransacao.RECEITA
    
  },
  {
    id: Id.novo(),
    descricao: 'Mercado',
    data: new Date(2023, 4, 2),
    valor: 235.00,
    tipo: TipoTransacao.DESPESA
    
  },
  {
    id: Id.novo(),
    descricao: 'Gas',
    data: new Date(2023, 4, 10),
    valor: 115.00,
    tipo: TipoTransacao.DESPESA
    
  },
  {
    id: Id.novo(),
    descricao: 'Energia',
    data: new Date(2023, 4, 18),
    valor: 454.00,
    tipo: TipoTransacao.DESPESA
    
  },
  {
    id: Id.novo(),
    descricao: 'Exta',
    data: new Date(2023, 4, 10),
    valor: 1600.00,
    tipo: TipoTransacao.RECEITA
    
  },
  {
    id: Id.novo(),
    descricao: 'Combustível',
    data: new Date(2023, 4, 15),
    valor: 250.00,
    tipo: TipoTransacao.DESPESA
    
  },
]

export default transacoesFalsas;