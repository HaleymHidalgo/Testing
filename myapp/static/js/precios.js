export const toDivisa = (numero) => {
    const conversor = new Intl.NumberFormat('es-CL', {
        style: 'currency',
        currency: 'CLP'
    })
    return conversor.format(numero)
}

export const toNumber = (divisa) => {
    const number = parseInt(divisa.replace(/[^0-9]/g, ""))
    return number
}