import React from 'react'
import { Page,Text,View,StyleSheet, Document, Image } from '@react-pdf/renderer'
import AbduPhoto from '../assets/Abdu.jpg'
function CvPage() {
    const styles=StyleSheet.create({
        page:{
            display:'flex',
            flexDirection:'column'
        },
        header:{
          display:'flex',
          gap:20,
          flexDirection:'row',
          width:'100%',
          height:'100px',
          color:'white',
          justifyContent:'space-between',
          alignItems:'center'  
        },
        profile:{
          display:'flex',
          flexDirection:'row',
          gap:'20px'

        },
        userName:{
            fontSize:'8px',
            marginTop:'70px',
            marginLeft:'10px',
            color:'#333333'
        },
        profileImage:{
            width:'80px',
            height:'80px',
            marginLeft:'40px'
        },
          userWork:{
            fontSize:'12px',
             color:'#333333'
        },
        userMoreInfo:{
            display:'flex',
            flexDirection:'column',
            gap:"10px",
            height:'100px',
             color:'#333333'
        },
        userAddress:{
            marginRight:'20px',
            marginTop:'10px',
            marginBottom:"5px",
            fontSize:'8px',
             color:'#333333'
        },
        bodyContainer:{
           display:'fex',
           flexDirection:'row'
        },
        verticalLine:{
            width:'14px',
            height:'100vh',
            backgroundColor:'#333333',
            marginTop:'-11.9vh'
        },
        horizontalLine:{
            width:'100%',
            height:'2px',
            marginTop:'4px',
            backgroundColor:'#333333'
        },

        cvContainer:{
            width:'calc(100%-14px)',
            height:'88.12vh',
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            gap:'20px'
        },
        container:{
           width:'90%',
           height:'100px',
           marginTop:'20px' 
        },

        skillAndLanguage:{
           width:'90%',
           height:'100px',
           marginTop:'20px',
           display:'flex',
           flexDirection:'row',
          
        },
        skill:{
            width:'45%'
        },
        language:{
            width:'50%',
            marginLeft:'5%'
        },
        
        title:{
            fontSize:'13px'
        }
          })
  return (
    <Document>
    <Page size={'A4'} style={styles.page}>
     <View style={styles.header}>
        <View style={styles.profile}>
        <Image style={styles.profileImage} src={AbduPhoto}/>
        <Text style={styles.userName}>Abdurehman Saeed</Text>
        </View>
     <View style={styles.profile}>
        <Text style={styles.userWork}>Electrical and Computer Engineer</Text>
     </View>
    <View style={styles.userMoreInfo}>
        <Text style={styles.userAddress}>{`Email: asaeed526@gmail.com`}</Text>
        <Text style={styles.userAddress}>{`Phone: +251936970345`}</Text>
        <Text style={styles.userAddress}>{`Address: Addis Ababa`}</Text>
     </View>
        
    </View>  
    <View style={styles.bodyContainer}>
        <View style={styles.verticalLine}/>
        <View style={styles.cvContainer}>
          <View style={styles.container}>
            <Text style={styles.title}>Experience</Text>
            <View style={styles.horizontalLine}/>
            <Text style={styles.userAddress}>{`Email: asaeed526@gmail.com`}</Text>
            <Text style={styles.userAddress}>{`Phone: +251936970345`}</Text>
            <Text style={styles.userAddress}>{`Address: Addis Ababa`}</Text>
          </View>
          <View style={styles.container}>
             <Text style={styles.title}>Education</Text>
            <View style={styles.horizontalLine}/>
            <Text style={styles.userAddress}>{`Email: asaeed526@gmail.com`}</Text>
            <Text style={styles.userAddress}>{`Phone: +251936970345`}</Text>
            <Text style={styles.userAddress}>{`Address: Addis Ababa`}</Text>
          </View>
          <View style={styles.skillAndLanguage}>
            <View style={styles.skill}>
             <Text style={styles.title}>Skill(s)</Text>
            <View style={styles.horizontalLine}/>
            <Text style={styles.userAddress}>{`Email: asaeed526@gmail.com`}</Text>
            <Text style={styles.userAddress}>{`Phone: +251936970345`}</Text>
            <Text style={styles.userAddress}>{`Address: Addis Ababa`}</Text>
            </View>
            <View style={styles.language}>
             <Text style={styles.title}>Language</Text>
            <View style={styles.horizontalLine}/>
            <Text style={styles.userAddress}>{`Email: asaeed526@gmail.com`}</Text>
            <Text style={styles.userAddress}>{`Phone: +251936970345`}</Text>
            <Text style={styles.userAddress}>{`Address: Addis Ababa`}</Text>
            </View>
          </View>
        </View>
    </View>
    </Page>
    </Document>
  ) 
}

export default CvPage