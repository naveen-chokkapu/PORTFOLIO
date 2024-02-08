import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { AiTwotoneHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiSolidMedal } from "react-icons/bi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

function ColorSchemesExample() {
  return (
    <>
      <div className="font-bold h-20 bg-red-300/[0.3]">
        <Container className="pt-3" fixed="top">
          <Nav className="text-xl me-auto justify-end">
            <Nav.Link className="text-white" href="/">
              <div className="px-2 flex">
                <div className="logo mr-1 mt-0.5">
                  <AiTwotoneHome />{" "}
                </div>
                <div className="">Home</div>
              </div>
            </Nav.Link>
            <Nav.Link className="text-white" href="/about">
              <div className="px-2 flex">
                <div className="logo mr-1 mt-0.5">
                  <AiOutlineUser />{" "}
                </div>
                <div className="">About</div>
              </div>
            </Nav.Link>
            <Nav.Link className="text-white" href="/projects">
              <div className="px-2 flex">
                <div className="logo mr-1 mt-0.5">
                  <AiOutlineFundProjectionScreen />{" "}
                </div>
                <div className="">Projects</div>
              </div>
            </Nav.Link>
            <Nav.Link className="text-white" href="/achievements">
              <div className="px-2 flex">
                <div className="logo mr-1 mt-0.5">
                  <BiSolidMedal />{" "}
                </div>
                <div className="">Achievements</div>
              </div>
            </Nav.Link>
          </Nav>
        </Container>
      </div>
    </>
  );
}

export default ColorSchemesExample;
