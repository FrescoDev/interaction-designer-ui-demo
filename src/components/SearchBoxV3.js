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

const menuActions = [
  { label: 'Create a new interaction', value: 'create-int' },
  { label: 'Initialise a new system', value: 'init-sys' },
  { label: 'Find an interaction', value: 'find-int' },
  { label: 'Edit an existing interaction', value: 'edit-int' },
];

class TextFields extends React.Component {
  state = {
    menuAction: '',
  };

  handleChange = menuAction => event => this.setState({
    [menuAction]: event.target.value,
  });

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="select-menu-action"
          select
          label="Main Menu"
          className={classes.textField}
          value={this.state.menuAction}
          onChange={this.handleChange('menuAction')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          margin="normal"
        >
          {menuActions.map(option => (
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
