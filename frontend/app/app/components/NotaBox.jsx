

export default function NotaBox() {
    const mockNota = [
    {
        "id": 1,
        "title": "Lista de Compras",
        "description": "Leite, ovos, pão, frutas, queijo",
        "created_at": 2025-10-23
    },
    {
        "id": 2,
        "title": "Ideias para Projeto",
        "description": "Implementar autenticação JWT, adicionar upload de arquivos, criar dashboard administrativo",
        "created_at": 2025-10-23
    },
    {
        "id": 3,
        "title": "Reunião com Cliente",
        "description": "Discutir requisitos do sistema de notas, definir prazos, alinhar expectativas",
        "created_at": 2025-10-23
    },
    {
        "id": 4,
        "title": "Estudos Python",
        "description": "Revisar decorators, estudar FastAPI avançado, praticar testes unitários",
        "created_at": 2025-10-23
    },
    {
        "id": 5,
        "title": "Lembretes Pessoais",
        "description": "Pagar conta de luz, agendar dentista, comprar presente aniversário",
        "created_at": 2025-10-23
    },
    {
        "id": 6,
        "title": "Plano de Exercícios",
        "description": "Segunda: cardio, Terça: musculação, Quarta: descanso, Quinta: yoga, Sexta: natação",
        "created_at": 2025-10-23
    },
    {
        "id": 7,
        "title": "Receita de Bolo",
        "description": "2 xícaras de farinha, 3 ovos, 1 xícara de açúcar, 1/2 xícara de óleo, 1 colher de fermento",
        "created_at": 2025-10-23
    },
    {
        "id": 8,
        "title": "Metas da Semana",
        "description": "Finalizar projeto FastAPI, estudar para prova, organizar escritório, ler livro técnico",
        "created_at": 2025-10-23
    },
    {
        "id": 9,
        "title": "Filmes para Assistir",
        "description": "Interestelar, O Senhor dos Anéis, A Origem, Clube da Luta, Matrix",
        "created_at": 2025-10-23
    },
    {
        "id": 10,
        "title": "Debug de Código",
        "description": "Corrigir erro de CORS, ajustar timezone das datas, melhorar tratamento de exceções",
        "created_at": 2025-10-23
    }
]
    return (
        <div className="grid grid-cols-4 gap-5 items-start border-1">
        {mockNota.map((nota) => (
            <div key={nota.id} className="flex flex-col wrap-pretty items-start h-30  w-40 max-w-70 text-xs gap-2 m-5">
                <p className="font-sans font-bold">{nota.title}</p>
                <p className="font-sans">{nota.description}</p>
                <p className="font-sans text-rose-300">{nota.created_at}</p>
            </div>
            ))}
            </div>
    )
}