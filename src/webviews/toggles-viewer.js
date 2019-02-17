import React from "react";
import { Layout } from "./layout";
import { ListToggles } from "./list-toggles";

export class TogglesViewer extends React.Component {
  render() {
    return (
      <Layout>
        <ListToggles />
      </Layout>
    );
  }
}
