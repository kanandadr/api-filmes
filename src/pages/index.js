import { useParams } from "react-router-dom"

function Detalis() {
    const { id }= useParams()
    console.log(id)

    return(
        <h1>Página de detalhes</h1>
    )
}
export default Detalis