export async function getAllProductos () {
    return fetch ("https://api.mercadolibre.com/sites/MLA/search?q=ipod#options")
}