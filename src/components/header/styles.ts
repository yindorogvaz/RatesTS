export const styles: any = {
    centerSelects: {
        flexGrow: 1,
        display: 'flex',
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
    header: {
        flexGrow: 1,
    },

    dropDownBox: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%'
    },
    formBox: {
        display: 'flex',
        justifyContent: 'center',
        width: '200px'
    },
    form: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    select: {
        '&::before': {
            border: 'none'
        },
        color: 'white',
        svg: {
            color: 'yellow'
        }
    },

}