import { Entry, Source, Status, Transaction } from '../services/types'

export const resolveTransactionType = ({
  status,
  source,
  entry
}: Transaction) => {
  const key = `${status}${source}${entry}`
  const dictionary = {
    [`${Status.Completed}${Source.Payment}${Entry.Debit}`]:
      'Pagamento Realizado',
    [`${Status.Completed}${Source.Payment}${Entry.Credit}`]:
      'Pagamento Recebido',
    [`${Status.Completed}${Source.Transfer}${Entry.Debit}`]:
      'Transferência Realizada',
    [`${Status.Completed}${Source.Transfer}${Entry.Credit}`]:
      'Transferência Recebida',
    [`${Status.Refunded}${Source.Payment}${Entry.Credit}`]:
      'Pagamento Estornado',
    [`${Status.Refunded}${Source.Transfer}${Entry.Credit}`]:
      'Transferência Estornada',
    [`${Status.Pending}${Source.Payment}${Entry.Debit}`]: 'Pagamento Agendado',
    [`${Status.Pending}${Source.Transfer}${Entry.Debit}`]:
      'Transferência Agendada'
  }

  return dictionary[key]
}

export const formatToBRL = (value: number | string): string => {
  const number = Number(value).toFixed(2).replace('.', ',')
  return number.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}

export const formatMonth = (monthNumber: number, full = false) => {
  const monthDictionary = {
    0: {
      abbreviated: 'Jan',
      full: 'Janeiro'
    },
    1: {
      abbreviated: 'Fev',
      full: 'Fevereiro'
    },
    2: {
      abbreviated: 'Mar',
      full: 'Março'
    },
    3: {
      abbreviated: 'Abr',
      full: 'Abril'
    },
    4: {
      abbreviated: 'Mai',
      full: 'Maio'
    },
    5: {
      abbreviated: 'Jun',
      full: 'Junho'
    },
    6: {
      abbreviated: 'Jul',
      full: 'Julho'
    },
    7: {
      abbreviated: 'Ago',
      full: 'Agosto'
    },
    8: {
      abbreviated: 'Set',
      full: 'Setembro'
    },
    9: {
      abbreviated: 'Out',
      full: 'Outubro'
    },
    10: {
      abbreviated: 'Nov',
      full: 'Novembro'
    },
    11: {
      abbreviated: 'Dez',
      full: 'Dezembro'
    }
  }

  const value = monthDictionary[monthNumber as keyof typeof monthDictionary]

  return full ? value.full : value.abbreviated
}
