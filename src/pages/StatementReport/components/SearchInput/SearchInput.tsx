import {
  SearchInputContainer,
  SearchInput as StyledSearchInput
} from './SearchInput.styles'

export const SearchInput = (
  props: React.InputHTMLAttributes<HTMLInputElement>
) => {
  return (
    <SearchInputContainer>
      <div style={{ margin: 15 }}>x</div>
      <StyledSearchInput {...props} />
    </SearchInputContainer>
  )
}
