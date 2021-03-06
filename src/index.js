import React, { useEffect, useRef, useState } from "react";
import { render } from "react-dom";
import { createBrowserHistory } from "history";
import App from "./App";

// https://medium.com/javascript-in-plain-english/create-your-own-hamburger-menu-using-react-hooks-typescript-and-styled-components-4b2797c4d193
// https://medium.com/javascript-in-plain-english/25-useless-code-comments-people-actually-wrote-in-their-code-6e55c370d562
// https://buddy.works/guides/reactjs-to-aws
// https://medium.com/better-programming/react-router-v6-in-two-minutes-a7a2963e2340
// https://formidable.com/open-source/urql/docs/api/urql/
// https://itnext.io/building-a-node-js-websocket-chat-app-with-socket-io-and-react-473a0686d1e1
// https://www.digitalocean.com/community/tutorials/how-to-build-a-realtime-chat-app-with-react-and-graphql
// https://dev.to/dabit3/building-chatt---a-real-time-multi-user-graphql-chat-app-3jik
// https://pusher.com/tutorials/chat-graphql-subscriptions
// https://www.html5rocks.com/en/tutorials/eventsource/basics/
// https://github.com/bulicmatko/react-redux-chat-app
// https://hasura.io/blog/building-a-realtime-chat-app-with-graphql-subscriptions-d68cd33e73f/

// https://medium.com/javascript-in-plain-english/react-native-0-62-and-flipper-will-change-your-mobile-development-experience-and-make-it-easier-8945d345f644
// https://medium.com/javascript-in-plain-english/the-6tools-that-changed-javascript-for-me-3ee1faf40585
// https://xstate.js.org/docs/

// https://pontoon.mozilla.org/pl/pontoon-intro/messages.properties/?string=189657
// https://github.com/mozilla/send

// https://www.youtube.com/watch?v=XER5jtg0o2A
// https://aquamorphproductions.com/standard/
// http://esotericsoftware.com/forum/Mouth-animation-using-Rhubarb-Lip-Sync-10769
// https://github.com/DanielSWolf/rhubarb-lip-sync#moho
// https://github.com/DanielSWolf/rhubarb-lip-sync/tree/master/extras/EsotericSoftwareSpine

// https://buddy.works/guides/magento-kubernetes

// https://medium.com/javascript-in-plain-english/create-your-own-hamburger-menu-using-react-hooks-typescript-and-styled-components-4b2797c4d193
// https://www.apollographql.com/docs/react/v3.0-beta/get-started/#create-a-client
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
// import { split, HttpLink } from '@apollo/client';
import { getMainDefinition } from "@apollo/client/utilities";
import { WebSocketLink } from "@apollo/link-ws";

const httpLink = new HttpLink({
  uri: 'http://localhost:3000/graphql'
});

const wsLink = new WebSocketLink({
  uri: `ws://localhost:3000/subscriptions`,
  options: {
    reconnect: true
  }
});

// The split function takes three parameters:
//
// * A function that's called for each operation to execute
// * The Link to use for an operation if the function returns a "truthy" value
// * The Link to use for an operation if the function returns a "falsy" value
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: splitLink
  // link: new HttpLink({
  //   uri: 'https://48p1r2roz4.sse.codesandbox.io',
  // })
});

// https://blog.logrocket.com/online-radio-server-pure-node-js/
// https://developer.mozilla.org/pl/docs/Web/API/Window/localStorage
const storage = window.localStorage;
// const parseHash = locationHash => dispatch => {
//   const [path, hash = ''] = decodeURI(locationHash).match(/^#(.+)/) || [];
//   return hash;
// }

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.body.appendChild(document.createElement("div"))
);
