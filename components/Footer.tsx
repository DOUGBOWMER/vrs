import VercelLogo from "./VercelLogo";

export default function Footer() {
  return (
    <footer className="tc bg-center pb5 w-100 relative bg-white">
      <div className="w-100 ph3 pv4">
        <a
          className="link black inline-flex items-center ma2 tc br2 pa2"
          href="https://worldspace.cloud"
          aria-label="worldspace"
        >
          <VercelLogo />
        </a>
        <br/>
        <h4>Copyright 2022 | WorldSpace Inc.</h4>
      </div>
    </footer>
  );
}
