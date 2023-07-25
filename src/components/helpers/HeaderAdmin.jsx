import { Link } from "react-router-dom"

const HeaderAdmin = () => {
  return (
    <section>
    <header className="header_Administrador">
        <nav>
            <Link to={"/"}>Home</Link>
        </nav>
    </header>
</section>
  )
}

export default HeaderAdmin