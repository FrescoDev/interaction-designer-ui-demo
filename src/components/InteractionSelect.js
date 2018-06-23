import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300,
  },
  menu: {
    width: 300,
  },
});

const interactionTypes = [
  { label: 'User browses to a page', value: 'user-page-browse' },
  { label: 'GET request is sent to an endpoint', value: 'get-request' },
  { label: 'POST request is sent to an endpoint', value: 'post-request' },
];

class TextFields extends React.Component {
  state = {
    interactionType: '',
  };

  handleChange = interactionType => event => this.setState({
    [interactionType]: event.target.value,
  });

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="select-interaction-type"
          select
          label="When a..."
          className={classes.textField}
          value={this.state.interactionType}
          onChange={this.handleChange('interactionType')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          margin="normal"
        >
          {interactionTypes.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </form>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);
