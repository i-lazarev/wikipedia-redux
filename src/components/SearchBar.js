import React, { useRef } from "react";
import { connect } from "react-redux";
import {
  Container,
  Row,
  InputGroup,
  Button,
  FormControl,
} from "react-bootstrap";

import { insertAction } from "../actions";

const SearchBar = (props) => {
  console.log(props);

  const searchRef = useRef();

  const searchBtn = () => {
    console.log(searchRef.current.value);
    props.dispatch(insertAction(searchRef.current.value))

    //  dispath will:
    // 1 - run the action function and get the result
    // 2 - change the main state depending on the action type
    // 3 - rerender any component connected to the main state
    
  };

  return (
    <Container>
      <Row>
        <InputGroup className="mb-3">
          <FormControl ref={searchRef} aria-describedby="basic-addon1" />
          <InputGroup.Prepend>
            <Button onClick={searchBtn} variant="outline-secondary">
              Search
            </Button>
          </InputGroup.Prepend>
        </InputGroup>
      </Row>
    </Container>
  );
};

export default connect(null)(SearchBar);
