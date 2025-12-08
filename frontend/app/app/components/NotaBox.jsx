'use client'

import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import EditNotePopup from "@/app/components/EditNotePopup";
import {useEffect, useState} from "react";
import {getNotes} from "@/lib/utils";


export default function NotaBox() {
    const [notas, setNotas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNotes = async () => {
            const result = await getNotes();
            if (result.success) {
                setNotas(result.data);
            } else {
                console.error(result.error);
            }
            setLoading(false);
        }
        fetchNotes();
    }, [])

    if (loading) return <div>Carregando...</div>;
    return (
        <div className="grid grid-cols-4 gap-4 items-start ">
        {notas.map((nota) => (
                <Card key={nota.id} className='text-xs'>
                    <CardHeader className='text-center'>
                        <CardTitle>{nota.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>{nota.description}</p>
                    </CardContent>
                    <CardFooter className="flex items-end justify-around gap-20">
                        <p className="font-sans pt-2 pb-2 text-rose-300">{new Date(nota.created_at).toLocaleDateString() + ' '}</p>
                           <EditNotePopup nota={nota}
                                   />
                    </CardFooter>
                </Card>                                                                                                        ))}
            </div>
    )
}