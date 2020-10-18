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
        notes: 'There are some builtin inputs like firstName, lastName, password, etc. They can be access from \'ae-material/ae-form/builtin-inputs\'. Also there are builtin-validators that can be imported from \'ae-material/ae-form/builtin-validators\''
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

    table: {
        name: 'Table',
        module: 'AeTableModule',
        component: 'AeTableComponent',
        selector: 'ae-table',
        interface: 'AeTable'
    },

    details: {
        name: 'Details',
        module: 'AeDetailsModule',
        component: 'AeDetailsComponent',
        selector: 'ae-details',
        interface: 'AeDetail'
    },

    featureButton: {
        name: 'Feature Button',
        module: 'AeFeatureButtonModule',
        component: 'AeFeatureButtonComponent',
        selector: 'ae-feature-button',
        interface: 'AeFeatureButton'
    },
    navbarMenu: {
        name: 'Navbar Menu',
        module: 'AeNavbarMenuModule',
        component: 'AeNavbarMenuComponent',
        selector: 'ae-navbar-menu',
        interface: 'AeNavbarMenu'
    },
    message: {
        name: 'Message',
        module: 'AeMessageModule',
        component: 'AeMessageComponent',
        selector: 'ae-message',
        interface: 'AeMessage'
    },
    video: {
        name: 'Video',
        module: 'AeVideoModule',
        component: 'AeVideoComponent',
        selector: 'ae-video',
        interface: 'AeVideo'
    },
    slider: {
        name: 'Slider',
        module: 'AeSliderModule',
        component: 'AeSliderComponent',
        selector: 'ae-slider',
        interface: 'AeSlider',
    },
    typing: {
        name: 'Typing',
        module: 'AeTypingModule',
        component: 'AeTypingComponent',
        selector: 'ae-typing',
        interface: 'string'
    }

    // TODO: Add the new components here.
};

