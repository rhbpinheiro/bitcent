import Link from "next/link";

interface MenuItemProps {
  children: any;
  url?: string;
  onClick?: () => void;
  className?: string;
}

export default function MenuItem({children, url, onClick, className}: MenuItemProps) {
  function renderizarBotao() {
    return(
      <div className={`flex justify-center items-center cursor-pointer
       text-zinc-300 m-2 p-4 rounded h-9 
      ${className ?? ''}`} onClick={onClick}>
          {children}
      </div>
    )
  }

  return url ? (
    <Link href={url ?? ''}>{renderizarBotao()}</Link>
  ) : renderizarBotao()
 
}