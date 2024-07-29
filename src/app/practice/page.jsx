
import { GetGroupMeals, GetChickenInasal, GetPalabok, GetGrilledPork, GetSisig, GetOthers } from '@/lib/getData';
import Random from './haha'

export default async function ParentComponent() {
  const GroupMeals = await GetGroupMeals(); 
  const ChickenInasal = await GetChickenInasal();
  const Palabok = await GetPalabok();
  const GrilledPork = await GetGrilledPork();
  const Sisig = await GetSisig();
  const Others = await GetOthers();

  const FoodDetails = {
    "Group Meals": GroupMeals,
    "Chicken Inasal": ChickenInasal,
    "Palabok": Palabok,
    "Grilled Pork": GrilledPork,
    "Sisig": Sisig,
    "Others": Others
  };
return (
  <Random choices={Object.keys(FoodDetails)} FoodDetails={FoodDetails}></Random>
  );
}


