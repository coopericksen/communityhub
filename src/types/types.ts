import { JSX, ReactNode } from "react"
import { Url } from "url"

export interface Resource {
    id: number
    name: string
    services: string
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
    name: string
    description: string
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