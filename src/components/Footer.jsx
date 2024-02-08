import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

function Footer() {
  return (
    <div className="font-bold bg-slate-300/[0.5]">
      <Navbar className="">
        <Container>
          <Navbar.Text>
            Designed and Developed by Naveen Chokkapu ❤️
          </Navbar.Text>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <div className="flex">
                <a href="//github.com/naveen-chokkapu">
                  <div className="mr-3 text-black">
                    <FaGithub style={{ fontSize: "20px" }} />
                  </div>
                </a>
                <a href="//linkedin.com/in/naveen-chokkapu">
                  <div className="mr-3 text-blue-800">
                    <FaLinkedinIn style={{ fontSize: "20px" }} />
                  </div>
                </a>
                <a href="//instagram.com/naveen.chokkapu.18">
                  <div className="text-red-800">
                    <FaInstagram style={{ fontSize: "20px" }} />
                  </div>
                </a>
              </div>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Footer;
