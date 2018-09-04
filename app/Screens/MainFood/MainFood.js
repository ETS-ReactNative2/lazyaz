import React, { Component } from 'react';

import { Card, Container } from '../../Components';
import { BG_PIZZA } from '../../Images';

class MainFood extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <Container>
        <Card
          image={BG_PIZZA}
          title="Convenience Food"
          places={127}
        />
      </Container>
    );
  }
}

export default MainFood;
