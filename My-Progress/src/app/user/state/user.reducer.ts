import {
  createReducer,
  on,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

/* NgRx */
import { User } from '../user';
import * as UserActions from './user.actions';

export interface UserState {
  maskUserName: boolean;
  currentUser: User;
  users: User[];
}

const initialState: UserState = {
  maskUserName: true,
  currentUser: null,
  users: [],
};

const getUserFeatureState = createFeatureSelector<UserState>('users');

export const getMaskUserName = createSelector(
  getUserFeatureState,
  (state) => state.maskUserName
);

export const getCurrentUser = createSelector(
  getUserFeatureState,
  (state) => state.currentUser
);

export const userReducer = createReducer<UserState>(
  initialState,
  on(
    UserActions.maskUserName,
    (state): UserState => {
      return {
        ...state,
        maskUserName: !state.maskUserName,
      };
    }
  )
);
