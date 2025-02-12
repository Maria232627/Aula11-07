import { StyleSheet } from "react-native"
import { colors } from "../../styles/globalstyle"

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    title:{
        fontSize:30,
        fontWeight: "bold",
        textAlign: 'center',
        color: colors.black
    },
    formRow:{
        margin: 10,
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 0.7,
        borderColor: colors.green,
        borderRadius: 5
    },
    icon:{
        fontSize: 18,
        color: colors.green,
        padding: 5
    },
    input: {
        fontSize: 18,
        padding: 10,
        width: "70%"
    },
})