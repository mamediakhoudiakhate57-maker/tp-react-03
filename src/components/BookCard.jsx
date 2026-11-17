function BookCard({ titre, auteur, estDisponible, onClickEmprunt }) {
    const carte = {
        border: "1px solid silver",
        padding: "16px",
        borderRadius: "8px",
        margin: "10px",
        width: "250px",
    }
    return (
        <div style={carte}>
            <h3>{titre}</h3>
            <p>{auteur}</p>
            <p>{estDisponible ? "🟢 Disponible" : "🔴 Emprunté"}</p>

            <button onClick={onClickEmprunt}>
                {estDisponible ? "Emprunter" : "Rendre"}
            </button>
        </div>
    )
}
export default BookCard