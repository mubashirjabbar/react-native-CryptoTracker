import React, { useContext, createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const WatchlistContext = createContext();

export const useWatchlist = () => useContext(WatchlistContext);

const WatchlistProvider = ({ children }) => {

    const getWatchlistData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem("@watchlist_coins");
            setWatchlistCoinIds(jsonValue != null ? JSON.parse(jsonValue) : []);
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getWatchlistData()
    }, [])

    return (
        <View ></View>
    )
}

export default WatchlistProvider;