'use client'
import {useEffect, useState} from "react";
import {Field, FieldDescription, FieldGroup, FieldLabel, FieldSet} from "@/components/ui/field";
import {Textarea} from "@/components/ui/textarea";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";

export default function NotaForm({ nota}) {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => {
            clearInterval(timerId);
            alterDescription();
            alterTitle();
        }
    }, []);

    const tick = () => {
        setTime(new Date());
    }
    const alterTitle = () => {
const titles = [
    "0000",
    `${new Date().toLocaleTimeString()}`,
    "Titulo",
    "Sem título",
    "Untitled",
    `Nota ${new Date().getDate()}/${new Date().getMonth() + 1}`,
    "Rascunho",
    "Nova Anotação",
    `📝 ${new Date().getHours()}h${new Date().getMinutes()}`,
    "Temporário",
    "Borrador",
    `Documento ${Math.floor(Math.random() * 1000)}`,
    "Sem nome",
    "Anotações rápidas",
    `Pensamentos ${new Date().toLocaleDateString()}`,
    "Ideias soltas",
    "Rascunho automático",
    `Captura ${new Date().getTime().toString().slice(-4)}`,
    "Texto não editado",
    "Memorando",
    "Notas do dia",
    "Documento sem título",
    `Backup ${new Date().toLocaleTimeString('pt-BR', {hour: '2-digit', minute: '2-digit'})}`,
    "Arquivo temporário"
]
        const randomNumber = Math.floor(Math.random() * titles.length);
        return `${titles[randomNumber]}`
    }
    const alterDescription = () => {
        const frases = [
    "Descreva um pensamento",
    "O que você comeu hoje ?",
    "Como está o seu dia ?",
    "Como este clima afeta o seu humor ?",
    "Qual foi o momento mais marcante da sua semana ?",
    "Do que você sente saudades hoje ?",
    "O que te fez sorrir recentemente ?",
    "Como você está se sentindo neste exato momento ?",
    "Qual som te traz tranquilidade ?",
    "O que você gostaria de aprender este mês ?",
    "Descreva uma memória da infância",
    "Qual livro marcou a sua vida ?",
    "O que te motiva a levantar da cama ?",
    "Como você lida com os dias difíceis ?",
    "Qual lugar te traz paz ?",
    "O que você está procrastinando ?",
    "Qual cheiro te traz boas lembranças ?",
    "Do que você tem medo atualmente ?",
    "Qual a sua canção do momento ?",
    "O que você aprendeu sobre si mesmo recentemente ?",
    "Como você pratica o autocuidado ?",
    "Qual conversa recente te fez refletir ?",
    "O que você gostaria de mudar na sua rotina ?",
    "Descreva um pequeno prazer do seu dia"
];
        const randomNumber = Math.floor(Math.random() * frases.length);
        return `${frases[randomNumber]}`
    }

    return (

            <div className ="w-full max-w-md">
                <FieldSet>
                    <FieldGroup>
                        <Field className='text-opacity-600'>
                            <FieldLabel htmlFor="title"> Titulo </FieldLabel>
                            <Input id='title' type='text' placeholder={alterTitle()} className='text-opacity-600'/>
                        </Field>

                        <Field>
                            <FieldLabel htmlFor='description'>
                                Descrição
                            </FieldLabel>
                            <Textarea id='description'
                                          placeholder={alterDescription()}
                                          rows={5}
                                      className='resize-none'
                                          />
                        </Field>
                        <div className="flex flex-row justify-between mt-1">
                            <p className='text-pink-300 mt-1'>{time.toLocaleTimeString()}</p>
                            <Button variant="outline" aria-label="Submit">Button</Button>
                        </div>
                    </FieldGroup>
                </FieldSet>
            </div>
    )
}