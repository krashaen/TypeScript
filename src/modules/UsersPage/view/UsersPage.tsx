import * as React from "react";

interface UsersPageProps { compiler?: string; framework?: string; }

// 'UsersPageProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
class UsersPage extends React.Component<UsersPageProps, undefined> {
  render() {
    return <h1>Пользователи</h1>;
    }
};

export default UsersPage;