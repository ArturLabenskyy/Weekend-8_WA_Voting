import datingIcon from "../assets/images/logo.png";

const Logo = () => {
    return (
        <>
            <img
                style={{ height: "7rem", width: "7rem" }}
                src={datingIcon}
                alt="Hogwarts logo"
                className="logo"
            />
            <h2 className="logo-motto">Draco dormiens nunquam titillandus</h2>
        </>
    );
};
export default Logo;
