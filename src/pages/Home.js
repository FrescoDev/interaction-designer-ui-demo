import React from 'react';
import { connect } from 'react-redux';
import SearchBox from '../components/SearchBoxV2';
import InteractionSelect from '../components/InteractionSelect';
import Grid from '../components/Grid';
import { addInitialLoad } from '../actions/sample';

export class Home extends React.Component {
  componentDidMount() {
    this.props.addInitialLoad();
  }

  render() {
    return (
      <div>
        <section style={{ padding: '15%' }}>
          <Grid />
        </section>
      </div>
    );
  }
}

export default connect(
  null,
  { addInitialLoad },
)(Home);
