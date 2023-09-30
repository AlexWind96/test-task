import { FC, useMemo } from 'react'
import { TbChevronRight, TbPointFilled } from 'react-icons/tb'
import { Anchor, Box, Combobox, Group, Stack, Text } from '@mantine/core'
import { capitalizeFLetter, getDiffBetweenDates } from '@/shared/utils'

type ISoldPropertyProps = {
  address: string
  municipality: string
  exterior_type: string
  id: string
  sold_date: string
  mls_listing_id: string
}

export const SoldProperty: FC<ISoldPropertyProps> = ({
  address,
  municipality,
  exterior_type,
  id,
  sold_date,
  mls_listing_id,
}) => {
  const soldTimeText = useMemo(() => {
    const daysAgo = getDiffBetweenDates(sold_date)
    if (daysAgo === 0) return 'today'
    if (daysAgo === 1) return '1 day ago'
    return `${daysAgo} days ago`
  }, [sold_date])

  return (
    <Combobox.Option value={id}>
      <Group justify={'space-between'} visibleFrom={'md'}>
        <Group gap={'md'}>
          <TbPointFilled size={'1rem'} style={{ color: 'var(--mantine-color-red-6)' }} />
          <Group>
            <Text fz={'sm'} fw={400}>
              {address}
            </Text>
            <Text fz={'sm'} variant={'placeholder'}>
              {municipality} • {capitalizeFLetter(exterior_type.replace('_', ' '))} •{' '}
              {mls_listing_id}
            </Text>
          </Group>
        </Group>
        <Group gap={'sm'}>
          <Text fz={'sm'} variant={'placeholder'}>
            Sold <span style={{ fontWeight: 700 }}>{soldTimeText}</span> for
          </Text>
          <Anchor
            onClick={(e) => {
              e.stopPropagation()
            }}
            size={'sm'}
            component={'button'}
            c={'red.6'}
          >
            Register Now
          </Anchor>
        </Group>
      </Group>
      <Group hiddenFrom={'md'} wrap={'nowrap'}>
        <TbPointFilled size={'1rem'} style={{ color: 'var(--mantine-color-red-6)' }} />
        <Stack style={{ flexGrow: 1 }} gap={2}>
          <Group justify={'space-between'}>
            <Text fz={'sm'} fw={400}>
              {address}
            </Text>
            <Group gap={'sm'} visibleFrom={'xs'}>
              <Text fz={'sm'} variant={'placeholder'}>
                Sold <span style={{ fontWeight: 700 }}>{soldTimeText}</span> for
              </Text>
              <Anchor
                onClick={(e) => {
                  e.stopPropagation()
                }}
                size={'sm'}
                component={'button'}
                c={'red.6'}
              >
                Register Now
              </Anchor>
            </Group>
          </Group>
          <Text fz={'xs'} variant={'placeholder'}>
            {municipality} • {capitalizeFLetter(exterior_type.replace('_', ' '))} • {mls_listing_id}
          </Text>
        </Stack>
        <Box hiddenFrom={'xs'}>
          <TbChevronRight size={'1rem'} />
        </Box>
      </Group>
    </Combobox.Option>
  )
}
