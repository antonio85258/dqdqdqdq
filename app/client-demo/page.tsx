"use client";
import {useState} from "react";
export default function ClientDemo(){const[count,setCount]=useState(0);console.log("Сообщение Client Component: браузер");return <main><div className="card"><h1>Client Component</h1><p>Компонент использует useState и onClick.</p><button onClick={()=>setCount(count+1)}>Кликов: {count}</button></div></main>}