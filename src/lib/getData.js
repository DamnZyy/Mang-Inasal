import React from 'react'

export async function GetGroupMeals() {
    const res  = await fetch('http://localhost:4560/GroupMeals')
    if (!res.ok) throw new Error('Failed to fetch data')
    return res.json();
}
export async function GetChickenInasal() {
    const res  = await fetch('http://localhost:4560/ChickenInasal')
    if (!res.ok) throw new Error('Failed to fetch data')
    return res.json();
}
export async function GetPalabok() {
    const res  = await fetch('http://localhost:4560/Palabok')
    if (!res.ok) throw new Error('Failed to fetch data')
    return res.json();
}
export async function GetGrilledPork() {
    const res  = await fetch('http://localhost:4560/GrilledPork')
    if (!res.ok) throw new Error('Failed to fetch data')
    return res.json();
}
export async function GetSisig() {
    const res  = await fetch('http://localhost:4560/Sisig')
    if (!res.ok) throw new Error('Failed to fetch data')
    return res.json();
}
export async function GetOthers() {
    const res  = await fetch('http://localhost:4560/Others')
    if (!res.ok) throw new Error('Failed to fetch data')
    return res.json();
}
