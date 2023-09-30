import { FC } from 'react'
import { TbChevronRight } from 'react-icons/tb'
import { Combobox, Group, Stack, Text } from '@mantine/core'

type ILocationOptionProps = {
  id: string
  province: string
  area: string
  municipality: string
  onClick: () => void
}

export const LocationOption: FC<ILocationOptionProps> = ({
  id,
  area,
  municipality,
  province,
  onClick,
}) => {
  return (
    <Combobox.Option value={id} onClick={onClick}>
      <Group justify={'space-between'} wrap={'nowrap'}>
        <Group gap={'md'} wrap={'nowrap'} align={'center'}>
          <TbChevronRight size={'1rem'} />
          <Group visibleFrom={'md'}>
            <Text fz={'sm'} fw={400}>
              {municipality}
            </Text>
            <Text fz={'sm'} variant={'placeholder'}>
              {area}, {province}
            </Text>
          </Group>
          <Stack hiddenFrom={'md'} gap={2}>
            <Text fz={'sm'} fw={400}>
              {municipality}
            </Text>
            <Text fz={'xs'} variant={'placeholder'}>
              {area}, {province}
            </Text>
          </Stack>
        </Group>
        <Text fz={{ md: 'sm', base: 'xs' }} variant={'placeholder'}>
          Area of {province}
        </Text>
      </Group>
    </Combobox.Option>
  )
}
