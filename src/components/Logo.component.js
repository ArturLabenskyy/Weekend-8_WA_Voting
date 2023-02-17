import logo from "../assets/images/logo.png";

const Logo = () => {
    return (
        <>
            <img
                style={{ height: "6rem", width: "6rem", margin: "1rem 1rem" }}
                src={logo}
                alt="Hogwarts logo"
                className="logo"
            />
            <h2 className="logo-motto">Draco dormiens nunquam titillandus</h2>
        </>
    );
};
export default Logo;
