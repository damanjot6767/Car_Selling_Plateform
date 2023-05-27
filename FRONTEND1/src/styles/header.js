import { makeStyles } from "@mui/styles";
import { createTheme } from '@mui/material/styles';
let theme = createTheme();

export const  headerStyles = makeStyles(()=>({
    headerView:{
        display:"flex",
        justifyContent: "space-between",
        alignItems:"center",
        height:"100px",   
        overflowY:"none",
        // overflowX: "auto",     
        boxShadow: "0 2px 4px 0 rgba(0,0,0,.2)",     
        background:"#fff",
        [theme.breakpoints.down("lg")]:{
            height:"70px",
        },
        [theme.breakpoints.down("md")]:{
            height:"70px"
        },
        [theme.breakpoints.down("sm")]: {
            height:"70px"
        },
        [theme.breakpoints.down("xs")]: {
            width:"100%",
            height:"70px"
        },
      },
    //   headerView: {
    //     background: "#fff",
    //     display: "flex",
    //     justifyContent: "space-between",
    //   },
      toolbar: {
        background: "#fff",
        width:"100%",
        height:"100%",
        display: "flex",
        boxShadow: "0 2px 4px 0 rgba(0,0,0,.2)", 
        justifyContent: "space-between",
      },
    //   header: {
    //     width: "100%",
    //     display: "flex",
    //     justifyContent: "space-between",
    //     overflowX: "auto",
    //     overflowX: "auto"
    //     [theme.breakpoints.down("md")]: {
    //       padding: "0px",
    //     },
    //   },
      logo: {
        width: "13%",
        paddingLeft:25,
        display:"flex",
        paddingTop:15,
        paddingBottom:15,
        justifyContent: "flex-start",
        height:"90%",
        cursor: "pointer",
        // alignItems: "flex-start",
        [theme.breakpoints.down("lg")]:{
            width:"12%",
            paddingLeft:20,

            height:65
        },
        [theme.breakpoints.down("md")]:{
            width:"10%",
            paddingLeft:20,
            height:65
        },
        [theme.breakpoints.down("sm")]: {
            width:"10%",
            paddingLeft:20,

          height:65
        },
        [theme.breakpoints.down("xs")]: {
            width:"10%",
            paddingLeft:20,

          height:65
        },
      },
     
      logoView:{
        height:"100%"
      },
       
      navlist:{
        display:"flex",
        marginRight:35,
        // justifyContent:"flex-end",
        marginTop:"10px",
        listStyle:"none",       
    
},
listItem:{
    margin:"0 15px",
    fontSize:20,
    fontWeight:500,
    [theme.breakpoints.down("xl")]:{
        margin:"0 10px",
        fontSize:18, 
    },
    [theme.breakpoints.down("lg")]:{
        margin:"0 10px",
        fontSize:16, 
    },
    
  },

  mobileView:{
    display:"none",
    [theme.breakpoints.down("md")]:{
        width:80, 
        right:20,
    },
    [theme.breakpoints.down("sm")]:{
        width:80, 
        right:2,
    },
}, 

navlink:{
    textDecoration:"none"
},

modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "scroll",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      // width: "80%",
      // height: "80%",
    },
  }, 
}))

export const authModalStyles = makeStyles(()=>({

    loginText:{
        color:"rgb(115 74 153)", 
        textAlign:"center", 
        fontSize:"38px !important",
        [theme.breakpoints.down("md")]: {
            fontSize:"35px !important",
        }
    },

    loginModal:{
        display:"flex", 
        flexDirection:"column",
         gap:"20px", 
         outline:'none'
    },
    cssFocused:{
        color:"#71a600"
    },
    forgotStyle:{
        textDecoration:"none", 
        display:"flex", 
        justifyContent:"center", 
        color:"#454B1B", 
        fontWeight:'bold', 
        fontSize:18,
        cursor:"pointer"
    },
    buttonStyle:{
        background:"rgb(115 74 153)",
        width:"100%",        
    }
}))