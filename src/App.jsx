import { useState } from "react"
import BookCard from "./components/BookCard"

function App() {
  const [books, setBooks] = useState([
    { id: 1, titre: "Le Petit Prince", auteur: "Saint-Exupéry", estDisponible: true },
    { id: 2, titre: "Une si longue lettre", auteur: "Mariama Bâ", estDisponible: true },
    { id: 3, titre: "L'Aventure ambiguë", auteur: "Cheikh Hamidou Kane", estDisponible: false },
    { id: 4, titre: "Les Misérables", auteur: "Victor Hugo", estDisponible: true },
  ])
  const [titre, setTitre] = useState("")
  const [auteur, setAuteur] = useState("")

  const nbDisponibles = books.filter(book => book.estDisponible).length
 function onClickEmprunt(bookId) {
  setBooks(
    books.map(book =>
      book.id === bookId
        ? { ...book, estDisponible: !book.estDisponible }
        : book
    )
  )
}
  function ajouterLivre(e) {
    e.preventDefault()
    if (titre.trim() === "" || auteur.trim() === "") return

    const nouveauLivre = {
      id: Date.now(),
      titre: titre,
      auteur: auteur,
      estDisponible: true,
    }
    setBooks([...books, nouveauLivre])
    setTitre("")
    setAuteur("")
  }
  const styleFormulaire = {
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  maxWidth: "400px",
  margin: "20px auto",
  padding: "24px",
  border: "1px solid gainsboro",
  borderRadius: "12px",
  boxShadow: "0 4px 12px lightgray",
  backgroundColor: "white",
}

const styleChamp = {
  padding: "10px 12px",
  border: "1px solid silver",
  borderRadius: "8px",
  fontSize: "16px",
}

const styleBouton = {
  padding: "12px",
  border: "none",
  borderRadius: "8px",
  backgroundColor: "pink",
  color: "white",
  fontSize: "16px",
  fontWeight: "bold",
  cursor: "pointer",
}
  return (
    <div>
      <h1>Catalogue ({nbDisponibles} livres disponibles)</h1>

     <form onSubmit={ajouterLivre} style={styleFormulaire}>
  <h2 style={{ margin: 0, textAlign: "center" }}>📚 Ajouter un livre</h2>

  <input
    type="text"
    placeholder="Titre du livre"
    value={titre}
    onChange={e => setTitre(e.target.value)}
    style={styleChamp}
  />
  <input
    type="text"
    placeholder="Auteur"
    value={auteur}
    onChange={e => setAuteur(e.target.value)}
    style={styleChamp}
  />

  <button type="submit" style={styleBouton}>Ajouter</button>
</form>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {books.map(book => (
          <BookCard
            key={book.id}
            titre={book.titre}
            auteur={book.auteur}
            estDisponible={book.estDisponible}
            onClickEmprunt={() => onClickEmprunt(book.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default App