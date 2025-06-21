export function Copyright(){
    const currentYear = new Date().getFullYear();
    return(
        <>
            <p>
                &copy;{currentYear} Felipe Paiva. Todos os direitos reservados.
            </p>
        </>
    )
}
