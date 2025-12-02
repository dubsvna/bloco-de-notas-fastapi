import {Button} from "@/components/ui/button";
import {Pencil, Plus} from "lucide-react";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import EditNotePopup from "@/app/components/EditNotePopup";


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
        <div className="grid grid-cols-4 gap-4 items-start ">
        {mockNota.map((nota) => (
                <Card key={nota.id} className='text-xs'>
                    <CardHeader className='text-center'>
                        <CardTitle>{nota.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>{nota.description}</p>
                    </CardContent>
                    <CardFooter className="flex items-end justify-around gap-20">
                        <p className="font-sans pt-2 pb-2 text-rose-300">{nota.created_at}</p>
                           <EditNotePopup nota={nota}
                                   />
                    </CardFooter>
                </Card>
            ))}
            </div>
    )
}