import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';

// Importar imágenes desde la carpeta local "assets"
const flags = [
    { country: 'Argentina', flag: require('./assets/argentina.png') },
    { country: 'Bolivia', flag: require('./assets/bolivia.png') },
    { country: 'Brasil', flag: require('./assets/brasil.png') },
    { country: 'Chile', flag: require('./assets/chile.png') },
    { country: 'Colombia', flag: require('./assets/colombia.png') },
    { country: 'Ecuador', flag: require('./assets/ecuador.png') },
    { country: 'Paraguay', flag: require('./assets/paraguay.png') },
    { country: 'Peru', flag: require('./assets/peru.png') },
    { country: 'Uruguay', flag: require('./assets/uruguay.png') },
    { country: 'Venezuela', flag: require('./assets/venezuela.png') },
];

export default function App() {
    const [currentFlagIndex, setCurrentFlagIndex] = useState(0);
    const [guess, setGuess] = useState('');
    const [result, setResult] = useState('');

    useEffect(() => {
        showFlag();
    }, [currentFlagIndex]);

    const showFlag = () => {
        // El estado currentFlagIndex controlará la bandera mostrada
    };

    const checkGuess = () => {
        if (guess.toLowerCase() === flags[currentFlagIndex].country.toLowerCase()) {
            setResult('¡Correcto!');
        } else {
            setResult(`Incorrecto. La respuesta correcta es ${flags[currentFlagIndex].country}.`);
        }
    };

    const showNextFlag = () => {
        setCurrentFlagIndex((currentFlagIndex + 1) % flags.length);
        setGuess('');
        setResult('');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Juego de Adivinar Banderas</Text>
            <Image source={flags[currentFlagIndex].flag} style={styles.flag} />
            <TextInput
                style={styles.input}
                placeholder="Escribe el nombre del país"
                value={guess}
                onChangeText={setGuess}
            />
            <Button title="Comprobar" onPress={checkGuess} />
            <Text style={styles.result}>{result}</Text>
            <Button title="Siguiente" onPress={showNextFlag} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    flag: {
        width: 300,
        height: 200,
        marginBottom: 20,
        resizeMode: 'contain',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        width: '80%',
        marginBottom: 20,
    },
    result: {
        marginTop: 20,
        fontSize: 20,
    },
});
