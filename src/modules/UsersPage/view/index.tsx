import * as React from "react";

interface LayoutProps { compiler?: string; framework?: string; }

// 'LayoutProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
class Layout extends React.Component<LayoutProps, undefined> {
  render() {
    return <h1>Пользователи</h1>;
    }
};

export default Layout;