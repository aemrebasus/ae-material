import { Store } from '@ngrx/store';
import { AeSideNav } from '../ae-side-nav/ae-side-nav.component';

import { components } from '../meta/components';
import { setView } from './actions';


// TODO: Add new components here.
export function sideNavData(store: Store): AeSideNav {
    return {
        list: {
            list: [
                {
                    value: 'Components',
                    route: '/ae-material/doc',
                    icon: 'home',
                    tooltip: 'Home',
                },
                {
                    value: 'avatar',
                    route: 'avatar',
                    icon: 'image_search',
                    tooltip: 'Avatar Component',
                    action: () => store.dispatch(setView(components.avatar))

                },
                {
                    value: 'card',
                    route: 'card',
                    icon: 'card_giftcard',
                    tooltip: 'Card Component',
                    action: () => store.dispatch(setView(components.card))
                },
                {
                    value: 'form',
                    route: 'form',
                    icon: 'input',
                    tooltip: 'Form Component',
                    action: () => store.dispatch(setView(components.form))
                },
                {
                    value: 'list',
                    route: 'list',
                    icon: 'list',
                    tooltip: 'List Component',
                    action: () => store.dispatch(setView(components.list))
                },
                {
                    value: 'Side Nav',
                    route: 'side-nav',
                    icon: 'navigate_next',
                    tooltip: 'SideNav Component',
                    action: () => store.dispatch(setView(components['side-nav']))
                },
                {
                    value: 'Toolbar',
                    route: 'toolbar',
                    icon: 'pan_tool',
                    tooltip: 'Toolbar Component',
                    action: () => store.dispatch(setView(components.toolbar))
                },
                {
                    value: 'Table',
                    route: 'table',
                    icon: 'table_view',
                    tooltip: 'Table Component',
                    action: () => store.dispatch(setView(components.table))
                },



            ]
        },
        toolbar: {
            list: []
        }
    };
}
