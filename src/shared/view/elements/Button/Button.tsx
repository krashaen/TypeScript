import * as React from "react";
import * as block from "bem-cn";
import "./Button.styl"

const b = block('button');

interface ButtonProps {
  title: string;
  callback?: (event: React.MouseEvent<HTMLButtonElement>)=> void;
}

class Button extends React.Component<ButtonProps, undefined> {
  render() {
    return(
      <button className={b()} type="button" onClick={this.props.callback}>
        {this.props.title} 
      </button>
    );
  }
};

export default Button;