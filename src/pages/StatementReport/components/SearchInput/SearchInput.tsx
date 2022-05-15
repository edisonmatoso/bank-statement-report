import { SearchIcon } from '../../../../icons'
import {
  SearchInputContainer,
  SearchInput as StyledSearchInput
} from './SearchInput.styles'

export const SearchInput = (
  props: React.InputHTMLAttributes<HTMLInputElement>
) => {
  return (
    <SearchInputContainer>
      <SearchIcon />
      <StyledSearchInput {...props} />
    </SearchInputContainer>
  )
}
