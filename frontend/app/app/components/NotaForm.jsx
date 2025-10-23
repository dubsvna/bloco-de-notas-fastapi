'use client'
import {useEffect, useState} from "react";

export default function NotaForm({ nota}) {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => {
            clearInterval(timerId);
        }
    }, []);

    const tick = () => {
        setTime(new Date());
    }
    return (
            <form className="flex flex-col w-90 min-h-40 border-1 gap-5 text-[8] m-10">
                <input className='border-1 rounded-[8]' type='text' placeholder=' Titulo' />
                <textarea className='border-1 rounded-[8] max-h-50 min-h-30 h-fitcontent break-words resize-none' placeholder=' Descrição' />
                <div className='flex flex-row justify-between'>
                <div className='flex flex-row content-between items-center gap-2 text-xs p-2 text-rose-300'>
                    <p>{time.toLocaleDateString()}</p> <p>{`${time.getHours()}:${time.getMinutes()}`}</p>
                </div >
                <button type='submit' className='justify-center items-center my-2 mx-2 px-2 py-1 bg-red-400 text-xs rounded-[8]'>Butão</button>
                </div>
            </form>
    )
}