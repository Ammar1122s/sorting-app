'use client';
import { SortingAlgoType } from "@/lib/type";
import { MAX_ANIMATION_SPEED } from "@/lib/utils";
import { createContext, useContext, useState } from "react";

interface SortingAlgoContextType {
    arraytoSort: number[];
    selectedAlgo: SortingAlgoType;
    isSorting: boolean;
    animationSpeed: number;
    isAnimationComplete: boolean;
    setArraytoSort: (arrytoSort: number[]) => void;
    setSelectedAlgo: (selectedAlgo: SortingAlgoType) => void;
    setIsSorting: (isSorting: boolean) => void;
    setAnimationSpeed: (animationSpeed: number) => void;
    setIsAnimationComplete: (isAnimationComplete: boolean) => void;
    restArrayAndAnimation: () => void;
    runAnimation: () => void;
}

const SortingAlgoContext = createContext<SortingAlgoContextType | undefined>(
    undefined
);

export const SortingAlgoProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [arraytoSort, setArraytoSort] = useState<number[]>([]);
    const [selectedAlgo, setSelectedAlgo] = useState<SortingAlgoType>("bubble");
    const [isSorting, setIsSorting] = useState<boolean>(false);
    const [animationSpeed, setAnimationSpeed] =
        useState<number>(MAX_ANIMATION_SPEED);
    const [isAnimationComplete, setIsAnimationComplete] =
        useState<boolean>(false);

    const restArrayAndAnimation = () => { };
    const runAnimation = () => { };

    const value = {
        arraytoSort,
        setArraytoSort,
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
    };

    return (
        <SortingAlgoContext.Provider value={value}>
            {children}
        </SortingAlgoContext.Provider>
    );
};

export const userSortingAlgoContext = () => {
    const context = useContext(SortingAlgoContext);
    if (!context) {
        throw new Error(
            "useSortingAlgoContext must be used within a SortingAlgoProvider"
        );
    }
    return context;
};
