'use client'
import {useState} from "react";
import {Button} from "@/components/ui/button";
import {Pencil} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import NotaForm from "./NotaForm";
export default function EditNotePopup({nota, onNoteUpdated}) {
    const [open, setOpen] = useState(false);

    const handleSuccess = () => {
        setOpen(false);
        if (onNoteUpdated) {
            onNoteUpdated();
        }
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full w-8 h-8">
                    <Pencil className="w-4 h-4"/>
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                <DialogTitle>Editar Nota</DialogTitle>
                <DialogDescription>
                    Faça as alterações na sua nota. Clique em salvar ao terminer.
                </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                    <NotaForm nota={nota}
                    onSuccess={handleSuccess}/>
                </div>
            </DialogContent>
        </Dialog>
    )
}