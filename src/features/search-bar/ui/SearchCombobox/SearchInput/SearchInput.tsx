import { FC, useMemo } from 'react'
import { TbSearch } from 'react-icons/tb'
import { ActionIcon, ComboboxStore, TextInput } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import classes from '../SearchCombobox.module.scss'
import { RightSection } from './RightSection'

type ISearchInputProps = {
  combobox: ComboboxStore
  searchValue: string
  onSearchChange: (value: string) => void
}

export const SearchInput: FC<ISearchInputProps> = ({ combobox, onSearchChange, searchValue }) => {
  const isLaptop = useMediaQuery('(min-width: 62em)', true)
  const isTablet = useMediaQuery('(min-width: 36em)', true)

  const rightSectionWidth = useMemo(() => {
    if (combobox.dropdownOpened) return '4rem'
    if (isLaptop) return '360px'
    if (isTablet) return '240px'
    return '50px'
  }, [isLaptop, combobox.dropdownOpened, isTablet])
  return (
    <TextInput
      size={'lg'}
      placeholder={'Any area, address, or MLS#'}
      classNames={{
        root: classes.input_wrapper,
        input: classes.input,
      }}
      leftSection={
        <ActionIcon onClick={() => combobox.openDropdown()} variant={'subtle'} color={'gray.6'}>
          <TbSearch />
        </ActionIcon>
      }
      leftSectionWidth={'3rem'}
      rightSection={<RightSection combobox={combobox} />}
      rightSectionWidth={rightSectionWidth}
      rightSectionProps={{
        className: classes.right_section,
      }}
      value={searchValue}
      onChange={(event) => {
        onSearchChange(event.currentTarget.value)
        combobox.openDropdown()
        combobox.updateSelectedOptionIndex()
      }}
      onClick={() => combobox.openDropdown()}
      onFocus={() => combobox.openDropdown()}
    />
  )
}
