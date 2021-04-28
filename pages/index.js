import Layout from '../components/layout'
import { TypeText } from '../components/type'

export default function Home() {
  return (
    <Layout>
      <section>
        {clientType()}
      </section>
    </Layout>
  )
}

const clientType = () => {
  if (process.browser) {
    return  <TypeText text="Angular Developer" />
  } 
  return ''
}