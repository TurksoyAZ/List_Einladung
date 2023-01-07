
import './Succes.css'

function Succes({ count }) {
    return (
        <section className='succesContainer'>

            <article className='succesArticle'>

                <h1>Ugurlu!</h1>
                <p>Her {count} istifadeciye devet gönderildi.</p>
                <button onClick={() => window.location.reload()}>Geri</button>
            </article>

        </section>
    )
}

export default Succes
