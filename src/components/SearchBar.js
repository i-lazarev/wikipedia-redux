import React from "react";
import {
  Container,
  Row,
  InputGroup,
  Button,
  FormControl,
} from "react-bootstrap";

const SearchBar = () => {
  return (
    <Container>
      <Row>
        <InputGroup className="mb-3">
          <FormControl aria-describedby="basic-addon1" />
          <InputGroup.Prepend>
            <Button variant="outline-secondary">Search</Button>
          </InputGroup.Prepend>
        </InputGroup>
      </Row>
    </Container>
  );
};

export default SearchBar;
