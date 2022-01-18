import React from "react";
import axios from "axios";
import { useDebouncedCallback } from "../../hooks/useDebouncedCallback";
import Input from "../../primitives/input";
import Spinner from "../../primitives/spinner";
import {
  Wrapper,
  InputWrapper,
  List,
  ListItem,
  Error,
  SpinnerWrapper,
} from "./styles";

const COUNTRIES_API_URL = "https://restcountries.com/v3.1/";
const DEBOUNCE_DELAY = 500;

function AutoComplete() {
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [results, setResults] = React.useState([]);

  async function getCountries(e) {
    try {
      setError(null);
      setLoading(true);
      const { data } = await axios.get(
        `${COUNTRIES_API_URL}/name/${e.target.value}`
      );
      setResults(data);
      setLoading(false);
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        setError(error.response.data?.message);
        console.error(error.response);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.error(error.request);
        setError(error.request.statusText);
      } else {
        // Something happened in setting up the request that triggered an Error
        setError(error.message);
        console.error(error.message);
      }

      setLoading(false);
    }
  }

  const debouncedChangeHandler = useDebouncedCallback(
    (event) => getCountries(event),
    DEBOUNCE_DELAY
  );

  return (
    <Wrapper>
      <InputWrapper loading={loading.toString()}>
        <Input
          type="text"
          className="input"
          onChange={(e) => debouncedChangeHandler(e)}
        />
        {loading && (
          <SpinnerWrapper>
            <Spinner loading={loading} size={30} />
          </SpinnerWrapper>
        )}
      </InputWrapper>
      {error && <Error>{error}</Error>}
      {!loading && !error && (
        <>
          <List>
            {results?.map((item, index) => (
              <ListItem key={index}>{item.name.common}</ListItem>
            ))}
          </List>
        </>
      )}
    </Wrapper>
  );
}

export default AutoComplete;
