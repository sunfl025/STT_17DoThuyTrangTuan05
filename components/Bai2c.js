import { StyleSheet, Text, View ,TextInput,TouchableOpacity,Image} from "react-native";
import { Checkbox } from "react-native-paper";

const Bai2c = () => {
    return (  
        <View style={styles.container}>
           <View style={styles.insideView}>

            <View style={styles.textLabel}>
                <Text style={{color:"white",fontSize:"25px",fontWeight:700}}>PASSWORD</Text>
                <Text style={{color:"white",fontSize:"25px",fontWeight:700}}>GENERATOR</Text>
            </View>
            <View style={styles.input}>
                <TextInput style={styles.txtInput}></TextInput>
            </View>
            <View style={styles.inputView}> 
                <View style={styles.labelInput}>
                    <Text style={styles.txtInput2}>Password length</Text>
                    <TextInput style={{backgroundColor:"white",width:"118px",height:"33px"}}></TextInput>
                </View>
                <View style={styles.labelInput}>
                                    <Text style={styles.txtInput2}>Include lower case letters</Text>
                                    <Checkbox.Item status="checked" />
                </View>
                <View style={styles.labelInput}>
                                    <Text style={styles.txtInput2}>Include upcase letters</Text>
                                    <Checkbox.Item  status="unchecked" />
                </View>
                <View style={styles.labelInput}>
                    <Text style={styles.txtInput2}>Include upcase letters</Text>
                    <Checkbox.Item  status="checked" />
                    
                </View>
                <View style={styles.labelInput}>
                    <Text style={styles.txtInput2}>Include special symbol</Text>
                    <Checkbox.Item  status="unchecked" />
                   
                </View>
                <View style={{alignItems:"center"}}>
                    
                    <TouchableOpacity style={styles.txtsubmit}>
                        <Text style={styles.txtInput2}>GENERATOR PASSWORD</Text>
                        
                    </TouchableOpacity>
                </View>
            </View>
           </View>
        </View>
    );
}
 
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundImage:"radial-gradient(145% 145% at 50% 50%, #3B3B98 26.56%, rgba(196, 196, 196, 0) 87.36%)",
        

    },
    insideView:{
        margin:"15px",
        width:"90%",
        height:"98%",
        backgroundColor:"#23235B",
        marginRight:"20px",
        borderRadius:15
       


    },
    textLabel:{
        alignItems:"center",
        marginTop:"20px"
    },
    input:{
        paddingTop:"50px",
        alignItems:'center',
        justifyContent:"space-around",
        
    },
    txtInput:{
        width:"297px",
        height:"55px",
        backgroundColor:"#151537",
        paddingLeft:"40px"
        // linear-gradient(0deg, rgba(196, 196, 196, 0.3), rgba(196, 196, 196, 0.3))"
    },
    inputView:{
        marginTop:"20px"
    },
    labelInput:{
        flexDirection:"row",
        justifyContent:"space-around",
        color:"white",
        marginTop:"15px"
    },
    txtInput2:{
        
        fontSize:"15px",
        fontWeight:700,
        color:"white"
        
    },
    txtsubmit:{
        width:"300px",
        height:"50px",
        backgroundColor:"#3B3B98",
        borderRadius:5,
        justifyContent:"center",
        alignItems:"center"
    }
    
})

export default Bai2c;
// background: linear-gradient(0deg, #F2F2F2, #F2F2F2),
// linear-gradient(0deg, rgba(196, 196, 196, 0.3), rgba(196, 196, 196, 0.3));