import { ReactNode } from "react"

export interface Resource {
    id: number
    index: number
    name: string
    services: string
    image: string
    contact: {
        phone: string
        help_phone: string
        email: string
        website: string
    }
    address: string
    hours: string
}

export interface Event {
    id: number
    index: number
    name: string
    description: string
    image: string
    time: string
    address: string
    entry_cost: string
}

export interface Tech {
    tech_name: string
    link: string
    accent_color: string
    svg: ReactNode
    delay: number
}