import { defineStore } from 'pinia'
import type { Car } from '@/types/car'

export const useCarStore = defineStore('car', {
    state: () => ({
        cars: <Car[]>[
            {
                slug: "opel-corsa",
                name: "Opel Corsa",
                price: 350,
                image: {
                    src: "/images/opel-corsa.png",
                    alt: "Opel Corsa",
                }
            },
            {
                slug: "dacia-duster",
                name: "Dacia Duster",
                price: 1000,
                image: {
                    src: "/images/dacia-duster.png",
                    alt: "Dacia Duster",
                }
            },
            {
                slug: "renault-clio",
                name: "Renault Clio 5",
                price: 800,
                image: {
                    src: "/images/renault-clio.png",
                    alt: "Renault Clio 5",
                }
            },
        ]
    }),
    getters: {
        getBySlug: (state) => {
            return (slug: string) => state.cars.find((car) => car.slug === slug)
        }
    },
})