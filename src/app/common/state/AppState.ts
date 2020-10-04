import { DataState } from './DataState';
import { PageState } from './PageState';
import { UserSessionState } from './UserState';

export interface AppState {
    page: PageState;
    session: UserSessionState;
    data: DataState;
}

