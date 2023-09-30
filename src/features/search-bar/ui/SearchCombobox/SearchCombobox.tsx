import { FC } from 'react'
import { Box, Combobox, Group, PillGroup, ScrollArea, Stack, useCombobox } from '@mantine/core'
import {
  Location as ILocation,
  OnMarketProperty as IOnMarketProperty,
  SoldProperty as ISoldProperty,
} from '@/shared/api'
import { LocationOption } from './LocationOption'
import { LocationPill } from './LocationPill'
import { OnMarketProperty } from './OnMarketProperty'
import { PropertyStatusToggle } from './PropertyStatusToggle'
import classes from './SearchCombobox.module.scss'
import { SearchInput } from './SearchInput'
import { SoldProperty } from './SoldProperty'

type ISearchComboboxProps = {
  searchValue: string
  onSearchChange: (search: string) => void
  soldProperties: ISoldProperty[]
  onMarketProperties: IOnMarketProperty[]
  locations: ILocation[]
  onLocationClick: (location: ILocation) => void
  selectedLocations: ILocation[]
  onLocationPillClick: (id: string) => void
}

export const SearchCombobox: FC<ISearchComboboxProps> = ({
  onSearchChange,
  searchValue,
  onMarketProperties,
  soldProperties,
  locations,
  onLocationClick,
  selectedLocations,
  onLocationPillClick,
}) => {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  })

  const pills = selectedLocations.map((location) => (
    <LocationPill
      key={location.id}
      onClick={() => onLocationPillClick(location.id)}
      label={location.municipality}
    />
  ))

  return (
    <Stack>
      <Group className={classes.root} wrap={'nowrap'}>
        <Box className={classes.select} visibleFrom={'md'}>
          <PropertyStatusToggle />
        </Box>
        <Combobox
          store={combobox}
          classNames={{
            dropdown: classes.dropdown,
            groupLabel: classes.groupLabel,
            options: classes.options,
            group: classes.group,
            option: classes.option,
          }}
        >
          <Combobox.Target>
            <Box style={{ flexGrow: 1 }}>
              <SearchInput
                combobox={combobox}
                searchValue={searchValue}
                onSearchChange={onSearchChange}
              />
            </Box>
          </Combobox.Target>

          <Combobox.Dropdown>
            {pills.length > 0 && (
              <Box p={'sm'}>
                <ScrollArea.Autosize mah={'4rem'}>
                  <PillGroup>{pills}</PillGroup>
                </ScrollArea.Autosize>
              </Box>
            )}
            <Combobox.Options>
              <ScrollArea.Autosize type="scroll" mah={'70dvh'}>
                <Combobox.Group label={'Popular Locations'}>
                  {locations.map((location) => {
                    return (
                      <LocationOption
                        id={location.id}
                        key={location.id}
                        province={location.province}
                        area={location.area}
                        municipality={location.municipality}
                        onClick={() => onLocationClick(location)}
                      />
                    )
                  })}
                </Combobox.Group>
                <Combobox.Group label="For sale">
                  {onMarketProperties.map((property) => {
                    return (
                      <OnMarketProperty
                        key={property.id}
                        address={property.address}
                        municipality={property.municipality}
                        exterior_type={property.exterior_type}
                        id={property.id}
                        list_price={property.list_price}
                        mls_listing_id={property.mls_listing_id}
                      />
                    )
                  })}
                </Combobox.Group>

                <Combobox.Group label="Sold">
                  {soldProperties.map((property) => {
                    return (
                      <SoldProperty
                        key={property.id}
                        id={property.id}
                        mls_listing_id={property.mls_listing_id}
                        address={property.address}
                        exterior_type={property.exterior_type}
                        municipality={property.municipality}
                        sold_date={property.sold_date}
                      />
                    )
                  })}
                </Combobox.Group>
              </ScrollArea.Autosize>
            </Combobox.Options>
          </Combobox.Dropdown>
        </Combobox>
      </Group>
      <ScrollArea.Autosize mah={{ base: '2rem', md: '4rem' }} ml={{ md: '7rem' }}>
        <PillGroup>{pills}</PillGroup>
      </ScrollArea.Autosize>
    </Stack>
  )
}
