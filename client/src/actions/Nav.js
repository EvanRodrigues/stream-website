export const toggleNav = () => {
    return {
        type: 'TOGGLE'
    }
};

export const closeNav = () => {
    return {
        type: 'CLOSE_NAV'
    }
};

export default { toggleNav, closeNav };