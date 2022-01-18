import React from "react";
import axios from "axios";
import { debounceFn } from "../../utils";
import Input from "../../primitives/input";
import {
  Wrapper,
  InputWrapper,
  SpinnerWrapper,
  Spinner,
  List,
  ListItem,
} from "./styles";

const COUNTRIES_API_URL = "https://restcountries.com/v3.1/";
const DEBOUNCE_DELAY = 500;

function AutoComplete() {
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [results, setResults] = React.useState([]);

  React.useEffect(() => {
    getCountries();
  }, []);

  async function getCountries() {
    try {
      setLoading(true);
      const { data } = await axios.get(`${COUNTRIES_API_URL}/name/Italy`);
      setResults(data);
      setLoading(false);

      console.log("data");
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        setError(error.response.data?.message);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        setError(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
        setError(error.message);
      }

      setLoading(false);
    }
  }

  const debouncedChangeHandler = React.useCallback(
    debounceFn(getCountries, DEBOUNCE_DELAY),
    []
  );

  return (
    <Wrapper>
      <InputWrapper loading={loading.toString()}>
        <Input
          type="text"
          className="input"
          onChange={debouncedChangeHandler}
        />
        {loading && (
          <SpinnerWrapper>
            <Spinner loading={loading} size={30} />
          </SpinnerWrapper>
        )}
      </InputWrapper>
      {error && <Error>{error}</Error>}
      <List>
        {results?.map((item, index) => (
          <ListItem key={index}>{item.name.common}</ListItem>
        ))}
      </List>
    </Wrapper>
  );
}

export default AutoComplete;
