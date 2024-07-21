import Layout from './Layout/Layout'
import Form from './Form/Form'

function connexion() {
  return (
    <>
        <section className="max-w-screen h-screen flex items-start gap-2 md:py-14 md:px-10">
            <Form/>
            <Layout/>
        </section>
    </>
  )
}

export default connexion