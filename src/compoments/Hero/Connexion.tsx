import Layout from './Layout/Layout'
import Form from './Form/Form'

function connexion() {
  return (
    <>
        <section className="max-w-screen h-screen flex items-start gap-2 md:py-20 md:px-16">
            <Form/>
            <Layout/>
        </section>
    </>
  )
}

export default connexion