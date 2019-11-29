import { put } from 'redux-saga/effects';

import * as actionTypes from './actionTypes';
import * as contentActions from './actionCreators';
import { content as contentAPI } from '../../api';

function* getMembersSaga() {
  try {
  } catch (error) {
  } finally {
  }
}

export default {
  [actionTypes.GET_MEMBERS]: getMembersSaga,
};
