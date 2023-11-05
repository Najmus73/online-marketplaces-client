const Footer = () => {
    return (
        <div className="bg-base-200 pt-[17px]">
            <footer className="footer w-[1450px] mx-auto py-10">
            <aside>
                <h1 className="text-2xl font-bold text-blue-400 border-b-4 border-blue-400">True Lancer</h1>
                <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
            </aside>
            <nav>
                <header className="footer-title">Services</header>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <header className="footer-title">Company</header>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <header className="footer-title">Legal</header>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
        </div>
    )
}
export default Footer;