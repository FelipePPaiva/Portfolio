import {X, AtSign, Plus} from 'lucide-react'

interface InviteGuestModalProps{
    closeModalMail: () => void
    emailsToInvite: string[]
    addNewEmailToInvite (event: FormEvent<HTMLFormElement>)
    removeEmailFromInvite: (enail: string) => void

}

export function InviteGuestModal(props: InviteGuestModalProps){
    return(
        <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
          <div className='bg-zinc-900 w-[640px] rounded-xl py-5 px-5 shadow-shape space-y-5'>
            <div className='flex items-center justify-between my-2'>
              <h2 className='text-lg font-semibold'>Selecionar convidados</h2>
              <button onClick={props.closeModalMail}>
                <X className='size-5 text-zinc-400'/>
              </button>
            </div>
            
            <p className='text-sm text-zinc-400'>Os convidados irão receber e-mails para confirmar a participação na viagem</p>
            <div className='flex flex-wrap gap-2'>
            {props.emailsToInvite.map(email =>{
              return(
                <div key={email} className='py-1.5 bg-zinc-800 px-2.5 rounded-md flex items-center gap-2'>
                  <span className='text-zinc-300'>{email} </span>
                  <button type='button' onClick={() => props.removeEmailFromInvite(email)}>
                    <X className="size-4 text-zinc-400"/>
                  </button>
                </div>
              )
            })}

            </div>

            <div className='w-full h-px bg-zinc-800' />

            <form onSubmit={props.addNewEmailToInvite} className='p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex gap-2 items-center'>
              <div className="px-2 flex items-center flex-1 gap-2">
                <AtSign className='text-zinc-400 size-5'/>
                <input type="email" name="email" id="" placeholder="Digite o e-mail do convidado" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"/>
              </div>
              <button type="submit" className="bg-lime-300 text-lime-950 rounded-lg py-2 px-5 font-medium flex items-center gap-2 hover:bg-lime-400">
                Convidar
                <Plus className='size-5'/>
              </button>

            </form>

          </div>
        </div>
    
    )
}