
import { TextField, styled, Button} from '@mui/material';
import { makeStyles } from "@mui/styles";
import { createTheme } from '@mui/material/styles';
let theme = createTheme();

export const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: 'rgb(115 74 153)',
      fontWeight: 'bold'
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'rgb(115 74 153)',
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: 'rgb(115 74 153)',
      },
    },
  });

  export const CssButton = styled(Button)({
    width:150,
   
  })
  
  export const profileSettingStyles = makeStyles(()=>({
    
    avatarView:{
        position: 'relative'
    },
    icon: {
        position: 'absolute',
        bottom: 50,
        left: 180,
        // backgroundColor: theme.palette.background.paper,
        borderRadius: '50%',
        cursor: 'pointer',
        
      },
    textField:{
        width:"60%",      
    },
    textField1:{
        width:"60%",   
        [theme.breakpoints.down("md")]:{
            width:"80%"
        }   
    },
    grid:{
        display:"flex",
        justifyContent: 'center',
    },
    buttonStyle:{
        width:"80%",
    },
    profileText:{
        display:"flex", 
        justifyContent:"center",
        color:"rgb(115 74 153)",
        
    },
    accountSettingContainer:{
        border:"1px solid #8e64b4", 
        backgroundColor:" #f2eef7", 
        position:"absolute", 
        left:50, 
        borderRadius:8, 
        height:215, 
        width:400,       
        [theme.breakpoints.down("xl")]:{
            display:"none",
        }
    },
    listBox:{
        borderBottom:"1px solid #8e64b4",
        cursor:"pointer"
    },
    listHeading:{
        display:"flex", 
        justifyContent:"center", 
        fontFamily:"CormorantBoldItalic", 
        padding:20,
        fontSize:40
    },
    listText:{
        fontFamily:"CormorantBoldItalic", 
        padding:20,
        fontSize:20
    },
    fields:{
        display:"flex", 
        justifyContent:"center",
        paddingTop:25,
        // position:"relative", 
        // left:60, 
        // top:40,
        [theme.breakpoints.down("md")]:{
            left:0,
        }
    },
    submitButton:{
        width:"30%", 
        [theme.breakpoints.down("md")]:{
            position:"absolute", 
            right:10
        }
        // gap:45
    },
    cancelButton:{
        position:"absolute", 
        left:20, 
        width:"30%",
        [theme.breakpoints.down("md")]:{
            left:10
        }
    },
    submitButton1:{
        width:"30%",    
        [theme.breakpoints.down("md")]:{
            width:"32%",
           
        }
        // gap:45
    },
    cancelButton1:{
        width:"30%",
        [theme.breakpoints.down("md")]:{
            width:"32%",
           
        }
    },
    mobileMenu:{
        display:"none",
        [theme.breakpoints.down("xl")]:{
            display:"block",
            position:"absolute",
           
        }
    },
    dateInput:{
        width:"100%",
        height:50,
        border: "1px solid #ced4da",
         borderRadius: "0.25rem",
        backgroundColor:" #FCFBFD", 
        padding:15

    },
    signContainer:{
        border: "1px solid #ced4da",
        borderRadius: "0.25rem",
        backgroundColor:" #FCFBFD", 
        width:"60%",
    },
    signCanvas:{
        width:"100%",
        height:"200px",
        border: "1px solid #ced4da",
        borderRadius: "0.25rem",
        backgroundColor:" #FCFBFD",
    }
  }))

  export const sideNavStyles =makeStyles(()=>({
    headerView:{
        display:"flex",
        justifyContent: "space-between",
        alignItems:"center",
        height:"100px",   
        overflowY:"none",
        // overflowX: "auto",     
        boxShadow: "0 2px 4px 0 rgba(0,0,0,.2)",   
        background:"#FCFBFD"  
      },
    //   headerView: {
    //     background: "#fff",
    //     display: "flex",
    //     justifyContent: "space-between",
    //   },
      toolbar: {
        width:"100%",
        height:"100%",
        background:"#FCFBFD"  ,
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
        height:"100%",
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
        height:"80%",
      },
    mainBox:{
        height:"100%", 
        backgroundColor:"#f2eef7"
    },
    onCloselogoView:{
        display:"flex",
        justifyContent:"space-between", 
        width:"100%"
    },
    // logo:{
    //     height:70, 
    //     paddingTop:7, 
    //     paddingBottom:5, 
    //     width:200
    // },
    Drawerlogo:{
        height:70, 
        paddingTop:7, 
        paddingBottom:5, 
        marginLeft:20, 
        marginRight:35, 
        width:200
    },
    avatarView:{
        width:"100%",
        display:"flex", 
        flexDirection:"column", 
        alignItems:"center",
       
    },
    avatar:{
        width:"40%", 
        height:"auto",        
    },
    logoutIcon:{
        display:"flex", 
        [theme.breakpoints.down("md")]:{
            display:"none", 
        }
    },
    contentArea:{
        padding:3,
        [theme.breakpoints.down("md")]:{
            // marginLeft:40,
            // marginTop:50
        }
    }
  }))

  export const clientStyles = makeStyles(()=>({
    clientContainer:{
        [theme.breakpoints.down("md")]:{
            // marginLeft:60,
            // marginTop:50
        }
    }
  }))

  export const excalidrawStyles = makeStyles(()=>({
    imageContainer:{
        position: "relative",
        height:"100%"
    },
    excalidrawContainer:{
        marginTop: -605,
        /* border:1px solid red; */
        /* top: -80; */
        /* left: 0;  */
        width:"1000px", 
         height:"600px"
    }
  }))