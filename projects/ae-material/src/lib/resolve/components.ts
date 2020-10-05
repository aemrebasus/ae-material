import { AeView } from '../ae-view/ae-view.component';




/**
 * For documentation of components
 */
export const components: { [key: string]: AeView } = {
    avatar: {
        name: 'Avatar',
        component: 'AeAvatarComponent',
        interface: 'AeAvatar',
        module: 'AeAvatarModule',
        selector: 'ae-avatar'
    },
    card: {
        name: 'Card',
        module: 'AeCardModule',
        component: 'AeCardComponent',
        selector: 'ae-card',
        interface: 'AeCard',
    },
    form: {
        name: 'Form',
        module: 'AeFormModule',
        component: 'AeFormComponent',
        selector: 'ae-form',
        interface: 'AeForm',
    },
    list: {
        name: 'List',
        module: 'AeListModule',
        component: 'AeListComponent',
        selector: 'ae-list',
        interface: 'AeList',
    },
    'side-nav': {
        name: 'Side Nav',
        module: 'AeSideNavModule',
        component: 'AeSideNavComponent',
        selector: 'ae-side-nav',
        interface: 'AeSideNav',
    },
    toolbar: {
        name: 'Toolbar',
        module: 'AeToolbarModule',
        component: 'AeToolbarComponent',
        selector: 'ae-toolbar',
        interface: 'AeToolbar',
    },

    // TODO: Add the new components here.
};

