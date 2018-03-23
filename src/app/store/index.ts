import { ActionReducerMap, createSelector } from '@ngrx/store';
import { IRepoState } from './models/repo.model';
import * as reposReducer from './reducers/load-repos.reducer';


export interface IAppState {
    reposState: IRepoState;
}

export const reducers: ActionReducerMap<IAppState> = {
    reposState: reposReducer.LoadReposReducer
};

export const getUserRepos = createSelector(
    reposReducer.selectUserRepos,
    (repos: IRepoState) => repos.repos
);

export const getReposState = createSelector(
    reposReducer.selectRepos,
    (repos: IRepoState) => repos
);
