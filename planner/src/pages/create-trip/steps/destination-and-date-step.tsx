import { ArrowRight, Calendar, MapPin, Settings2 } from 'lucide-react'
import { Button } from '../../../components/button'

interface DestinationAndDateStepProps{
    isInputTravelOpen: boolean
    closeTravelButton: () => void
    openTravelButton: () => void
}

export function DestinationAndDateStep ({
    closeTravelButton,
    openTravelButton,
    isInputTravelOpen,
}:DestinationAndDateStepProps){
    return(
        <div className="h-16 p-4 bg-zinc-900 rounded-xl flex items-center shadow-shape gap-3">
          
            <div className="flex items-center gap-2 flex-1">
              <MapPin className="size-5 text-zinc-400"/>
              <input disabled={isInputTravelOpen} type="text" name="" id="" placeholder="Para onde você vai?" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"/>
            </div>

            <div className="flex items-center gap-2">
              <Calendar className='size-5 text-zinc-400'/>
              <input disabled={isInputTravelOpen} type="text" name="" id="" placeholder="Quando?" className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none"/>
            </div>
            {/* Cria a barra lateral ao lado do botão continuar */}
            <div className='w-px h-6 bg-zinc-800'></div>

            {/* Valida se o isInputTravelOpen for false então o botão fica como continuar, se o isInputTravelOpen for true Quando clicado no continuar ele altera o botão continuar para alterar data e se o Alterar data/local for clicado ele volta ao conteudo original*/}
            {isInputTravelOpen ?(
             
              <Button variant="secondary" size="default" onClick={closeTravelButton}> 
                Alterar local/data 
                <Settings2/>

              </Button>
              
            ):(
              
              <Button variant="primary" size="default" onClick={openTravelButton}> 
                Continuar
                <ArrowRight className='size-5 tex'/>

              </Button>
            )}
          
          </div>
    )
}