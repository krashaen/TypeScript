import * as React from "react";

interface IndexPageProps { compiler?: string; framework?: string; }

// 'IndexPageProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
class IndexPage extends React.Component<IndexPageProps, undefined> {
  render() {
    return <h1>Главная Страница</h1>;
    }
};

export default IndexPage;