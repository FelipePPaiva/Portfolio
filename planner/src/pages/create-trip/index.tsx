import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { InviteGuestModal } from './invite-guest-modal'
import { ConfirmTripModal } from './confirm-trip-modal'
import { DestinationAndDateStep } from './steps/destination-and-date-step'
import { InviteGuestStep } from './steps/invite-guest-step'

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
          <DestinationAndDateStep
            closeTravelButton={closeTravelButton}
            isInputTravelOpen={isInputTravelOpen}
            openTravelButton={openTravelButton}
          />

          {/* Caso o isInputTravelOpen seja TRUE (Valida se o botão "continuar" foi clicado habilita o conteudo de viagem) */}
          {isInputTravelOpen && (
            <InviteGuestStep 
              emailsToInvite={emailsToInvite}
              openConfirmTripOpen={openConfirmTripOpen}
              openModalMail={openModalMail}
            />
            )
          }
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
