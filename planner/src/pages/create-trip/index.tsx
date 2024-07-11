import {MapPin, Calendar, ArrowRight, UserRoundPlus, Settings2,} from 'lucide-react'
import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { InviteGuestModal } from './invite-guest-modal'
import { ConfirmTripModal } from './confirm-trip-modal'

export function CreateTripePage() {
  const navigate =useNavigate()

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
    const email = data.get('email')?.toString()

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

  //Criação da viagem
  function createTrip(event: FormEvent<HTMLFormElement>){
    event.preventDefault()
    
    navigate('trips/123')
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
        <InviteGuestModal 
          addNewEmailToInvite={addNewEmailToInvite}
          closeModalMail={closeModalMail}
          emailsToInvite={emailsToInvite}
          removeEmailFromInvite={removeEmailFromInvite}
        />
      )}

      {isConfirmTripModalOpen &&(
        <ConfirmTripModal
        closeConfirmTripOpen={closeConfirmTripOpen}
        createTrip ={createTrip}
        />
      )}
    </div>
  )
}
