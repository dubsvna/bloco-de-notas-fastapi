from datetime import datetime, timedelta

# Dados mockados para testes
notas_mock = [
    {
        "id": 1,
        "title": "Lista de Compras",
        "description": "Leite, ovos, pão, frutas, queijo",
        "created_at": datetime.now() - timedelta(days=2)
    },
    {
        "id": 2,
        "title": "Ideias para Projeto",
        "description": "Implementar autenticação JWT, adicionar upload de arquivos, criar dashboard administrativo",
        "created_at": datetime.now() - timedelta(days=1)
    },
    {
        "id": 3,
        "title": "Reunião com Cliente",
        "description": "Discutir requisitos do sistema de notas, definir prazos, alinhar expectativas",
        "created_at": datetime.now() - timedelta(hours=12)
    },
    {
        "id": 4,
        "title": "Estudos Python",
        "description": "Revisar decorators, estudar FastAPI avançado, praticar testes unitários",
        "created_at": datetime.now() - timedelta(hours=6)
    },
    {
        "id": 5,
        "title": "Lembretes Pessoais",
        "description": "Pagar conta de luz, agendar dentista, comprar presente aniversário",
        "created_at": datetime.now() - timedelta(hours=3)
    },
    {
        "id": 6,
        "title": "Plano de Exercícios",
        "description": "Segunda: cardio, Terça: musculação, Quarta: descanso, Quinta: yoga, Sexta: natação",
        "created_at": datetime.now() - timedelta(hours=1)
    },
    {
        "id": 7,
        "title": "Receita de Bolo",
        "description": "2 xícaras de farinha, 3 ovos, 1 xícara de açúcar, 1/2 xícara de óleo, 1 colher de fermento",
        "created_at": datetime.now() - timedelta(minutes=45)
    },
    {
        "id": 8,
        "title": "Metas da Semana",
        "description": "Finalizar projeto FastAPI, estudar para prova, organizar escritório, ler livro técnico",
        "created_at": datetime.now() - timedelta(minutes=30)
    },
    {
        "id": 9,
        "title": "Filmes para Assistir",
        "description": "Interestelar, O Senhor dos Anéis, A Origem, Clube da Luta, Matrix",
        "created_at": datetime.now() - timedelta(minutes=15)
    },
    {
        "id": 10,
        "title": "Debug de Código",
        "description": "Corrigir erro de CORS, ajustar timezone das datas, melhorar tratamento de exceções",
        "created_at": datetime.now()
    }
]