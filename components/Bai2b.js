import { Image, ImageComponent, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const Bai2b = () => {
    return (  
        <View style={{flex:1}}>
            <View style={{flexDirection:"row",marginTop:"20px"}}>
                <Image source={require("../assets/usb.png")} resizeMode="stretch" style={{width:"100px",height:"100px"}}>
                    
   
                </Image>
                <View style={{marginTop:"10px"}}>
                <Text style={styles.txtDes}>USB Bluetooth Music Receiver </Text>
                <Text style={styles.txtDes}>HJX-001- Biến loa thường thành loa</Text>
                <Text style={styles.txtDes}>bluetooth</Text>
                </View>
               
            </View>
            <View style={{alignItems:"center",marginTop:"50px"}}> 
                <Text style={{fontSize:"18px",fontWeight:700}}>Cực kỳ hài lòng</Text>
                <View style={{flexDirection:"row",marginTop:"20px"}}>
                    <TouchableOpacity>
                        <Image source={require("../assets/Star 1.png")} resizeMode="stretch" style={{width:"39px",height:"39px"}}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require("../assets/Star 1.png")} resizeMode="stretch" style={{width:"39px",height:"39px"}}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require("../assets/Star 1.png")} resizeMode="stretch" style={{width:"39px",height:"39px"}}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require("../assets/Star 1.png")} resizeMode="stretch" style={{width:"39px",height:"39px"}}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require("../assets/Star 1.png")} resizeMode="stretch" style={{width:"39px",height:"39px"}}></Image>
                    </TouchableOpacity>
                    
                    
                     
                    
                </View>
                <View style={{marginTop:"20px",justifyContent:"center",alignItems:"center"}}>
                    <TextInput style={{borderColor:"#1511EB",borderWidth:1,width:"293px",height:"68px"}}>

                    </TextInput>
                    <View style={{flexDirection:"row",justifyContent:"space-evenly",position:"absolute"}}>
                        <Image source={require("../assets/camera.png")} resizeMode="stretch" style={{width:"39px",height:"32px"}}></Image>
                        <Text style={{fontSize:"18px",fontWeight:700,marginLeft:"20px"}}>Thêm hình ảnh</Text>
                    </View>
                </View>
                <View style={{marginTop:"10px"}}>
                <TextInput style={{borderColor:"#C4C4C4",borderWidth:1,width:"293px",height:"222px",color:"#C4C4C4"}} placeholder="Hãy chia sẻ những điều mà bạn thích về sản phẩm">
                    
                </TextInput>
                <View style={{position:"absolute",bottom:0,right:0}}>
                    <Text>https://meet.google.com/nsj-ojwi-xpp</Text>
                </View>
                </View>
                <View style={{marginTop:"30px"}}>
                
                    <TouchableOpacity style={{width:"289px",height:"41px",backgroundColor:"#0D5DB6",alignItems:"center",justifyContent:"center",borderRadius:5}}>
                        <Text style={{fontSize:"20px",fontWeight:700,color:"white"}}>Gửi</Text>
                    </TouchableOpacity>
                </View>
            </View>
           
        </View>
    );
}

const styles = StyleSheet.create({
    txtDes:{
        fontWeight:700,
        fontSize:"16px"
        
    }
})
 
export default Bai2b;