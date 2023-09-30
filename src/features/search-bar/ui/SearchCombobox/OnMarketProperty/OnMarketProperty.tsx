import { FC } from 'react'
import { TbChevronRight, TbPointFilled } from 'react-icons/tb'
import { Box, Combobox, Group, Stack, Text } from '@mantine/core'
import { capitalizeFLetter, formatPrice } from '@/shared/utils'

type IOnMarketPropertyProps = {
  address: string
  municipality: string
  exterior_type: string
  id: string
  list_price: number
  mls_listing_id: string
}

export const OnMarketProperty: FC<IOnMarketPropertyProps> = ({
  address,
  exterior_type,
  id,
  list_price,
  municipality,
  mls_listing_id,
}) => {
  return (
    <Combobox.Option value={id}>
      <Group justify={'space-between'} visibleFrom={'md'}>
        <Group gap={'md'}>
          <TbPointFilled size={'1rem'} style={{ color: 'var(--mantine-color-primary-5)' }} />
          <Text fz={'sm'} fw={400}>
            {address}
          </Text>
          <Text fz={'sm'} variant={'placeholder'}>
            {municipality} • {capitalizeFLetter(exterior_type.replace('_', ' '))} • {mls_listing_id}
          </Text>
        </Group>
        <Text fz={'sm'} fw={700}>
          {formatPrice(list_price)}
        </Text>
      </Group>
      <Group hiddenFrom={'md'} wrap={'nowrap'}>
        <TbPointFilled size={'1rem'} style={{ color: 'var(--mantine-color-primary-5)' }} />
        <Stack style={{ flexGrow: 1 }} gap={2}>
          <Group justify={'space-between'}>
            <Text fz={'sm'} fw={400}>
              {address}
            </Text>
            <Text fz={'sm'} fw={700}>
              {formatPrice(list_price)}
            </Text>
          </Group>
          <Text fz={'xs'} variant={'placeholder'}>
            {municipality} • {capitalizeFLetter(exterior_type.replace('_', ' '))} • {mls_listing_id}
          </Text>
        </Stack>
      </Group>
    </Combobox.Option>
  )
}
