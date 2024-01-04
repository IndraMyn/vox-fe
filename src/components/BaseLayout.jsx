import Link from "next/link";

export default function BaseLayout({children}) {

    const onLogout = () => {
        localStorage.clear();
        window.location.href = "/"
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        Navbar
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link href="/users" className="nav-link active" aria-current="page">
                                    User
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/organizers" className="nav-link active" aria-current="page">
                                    Organizers
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link active"
                                    aria-current="page"
                                    href="/sport-events"
                                >
                                    Sport Events
                                </a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <button className="btn btn-outline-danger" type="button" onClick={() => onLogout()}>Logout</button>
                        </form>
                    </div>
                </div>
            </nav>


            <div className="container mt-5">
                {children}
            </div>
        </>
    );
}
