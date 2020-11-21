export interface TicketSegment {
  // City code (iata)
  origin: string
  // City code (iata)
  destination: string
  // Дата и время вылета туда
  date: string
  // Массив кодов (iata) городов с пересадками
  stops: string[]
  // Общее время перелёта в минутах
  duration: number
}

export interface Ticket {
  // Уникальный идентификатор для правильного рендеринга списков
  id: string
  // Цена в рублях
  price: number
  // Код авиакомпании (iata)
  carrier: string
  // Общая продолжительность всех полётов в минутах
  totalDuration: number
  // Общее количество пересадок "туда"
  segmentTo: TicketSegment
  // Общее количество пересадок "обратно"
  segmentBack: TicketSegment
}
