import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const TikiOk = () => {
    return ( 
        <View style={{flex:1,backgroundColor:"#C4C4C4"}}>
           <View style={{width:"100%",height:"45%",backgroundColor:"white",padding:"10px"}}>
                <View style={{flexDirection:"row",justifyContent:"space-around"}}>
                    <Image source={require("../assets/book.png")} resizeMode="stretch" style={{width:"104px",height:"127px"}}></Image>
                    <View style={{justifyContent:"space-between",flexDirection:"column"}}>
                      <Text style={styles.txtDes}>Nguyên hàm tích phân và ứng dụng</Text>
                      <Text style={styles.txtDes}>Cung cấp bởi Tiki Trading</Text>
                      <Text style={{color:"#EE0D0D",fontWeight:700,fontSize:"18px"}}>141.800 đ</Text>
                      <Text style={{color:"#808080",fontSize:"12px"}}>141.800 đ</Text>
                      <View style={{flexDirection:"row",justifyContent:"space-around"}}>
                         
                            <TouchableOpacity>
                                <Image source={require("../assets/btnminus.png")} resizeMode="stretch" style={{width:"14.22px",height:"16px"}}></Image>
                            </TouchableOpacity>
                            <Text style={{fontWeight:700,fontSize:"15px"}}>1</Text>
                            <TouchableOpacity>
                                <Image source={require("../assets/btnadd.png")} resizeMode="stretch" style={{width:"14.22px",height:"16px"}}></Image>
                            </TouchableOpacity>
                           <TouchableOpacity>
                                <Text style={{fontWeight:700,fontSize:"15px",color:"#134FEC"}}>Mua sau</Text>
                           </TouchableOpacity>
                      </View>
                    </View>
                   
                
                </View>
                <View style={{flexDirection:"row",justifyContent:"space-evenly",marginRight:"100px"}}>
                        <Text style={{fontWeight:700,fontSize:"15px",marginTop:"10px"}}>Mã giảm giá đã lưu</Text>
                       <TouchableOpacity>
                            <Text style={{fontWeight:700,fontSize:"15px",color:"#134FEC",marginTop:"10px"}}>Xem tại đây</Text>
                       </TouchableOpacity>
                </View>
                <View style={{marginTop:"50px",flexDirection:"row",justifyContent:"space-evenly"}}>
                    <TextInput style={{borderColor:"#808080",borderWidth:1,width:"208px",height:"45px",fontWeight:700,fontSize:"18px"}} placeholder="Mã giảm giá"></TextInput>
                    {/* <View style={{backgroundColor:"#F2DD1B",width:"32px",height:"16px",position:"absolute",left:0,marginLeft:"20px"}}></View> */}
                    <TouchableOpacity style={{backgroundColor:"#0A5EB7",justifyContent:"center",alignItems:"center",width:"99px",height:"45px"}}>
                        <Text style={{fontSize:"20px",fontWeight:700,color:"white"}}>Áp dụng</Text>
                    </TouchableOpacity>
                </View>
           </View>
           <View style={{width:"100%",height:"51px",backgroundColor:"white",marginTop:"15px",flexDirection:"row"}}>
               <Text style={{fontWeight:700,fontSize:"12px",marginTop:"10px",marginLeft:"10px"}}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
              <TouchableOpacity>
                <Text style={{fontWeight:700,fontSize:"15px",color:"#134FEC",marginTop:"10px"}}>Nhập tại đây?</Text>
              </TouchableOpacity>
           </View>

           <View style={{width:"100%",height:"51px",backgroundColor:"white",marginTop:"15px",flexDirection:"row",justifyContent:"space-between"}}>
               <Text style={{fontWeight:700,fontSize:"20px",marginTop:"10px",marginLeft:"10px"}}>Tạm tính</Text>
           
               <Text style={{color:"#EE0D0D",fontWeight:700,fontSize:"18px",marginTop:"10px",marginRight:"10px"}}>141.800 đ</Text>
             
           </View>

           <View style={{width:"100%",height:"120px",backgroundColor:"white",marginTop:"120px"}}>
                <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                        <Text style={{fontWeight:700,fontSize:"20px",marginTop:"10px",marginLeft:"10px",color:"#808080"}}>Thành tiền</Text>
                
                        <Text style={{color:"#EE0D0D",fontWeight:700,fontSize:"18px",marginTop:"10px",marginRight:"10px"}}>141.800 đ</Text>
                </View>
               
               
                <View style={{alignItems:"center",marginTop:"10px"}}>
                    <TouchableOpacity style={{backgroundColor:"#E53935",width:"331px",height:"45px",justifyContent:"center",alignItems:"center"}} >
                            <Text style={{fontSize:"20px",fontWeight:700,color:"white"}}>TIẾN HÀNH ĐẶT HÀNG</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        
     );
}
const styles = StyleSheet.create({
    txtDes:{
        fontWeight:700,
        fontSize:"12px",
        marginTop:"10px"
        
    }
})
export default TikiOk;