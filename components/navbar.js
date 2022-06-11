import { Text, View } from "react-native";


export default function NavBar(props) {

    const { propStyle } = props;

    return (
        <View style={ propStyle }>
            <Text>This is the NavBar Component</Text>
        </View>
    )
}