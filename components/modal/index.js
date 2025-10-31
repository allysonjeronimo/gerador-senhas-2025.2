import { StyleSheet, View, Text, Pressable } from "react-native";
import * as Clipboard from 'expo-clipboard'

export default function ModalPassword({password, onClose}){
    
    async function copyToClipboard(){
        await Clipboard.setStringAsync(password)
        alert("Senha copiada")
        onClose()
    }

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Modal Password</Text>
                <Pressable style={styles.passwordContainer} onLongPress={copyToClipboard}>
                    <Text style={styles.passwordText}>{password}</Text>
                </Pressable>
                <View style={styles.buttonContainer}>
                    <Pressable style={styles.button} onPress={onClose}> 
                        <Text style={styles.buttonText}>Voltar</Text>
                    </Pressable>
                    <Pressable style={[styles.button, styles.buttonSave]} onPress={onClose}> 
                        <Text style={styles.buttonSaveText}>Salvar</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'rgba(25, 25, 25, 0.6)',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content:{
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#5e6c8f',
        marginBottom: 24
    },
    passwordContainer:{
        backgroundColor: '#0e0e0e',
        width: '90%',
        borderRadius: 8,
        padding: 12,
    },
    passwordText:{
        color: '#fff',
        textAlign: 'center',
        fontSize: 20,
    },
    buttonContainer:{
        flexDirection: 'row',
        width: '90%',
        marginTop: 8,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    button:{
        flex: 1,
        alignItems: 'center',
        marginTop: 14,
        marginBottom: 14,
        padding: 8,
    },
    buttonSave:{
        backgroundColor: '#3f75fc',
        borderRadius: 8,
    },
    buttonText:{
        color: '#5e6c8f',
        fontWeight: 'bold'
    },
    buttonSaveText:{
        color: '#fff',
        fontWeight: 'bold'
    }
})