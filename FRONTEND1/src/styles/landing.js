import { makeStyles } from "@mui/styles";
import { createTheme } from '@mui/material/styles';
let theme = createTheme();

export const landingStyles = makeStyles(()=>({

    frontImage: {
        width: "100%",
        height: "100%",        
        [theme.breakpoints.down("xl")]: {
          width: "100%",
          height: "100%",
        },        
      },
      
      frontImageView: {
        // position: "relative",
        width: "100%",
        height: 900,

        [theme.breakpoints.down("xl")]: {
          width: "100%",
          height: 900,
        },
        [theme.breakpoints.down("lg")]: {
          width: "100%",
          height: 500,
        },

        [theme.breakpoints.down("md")]: {
          width: "100%",
          height: 450,
        },
        [theme.breakpoints.down("sm")]: {
          width: "100%",
          height: 250,
        },
        [theme.breakpoints.down("xs")]: {
          width: "100%",
          height: 250,
        },


      },

      header:{
        display:"flex",
        justifyContent: "space-between",
        alignItems:"center",
        width: "100%",
        padding:"0 20px",
      },

      imageView : {
        paddingBottom : 50,
        [theme.breakpoints.down("xl")]: {
          paddingLeft:13,
          paddingRight:13
        },
        [theme.breakpoints.down("md")]: {
          paddingLeft:13,
          paddingRight:13
        }
      },
      Images : {
        width: "95%",
        height: 500,
        marginTop:10,
        [theme.breakpoints.down("lg")]: {
          width: "94%",
        },
        [theme.breakpoints.down("md")]: {
          width: "94%",
          height:350,
          paddingLeft:10,
          paddingRight:10 
        },
        [theme.breakpoints.down("sm")]: {
          width: "94%",
          height:200,
          paddingLeft:10,
          paddingRight:10        
        },
        [theme.breakpoints.down("xs")]:{
          width: "94%",
          height:200,
          paddingLeft:10,
          paddingRight:10 
        
        },       
      },

     

    letsPlanDesc : {
      paddingLeft : 90,
     
      // width:"50%",
      paddingRight : 50,
      [theme.breakpoints.down("lg")]: {
        paddingLeft:20,
        padding:5,
        paddingRight: 25,
        fontSize:16,
      },
      [theme.breakpoints.down("md")]: {
        paddingLeft:20,
        padding:5,
        height:200,
        paddingRight: 25,
        fontSize:16,

        
      },
      [theme.breakpoints.down("sm")]: {
        fontSize:14,
        padding:5,
        paddingLeft:13,
        height:220,

        paddingRight:13,       
      }
    // },
    },
    images : {
      width: "94.8%",
      height: 500,
      marginTop:-150,
      paddingLeft:45,
      
      [theme.breakpoints.down("lg")]: {
        width: "94%",
        paddingLeft:20,
        marginTop:0,
      },
      [theme.breakpoints.down("md")]: {
        width: "94%",
        height:350,
        marginTop:0,
        paddingLeft:20,
        // paddingLeft:10,
        // paddingRight:10 
      },
      [theme.breakpoints.down("sm")]: {
        width: "94%",
        height:200,
        paddingLeft:10,
        marginTop:0,
        paddingRight:10        
      },
      [theme.breakpoints.down("xs")]:{
        width: "94%",
        height:200,
        paddingLeft:10,
        paddingRight:10 
      
      },       
    },

    Desc1 : {
      paddingLeft : 90,
      // width:"50%",
      paddingRight : 50,
      [theme.breakpoints.down("lg")]: {
        paddingLeft:20,
        padding:5,
        paddingRight: 25,
        fontSize:14,
      },
      [theme.breakpoints.down("md")]: {
        marginTop:15

        // paddingLeft:20,
        // padding:5,
        // paddingRight: 25,
        // fontSize:14,                     
      },
      [theme.breakpoints.down("sm")]: {
        // marginTop:65
        // fontSize:12,
        // padding:5,
        // paddingLeft:13,
        // paddingRight:13,  
           
      },
    },
    
     image:{
        width: 900,
        height: 550,
        position: "relative",
        [theme.breakpoints.down("xl")]: {
          width: 800,
          height: 450,
        },
        [theme.breakpoints.down("lg")]: {
          width: 600,
          height: 450,
        },
        [theme.breakpoints.down("sm")]: {
          width: 300,
          height: 450,
        },
        [theme.breakpoints.down("sm")]: {
            width: 200,
            height: 450,
          },
        [theme.breakpoints.down("md")]: {
          width: 700,
          height: 450,
        },
     },

     data:{
        marginLeft:"60px"
     },

     heading:{
        color:"rgb(115 74 153)",
        fontSize : 48,
        fontWeight:800,
        display:"flex",
        justifyContent:"center",
        // fontFamily: "CormorantBoldItalic",
         lineHeight : 2,
         [theme.breakpoints.down("md")]: {
          fontSize : 40,
        },
        [theme.breakpoints.down("sm")]:{
          fontSize:35,
        },
        [theme.breakpoints.down("xs")]:{
          fontSize:20,
        }
     },

   
  
    letsPlanTexts : {
      // color : colors.white,
      marginTop:-4,
      [theme.breakpoints.down("sm")]: {
        paddingLeft:20,
        width:"200px", 
      },
      [theme.breakpoints.down("xs")]:{
        paddingLeft:20,
        marginTop:-8,
        width:"150px"
      }
    },
    
   

    Heading:{
      fontSize : 48,
      lineHeight : 1,
      marginTop:40,
      textAlign:"center",
      color:"rgb(115 74 153)",
      // color : colors.white,
      [theme.breakpoints.down("xl")]: {
        textAlign:"center",
        fontSize : 40,
        lineHeight : 2
      },
      [theme.breakpoints.down("lg")]: {
        textAlign:"center",
        fontSize : 30,
        lineHeight : 2
      },
      [theme.breakpoints.down("md")]: {
        textAlign:"center",
        fontSize : 30,
        marginTop:-40,

        lineHeight : 2
      },
      [theme.breakpoints.down("sm")]:{
        fontSize:20,
        textAlign:"center",
        lineHeight:1,
      },
      [theme.breakpoints.down("xs")]:{
        textAlign:"center",
        fontSize:20,
        lineHeight:1
      }    
    },
   
    Heading1:{
      fontSize : 48,
      lineHeight : 1,
      // marginTop:40,
      textAlign:"center",
      color:"rgb(115 74 153)",
      // color : colors.white,
      [theme.breakpoints.down("xl")]: {
        textAlign:"center",
        fontSize : 40,
        lineHeight : 2
      },
      [theme.breakpoints.down("lg")]: {
        textAlign:"center",
        fontSize : 30,
        lineHeight : 2
      },
      [theme.breakpoints.down("md")]: {
        textAlign:"center",
        fontSize : 30,
        lineHeight : 2,
        marginTop:0,

      },
      [theme.breakpoints.down("sm")]:{
        fontSize:20,
        textAlign:"center",
        lineHeight:1,
        marginTop:85,

      },
      [theme.breakpoints.down("xs")]:{
        textAlign:"center",
        fontSize:20,
        lineHeight:1,
        marginTop:40,

      }    
    },
    Message:{
      lineHeight : 2,
      fontSize : 18,
      marginTop :20,
      // width:580,
      textAlign:"center",
      
      [theme.breakpoints.down("md")]: {
        textAlign:"center",
        fontSize : 18,
         marginTop:10

      },
      [theme.breakpoints.down("sm")]: {
        textAlign:"center",
        fontSize:16,
        marginTop:8,
      },
      [theme.breakpoints.down("xs")]:{
        textAlign:"center",
        fontSize:16,
        marginTop:12
      }
    },
    leader:{
    backgroundColor:"#71a600",
    [theme.breakpoints.down("md")]:{
      paddingBottom:150
    }
  },    

  visitImage:{
    [theme.breakpoints.down("md")]:{
      width:"98%"
      // paddingBottom:150
    }
  }
}))

