import { View, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

export function Search() {
 return (
   <View className='w-full flex-row border border-slate-500 rounded-full h-14 items-center gap-2 px-4 bg-transparent'>
    <Feather name='search' size={24}/>

    <TextInput 
        placeholder='Procure sua comida...'
        className='w-full h-full flex-1 bg-transparent text-lg'
    />
   </View>
  );
}