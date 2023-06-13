import ForcarAutenticacao from "../autenticacao/ForcarAutenticacao";

interface PaginaProps {
    externa?: boolean;
    children: any;
    className?: string;
}

export default function Pagina({ externa, children, className }: PaginaProps) {
    function renderizar() {
        return (
            <div
                className={`flex flex-col min-h-screen bg-gradient-to-r 
          from-zinc-900 via-black to-zinc-600 ${className ?? ''}`}
            >
                {children}
            </div>
        );
    }

    // return renderizar();

    return externa ? (
        renderizar()
    ) : (
        <ForcarAutenticacao> {renderizar()}</ForcarAutenticacao>
    );
}
