import { FC, useMemo } from 'react'
import { TbChevronDown, TbChevronUp } from 'react-icons/tb'
import { Button, Combobox, useCombobox } from '@mantine/core'
import { useLocalStorage } from '@mantine/hooks'
import classes from './PropertyStatusToggle.module.scss'

type IPropertyStatusToggleProps = {}

const statuses = ['Sold', 'Sale']

export const PropertyStatusToggle: FC<IPropertyStatusToggleProps> = () => {
  const [selectedStatus, setSelectedItem] = useLocalStorage<'Sold' | 'Sale'>({
    key: 'search-bar-property-status',
    defaultValue: 'Sale',
    getInitialValueInEffect: false,
  })

  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  })

  const options = statuses.map((status, index) => (
    <Combobox.Option value={status} key={status + index} data-status={status}>
      {status}
    </Combobox.Option>
  ))

  const targetButtonColor = useMemo(() => {
    switch (selectedStatus) {
      case 'Sale':
        return 'primary'
      case 'Sold':
        return 'red'
    }
  }, [selectedStatus])

  return (
    <Combobox
      store={combobox}
      position="bottom-start"
      offset={{ mainAxis: -40 }}
      onOptionSubmit={(val: 'Sold' | 'Sale') => {
        setSelectedItem(val)
        combobox.closeDropdown()
      }}
      classNames={{
        dropdown: classes.dropdown,
        option: classes.option,
        options: classes.options,
      }}
    >
      <Combobox.Target>
        <Button
          rightSection={
            combobox.dropdownOpened ? <TbChevronUp size={16} /> : <TbChevronDown size={16} />
          }
          onClick={() => combobox.toggleDropdown()}
          color={targetButtonColor}
        >
          {selectedStatus}
        </Button>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>
          {selectedStatus === 'Sale' ? options.reverse() : options}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  )
}
