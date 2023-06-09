import Usuario from '@/logica/core/usuario/Usuario';
import Id from '@/logica/core/comum/Id';

export default {
    id: Id.novo(),
    nome: 'Rodolpho Pinheiro',
    email: '123456@gmail.com',
    imageUrl: null,
} as Usuario;
