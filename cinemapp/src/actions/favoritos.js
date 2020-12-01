export function addFilme(filme){
    return {
        type:'ADD_FILME',
        filme
    }
}
export function togglePg(pg){
    return {
        type:'TG_PG',
        pg
    }
}