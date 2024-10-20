import { Text, View, ScrollView } from "react-native";
import { Header } from "../components/header";

import Constants from 'expo-constants';
import Banner from "../components/banner";
import { Search } from "../components/search";
import { Section } from "../components/section";
import { TrendingFoods } from "../components/trending";
import { Restaurants } from "../components/restaurants";
import { RestaurantVerticalList } from "../components/list";

const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  return (
    <ScrollView 
    style={{ flex: 1 }} 
    className="bg-slate-200" 
    showsVerticalScrollIndicator={false}
    >
      <View className="w-full px-4" style={{ marginTop: statusBarHeight + 8 }}>
        <Header/>

        <Banner/>

        <Search/>
      </View>

      <Section
        name="Comidas em alta"
        label="Veja mais"
        action={ () => console.log("Clicou no Veja Mais !")}
        size="text-2xl"
      />
      <TrendingFoods/>

      <Section
        name="Famosos no FullFood"
        label="Veja todas"
        action={ () => console.log("Clicou no Veja Todas !")}
        size="text-xl"
      />
      <Restaurants/>

      <Section
        name="Restaurantes"
        label="Veja todas"
        action={ () => console.log("Clicou no Ver todos os restaurantes !")}
        size="text-xl"
      />
      <RestaurantVerticalList/>
    </ScrollView>
  );
}