export const  contactStyles = makeStyles(()=>({

  container:{
    width:"100%",
      backgroundColor:"#222222"
  },

  contactImage:{
    width:500,
    height:400,
    [theme.breakpoints.down("lg")]:{
      width:"99%",
      marginTop:25
    },
    [theme.breakpoints.down("md")]:{
      width:"99%",
      marginTop:25
    },
    [theme.breakpoints.down("sm")]:{
      width:"99%",
      marginTop:25
    },    
  }
}))

export const leaderStyles =makeStyles(()=>({

  container:{
      width:"99.9%",
      height:700,
      backgroundColor:"rgb(115 74 153)",
      [theme.breakpoints.down("sm")]: {
          height : 850
        },     
  },
  leader:{
    backgroundColor:"rgb(115 74 153)",
    paddingTop:45,
    [theme.breakpoints.down("lg")]:{
      paddingBottom:320
    },
    [theme.breakpoints.down("md")]:{
      paddingBottom:300
    },
    [theme.breakpoints.down("sm")]:{
      paddingBottom:370
    },
    [theme.breakpoints.down("xs")]:{
      paddingBottom:370
    },
  },  
  sLetsPlanView : {
      padding : 100,
      width : 'auto',
      height : 620,
      [theme.breakpoints.down("md")]: {
        padding : 50,
        height : 350
      },
      [theme.breakpoints.down("xs")]:{
        padding:45,
        height : 370
      }},

      imageView : {
        paddingBottom : 50,
        [theme.breakpoints.down("xl")]: {
          paddingLeft:13,
          paddingRight:13
        },
        [theme.breakpoints.down("md")]: {
          paddingLeft:13,
          paddingRight:13
        }
      },
      Images : {
        width: 700,
        paddingLeft:65,
        height: 500,
        marginTop:10,
        [theme.breakpoints.down("xl")]: {
          width: "96%",
          paddingLeft:20,
          paddingRight:50
          
        },
        [theme.breakpoints.down("lg")]: {
          width: "96%",
          paddingLeft:20,
          paddingRight:50
          
        },
        [theme.breakpoints.down("md")]: {
          width: "82%",
          height:400,
          paddingLeft:66,
          paddingRight:50 
        },
        [theme.breakpoints.down("sm")]: {
          width: "88%",
          height:300,
          paddingLeft:20,
          paddingRight:20       
        },
        [theme.breakpoints.down("xs")]:{
          width: "95%",
          height:200,
          paddingLeft:10,
          paddingRight:10 
        
        },       
      },

  letsPlanDesc:{
          paddingLeft : 20,  
          paddingTop:10,        
          // width:"50%",
          paddingRight : 100,
          [theme.breakpoints.down("xl")]: {
            paddingLeft:15,
            padding:5,
            paddingRight: 35,
            fontSize:16,
          },
          [theme.breakpoints.down("lg")]: {
            paddingLeft:15,
            padding:5,
            paddingRight: 25,
            fontSize:14,
          },
          [theme.breakpoints.down("md")]: {
            paddingLeft:66,
            paddingRight:50 ,
            padding:5,
            height:200,
            fontSize:14,             
          },
          [theme.breakpoints.down("sm")]: {
            fontSize:14,
            padding:5,
            paddingLeft:20,
            paddingRight:20  ,
            height:220,
    
          },         
        // },
  },
 
    Message:{
      lineHeight : 2,
      fontSize : 19,
      // marginTop :30,
      color:"#fff",
      // width:580,
      // textAlign:"center",
      [theme.breakpoints.down("md")]: {
      //   textAlign:"center",
      paddingLeft:15,
      lineHeight:1.6,
      paddingRight:30,
        fontSize : 20,
        //  marginTop:10

      },
      [theme.breakpoints.down("sm")]: {
        fontSize:16,
        // marginTop:10,
        paddingRight:5,
        lineHeight:1.5


      },
      [theme.breakpoints.down("xs")]:{
        fontSize:12,
        // marginTop:12
      }
    },
    Message1:{
      lineHeight : 2,
      fontSize : 18,
      marginTop:15,
      // marginTop :30,
      color:"#fff",
      // width:580,
      // textAlign:"center",
      [theme.breakpoints.down("md")]: {
      //   textAlign:"center",
      paddingLeft:15,
      lineHeight:1.6,

      paddingRight:15,
        fontSize : 20,
        //  marginTop:10

      },
      [theme.breakpoints.down("sm")]: {
        fontSize:16,
        paddingRight:5,
        lineHeight:1.6

      //   marginTop:-12,
      },
      [theme.breakpoints.down("xs")]:{
        fontSize:12,
        // marginTop:12
      }
    },
    heading:{
      color:"#fff",
      fontSize : 48,
      fontWeight:800,
      display:"flex",
      justifyContent:"center",
      // fontFamily: "CormorantBoldItalic",
       lineHeight : 2,
       [theme.breakpoints.down("md")]: {
        fontSize : 40,
      },
      [theme.breakpoints.down("sm")]:{
        fontSize:35,
      },
      [theme.breakpoints.down("xs")]:{
        fontSize:20,
      }
   },
}))

export const servicesStyles =makeStyles(()=>({
  
  card:{
    height:400,
    [theme.breakpoints.down("lg")]:{
      height:470,
    },   
  }
}))

export const footerStyles =makeStyles(()=>({

  footer:{
    backgroundColor:"#1e1e1e"
  }
}))