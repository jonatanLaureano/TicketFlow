export interface Event{
    id:string,
    eventName: string
    price: number
    url:string
    newPrice:number
    isFree:boolean
    totalAttendees:number
    descriptionEvent:string
    isDiscount:boolean
    recentThreeProfiles:string[]
}
