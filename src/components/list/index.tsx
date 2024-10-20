import { View, Text, FlatList } from 'react-native';
import { useEffect, useState } from 'react';
import { RestaurantItem } from './item';

export interface RestaurantsProps {
    id: string,
    name: string,
    image: string,
    rating: number;
}

export function RestaurantVerticalList() {
    const [restaurants, setRestaurants] = useState<RestaurantsProps[]>([])

    useEffect(() => {
        async function getRestaurants() {
            const response = await fetch("http://192.168.15.4:3000/restaurants")
            const data = await response.json()
            setRestaurants(data);
        }

        getRestaurants()
    }, [])

    return (
        <View className='px-4 flex-1 w-full h-full mb-11 gap-4'>
            {restaurants.map( item => (
                <RestaurantItem item={item} key={item.id}  />
            ))}
        </View>
    );
}