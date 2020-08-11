import React, { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../../store';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import UserList from '../../components/user-list';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}
const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));
function HomeContainer() {
  const { state, actions } = useContext(StoreContext);
  const classes = useStyles();
  const getUserData = () => {
    actions.loadUserData('https://jsonplaceholder.typicode.com/users');
  };
  const getUserDataWithError = () => {
    actions.loadUserData('no_api');
  };
  return (
    <div className='container'>
      <Button onClick={() => getUserData()} variant='contained' color='primary'>
        Load User Data
      </Button>

      <Button
        style={{ marginLeft: '10px' }}
        onClick={() => getUserDataWithError()}
        variant='contained'
        color='secondary'
      >
        Load User Data with Error
      </Button>
      <UserList users={state.users} />
      <Backdrop className={classes.backdrop} open={state.loading}>
        <CircularProgress color='inherit' />
      </Backdrop>

      {state.error !== '' ? (
        <Alert
          style={{ position: 'fixed', top: '84px', left: '20px' }}
          severity='error'
        >
          {state.error}
        </Alert>
      ) : (
        ''
      )}
    </div>
  );
}

export default HomeContainer;
