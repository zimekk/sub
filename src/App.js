import React, { useEffect, useRef, useState } from "react";
import { render } from "react-dom";
import { createBrowserHistory } from 'history';
import { version } from "../package.json";
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
  gql,
  split,
  useQuery,
  useSubscription,
} from "@apollo/client";

const Tabs = ({ children }) => children;
const Title = ({ children }) => (<h1>{children}</h1>);
const Tab = ({ children }) => (<pre style={{ fontFamily: 'monospace' }}>{children}</pre>);


const history = createBrowserHistory({
  hashType: 'slash',
});

export default function App() {
  // const { data: { commentAdded }, loading } = useSubscription(
  //   COMMENTS_SUBSCRIPTION,
    const { data, loading } = useSubscription(
      gql`
      subscription {
        counter {
          count
          countStr
        }
      }
      `,
      // { variables: { postID } }
  );
// const [data,loading] = [null, true];

  console.log(['render'], data, loading)

  useEffect(() => {

    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });

    console.log(['history.location'], history.location.hash)
    const unlisten = history.listen((location, action) => {
      console.log(['history.listen'], action, location.hash, location.state);
    });
    return () => {
      unlisten();
    }

  }, []);

  return (
    <div>
      <h1>Tabs {version}</h1>
      <Tabs>
        <Title>Różowa Pantera / pink panter theme</Title>
      <Tab src="https://proste-tabulatury.pl/pink_panter.php">{`E1-||-----------------------------------------------------------------------------|-
B2-||----------------------------------------------1-0-----0----------------------|-
G3-||----------------------------------------------------0---3---2-0--------------|-
D4-||------1-2--------1-2------1-2--4-5--1-2--4-5------2-------------2-0-2--------|-
A5-||--4-5-------4-5-------4-5----------------------------------------------------|-
E6-||-----------------------------------------------------------------------------|-

E1-||-------------------------------0---------------------------------------------|-
B2-||----------------------1-0----0---4---------------------1-0-----0-------------|-
G3-||---------------------------0---------------------------------0---3-2-0-------|-
D4-||--1-2--4-5--1-2--4-5----------------1-2--4-5--1-2--4-5-----2-----------2-0-2-|-
A5-||-----------------------------------------------------------------------------|-
E6-||-----------------------------------------------------------------------------|-

E1-||--------------0--------------------------------------------------------------|-
B2-||-----------------3-0---------------------------------------------------------|-
G3-||---------------------2-0---3-3-3-3---0---------------------------------------|-
D4-||-------1-2---------------2-------------2-0-2---------------------------------|-
A5-||--4-5------------------------------------------------------------------------|-
E6-||-----------------------------------------------------------------------------|-
`}</Tab>
      </Tabs>
    </div>
  )
};
