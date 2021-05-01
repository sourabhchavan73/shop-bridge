import { createMuiTheme } from '@material-ui/core/styles';

const primary = '#343a40';
const secondary = '#435d7d'
const warning = '#dc3545'
const subtitle = '#797979'

export default createMuiTheme({
    palette: {
        primary: {
            main: primary,
        },
        
        secondary:{
            main: secondary
        },
    },

    overrides:{
        MuiToolbar:{
            root: {
                minHeight:'58px!important'
            }
        }
    },

    typography:{
        mainTitle: {
            fontSize: '2rem',
            textAlign: 'center',
            fontWeight: 500,
            marginBottom: ".5rem",
        },

        titleDes: {
            fontWeight: 'normal',
            lineHeight: '24px',
            color: subtitle,
        },

        appbarBrand: {
            paddingTop: '.3125rem',
            paddingBottom: '.3125rem',
            marginRight: '1rem',
            fontSize: '1.25rem',
            color: '#fff'
        },

        counterCards:{
            boxShadow: '2px 2px 10px #dadada',
            margin: '5px',
            padding: '20px',
            backgroundColor:' #fff',
            minHeight: '125px',
            borderRadius:' 5px',
            transition: '.3s linear all',
            textAlign: 'right',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        },

        counterIcons:{
            fontSize: '3.3rem',
        }

    }
    
})