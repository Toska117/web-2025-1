import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';

const flags = [
    { country: 'Argentina', flag: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg' },
    { country: 'Bolivia', flag: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Flag_of_Bolivia_%28state%29.svg' },
    { country: 'Brasil', flag: 'https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg' },
    { country: 'Chile', flag: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Flag_of_Chile.svg' },
    { country: 'Colombia', flag: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg' },
    { country: 'Ecuador', flag: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Flag_of_Ecuador.svg' },
    { country: 'Paraguay', flag: 'https://upload.wikimedia.org/wikipedia/commons/2/27/Flag_of_Paraguay.svg' },
    { country: 'Perú', flag: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Peru.svg' },
    { country: 'Uruguay', flag: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Uruguay.svg' },
    { country: 'Venezuela', flag: 'https://upload.wikimedia.org/wikipedia/commons/0/06/Flag_of_Venezuela.svg' }
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
            <Image source={{ uri: flags[currentFlagIndex].flag }} style={styles.flag} />
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
