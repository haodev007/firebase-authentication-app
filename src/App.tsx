import React, { useContext, useRef } from "react";
import { AuthContext } from "context/AuthContext";
import { Button, Col, Container, Form, Navbar, Row } from "react-bootstrap";
import { auth } from "firebaseSetup";

function App() {
  const user = useContext(AuthContext);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  const createAccount = async () => {
    try {
      await auth.createUserWithEmailAndPassword(
        emailRef.current!.value,
        passwordRef.current!.value
      );
    } catch (error) {
      console.error(error);
    }
  };

  const signIn = async () => {
    try {
      await auth.signInWithEmailAndPassword(
        emailRef.current!.value,
        passwordRef.current!.value
      );
    } catch (error) {
      console.error(error);
    }
  };

  const signOut = async () => {
    await auth.signOut();
  };

  return (
    <>
      <Navbar className="justify-content-between" bg="dark" variant="dark">
        <Navbar.Brand>Firebase Authentication</Navbar.Brand>
        {user && <Button onClick={() => signOut()}>Sign Out</Button>}
      </Navbar>
      {!user ? (
        <Container style={{ maxWidth: "500px" }} fluid>
          <Form className="mt-4">
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control ref={emailRef} type="email" placeholder="email" />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                ref={passwordRef}
                type="password"
                placeholder="password"
              />
            </Form.Group>
            <Row>
              <Col xs={6}>
                <Button onClick={() => createAccount()} type="button" size="lg">
                  Sign Up
                </Button>
              </Col>
              <Col xs={6}>
                <Button
                  onClick={() => signIn()}
                  type="button"
                  variant="secondary"
                  size="lg"
                >
                  Sign In
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      ) : (
        <h1 className="mt-4 text-center">Hi, {user.email}</h1>
      )}
    </>
  );
}

export default App;
