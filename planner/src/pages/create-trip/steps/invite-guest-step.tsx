import { ArrowRight, UserRoundPlus } from 'lucide-react'
import { Button } from '../../../components/button'

interface InviteGuestStepProps{
    openModalMail: () => void
    emailsToInvite: string[]
    openConfirmTripOpen: () => void
}

export function InviteGuestStep ({
    openModalMail,
    emailsToInvite,
    openConfirmTripOpen
}:InviteGuestStepProps){
  
    return (
        <div className="h-16 p-4 bg-zinc-900 rounded-xl flex items-center shadow-shape gap-3">
          
              <button onClick={openModalMail} type='button' className="flex items-center gap-2 flex-1 text-left">
                <UserRoundPlus className="size-5 text-zinc-400"/>
                {emailsToInvite.length > 0 ?(
                  <span className='text-zinc-100 text-lg flex-1 ' >{emailsToInvite.length} pessoas convidadas</span>
                ):(
                  <span className='text-zinc-400 text-lg flex-1 ' >Quem estará na viagem?</span>
                )}
              </button>
          
              <div className='w-px h-6 bg-zinc-800'></div>
              

              <Button variant="primary" size="default" onClick={openConfirmTripOpen}> 
                Confirmar viagem
                <ArrowRight className='size-5'/>

              </Button>

        </div>
    )
}