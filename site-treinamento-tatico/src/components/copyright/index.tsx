export function Copyright(){
    const currentYear = new Date().getFullYear();
    return(
        <>
            <p>
                &copy;{currentYear} CodePulse Solutions. Todos os direitos reservados.
            </p>
        </>
    )
}