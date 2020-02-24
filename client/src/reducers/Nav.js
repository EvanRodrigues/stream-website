const toggleNav = (state = 'closed', action) => {
    switch (action.type) {
        case 'TOGGLE':
            if (state === 'closed') return 'open';
            else return 'closed';
        case 'CLOSE_NAV':
            return 'closed';
        default:
            return state;
    }
};

export default toggleNav;
