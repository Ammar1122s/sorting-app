import { SortingAlgoType } from "@/lib/type";
import { MAX_ANIMATION_SPEED } from "@/lib/utils";
import { createContext, useState } from "react";

interface SortingAlgoContextType {
    arrytoSort: number[];
    selectedAlgo: SortingAlgoType;
    isSorting: boolean;
    animationSpeed: number;
    isAnimationComplete: boolean;
    setArrytoSort: (arrytoSort: number[]) => void;
    setSelectedAlgo: (selectedAlgo: SortingAlgoType) => void;
    setIsSorting: (isSorting: boolean) => void;
    setAnimationSpeed: (animationSpeed: number) => void;
    setIsAnimationComplete: (isAnimationComplete: boolean) => void;
    restArrayAndAnimation: () => void;
    runAnimation: () => void;
    
}

const SortingAlgoContext = createContext<SortingAlgoContextType | undefined>(undefined)

export const SortingAlgoProvider = ({children}: {children: React.ReactNode}) =>{
    const [arrytoSort, setArrytoSort] = useState<number[]>([])
    const [selectedAlgo, setSelectedAlgo] = useState<SortingAlgoType>("bubble")
    const [isSorting, setIsSorting] = useState<boolean>(false)
    const [animationSpeed, setAnimationSpeed] = useState<number>(MAX_ANIMATION_SPEED)  
    const [isAnimationComplete, setIsAnimationComplete] = useState<boolean>(false)

    const restArrayAndAnimation = ()=>{}
    const runAnimation = ()=>{}

    const value ={
        arrytoSort,
        setArrytoSort,
        selectedAlgo,
        setSelectedAlgo,
        isSorting,
        setIsSorting,
        animationSpeed,
        setAnimationSpeed,
        isAnimationComplete,
        setIsAnimationComplete,
        restArrayAndAnimation,
        runAnimation,
    }

    


    return <SortingAlgoContext.Provider value={value}>{children}</SortingAlgoContext.Provider>

}