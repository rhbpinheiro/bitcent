export default interface Usuario {
  id: string;
  nome: string;
  email: string;
  imageUrl: string | null;
  cpf?: string;
  telefone?: string;
}