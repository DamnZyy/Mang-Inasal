import React from 'react'
import Image from 'next/image'
import Background1 from '@/images/Background/background-1.png'
import Background2 from '@/images/Background/background-2.png'

import Order from '@/components/delivery page/order'

export async function getGroupMeals(id) {
    const res = await fetch(`http://localhost:4560/GroupMeals/${id}`);
    return res.json();
}
export async function getChickenInasal(id) {
    const res = await fetch(`http://localhost:4560/ChickenInasal/${id}`);
    return res.json();
}
export async function getPalabok(id) {
    const res = await fetch(`http://localhost:4560/Palabok/${id}`);
    return res.json();
}
export async function getGrilledPork(id) {
    const res = await fetch(`http://localhost:4560/GrilledPork/${id}`);
    return res.json();
}
export async function getSisig(id) {
    const res = await fetch(`http://localhost:4560/Sisig/${id}`);
    return res.json();
}
export async function getOthers(id) {
    const res = await fetch(`http://localhost:4560/Others/${id}`);
    return res.json();
}

export function Dynams({params}) {
    return params.id
}
export default async function page({ params }) {
    const { id } = params;
    let groupMeals, chickeninasal, palabok, grilledpork, sisig, others;

    try {
        groupMeals = await getGroupMeals(id);
    } catch (error) {
        console.error("Error fetching Group Meals:", error);
        groupMeals = null; // Handle error appropriately
    }

    try {
        chickeninasal = await getChickenInasal(id);
    } catch (error) {
        console.error("Error fetching Group Meals:", error);
        chickeninasal = null; // Handle error appropriately
    }

    try {
        palabok = await getPalabok(id);
    } catch (error) {
        console.error("Error fetching Group Meals:", error);
        palabok = null; // Handle error appropriately
    }

    try {
        grilledpork = await getGrilledPork(id);
    } catch (error) {
        console.error("Error fetching Group Meals:", error);
        grilledpork = null; // Handle error appropriately
    }

    try {
        sisig = await getSisig(id);
    } catch (error) {
        console.error("Error fetching Group Meals:", error);
        sisig = null; // Handle error appropriately
    }

    try {
        others = await getOthers(id);
    } catch (error) {
        console.error("Error fetching Others:", error);
        others = null; // Handle error appropriately
    }

  return (
    <div>
        <div>
                {groupMeals && (
                    <Order 
                        image={groupMeals.image} 
                        title={groupMeals.title} 
                        description={groupMeals.description} 
                        price={groupMeals.CurrentPrice} 
                        oldPrice={groupMeals.OriginalPrice} 
                    />
                )}
                {chickeninasal && (
                    <Order 
                        image={chickeninasal.image} 
                        title={chickeninasal.title} 
                        description={chickeninasal.description} 
                        price={chickeninasal.CurrentPrice} 
                        oldPrice={chickeninasal.OriginalPrice} 
                    />
                )}
                {palabok && (
                    <Order 
                        image={palabok.image} 
                        title={palabok.title} 
                        description={palabok.description} 
                        price={palabok.CurrentPrice} 
                        oldPrice={palabok.OriginalPrice} 
                    />
                )}
                {grilledpork && (
                    <Order 
                        image={grilledpork.image} 
                        title={grilledpork.title} 
                        description={grilledpork.description} 
                        price={grilledpork.CurrentPrice} 
                        oldPrice={grilledpork.OriginalPrice} 
                    />
                )}
                {sisig && (
                    <Order 
                        image={sisig.image} 
                        title={sisig.title} 
                        description={sisig.description} 
                        price={sisig.CurrentPrice} 
                        oldPrice={sisig.OriginalPrice} 
                    />
                )}
                {others && (
                    <Order 
                        image={others.image} 
                        title={others.title} 
                        description={others.description} 
                        price={others.CurrentPrice} 
                        oldPrice={others.OriginalPrice} 
                    />
                )}
            </div>
    </div>
  )
}
