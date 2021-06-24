import React from 'react'
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { connect } from 'react-redux';

import actions from '../duck/actions';



function Buttons(props) {
  const theme = createMuiTheme({
    palette: {
      secondary: {
        main: '#14ba20'
      }
    }
  });



  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <Fab size="small" color="secondary" aria-label="edit" >
          <EditIcon />
        </Fab>
        <Fab onClick={this.remove(props.todo)} size="small" color="secondary" aria-label="edit" >
          <DeleteIcon />
        </Fab>
      </MuiThemeProvider>
    </div>
  )
};


const mapDispatchToProps = dispatch => ({
  remove: (todo) => dispatch(actions.remove(todo))
})

export default connect(null, mapDispatchToProps)(Buttons)
