import { FC } from 'react'
import { TbAdjustments, TbDeviceFloppy, TbHeart } from 'react-icons/tb'
import { ActionIcon, Anchor, Button, ComboboxStore, Divider, Group, Indicator } from '@mantine/core'
import classes from './RightSection.module.scss'

type IRightSectionProps = {
  combobox: ComboboxStore
}

export const RightSection: FC<IRightSectionProps> = ({ combobox }) => {
  if (combobox.dropdownOpened) {
    return (
      <Anchor w={'2.5rem'} component={'button'} onClick={() => combobox.closeDropdown()}>
        Done
      </Anchor>
    )
  }
  return (
    <Group wrap={'nowrap'} gap={'sm'}>
      <Button
        visibleFrom={'md'}
        variant={'transparent'}
        color={'black'}
        leftSection={
          <Indicator label="1" size={16} classNames={{ indicator: classes.indicator }}>
            <TbAdjustments />
          </Indicator>
        }
      >
        Filter
      </Button>
      <ActionIcon hiddenFrom={'md'} variant={'transparent'} color={'black'}>
        <Indicator label="1" size={16} classNames={{ indicator: classes.indicator }}>
          <TbAdjustments />
        </Indicator>
      </ActionIcon>

      <Divider orientation="vertical" visibleFrom={'xs'} my={'xs'} />
      <Button visibleFrom={'md'} variant={'transparent'} color={'black'} leftSection={<TbHeart />}>
        Wishes
      </Button>
      <ActionIcon hiddenFrom={'md'} visibleFrom={'xs'} variant={'transparent'} color={'black'}>
        <TbHeart />
      </ActionIcon>
      <Divider orientation="vertical" visibleFrom={'xs'} hiddenFrom={'xs'} my={'xs'} />
      <Button visibleFrom={'xs'}>Save search</Button>
      <ActionIcon hiddenFrom={'xs'} visibleFrom={'xs'} variant={'transparent'} color={'black'}>
        <TbDeviceFloppy />
      </ActionIcon>
    </Group>
  )
}
