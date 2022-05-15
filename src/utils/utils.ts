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

export const formatMonth = (monthNumber: number) => {
  const monthDictionary = {
    0: 'Jan',
    1: 'Fev',
    2: 'Mar',
    3: 'Abr',
    4: 'Mai',
    5: 'Jun',
    6: 'Jul',
    7: 'Ago',
    8: 'Set',
    9: 'Out',
    10: 'Nov',
    11: 'Dez'
  }
  return monthDictionary[monthNumber as keyof typeof monthDictionary]
}
