import Layout from '../components/layout'
import { TypeText } from '../components/type'

export default function Home() {
  return (
    <Layout>
      <section>
        <article>
        <p className="blue-text">About</p>
        <p>Hello, my name is Ruben Marcus, and I´m a 10 year experienced <br/>Senior Software engineer from Brazil.</p>
        <p>I´m Front-end specialist,with experience in React,Angular,Vue,Redux and etc.</p>
        <p>Also have knowledge in Software Architecture,TDD,CI/CD,<br/>Backend development.</p>
        </article>
        <article>
        <p className="blue-text"> Latest blog post: </p>
        <h2><a href="https://dev.to/rubenmarcus/why-use-next-js-strapi-16b1">Why use Next.js + Strapi?</a></h2>
        </article>
      
      </section>
      <aside>       
      <img className="me" src="./me.jpg" />
      <h1>rubenmarcus.dev</h1>
      <span className="blue-text">Senior Software Engineer</span>
      <div className="socialLinks">
      <a href="https://github.com/rubenmarcus"><img src="./github.svg" /></a>
      <a href="https://dev.to/rubenmarcus"><img src="./dev.svg" /></a>
      <a href="https://rubenmarcus.medium.com/"><img src="./medium.svg" /></a>
      <a href="https://stackoverflow.com/users/5905497/ruben-marcus"><img src="./stack.svg" /></a>
      <a href="https://linkedin.com/in/rubenmarcus"><img src="./linkedin.svg" /></a>
      <a href="mailto:ruben@rubenmarcus.dev"><img src="./mail.svg" /></a>
      </div>
     </aside>
    </Layout>
  )
}

const clientType = () => {
  if (process.browser) {
    return  <TypeText />
  } 
  return ''
}