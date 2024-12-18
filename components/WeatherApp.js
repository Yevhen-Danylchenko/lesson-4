import React, { useState } from "react";
import { View, TextInput, Pressable, Text, StyleSheet, Image } from "react-native";

const WeatherApp = () => {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState('');

    const fetchWeather = async () => {
        if (!city) {
            setError('Введіть назву міста');
            setWeather(null);
            return;
        }
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=fa20841b6e4dfff62dc042f420624dae`);
            
            if (response.ok) {
                const data = await response.json();
            }
            else {
                setError('Місто не знайдено');
                setWeather(null);
            }
        } catch (error) {
            setError('Сталася помилка');
            setWeather(null);
        }
    }


return (
    <View style={styles.container} >
        <TextInput
            style={styles.input}
            placeholder="Введіть місто"
            value={city}
            onChangeText={setCity}
        />
        <Pressable onPress={fetchWeather} style={styles.button}>
            <Text style={styles.buttonText}>Отримати погоду</Text>
        </Pressable>
        {error && <Text style={styles.errorText}>{error}</Text>}

        {weather && (
            <View style={styles.weatherContainer}>
                <Text style={styles.city}>{weather.name}</Text>
                <Text style={styles.temp}>{weather.main.temp} 0C</Text>
                <Text style={styles.description}>{weather.weather[0].description}</Text>
                <Image 
                    source={{ uri: `https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}}
                    style={styles.icon}
                />
                <Text style={styles.info}>Вологість: {weather.main.humidity} %</Text>
                <Txet style={styles.info}>Швидкість вітру: {weather.wind.speed} м/с.</Txet>
            </View>
        )}
    </View>
);
};

const styles = StyleSheet.create (
    {
        container: {
            flex: 1,
            justifyContent: 'flex-start',
            alignItems: 'center',
            padding: 20,
            backgroundColor: '#00ff00',            
        },
        input: {
            width: '100%',
            height: 40,
            borderColor: 'black',
            borderWidth: 1,
            marginBottom: 20,
            paddingHorizontal: 10,
            width: '80%',
        },
        button: {
            backgroundColor: '#007b00',
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 5,
            marginBottom: 20,
        },
        buttonText: {
            color: '#fff',
            fontSize: 16,
        },
        errorText: {
            color: 'red',
            marginBottom: 20,
        },
        weatherContainer: {
            alignItems: 'center',
        },
        city: {
            fontSize: 32,
            fontWeight: 'bold',
        },
        temp: {
            fontSize: 24,
            marginVertical: 10,
        },
        description: {
            fontSize: 18,
            fontStyle: 'italic',
        },
        icon: {
            width: 100,
            height: 100,
        },
        info: {
            fontSize: 16,
            marginTop: 10,
        },
    }
);

export default WeatherApp;