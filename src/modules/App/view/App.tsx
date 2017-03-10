import * as React from 'react';
import * as block from 'bem-cn';

class App extends React.Component<{}, {}> {
  public render() {
    const b = block('application');
    const { children } = this.props;

    return (
      <div className={b()}>
        {children}
      </div>
    );
  }
}

export default App;