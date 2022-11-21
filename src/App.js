
import './App.css';
import {PDFViewer, StyleSheet } from '@react-pdf/renderer';
import CvPage from './page/CvPage';
function App() {
  const styles=StyleSheet.create({
    viewer:{
      width:"100%",
      height:"100vh",
      backgroundColor:'white'
    }
  })
  return (
   <PDFViewer style={styles.viewer}>
   <CvPage/>
   </PDFViewer> 
  );
}

export default App;
