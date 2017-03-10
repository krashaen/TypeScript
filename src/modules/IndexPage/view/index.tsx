import * as React from "react";
import * as block from 'bem-cn';
import "./style.styl";

interface LayoutProps { compiler?: string; framework?: string; }

// 'IndexPageProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
class Layout extends React.Component<LayoutProps, undefined> {
  private b = block('index-page');
  render() {
    const b = this.b;
    return(
      <main className={b()}>
        <section className={b('content')}></section>
      </main>
    );
    }
};

export default Layout;