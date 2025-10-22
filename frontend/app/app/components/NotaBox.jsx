

export default function NotaBox() {
    const mockNota = [
    {
        "id": 1,
        "title": "Lista de Compras",
        "description": "Leite, ovos, pão, frutas, queijo",
        "created_at": 2025-10-21
    },
    {
        "id": 2,
        "title": "Ideias para Projeto",
        "description": "Implementar autenticação JWT, adicionar upload de arquivos, criar dashboard administrativo",
        "created_at": 2025-10-21
    },
    {
        "id": 3,
        "title": "Reunião com Cliente",
        "description": "Discutir requisitos do sistema de notas, definir prazos, alinhar expectativas",
        "created_at": 2025-10-21
    }
]
    return (
        <div className="flex gap-5 items-start">
        {mockNota.map((nota) => (
            <div key={nota.id} className="flex flex-col wrap-pretty items-start h-30 border-1 w-50 max-w-70 text-xs gap-2">
                <p className="font-sans font-bold">{nota.title}</p>
                <p className="font-sans">{nota.description}</p>
                <p className="font-sans text-rose-300">{nota.created_at}</p>
            </div>
            ))}
            </div>
    )
}