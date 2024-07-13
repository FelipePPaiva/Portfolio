import { Calendar, Tag, X } from "lucide-react"
import { Button } from "../../components/button"

interface CreateActivityModalProps{
    closeCreateActivityModal: () => void
}

export function CreateActivityModal({
    closeCreateActivityModal
}:CreateActivityModalProps) {
    return (
        <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
            <div className='bg-zinc-900 w-[640px] rounded-xl py-5 px-5 shadow-shape space-y-5'>
                <div className='flex items-center justify-between my-2'>
                    <h2 className='text-lg font-semibold'> Cadastrar atividade</h2>
                    <button onClick={closeCreateActivityModal}>
                    <X className='size-5 text-zinc-400'/>
                    </button>
                </div>
            
                <p className='text-sm text-zinc-400'>Todos convidados podem visualizar as atividades.</p>

                <form className='space-y-3'>
                    <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex gap-2 items-center">
                        <Tag className='text-zinc-400 size-5'/>
                        <input type="text" name="title" id="" placeholder="Qual a atividade?" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"/>
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex gap-2 items-center flex-1 ">
                            <Calendar className='text-zinc-400 size-5'/>
                            <input type="datetime-local" name="occurs_at" id="" placeholder="data e horal local" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 [color-scheme: dark]" />
                        </div>

                
                    </div>
                  
                    <Button variant="primary" size="full"> 
                        Salvar atividade
                
                    </Button>

                </form>

            </div>
        </div>
    )
}