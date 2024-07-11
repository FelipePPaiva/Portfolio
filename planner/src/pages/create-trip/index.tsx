import {MapPin, Calendar, ArrowRight, UserRoundPlus, Settings2, X, AtSign, Plus, User, Mail} from 'lucide-react'
import { FormEvent, useState } from 'react'

export function CreateTripePage() {
  
  const [isInputTravelOpen, setIsInputTravelOpen] = useState(false)
  const [isOpenModalMail, setIsOpenModalMail] = useState(false)
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false)
  const [emailsToInvite,setEmailsToInvite] = useState([
    
  ])

  function openTravelButton(){
    setIsInputTravelOpen(true)
  }

  function closeTravelButton(){
    setIsInputTravelOpen(false)
  }

  // Criação do modal para e-mail
  function openModalMail(){
    setIsOpenModalMail(true)
  }

  function closeModalMail(){
    setIsOpenModalMail(false)
  }

  //Confirmação de viagem Modal
  function openConfirmTripOpen(){
    setIsConfirmTripModalOpen(true)
  }

  function closeConfirmTripOpen(){
    setIsConfirmTripModalOpen(false)
  }

  //Adicionar e-mail atraves do botão
  function addNewEmailToInvite(event: FormEvent<HTMLFormElement>){
    event.preventDefault()

    const data = new FormData(event.currentTarget)
    const email = data.get('email')

    if(!email){
      return
    }

    if(emailsToInvite.includes(email)){
      return alert('usuário já adicionado')
    }

    setEmailsToInvite([
      ...emailsToInvite,
      email
    ])

    event.currentTarget.reset()
  }

  function removeEmailFromInvite(emailToRemove: string){
    const newEmailList = emailsToInvite.filter(email => email !== emailToRemove)

    setEmailsToInvite(newEmailList)
  }

  
  return (
    <div className="h-screen flex items-center justify-center bg-back bg-no-repeat bg-center  ">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <div className='flex flex-col items-center gap-3'>
          <img src="./src/assets/img/logo.svg" alt="plann.er"/>

          <p className="text-zinc-300 text-lg">
            Convide seus amigos e planeje sua próxima viagem
          </p>

        </div>

        <div className='space-y-4'>
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
              <button onClick={closeTravelButton} className="bg-zinc-800 text-lime-200 rounded-lg py-2 px-5 font-medium flex items-center gap-2 hover:bg-zinc-400">Alterar local/data <Settings2/></button> 
            ):(
              <button onClick={openTravelButton} className="bg-lime-300 text-lime-950 rounded-lg py-2 px-5 font-medium flex items-center gap-2 hover:bg-lime-400">
              Continuar
              <ArrowRight className='size-5 tex'/>
            </button>
            )}
          
          </div>

          {/* Caso o isInputTravelOpen seja TRUE (Valida se o botão "continuar" foi clicado habilita o conteudo de viagem) */}
          {isInputTravelOpen && (
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
              <button onClick={openConfirmTripOpen} className="bg-lime-300 text-lime-950 rounded-lg py-2 px-5 font-medium flex items-center gap-2 hover:bg-lime-400">
                Confirmar viagem
                <ArrowRight className='size-5'/>
              </button>

            </div>
          )}

        </div>
        
        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente concorda <br/> com nossos <a className="text-zinc-300 underline" href="#">termos de uso</a> e <a className="text-zinc-300 underline" href="#">politicas de privacidade</a>
        </p>
      </div>

      {isOpenModalMail &&(
        <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
          <div className='bg-zinc-900 w-[640px] rounded-xl py-5 px-5 shadow-shape space-y-5'>
            <div className='flex items-center justify-between my-2'>
              <h2 className='text-lg font-semibold'>Selecionar convidados</h2>
              <button onClick={closeModalMail}>
                <X className='size-5 text-zinc-400'/>
              </button>
            </div>
            
            <p className='text-sm text-zinc-400'>Os convidados irão receber e-mails para confirmar a participação na viagem</p>
            <div className='flex flex-wrap gap-2'>
            {emailsToInvite.map(email =>{
              return(
                <div key={email} className='py-1.5 bg-zinc-800 px-2.5 rounded-md flex items-center gap-2'>
                  <span className='text-zinc-300'>{email} </span>
                  <button type='button' onClick={() => removeEmailFromInvite(email)}>
                    <X className="size-4 text-zinc-400"/>
                  </button>
                </div>
              )
            })}

            </div>

            <div className='w-full h-px bg-zinc-800' />

            <form onSubmit={addNewEmailToInvite} className='p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex gap-2 items-center'>
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
      )}

      {isConfirmTripModalOpen &&(
        <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
          <div className='bg-zinc-900 w-[640px] rounded-xl py-5 px-5 shadow-shape space-y-5'>
            <div className='flex items-center justify-between my-2'>
              <h2 className='text-lg font-semibold'> Confirmar criação da viagem</h2>
              <button onClick={closeConfirmTripOpen}>
                <X className='size-5 text-zinc-400'/>
              </button>
            </div>
            
            <p className='text-sm text-zinc-400'>Para concluir a criação da viagem para <span className='text-zinc-100 font-semibold'>Florianópolis, Brasil</span> nas datas de <span className='text-zinc-100 font-semibold'>16 a 27 de Agosto de 2024</span> preencha seus dados abaixo:</p>

            <form onSubmit={addNewEmailToInvite} className='space-y-3'>
              <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex gap-2 items-center">
                <User className='text-zinc-400 size-5'/>
                <input type="text" name="name" id="" placeholder="Seu nome completo" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"/>
              </div>

              <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex gap-2 items-center">
                <Mail className='text-zinc-400 size-5'/>
                <input type="email" name="email" id="" placeholder="Seu e-mail pessoal" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"/>
              </div>
              <button type="submit" className="w-full justify-center bg-lime-300 text-lime-950 rounded-lg h-11 px-5 font-medium flex items-center gap-2 hover:bg-lime-400">
                Confirmar criação da viagem
              </button>

            </form>

          </div>
        
        </div>
      )}
    </div>
  )
}
