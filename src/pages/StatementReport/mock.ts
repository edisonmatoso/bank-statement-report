import { DataFetch, Entry, Source, Status } from '../../services/types'

export const MOCK_DATA_FETCH: DataFetch = {
  itemsTotal: 3,
  results: [
    {
      date: '2021-01-06',
      amountTotal: 128000,
      items: [
        {
          status: Status.Completed,
          actor: 'entry credit',
          amount: 13920,
          source: Source.Payment,
          type: 'BANKSLIP',
          entry: Entry.Credit,
          scheduled: false,
          dateEvent: '2021-01-06T21:00:00Z'
        }
      ]
    },
    {
      date: '2021-01-15',
      amountTotal: 114080,
      items: [
        {
          status: Status.Completed,
          actor: 'entry debit 1',
          amount: 20000,
          source: Source.Transfer,
          type: 'EXTERNAL',
          entry: Entry.Debit,
          scheduled: false,
          dateEvent: '2021-01-15T00:00:00Z'
        }
      ]
    },
    {
      date: '2021-01-17',
      amountTotal: 94080,
      items: [
        {
          status: Status.Completed,
          actor: 'scheduled transaction',
          amount: 56000,
          source: Source.Transfer,
          type: 'INTERNAL',
          entry: Entry.Debit,
          scheduled: true,
          dateEvent: '2021-01-17T00:00:00Z'
        },
        {
          status: Status.Completed,
          actor: 'Lola Camisaria',
          amount: 12000,
          source: Source.Transfer,
          type: 'INTERNAL',
          entry: Entry.Debit,
          scheduled: false,
          dateEvent: '2020-01-17T00:00:00Z'
        }
      ]
    }
  ]
}
