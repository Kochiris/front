import React from 'react'
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { connect } from 'react-redux';

import actions from '../duck/actions';



const Buttons = (props) => {
  const theme = createMuiTheme({
    palette: {
      secondary: {
        main: '#14ba20'
      }
    }
  });

  const onRemove = () => {
    props.remove(props.todo);
  }
  const onEdit = () =>{
    props.edit(props.todo);
  }

  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <Fab onClick={onEdit} size="small" color="secondary" aria-label="edit" >
          <EditIcon />
        </Fab>
        <Fab onClick={onRemove} size="small" color="secondary" aria-label="edit" >
          <DeleteIcon />
        </Fab>
      </MuiThemeProvider>
    </div>
  )
};

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
  remove: (todo) => dispatch(actions.remove(todo)),
  edit: (todo) =>dispatch(actions.edit(todo))
})

export default connect(mapStateToProps, mapDispatchToProps)(Buttons)
