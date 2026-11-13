import { Link } from "react-router-dom";

function About() {
    return (
        <div>
            <h1>About Us</h1>
            <p>This is the About Page.</p>
            <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
                Go to Home
            </NavLink>
        </div>
    );
}
export default About;