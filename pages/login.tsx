import { signIn } from "next-auth/react"
import Layout from "../components/Layout";
import Footer from "../components/Footer";

export default function Login() {
  function signin(){"This"}

  return (
    <Layout>
      <main className="pa3 pa5-ns vh-100 w-100 white dt tc">
        <p className="f4 lh-copy measure dtc v-mid">
          <h3>Please login to add to your cart</h3>
<<<<<<< HEAD
          <div onClick={() => signIn()} className="white no-underline" style={{ cursor: "pointer" }}>
            <span className="v-mid">Login\Register</span>
=======
          <div onClick={() => signIn("Worldspace")} className="white no-underline" style={{ cursor: "pointer" }}>
            <span className="v-mid">Login/Register</span>
>>>>>>> 60f62a18b2aa3d7e22841503314fa7c002fa5691

          </div>
        </p>
      </main>
      <Footer />
    </Layout>
  );
}
