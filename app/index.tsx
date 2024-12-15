import { useState } from "react";
import { Button, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Index() {

const[Task,setTask]=useState("");
const[Tasks,setTasks]=useState([]);
const[edittask,setedittask]=useState(-1);

function Handlesubmit(){
  
  if (edittask!==-1) {
    const updatedtask=[...Tasks];
    updatedtask[edittask]=Task;
    setTasks(updatedtask);
    setedittask(-1);
    
  } else {
    setTasks([...Tasks,Task]);
  }
  setTask("")
  

}



const renderitem=({item,index})=>{
  return(
  <View style={styles.task}>
    <View>
    <Text style={styles.text}>{item}</Text>
    </View>
    <View style={styles.taskbutton}>
    <TouchableOpacity  onPress={() => handleedit(index)}>
  <Text style={styles.edit}>Edit</Text>
</TouchableOpacity>
<TouchableOpacity  onPress={() => HandleDelete(index)}>
  <Text style={styles.Delete}>Delete</Text>
</TouchableOpacity>
    </View>


  </View>
  )
}
const handleedit =(index)=>{
  const edititem=Tasks[index];
  setTask(edititem)
  setedittask(index)

}

const HandleDelete=(index)=>{
  const updatedtask=[...Tasks]
  updatedtask.splice(index,1);
  setTasks(updatedtask);
}

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Todo App</Text>
      <TextInput placeholder="Enter the task" value={Task} onChangeText={(text)=>{setTask(text)}} style={styles.input}></TextInput>
      <TouchableOpacity style={styles.buttonstyle} onPress={Handlesubmit}>
        <Text style={styles.buttontext}>
        {edittask!==-1?"Update Task":"Add Task"}
        </Text>
        
     
      </TouchableOpacity>
      <FlatList 
      data={Tasks}
      renderItem={renderitem}
      keyExtractor={(item,index)=>index.toString()}/>
  

    </View>


  );
}

const styles=StyleSheet.create({
  container:{
    flex:1,
   
    alignItems:"center"
  },
  heading:{
     textAlign:"center",
     marginTop:50,
     fontSize:29
  },
  input:{
    borderWidth:2,
    borderColor:"gray",
    width:"70%",
    marginTop:40,
    paddingHorizontal:10,
    borderRadius:10,
    
  },
  buttonstyle:{
    width:"70%",
    marginTop:20,
    backgroundColor:"black",
    
    borderRadius:10,
   },
   buttontext:{
    color:"white",
    textAlign:"center",
    padding:10, 
    fontWeight:"bold"
   },
   task:{
    flex:1,
    width:"90%",
    justifyContent:"space-around",
    flexDirection:"row",
    marginTop:15,
    alignItems:"center"
   },
   taskbutton:{
    flex:1,
    flexDirection:"row",
    justifyContent:"flex-end"
   },
   Delete:{
    marginLeft:15,
    
    color:"red",
    padding:5,
    borderRadius:7
   },
   text:{
    marginLeft:10
   },
   edit:{
   color:"blue",
   
    padding:5,
    borderRadius:7

   }



})
