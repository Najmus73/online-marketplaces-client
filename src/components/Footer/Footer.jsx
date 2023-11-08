const Footer = () => {
    return (
        <div className="bg-pink-900 text-white pt-[17px] overflow-hidden">
            <footer className="footer lg:w-[1450px] mx-auto py-10" id="footer">
            <aside>
                <h1 className="text-2xl font-bold text-white border-b-4 border-white">True Lancer</h1>
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