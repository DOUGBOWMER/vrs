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

        </div>
      </main>
      <Footer />
    </Layout>
  );
}
