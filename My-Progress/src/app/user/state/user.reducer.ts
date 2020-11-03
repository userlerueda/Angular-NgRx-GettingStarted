import { createReducer, on, createAction } from '@ngrx/store'

export const userReducer = createReducer(
  { maskUserName: false},
  on(createAction('[User] Mask User Name'), state => {
    console.log('current state: ' + JSON.stringify(state))
    return {
      ...state,
      maskUserName: !state.maskUserName
    }
  })
)
