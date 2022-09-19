import Layout from '../components/Layout';
import Footer from '../components/Footer';

export default function About() {
  return (
    <Layout>
      <main className="pv3 pv5-ns vh-100 white dt mw8 center">
        <div className="items-center">
          <p className="lh-copy">
            WorldSpace is a fully-functional e-commerce store, built on the serverless
            paradigm.
            <br />
            <br />
            With a single command, the store deploys instantly,
            scales automatically, and requires zero supervision. The underlying
            infrastructure can handle peak time traffic with consistent fast
            performance.
          </p>
          <p className="lh-copy" />
          <p className="lh-copy">
            the answer to ownership is over{' '}
            <a
              className="link dim white underline"
              href="https://worldspace.cloud"
            >
              Worldspace
            </a>
            .<br />
            We can deploy your site to our scalable serverless infrastructure{' '}
            <strong>RIGHT NOW</strong>.
            <br />
          </p>
          <p className="lh-copy">
            Once you have the{' '}
            <a
              className="link dim white underline"
              href="https://worldspace.cloud"
            >
              Solution
            </a>{' '}
            Dont hide it from others{' '}
            <a
              className="link dim white underline"
              href="https://worldspace.cloud"
            >

            </a>

            <a
              className="link dim white underline"
              href="https://worldspace.cloud"
            >
              Everything is easier
            </a>{' '}
            with the WorldSpace integration, one Command — that’s it.
          </p>

        </div>
      </main>
      <Footer />
    </Layout>
  );
}
