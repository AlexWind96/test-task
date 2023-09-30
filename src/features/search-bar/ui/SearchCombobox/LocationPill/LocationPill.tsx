import { FC } from 'react'
import { TbX } from 'react-icons/tb'
import { Text, UnstyledButton } from '@mantine/core'
import classes from './LocationPill.module.scss'

type ILocationPillProps = {
  label: string
  onClick: () => void
}

export const LocationPill: FC<ILocationPillProps> = ({ label, onClick }) => {
  return (
    <UnstyledButton className={classes.pill} onClick={onClick}>
      <Text className={classes.pill_label}>{label}</Text>
      <TbX className={classes.pill_icon} />
    </UnstyledButton>
  )
}
