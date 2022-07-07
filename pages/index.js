import Layout from "../components/layout";

export default function Home() {
  return (
    <>
      <Layout>
        <section>
          <article>
            <p className="blue-text">About</p>
            <p>
              Hello, my name is Ruben Marcus, and I´m a 10 year experienced{" "}
              <br />
              Senior Software Engineer based in Lisbon - Portugal.
            </p>
          </article>
          <article>
            <p className="blue-text"> Latest blog post: </p>
            <h2>
              <a href="https://dev.to/rubenmarcus/getting-started-with-next-js-strapi-security-first-3380">
                Getting started with Next.js + Strapi: Security first
              </a>
            </h2>
          </article>
        </section>
        <aside>
          <img width="80%" className="me" src="./me.jpg" />
          <h1>Ruben Marcus</h1>
          <span className="blue-text">Senior Software Engineer</span>
          <div className="socialLinks">
            <a href="https://github.com/rubenmarcus">
              <img src="./icon-github.svg" />
            </a>
            <a href="https://dev.to/rubenmarcus">
              <img src="./dev.svg" />
            </a>
            <a href="https://rubenmarcus.medium.com/">
              <img src="./medium.svg" />
            </a>
            <a href="https://stackoverflow.com/users/5905497/ruben-marcus">
              <img src="./stack.svg" />
            </a>
            <a href="https://linkedin.com/in/rubenmarcus">
              <img src="./linkedin.svg" />
            </a>
            <a href="mailto:ruben@rubenmarcus.dev">
              <img src="./mail.svg" />
            </a>
          </div>
        </aside>
      </Layout>
      <div className="bottomLinks">
        <a
          className="blue-text"
          href="mailto:ruben@rubenmarcus.dev?Subject=Hire"
        >
          hire me
        </a>
        <a className="blue-text" target="_blank" href="./Resume.pdf">
          resume
        </a>
      </div>
    </>
  );
}
