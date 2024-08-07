import { CircleCheck } from "lucide-react";

export function Activities(){
    return (
        <div className="space-y-8">
            <div className="space-y-2.5">
                <div className="flex gap-2 items-baseline">
                    <span className="text-zinc-300 text-xl font-semibold" >Dia 17</span>
                    <span className="text-zinc-500 text-xs">Sabado</span>
                </div>
                <p className="text-zinc-500 text-sm">Nenhuma atividade cadastrada nessa data</p>
            </div>                

            <div className="space-y-2.5">
                <div className="flex gap-2 items-baseline">
                    <span className="text-zinc-300 text-xl font-semibold" >Dia 18</span>
                    <span className="text-zinc-500 text-xs">Domingo</span>
                </div>
                <div className="space-y-2.5">
                    <div className="py-2.5 px-4 bg-zinc-900 shadow-shape rounded-xl flex items-center gap-3">
                        <CircleCheck className="size-5 text-lime-300" />
                            <span className="text-zinc-100">Academia em grupo</span>
                            <span className="text-zinc-400 text-sm ml-auto">08:00</span>
                    </div>
                </div>

                <div className="space-y-2.5">
                    <div className="py-2.5 px-4 bg-zinc-900 shadow-shape rounded-xl flex items-center gap-3">
                        <CircleCheck className="size-5 text-lime-300" />
                        <span className="text-zinc-100">Almoço</span>
                        <span className="text-zinc-400 text-sm ml-auto">12:00</span>
                    </div>
                </div>

                <div className="space-y-2.5">
                    <div className="py-2.5 px-4 bg-zinc-900 shadow-shape rounded-xl flex items-center gap-3">
                        <CircleCheck className="size-5 text-lime-300" />
                        <span className="text-zinc-100">Estudo</span>
                        <span className="text-zinc-400 text-sm ml-auto">18:00</span>
                    </div>
                </div>
            </div>
        </div>
    )
}