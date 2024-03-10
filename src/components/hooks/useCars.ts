import { useEffect, useState } from "react";
import { Car } from "../types/car.interface";
import axios from "axios";

export function useCars() {
    const [cars, setCars] = useState<Car[]>([]);

    useEffect(() => {
        axios.get("http://localhost:3000/api/cars").then(res => {
            setCars(res.data)
        })
    },[])

    return {
        cars
    }
}