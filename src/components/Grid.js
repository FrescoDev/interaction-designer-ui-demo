import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import InteractionSelect from './InteractionSelect';
import SearchBox from './SearchBoxV3';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    width: 300,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300,
  },
  button: {
    margin: theme.spacing.unit,
  },
  grid: {
    marginTop: 2 * theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

class GuttersGrid extends React.Component {
  state = {
    spacing: '16',
  };

  handleChange = key => (event, value) => {
    this.setState({
      [key]: value,
    });
  };

  render() {
    const { classes } = this.props;
    const { spacing } = this.state;

    return (
      <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12}>
          <Grid container className={classes.demo} spacing={Number(spacing)}>
            <Grid key={0} item>
              <SearchBox />
            </Grid>
            <Grid key={1} item>
              <InteractionSelect />
            </Grid>
            <Grid key={2} item>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <form className={classes.container} noValidate autoComplete="off">
                  <TextField
                    id="name"
                    label="Name"
                    className={classes.textField}
                    value={this.state.name}
                    onChange={this.handleChange('name')}
                    margin="normal"
                  />
                  <TextField
                    id="description"
                    label="description"
                    className={classes.textField}
                    margin="normal"
                  />
                  <TextField
                    id="path"
                    label="path"
                    defaultValue="/my-endpoint"
                    className={classes.textField}
                    margin="normal"
                  />
                </form>
              </div>
            </Grid>
          </Grid>
          <Button variant="raised" color="primary" className={classes.button}>
            Create
          </Button>
        </Grid>
      </Grid>
    );
  }
}

GuttersGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GuttersGrid);
